const initialState = {
  isEdit: {},
  editorData: {},
  isOpenFilters: false,
  searchInput: '',
  isDeleting: false,
};

const TOGGLE_IS_EDIT = 'TOGGLE_IS_EDIT';
const TOGGLE_IS_OPEN_FILTERS = 'TOGGLE_IS_OPEN_FILTERS';
const SET_SEARCH_INPUT = 'SET_SEARCH_INPUT';
const SET_EDITOR_DATA = 'SET_EDITOR_DATA';
const TOGGLE_IS_DELETING = 'TOGGLE_IS_DELETING';

// Редьюсер для всех вспомогательных операций дочерних компонентов

export const secondReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_IS_EDIT: {
      const id = payload;

      return {
        ...state,
        isEdit: {
          ...state.isEdit,
          [id]: state.isEdit[id] === true ? false : true,
        },
      };
    }

    case TOGGLE_IS_OPEN_FILTERS: {
      return { ...state, isOpenFilters: !state.isOpenFilters };
    }

    case SET_SEARCH_INPUT: {
      return { ...state, searchInput: payload };
    }

    case SET_EDITOR_DATA: {
      const { id, data } = payload;
      return { ...state, editorData: { ...state.editorData, [id]: data } };
    }

    case TOGGLE_IS_DELETING: {
      const id = payload;

      return {
        ...state,
        isDeleting: {
          ...state.isDeleting,
          [id]: state.isDeleting[id] === true ? false : true,
        },
      };
    }

    default:
      return state;
  }
};

export const toggleIsEdit = (id) => ({ type: TOGGLE_IS_EDIT, payload: id });
export const toggleIsOpenFilters = () => ({ type: TOGGLE_IS_OPEN_FILTERS });
export const setSearchInput = (payload) => ({ type: SET_SEARCH_INPUT, payload });
export const setEditorData = (id, data) => ({
  type: SET_EDITOR_DATA,
  payload: { id, data },
});
export const toggleIsDeleting = (payload) => ({ type: TOGGLE_IS_DELETING, payload });
