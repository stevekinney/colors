type RGB = import('@types/color-convert/conversions').RGB;
type HSL = import('@types/color-convert/conversions').HSL;
type HSV = import('@types/color-convert/conversions').HSV;
type CMYK = import('@types/color-convert/conversions').CMYK;

type UpdateHexColorAction = {
  type: 'update-hex-color';
  payload: {
    hexColor: string;
  };
};

type UpdateRGBColorAction = {
  type: 'update-rgb-color';
  payload: { rgb: RGB };
};

type UpdateHSLColorAction = {
  type: 'update-hsl-color';
  payload: { hsl: HSL };
};

type UpdateHSVColorAction = {
  type: 'update-hsv-color';
  payload: { hsv: HSV };
};

type UpdateCMYKColorAction = {
  type: 'update-cmyk-color';
  payload: { cmyk: CMYK };
};

type ColorState = {
  hexColor: string;
};

type ColorActions =
  | UpdateHexColorAction
  | UpdateRGBColorAction
  | UpdateHSVColorAction
  | UpdateHSLColorAction
  | UpdateCMYKColorAction;
