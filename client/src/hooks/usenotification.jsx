import { useState, useCallback } from "react";
import Toast from "../components/reacttoast";

const UseNotification = (position = "top-right") => {
  const [notification, setNotification] = useState([]);
  const triggerNotification = useCallback((notificationProps) => {
    const id = Date.now();
    setNotification((prevNotifications) => [
      ...prevNotifications,
      { ...notificationProps, id },
    ]);
    setTimeout(
      () =>
        setNotification((prevNotifications) =>
          prevNotifications.filter((notification) => notification.id !== id)
        ),
      notificationProps.duration
    );
  }, []);
  const NotificationComponent = notification ? (
    <div className={`${position}`}>
      {notification.map((notification) => (
        <Toast key={notification.id} {...notification} />
      ))}
    </div>
  ) : null;
  return { NotificationComponent, triggerNotification };
};
export default UseNotification;
