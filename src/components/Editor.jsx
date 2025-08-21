import { setEditorData } from '../data/secondReducer';
import styles from './TaskItem.module.css';

export function Editor({
  id,
  title,
  handleEdit,
  updateTask,
  completed,
  useDispatch,
  useSelector,
}) {
  let data = useSelector((state) => state.helperState.editorData[id]);
  const dispatch = useDispatch();

  if (!data) {
    data = { id, title, completed };
  }

  const onSave = (id) => {
    updateTask(id, data);
    handleEdit();
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    dispatch(
      setEditorData(id, {
        ...data,
        [name]: value,
        completed: data.completed,
      })
    );
  };

  function handleCompleted() {
    dispatch(setEditorData(id, { ...data, completed: !data.completed }));
  }

  function handleOnKeyDown(event) {
    if (event.key === 'Enter') {
      onSave(id);
    }
  }

  return (
    <div className={styles.task}>
      <input
        name="title"
        type="text"
        value={data.title}
        onChange={onChange}
        onKeyDown={handleOnKeyDown}
      />
      <input type="checkbox" checked={data.completed} onChange={handleCompleted} />
      <div>
        <button onClick={() => onSave(id)}>Сохранить</button>
        <button onClick={handleEdit}>Отмена</button>
      </div>
    </div>
  );
}
