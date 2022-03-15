import React, { createContext, useContext, useReducer } from 'react';

interface Answer {
  [name: string]: string | number;
}

type StateType = { form: Answer[] };

type ActionType = { type: 'CHECK'; name: string; value: string | number };

type Props = {
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
};

const defaultState: StateType = { form: [] };

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case 'CHECK': {
      const { name, value } = action;
      return { ...state, form: { ...state.form, [name]: value } };
    }

    default: {
      return state;
    }
  }
};

const Context = createContext<Props>({
  state: defaultState,
  dispatch: () => {},
});

const AppContext: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export const useAppContext = () => useContext(Context);

export default AppContext;
