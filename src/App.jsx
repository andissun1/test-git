import { useEffect, useState } from 'react';
import { TaskItem } from './components/TaskItem';
import { CreateTask } from './components/CreateTask';
import styles from '../src/components/TaskItem.module.css';
import './App.css';
import { actions } from './data/updateTaskSlice';
import { http } from './http/http';
import { useDispatch, useSelector } from 'react-redux';

const SERVER_URL = 'http://localhost:3000/todos';

export default function App() {
  const testisLoading = useSelector((state) =>
    console.log(state.taskSliceReducer.isLoading)
  );

  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  // Состояние для запросов на сервер SERVER_URL + sort
  const [sortedBy, setSortedBy] = useState('');

  // Состояние для переключения элементов интерфейса
  const [filters, setFilters] = useState({ byId: 'desc', byAlphabet: 'desc' });

  // Получение списка
  const getTodos = async (sortedBy = '') => {
    setIsLoading(true);
    try {
      const { data } = await http.get(sortedBy);
      setTodos(data);
      setIsLoading(false);
    } catch (error) {
      setError('Не удалость загрузить список задач', error.message);
    }
  };

  useEffect(() => {
    getTodos(sortedBy);
  }, [sortedBy]);

  // Изменение
  const updateTask = async (id, payload) => {
    try {
      const response = await fetch(SERVER_URL + '/' + id, {
        method: 'PATCH',
        body: JSON.stringify({
          ...payload,
        }),
        headers: {
          'Content-Type': 'Application/json',
        },
      });

      if (!response.ok) throw new Error('Ошибка при запросе на редактирование');

      const updatedTask = await response.json();
      let updatedData = Object.values(todos).map((todo) =>
        todo.id === id ? updatedTask : todo
      );

      setTodos(updatedData);
    } catch (error) {
      setError(error);
    }
  };

  // Удаление
  const deleteTask = async (id) => {
    try {
      const response = await fetch(SERVER_URL + '/' + id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'Application/json',
        },
      });

      if (!response.ok) throw new Error('Ошибка при удалении');

      setTodos((prevState) => prevState.filter((task) => task.id !== id));
    } catch (error) {
      setError(error);
    }
  };

  // Создание
  const createTask = async (payload) => {
    try {
      const response = await fetch(SERVER_URL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) throw new Error('Ошибка при создании');

      const newTask = await response.json();
      console.log(newTask);

      setTodos([...todos, newTask]);
    } catch (error) {
      setError(error);
    }
  };

  // Сортировка
  const sortOnServer = (activateSort) => {
    setSortedBy(activateSort);
  };

  function sortById() {
    const toggler = filters.byId === 'asc' ? 'desc' : 'asc';

    setFilters({ ...filters, byId: toggler });
    sortOnServer(`?_sort=id&_order=${filters.byId}`);
  }

  function sortByAlphabet() {
    const toggler = filters.byAlphabet === 'asc' ? 'desc' : 'asc';

    setFilters({ ...filters, byAlphabet: toggler });
    sortOnServer(`?_sort=title&_order=${filters.byAlphabet}`);
  }

  if (isLoading && sortedBy === '') {
    return <h1 className="loader"></h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="tasksContainer">
      <header className={styles.taskCreator}>
        <CreateTask
          createTask={createTask}
          sortOnServer={sortOnServer}
          sortById={sortById}
          sortByAlphabet={sortByAlphabet}
          filters={filters}
        />
      </header>
      <ul>
        {todos.map((task) => (
          <TaskItem
            {...task}
            key={task.id}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        ))}
      </ul>
    </div>
  );
}
