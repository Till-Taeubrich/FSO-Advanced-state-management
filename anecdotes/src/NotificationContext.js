import { createContext, useReducer, useContext } from 'react'

//reducer function
const notificationReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_MESSAGE":
      return action.payload 
    case "RESET_MESSAGE":
      return ''
    default:
      console.log('default')
      return state
  }
}

const NotificationContext = createContext()

export const NotificationContextProvider = (props) => {
  const [notification, notificationDispatch] = useReducer(notificationReducer, null)

  return (
    <NotificationContext.Provider value={[notification, notificationDispatch] }>
      {props.children}
    </NotificationContext.Provider>
  )
}

//custom hook to export state value
export const useNotificationValue = () => {
  const notificationAndDispatch = useContext(NotificationContext)
  return notificationAndDispatch[0]
}

//custom hook to export dispatch
export const useNotificationDispatch = () => {
  const notificationAndDispatch = useContext(NotificationContext)
  return notificationAndDispatch[1]
}

export default NotificationContext