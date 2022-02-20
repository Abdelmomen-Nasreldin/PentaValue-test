import { createSlice } from '@reduxjs/toolkit'
////////////////////////////////////////////////////
// It is just the ID of the object wanna Editing //
///////////////////////////////////////////////////
const intialId = {id:0}

const editIdObjHandler = createSlice({
    name: "EditingIdObjHandler",
    initialState: intialId,
    reducers: {
        idObjHandler(state,action){
            const objId = action.payload
            let newState = {...state}
            newState = {id : objId}
            return newState
        }
    }
})
export const editIdActions = editIdObjHandler.actions
export default editIdObjHandler.reducer