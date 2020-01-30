import * as actionTypes from '../utils/actionTypes'
import * as actions from '../actions'

type Actions = (
    | ReturnType<typeof actions.openLoginDialog>
    | ReturnType<typeof actions.closeLoginDialog>
)

interface iState {
    loginDialogOpen: boolean
}

const initialState: iState = {
    loginDialogOpen: false,
}

const LoginDialogReducer = (state: iState = initialState, action: Actions) => {
    switch (action.type) {
        case actionTypes.OPEN_LOGIN_DIALOG:
            return {
                ...state,
                loginDialogOpen: true
            }
        case actionTypes.CLOSE_LOGIN_DIALOG:
            return {
                ...state,
                loginDialogOpen: false
            }
    }

    return state
}

export default LoginDialogReducer