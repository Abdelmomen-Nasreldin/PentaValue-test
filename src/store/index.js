import {configureStore} from '@reduxjs/toolkit'
import authReducer from './auth'
import dataReducer from './data'
import editIdObjReducer from './edit-Id-handler'

////////////////////////////
// Welcome to our STORE //
///////////////////////////

const store = configureStore({
    reducer: {auth : authReducer, data: dataReducer, EditingIdObjHandler: editIdObjReducer}
})

export default store