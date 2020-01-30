import * as actionTypes from '../utils/actionTypes'
import * as actions from '../actions'

type Actions = (
    | ReturnType<typeof actions.authenticateUser>
    | ReturnType<typeof actions.unAuthenticateUser>
)

interface iState {
    isAuthenticated: boolean
}

const initialState: iState = {
    isAuthenticated: false,
}

const AuthReducer = (state: iState = initialState, action: Actions) => {
    switch (action.type) {
        case actionTypes.AUTHENTICATE_USER:
            return {
                ...state,
                isAuthenticated: true
            }
        case actionTypes.UNAUTHENTICATE_USER:
            return {
                ...state,
                isAuthenticated: false
            }
    }

    return state
}

export default AuthReducer