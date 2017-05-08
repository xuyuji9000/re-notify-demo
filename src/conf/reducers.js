import { combineReducers } from "redux"

import * as counter from '../components/Counter'
import * as testsnackbar from '../components/TestSnackbar'
import { reducer as notifReducer } from 'redux-notifications'

export default combineReducers({
    counter: counter.reducers,
    testsnackbar: testsnackbar.reducers,
    notifs: notifReducer,
})
