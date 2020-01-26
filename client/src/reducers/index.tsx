import { combineReducers } from 'redux'

import DrawerReducer from './DrawerReducer'
import LoginDialogReducer from './LoginDialogReducer'
import NotificationReducer from './NotificationReducer'
import AuthReducer from './AuthReducer'
import RequestReducer from './RequestReducer'
import UserReducer from './UserReducer'

const reducers = combineReducers({
    DrawerReducer,
    LoginDialogReducer,
    NotificationReducer,
    AuthReducer,
    RequestReducer,
    UserReducer
})

export default reducers