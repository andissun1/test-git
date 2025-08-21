import { toggleIsDeleting } from '../data/secondReducer';
import styles from './TaskItem.module.css';

export function TaskWithDeleteOption({
  id,
  title,
  handleEdit,
  deleteTask,
  completed,
  useDispatch,
  useSelector,
}) {
  const isDeleting = useSelector((state) => state.helperState.isDeleting[id]);
  const dispatch = useDispatch();

  async function onDelete(id) {
    dispatch(toggleIsDeleting(id));
    await deleteTask(id);
    dispatch(toggleIsDeleting(id));
  }

  return (
    <div className={styles.task}>
      {isDeleting ? (
        'Удаление'
      ) : (
        <li className={`${completed ? styles.done : styles.undone}`}>{title}</li>
      )}
      <div>
        <button disabled={isDeleting} onClick={() => onDelete(id)}>
          Удалить
        </button>
        <button onClick={handleEdit}> Обновить </button>
      </div>
    </div>
  );
}
