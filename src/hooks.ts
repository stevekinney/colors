import { useCallback, useMemo } from 'react';
import { useColorContext } from './context';

export const useDispatch = () => {
  const { dispatch } = useColorContext();
  return useMemo(() => dispatch, [dispatch]);
};

export const useHexColor = () => {
  const { state } = useColorContext();
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
