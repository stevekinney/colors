type UpdateHexColorAction = {
  type: 'update-hex-color';
  payload: {
    hexColor: string;
  };
};

type UpdateRGBColorAction = {
  type: 'update-rgb-color';
  payload: { rgb: [r: number, g: number, b: number] };
};

type ColorState = {
  hexColor: string;
};

type ColorActions = UpdateHexColorAction | UpdateRGBColorAction;
