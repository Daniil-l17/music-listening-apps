import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export const modelSlice = createSlice({
  name: 'modelSlice',
  initialState: {
    modelauth: false,
    render: false,
    modelsignOutAuth: false
  },
  reducers: {
    openModel: (state,{payload}:PayloadAction<boolean>) => {
      state.modelauth = payload
    },
    isExOne: (state,{payload}:PayloadAction<boolean>) => {
      state.render = payload
    },
    openmodelsignOutAuth: (state,{payload}:PayloadAction<boolean>) => {
      state.modelsignOutAuth = payload
    },
  }
})

export const {reducer:reduceModel,actions} = modelSlice