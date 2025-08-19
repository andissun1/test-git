import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [{ title: 'Задачи отсутствуют', id: 1, completed: false }],
  error: null,
  isLoading: false,
  sortedBy: '',
  filters: '',
};

const updateTaskSlice = createSlice({
  name: 'updateTaskSlice',
  initialState,
  reducers: {
    setTodos: () => {}, // Async
    updateTodo: () => {},
    createTodo: () => {},
    deleteTodo: () => {},
    setError: () => {},
    setSortById: () => {},
    setSortByAlphabet: () => {},
    setFilter: () => {},
  },
});

export const { reducer, actions } = updateTaskSlice;
