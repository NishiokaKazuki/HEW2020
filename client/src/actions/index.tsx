import * as actionTypes from "../utils/actionTypes"

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
