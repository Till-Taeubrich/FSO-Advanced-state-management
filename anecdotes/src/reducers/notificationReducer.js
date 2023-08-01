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

  export const triggerNotification = (message, seconds) => {
    return dispatch => {
      const timeout = Number(`${seconds}00`)
      console.log('🚀 ~ file: Notification.js:21 ~ Notification ~ timeout:', timeout)

      dispatch(changeNotificationContent(message))

      setTimeout(() => {
        dispatch(changeNotificationContent(''))
      }, timeout);
    }
  }

export const { changeNotificationContent } = notificationSlice.actions
export default notificationSlice.reducer