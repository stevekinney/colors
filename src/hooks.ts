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

export const useUpdateRGB = () => {
  const dispatch = useDispatch();
  return useCallback(
    (rgb: RGB) => dispatch({ type: 'update-rgb-color', payload: { rgb } }),
    [dispatch],
  );
};

export const useUpdateHSL = () => {
  const dispatch = useDispatch();
  return useCallback(
    (hsl: HSL) => dispatch({ type: 'update-hsl-color', payload: { hsl } }),
    [dispatch],
  );
};

export const useUpdateHSV = () => {
  const dispatch = useDispatch();
  return useCallback(
    (hsv: HSV) => dispatch({ type: 'update-hsv-color', payload: { hsv } }),
    [dispatch],
  );
};

export const useUpdateCMYK = () => {
  const dispatch = useDispatch();
  return useCallback(
    (cmyk: CMYK) => dispatch({ type: 'update-cmyk-color', payload: { cmyk } }),
    [dispatch],
  );
};
