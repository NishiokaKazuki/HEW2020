import { WebAppServiceClient } from "../proto/web_app_service_pb_service"
import { SignUpRequest } from "../proto/messages_pb"
import { SignInRequest } from "../proto/messages_pb"
import { SignOutRequest } from "../proto/messages_pb"
import { UserRequest } from "../proto/messages_pb"
import { ClearingHistoryRequest } from "../proto/messages_pb"

export enum SexTypes {
    SEX_ALL = 0,
    SEX_MALE,   // 男性
    SEX_FEMALE  // 女性
}

export interface iSignup {
    name: string,
    sex: SexTypes,
    age: number,
    id: string,
    pw: string
}
export interface iLogin {
    id: string,
    pw: string
}

class User {
    // ログインチェック
    public isLoggedIn = () => this.get('token') ? true : false;

    public set = (key: string, value: string) => localStorage.setItem(key, value)
    public get = (key: string) => this.getLocalStorage(key)

    public getLocalStorage = (key: string) => {
        const ret = localStorage.getItem(key)
        if (ret)
            return ret
        else
            return null
    }

    /**
     * 新規会員登録
     *
     * @param {iSignup} args
     * @return void
     */
    public signupRequest = (args: iSignup) => {
        return new Promise(resolve => {
            const req = new SignUpRequest()
            req.setName(args.name)
            req.setSex(args.sex)
            req.setAge(args.age)
            req.setUserId(args.id)
            req.setUserPw(args.pw)

            const client = new WebAppServiceClient("http://localhost:8080", {})
            client.signUp(req, (err: any, res: any) => {
                if (err || res === null) {
                    throw err
                }
                resolve(res)
            })
        })
    }

    /**
     * ログイン
     *
     * @param {iLogin} args
     * @return void
     */
    public loginRequest = (args: iLogin) => {
        return new Promise(resolve => {
            const req = new SignInRequest()
            req.setUserId(args.id)
            req.setUserPw(args.pw)

            const client = new WebAppServiceClient("http://localhost:8080", {})
            client.signIn(req, (err: any, res: any) => {
                if (err || res === null) {
                    throw err
                }
                resolve(res)
            })
        })
    }

    /**
     * ログアウト
     *
     * @param {any} token
     * @return void
     */
    public logoutRequest = (token: any) => {
        return new Promise(resolve => {
            const req = new SignOutRequest()
            req.setToken(token)

            const client = new WebAppServiceClient("http://localhost:8080", {})
            client.signOut(req, (err: any, res: any) => {
                if (err || res === null) {
                    throw err
                }
                resolve(localStorage.clear())
            })
        })
    }

    /**
     * ユーザ取得
     *
     * @param {any} token
     * @return ユーザ情報
     */
    public userRequest = (token: any) => {
        return new Promise(resolve => {
            const req = new UserRequest()
            req.setToken(token)

            const client = new WebAppServiceClient("http://localhost:8080", {})
            client.user(req, (err: any, res: any) => {
                if (err || res === null) {
                    throw err
                }
                const ret = {
                    id: res.getUser().getId(),
                    name: res.getUser().getName(),
                    sex: res.getUser().getSex(),
                    age: res.getUser().getAge()
                }
                resolve(ret)
            })
        })
    }

    /**
     * 購入履歴
     *
     * @param {any} token
     * @return 購入履歴
     */
    public historyRequest = (token: any) => {
        return new Promise(resolve => {
            const req = new ClearingHistoryRequest()
            req.setToken(token)

            const client = new WebAppServiceClient("http://localhost:8080", {})
            client.clearingHistory(req, (err: any, res: any) => {
                if (err || res === null) {
                    throw err
                }

                // 購入履歴用の配列
                let histories = new Array(res.getClearinghistoryList().length)
                // 購入履歴の取得
                const clearingHistories = res.getClearinghistoryList()
                // 購入履歴に値を代入
                for (let i = 0; i < clearingHistories.length; i++) {
                    // 購入日、店舗、会社を追加
                    histories[i] = {
                        date: clearingHistories[i].getDate(),
                        store: {
                            id: clearingHistories[i].getStore().getId(),
                            image: clearingHistories[i].getStore().getImage(),
                            address: clearingHistories[i].getStore().getAddress()
                        },
                        company: {
                            id: clearingHistories[i].getCompany().getId(),
                            name: clearingHistories[i].getCompany().getName()
                        }
                    }

                    // 商品用の配列
                    let products = []
                    let sum: number = 0

                    // 商品と総額を追加
                    for (let j = 0; j < clearingHistories[i].getProductsList().length; j++) {
                        products[j] = {
                            id: clearingHistories[i].getProductsList()[j].getId(),
                            name: clearingHistories[i].getProductsList()[j].getName(),
                            price: clearingHistories[i].getProductsList()[j].getPrice()
                        }
                        sum += clearingHistories[i].getProductsList()[j].getPrice()
                    }

                    // 購入履歴に商品と総額を追加
                    histories[i]['products'] = products
                    histories[i]['sum'] = sum
                }
                resolve(histories)
            })
        })
    }
}

export default new User()