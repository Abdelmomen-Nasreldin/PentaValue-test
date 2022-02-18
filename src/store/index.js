import {configureStore} from '@reduxjs/toolkit'
import authReducer from './auth'
import dataReducer from './data'

const store = configureStore({
    reducer: {auth : authReducer, data: dataReducer}
})

export default store