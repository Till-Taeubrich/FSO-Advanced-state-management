import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: null,
  reducers: {
    changeContent(state, action) {
			const content = action.payload
			return content 
    }
  },
})

export const { changeContent } = notificationSlice.actions
export default notificationSlice.reducer