import { useDispatch, useSelector } from 'react-redux'
import { changeNotificationContent } from '../reducers/notificationReducer'

let triggerNotification

const Notification = () => {

  const dispatch = useDispatch()

  const notification = useSelector(state => state.notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  triggerNotification = (message) => {
    dispatch(changeNotificationContent(message))
        
    setTimeout(() => {
      dispatch(changeNotificationContent(''))
    }, 5000);
  }

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export { triggerNotification }
export default Notification