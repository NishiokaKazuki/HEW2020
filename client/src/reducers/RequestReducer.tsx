import * as actionTypes from '../utils/actionTypes'
import * as actions from '../actions'

type Actions = (
    | ReturnType<typeof actions.startRequest>
    | ReturnType<typeof actions.completeRequest>
)

interface iState {
    isRequesting: boolean
}

const initialState: iState = {
    isRequesting: false,
}

const RequestReducer = (state: iState = initialState, action: Actions) => {
    switch (action.type) {
        case actionTypes.START_REQUEST:
            return {
                ...state,
                isRequesting: true
            }
        case actionTypes.COMPLETE_REQUEST:
            return {
                ...state,
                isRequesting: false
            }
    }

    return state
}

export default RequestReducer