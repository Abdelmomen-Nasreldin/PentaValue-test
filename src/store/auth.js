import {createSlice} from '@reduxjs/toolkit'

const authInitialState = {isAuthenticated: false, token: null}
const authSlice = createSlice({
    name: 'authentication',
    initialState: authInitialState,
    reducers: {
        login(state,action){
            const token = action.payload
            state.token = token
            state.isAuthenticated = true
            if(!localStorage.getItem('token')){
                localStorage.setItem('token', token)
            }
        },
        logout(state){
            state.token = null
            state.isAuthenticated = false
            localStorage.removeItem('token')
        }
    }
})
export const authActions = authSlice.actions

export default authSlice.reducer