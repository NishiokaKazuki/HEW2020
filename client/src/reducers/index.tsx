import { combineReducers } from 'redux'

import DrawerReducer from './DrawerReducer'
import LoginDialogReducer from './LoginDialogReducer'
import NotificationReducer from './NotificationReducer'
import AuthReducer from './AuthReducer'
import RequestReducer from './RequestReducer'
import UserReducer from './UserReducer'
import HistoryReducer from './HistoryReducer'

const reducers = combineReducers({
    DrawerReducer,
    LoginDialogReducer,
    NotificationReducer,
    AuthReducer,
    RequestReducer,
    UserReducer,
    HistoryReducer
})

export default reducers