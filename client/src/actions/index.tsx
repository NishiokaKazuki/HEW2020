import User, { iLogin, iSignup } from "../class/User"
import { Dispatch } from "react"
import { Action } from "redux"
import * as actionTypes from "../utils/actionTypes"

export interface Actions {
    type: String,
    payload: any
}

// Drawer
export const toggleDrawer = () => ({
    type: actionTypes.TOGGLE_DRAWER,
})

// 通知
export const setNotification = (variant: string, message: string) => ({
    type: actionTypes.SET_NOTIFICATION,
    payload: {
        variant: variant,
        message: message
    }
})
export const closeNotification = () => ({
    type: actionTypes.CLOSE_NOTIFICATION
})

// ログインダイアログ
export const openLoginDialog = () => ({
    type: actionTypes.OPEN_LOGIN_DIALOG
})
export const closeLoginDialog = () => ({
    type: actionTypes.CLOSE_LOGIN_DIALOG
})

// リクエスト
export const startRequest = () => ({
    type: actionTypes.START_REQUEST
})
export const completeRequest = () => ({
    type: actionTypes.COMPLETE_REQUEST
})

export const authenticateUser = () => ({
    type: actionTypes.AUTHENTICATE_USER
})
export const unAuthenticateUser = () => ({
    type: actionTypes.UNAUTHENTICATE_USER
})

// 認証関係
export const signup = (signupProps: iSignup) => {
    return async (dispatch: Dispatch<Action>) => {
        try {
            dispatch({ type: actionTypes.START_REQUEST })

            User.signupRequest(signupProps)
            await User.userRequest(User.get('token'))

            dispatch({ type: actionTypes.AUTHENTICATE_USER })
            dispatch({ type: actionTypes.COMPLETE_REQUEST })
            dispatch(setNotification('success', 'サインアップ成功！'))
        } catch (e) {
            dispatch({ type: actionTypes.COMPLETE_REQUEST })
            dispatch(setNotification('error', 'エラーが発生しました！'))
        }
    }
}
export const jwtLogin = (loginProps: iLogin) => {
    return async (dispatch: Dispatch<Action>) => {
        try {
            dispatch({ type: actionTypes.START_REQUEST })

            // TODO: レスポンスにユーザーも返してもらう
            User.loginRequest(loginProps)
            await User.userRequest(User.get('token'))


            dispatch({ type: actionTypes.AUTHENTICATE_USER })
            dispatch({ type: actionTypes.CLOSE_LOGIN_DIALOG })
            dispatch({ type: actionTypes.COMPLETE_REQUEST })
            dispatch(setNotification('success', 'ログイン成功！'))
        } catch (e) {
            dispatch({ type: actionTypes.COMPLETE_REQUEST })
            dispatch(setNotification('error', 'エラーが発生しました！'))
        }
    }
}
export const jwtLogout = (token: any) => {
    return async (dispatch: Dispatch<Action>) => {
        try {
            dispatch({ type: actionTypes.START_REQUEST })

            await User.logoutRequest(token)

            dispatch({ type: actionTypes.UNAUTHENTICATE_USER })
            dispatch({ type: actionTypes.COMPLETE_REQUEST })
            dispatch(setNotification('success', 'ログアウト成功！'))
        } catch (e) {
            dispatch({ type: actionTypes.COMPLETE_REQUEST })
            dispatch(setNotification('error', 'エラーが発生しました！'))
        }
    }
}

// ユーザ関係
export const getUser = (token: any) => {
    return async (dispatch: Dispatch<Action>) => {
        try {
            dispatch({ type: actionTypes.START_REQUEST })

            const res: any = await User.userRequest(token)
            dispatch(setUser(res.id, res.name, res.sex, res.age))

            dispatch({ type: actionTypes.COMPLETE_REQUEST })
        } catch (e) {
            dispatch({ type: actionTypes.COMPLETE_REQUEST })
            dispatch(setNotification('error', 'エラーが発生しました！'))
        }
    }
}
export const setUser = (id: string, name: string, sex: string, age: number) => ({
    type: actionTypes.SET_USER,
    payload: {
        id: id,
        name: name,
        sex: sex,
        age: age
    }
})

// 購入履歴
export interface iStore {
    id: number,
    image: string,
    address: string
}
export interface iCompany {
    id: number,
    name: string
}
export type Product = {
    id: number,
    name: string,
    price: number
}

export const getHistory = (token: any) => {
    return async (dispatch: Dispatch<Action>) => {
        try {
            dispatch({ type: actionTypes.START_REQUEST })

            const histories: any = await User.historyRequest(token)
            console.log(histories)
            dispatch(setHistory(histories))

            dispatch({ type: actionTypes.COMPLETE_REQUEST })
        } catch (e) {
            dispatch({ type: actionTypes.COMPLETE_REQUEST })
            dispatch(setNotification('error', 'エラーが発生しました！'))
        }
    }
}
export const setHistory = (histories: any) => ({
    type: actionTypes.SET_HISTORY,
    payload: {
        histories: histories
    }
})