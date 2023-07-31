import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: null,
  reducers: {
    changeNotificationContent(state, action) {
      const content = action.payload
			return content 
    }
  },
})

export const { changeNotificationContent } = notificationSlice.actions
export default notificationSlice.reducer