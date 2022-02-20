import { createSlice } from "@reduxjs/toolkit";
const dataInitialState = {items: [], itemsChange: false};
const dataSlice = createSlice({
  name: "data",
  initialState: dataInitialState,
  reducers: {
    setData(state,action) {
        const newData= action.payload
        state.items.push(...newData)
    },
    addToData(state,action) {
      const newDataObj= action.payload
      const newId = state.items[state.items.length-1].id + 1
      let updateState = [...state.items]
      updateState.push({...newDataObj, id:newId})
      return {items:updateState, itemsChange: true}
    },
    RemoveFromData(state,action) {
      const deleteId= action.payload
      const deleteObj = state.items.find(item=>item.id === deleteId)
      let updateData = []
      updateData = state.items.filter(item=>item.id !== deleteObj.id)
      
      return {items:updateData, itemsChange: true}
    },
    editonData(state,action) {
      const editId= action.payload.id
      const editData= action.payload.newUpdate
      const updateIndex = state.items.findIndex(item=>item.id === editId)
      const updateItem = state.items.find(item=>item.id === editId)
      let updateItems = [...state.items]
      updateItems[updateIndex] = {...updateItem, ...editData}
      return {items:updateItems, itemsChange: true}
    },

  },
});

export const dataActions = dataSlice.actions

export default dataSlice.reducer
