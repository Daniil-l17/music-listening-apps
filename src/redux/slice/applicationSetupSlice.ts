import { PayloadAction, createSlice } from "@reduxjs/toolkit";

  interface State {
    playerColor: string
  }

  const initialState:State = {
    playerColor: '#181718'
  }

export const applicationSetupSlice = createSlice({
  name: 'applicationSetupSlice',
  initialState,
  reducers: {
    UpdatePlayer: (state,{payload}:PayloadAction<string>) => {
      state.playerColor = payload
    }
  }
})

export const {reducer:reducerSetting,actions} = applicationSetupSlice