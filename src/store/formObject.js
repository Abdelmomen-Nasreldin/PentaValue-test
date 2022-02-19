import { createSlice } from '@reduxjs/toolkit'
const intialFormObjState = {id:0}
const formObjSlice = createSlice({
    name: "formObj",
    initialState: intialFormObjState,
    reducers: {
        getFormObj(state,action){
            const objId = action.payload
            let newState = {...state}
            newState = {id : objId}
            return newState
        }
    }
})
export const formObjActions = formObjSlice.actions
export default formObjSlice.reducer