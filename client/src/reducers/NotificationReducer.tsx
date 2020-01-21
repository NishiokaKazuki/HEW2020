import * as actionTypes from '../utils/actionTypes'
import * as actions from '../actions'

interface iState {
    notificationOpen: boolean,
    variant: string,
    message: string
}

const initialState: iState = {
    notificationOpen: false,
    variant: '',
    message: ''
}

const NotificationReducer = (state: iState = initialState, action: actions.Actions) => {
    switch (action.type) {
        case actionTypes.SET_NOTIFICATION:
            return {
                ...state,
                notificationOpen: true,
                variant: action.payload.variant,
                message: action.payload.message
            }
        case actionTypes.CLOSE_NOTIFICATION:
            return {
                ...state,
                notificationOpen: false
            }
    }

    return state
}

export default NotificationReducer