import { http } from '../http/http';

const initialState = {
  todos: [{ title: 'Задачи отсутствуют', id: 1, completed: false }],
  error: null,
  isLoading: false,
  sortedBy: '',
  filters: { byId: 'desc', byAlphabet: 'desc' },
};

const SET_TODOS = 'SET_TODOS';
const UPDATE_TODO = 'UPDATE_TODO';
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const SET_ERROR = 'SET_ERROR';
const SET_IS_LOADING = 'SET_IS_LOADING';
const SET_SORT = 'SET_SORT'; // {byId, byAphabet}
const SET_FILTER = 'SET_FILTER';

// Main reducer

export const firstReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TODOS: {
      return { ...state, todos: [...payload] };
    }

    case UPDATE_TODO: {
      return { ...state, todos: [...todos, ...payload] };
    }

    case ADD_TODO: {
      return { ...state, todos: [...payload, ...payload] };
    }

    case DELETE_TODO: {
      const newArray = state.todos.filter((todo) => payload.id !== todo.id);
      return { ...state, todos: newArray };
    }

    case SET_ERROR: {
      return { ...state, error: payload };
    }

    case SET_IS_LOADING: {
      return { ...state, isLoading: payload };
    }

    case SET_SORT: {
      return { ...state, sortedBy: payload };
    }

    case SET_FILTER: {
      return { ...state, filters: { ...payload } };
    }

    default:
      return state;
  }
};

// Actions synch

export const setTodos = (payload) => ({ type: SET_TODOS, payload });
export const updateTodo = (payload) => ({ type: UPDATE_TODO, payload });
export const addTodo = (payload) => ({ type: ADD_TODO, payload });
export const deleteTodo = (payload) => ({ type: DELETE_TODO, payload });
export const setError = (payload) => ({ type: SET_ERROR, payload });
export const setIsLoading = (payload) => ({ type: SET_IS_LOADING, payload });
export const setSort = (payload) => ({ type: SET_SORT, payload });
export const setFilter = (payload) => ({ type: SET_FILTER, payload });

// Actions usynch

export const fetchTodos = (sortedBy) => async (dispatch) => {
  dispatch(setIsLoading(true));
  try {
    const { data } = await http.get(sortedBy);
    dispatch(setTodos(data));
    dispatch(setIsLoading(false));
  } catch (error) {
    dispatch(setError('Не удалость загрузить список задач', error.message));
  }
};

export const deleteTask = (id) => async (dispatch, getState) => {
  try {
    await http.delete(`/${id}`);
    const newTodos = getState().todoState.todos.filter((task) => task.id !== id);
    dispatch(setTodos(newTodos));
  } catch (error) {
    dispatch(setError(`Ошибка при удалении: ${error.message}`));
  }
};

export const updateTask = (id, payload) => async (dispatch, getState) => {
  try {
    const { data: updatedTask } = await http.patch(`/${id}`, { ...payload });

    const updatedTodos = Object.values(getState().todoState.todos).map((todo) =>
      todo.id === id ? updatedTask : todo
    );

    dispatch(setTodos(updatedTodos));
  } catch (error) {
    dispatch(setError('Ошибка при запросе на редактирование'));
  }
};

export const addTask = (payload) => async (dispatch, getState) => {
  try {
    const response = await http.post('', payload);
    const updatedTodos = [...getState().todoState.todos, response.data];
    dispatch(setTodos(updatedTodos));
  } catch (error) {
    dispatch(setError('Ошибка при создании'));
  }
};
