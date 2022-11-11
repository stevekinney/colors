import { createContext, Dispatch, PropsWithChildren, useReducer } from 'react';
import colorReducer, { initialState } from './lib/color-reducer';

export const ColorContext = createContext({ state: initialState } as {
  state: ColorState;
  dispatch: Dispatch<ColorActions>;
});

export const ColorProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(colorReducer, initialState);

  return (
    <ColorContext.Provider value={{ state, dispatch }}>
      {children}
    </ColorContext.Provider>
  );
};
