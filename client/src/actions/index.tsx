import { Dispatch } from "react"
import { Action } from "redux"
import * as actionTypes from "../utils/actionTypes"

export interface Actions {
    type: String;
    payload: any;
}

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

// ログイン処理
interface iLoginProps {
    email: string,
    password: string
}

export const jwtLogin = (loginProps: iLoginProps) => {
    return async (dispatch: Dispatch<Action>) => {
        // TODO: gRpcログイン && try-catch
        dispatch({ type: actionTypes.START_REQUEST })

        for (let i = 0; i < 1000; i++) {
            console.log('Login: ' + loginProps)
        }
        localStorage.setItem('token', 'dummy')

        dispatch({ type: actionTypes.COMPLETE_REQUEST })
        dispatch({ type: actionTypes.AUTHENTICATE_USER })
        dispatch({ type: actionTypes.CLOSE_LOGIN_DIALOG })
        dispatch(setNotification('success', 'ログイン成功！'))
    }
}
export const jwtLogout = () => {
    return async (dispatch: Dispatch<Action>) => {
        // TODO: gRpcログアウト && try-catch
        dispatch({ type: actionTypes.START_REQUEST })

        console.log('Logout')
        localStorage.removeItem('token')

        dispatch({ type: actionTypes.COMPLETE_REQUEST })
        dispatch({ type: actionTypes.UNAUTHENTICATE_USER })
        dispatch(setNotification('success', 'ログアウト成功！'))
    }
}
export const authenticateUser = () => ({
    type: actionTypes.AUTHENTICATE_USER
})
export const unAuthenticateUser = () => ({
    type: actionTypes.UNAUTHENTICATE_USER
})

// リクエスト
export const startRequest = () => ({
    type: actionTypes.START_REQUEST
})
export const completeRequest = () => ({
    type: actionTypes.COMPLETE_REQUEST
})