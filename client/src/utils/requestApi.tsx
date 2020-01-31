import { WebAppServiceClient } from "../proto/web_app_service_pb_service"
import { ShopRequest } from "../proto/messages_pb"

/* TODO: Private Repositoryに貼る
https://maps.googleapis.com/maps/api/place/textsearch/json?
query=%E3%82%B3%E3%83%B3%E3%83%93%E3%83%8B&location=43.059856,141.34308&radius=10000
&key=*****
*/

const keyword: string = 'コンビニ'

/**
 * 店舗検索関数
 *
 * @param {number} lat <緯度>
 * @param {number} lng <経度>
 * @return {object} res <店舗情報>
 */
const requestApi = (lat: number, lng: number): any => {
    return new Promise(resolve => {
        const req = new ShopRequest()
        req.setKeyword(keyword)
        req.setLat(lat)
        req.setLng(lng)

        const client = new WebAppServiceClient("http://localhost:8080", {})
        client.getShopPlace(req, (err: any, res: any) => {
            if (err || res === null) {
                throw err
            }
            // TODO: 文字列をJSONにパースする
            resolve(res)
        })
    })
}

export default requestApi