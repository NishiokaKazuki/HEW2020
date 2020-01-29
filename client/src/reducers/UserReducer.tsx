import * as actionTypes from '../utils/actionTypes'
import * as actions from '../actions'

type Actions = (
    | ReturnType<typeof actions.setUser>
)

interface iState {
    id: string,
    name: string,
    sex: string,
    age: number,
}

const initialState: iState = {
    id: "",
    name: "",
    sex: "",
    age: 0
}

const UserReducer = (state: iState = initialState, action: Actions) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                id: action.payload.id,
                name: action.payload.name,
                sex: action.payload.sex,
                age: action.payload.age
            }
    }

    return state
}

export default UserReducer