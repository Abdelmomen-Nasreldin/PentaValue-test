import {configureStore} from '@reduxjs/toolkit'
import authReducer from './auth'
import dataReducer from './data'
import uiReducer from './ui-slice'
import editIdObjReducer from './edit-Id-handler'

////////////////////////////
// Welcome to our STORE //
///////////////////////////

const store = configureStore({
    reducer: {auth : authReducer, data: dataReducer, EditingIdObjHandler: editIdObjReducer, ui: uiReducer}
})

export default store