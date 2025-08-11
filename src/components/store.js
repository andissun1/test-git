const initialState = {
  buttons: new Array(9).fill(null),
  currentPlayer: 'X',
  isGameEnded: false,
  isDraw: false,
};

const appReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_CURRENT_PLAYER': {
      return { ...state, currentPlayer: payload };
    }

    case 'SET_IS_GAME_ENDED': {
      return { ...state, isGameEnded: payload };
    }

    case 'SET_IS_DRAW': {
      return { ...state, isDraw: payload };
    }

    case 'SET_BUTTONS': {
      return { ...state, buttons: payload };
    }

    case 'RESET_GAME': {
      return initialState;
    }

    default:
      return state;
  }
};

const createStore = (reducer) => {
  let state;

  return {
    dispatch: (action) => {
      state = reducer(state, action);
    },
    getState: () => state,
  };
};

export const store = createStore(appReducer);

store.dispatch({});
