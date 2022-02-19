import {configureStore} from '@reduxjs/toolkit'
import authReducer from './auth'
import dataReducer from './data'
import formObjReducer from './formObject'

const store = configureStore({
    reducer: {auth : authReducer, data: dataReducer, formObj: formObjReducer}
})

export default store