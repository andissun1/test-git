import { useEffect } from 'react';
import { TaskItem } from './components/TaskItem';
import { CreateTask } from './components/CreateTask';
import styles from '../src/components/TaskItem.module.css';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, deleteTask, updateTask, addTask } from './data/firstReducer';

export default function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoState.todos);
  const isLoading = useSelector((state) => state.todoState.isLoading);
  const error = useSelector((state) => state.todoState.error);

  // Состояние для запросов на сервер SERVER_URL + sort
  const sortedBy = useSelector((state) => state.todoState.sortedBy);

  // Получение списка
  useEffect(() => {
    dispatch(fetchTodos(sortedBy));
  }, [sortedBy]);

  // Изменение
  const handleUpdate = (id, payload) => {
    dispatch(updateTask(id, payload));
  };

  // Удаление
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  // Создание
  const createTask = (payload) => {
    dispatch(addTask(payload));
  };

  if (isLoading && sortedBy === '') {
    return <h1 className="loader" />;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="tasksContainer">
      <header className={styles.taskCreator}>
        <CreateTask
          createTask={createTask}
          useDispatch={useDispatch}
          useSelector={useSelector}
        />
      </header>
      <ul>
        {todos.map((task) => (
          <TaskItem
            {...task}
            key={task.id}
            deleteTask={handleDelete}
            updateTask={handleUpdate}
            useDispatch={useDispatch}
            useSelector={useSelector}
          />
        ))}
      </ul>
    </div>
  );
}
