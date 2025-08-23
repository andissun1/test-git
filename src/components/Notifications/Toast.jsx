import style from './Toast.module.css';
import { useState } from 'react';
import { useToast } from '../../Provider/NotificationProvider';

export const Toast = ({
  type = 'default',
  text = 'Пример',
  position = 'left-top',
  time = 4,
}) => {
  const [isOpen, seIsOpen] = useState(false);
  const { createToast, clearNotifications, handleDelete, notifications } = useToast();

  function openToast() {
    seIsOpen((prev) => !prev);
  }

  return (
    <>
      <div className={style.buttons}>
        <button onClick={openToast}>{isOpen ? 'Скрыть' : 'Показать'} уведомления</button>
        <button onClick={() => createToast(text)}>Уведомление</button>
        <button onClick={() => createToast(text, 'error')}>Ошибка</button>
        <button onClick={() => createToast(text, 'success')}>Успех</button>
        <button onClick={clearNotifications}>Очистить всё</button>
      </div>
      <div className={`${isOpen ? style.toastContainer : style.hide} ${style[position]}`}>
        {notifications.map((toast, index) => (
          <div
            onClick={handleDelete}
            key={toast.id}
            id={toast.id}
            className={style[toast.type]}
            style={{
              top: index * 30 + 'px',
              animationDelay: index / 100 + 's',
              animationDuration: time + 's',
            }}
          >
            {toast.text}
          </div>
        ))}
      </div>
    </>
  );
};
