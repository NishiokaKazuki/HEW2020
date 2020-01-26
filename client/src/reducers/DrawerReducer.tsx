import * as actionTypes from '../utils/actionTypes'
import * as actions from '../actions'

type Actions = (
    ReturnType<typeof actions.toggleDrawer>
)

interface iState {
    drawerOpen: boolean
}

const initialState: iState = {
    drawerOpen: false,
}

const DrawerReducer = (state: iState = initialState, action: Actions) => {
    switch (action.type) {
        case actionTypes.TOGGLE_DRAWER:
            return {
                ...state,
                drawerOpen: !state.drawerOpen
            }
    }
    return state
}

export default DrawerReducer