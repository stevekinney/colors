import { Dispatch, PropsWithChildren, useReducer } from 'react';
import { createContext } from './create-context';
import colorReducer, { initialState } from './lib/color-reducer';

const [useContext, Provider] = createContext<{
  state: ColorState;
  dispatch: Dispatch<ColorActions>;
}>();

export const useColorContext = useContext;

export const ColorProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(colorReducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};
