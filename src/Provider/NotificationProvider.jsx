import { useState } from 'react';
import { createContext, useContext } from 'react';

const NotificationProvider = createContext();
export const useToast = () => useContext(NotificationProvider);

export const ToastProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  function createToast(text, type = 'default') {
    setNotifications([...notifications, { type, text, id: Math.random() }]);
  }

  function handleDelete({ target }) {
    const newArray = notifications.filter(
      (toasty) => String(toasty.id) !== String(target.id)
    );
    setNotifications(newArray);
  }

  function clearNotifications() {
    setNotifications([]);
  }

  return (
    <NotificationProvider
      value={{
        createToast,
        handleDelete,
        clearNotifications,
        notifications,
      }}
    >
      {children}
    </NotificationProvider>
  );
};
