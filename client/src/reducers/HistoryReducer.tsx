import * as actionTypes from '../utils/actionTypes'
import * as actions from '../actions'

type Actions = (
    | ReturnType<typeof actions.setHistory>
)

type History = {
    date: string,
    store: actions.iStore,
    company: actions.iCompany,
    products: actions.Product[]
}

interface iState {
    histories: History[]
}

const initialState: iState = {
    histories: []
}

const HistoryReducer = (state: iState = initialState, action: Actions) => {
    switch (action.type) {
        case actionTypes.SET_HISTORY:
            return Object.assign({}, state, {
                histories: action.payload.histories
            })
    }

    return state
}

export default HistoryReducer