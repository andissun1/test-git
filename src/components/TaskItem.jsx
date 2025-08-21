import { TaskWithDeleteOption } from './DeleteTask';
import { Editor } from './Editor';
import { toggleIsEdit } from '../data/secondReducer';

export function TaskItem({
  id,
  title,
  deleteTask,
  updateTask,
  completed,
  useDispatch,
  useSelector,
}) {
  const isEdit = useSelector((state) => state.helperState.isEdit[id]);
  const dispatch = useDispatch();

  const handleEdit = () => dispatch(toggleIsEdit(id));

  return (
    <>
      {isEdit ? (
        <Editor
          id={id}
          updateTask={updateTask}
          title={title}
          handleEdit={handleEdit}
          completed={completed}
          useDispatch={useDispatch}
          useSelector={useSelector}
        />
      ) : (
        <TaskWithDeleteOption
          id={id}
          completed={completed}
          handleEdit={handleEdit}
          title={title}
          deleteTask={deleteTask}
          useDispatch={useDispatch}
          useSelector={useSelector}
        />
      )}
    </>
  );
}
