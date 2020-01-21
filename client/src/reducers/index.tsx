import { combineReducers } from 'redux'
import LoginDialogReducer from './LoginDialogReducer'
import NotificationReducer from './NotificationReducer'
import AuthReducer from './AuthReducer'
import RequestReducer from './RequestReducer'

const reducers = combineReducers({
    LoginDialogReducer,
    NotificationReducer,
    AuthReducer,
    RequestReducer
})

export default reducers