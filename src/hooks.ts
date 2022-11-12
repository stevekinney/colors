import { useCallback, useContext, useMemo } from 'react';
import { ColorContext } from './context';

export const useDispatch = () => {
  const { dispatch } = useContext(ColorContext);
  return useMemo(() => dispatch, [dispatch]);
};

export const useHexColor = () => {
  const { state } = useContext(ColorContext);
  return useMemo(() => state.hexColor, [state]);
};

export const useUpdateHexCode = () => {
  const dispatch = useDispatch();
  return useCallback(
    (hexColor: string) =>
      dispatch({ type: 'update-hex-color', payload: { hexColor } }),
    [dispatch],
  );
};
