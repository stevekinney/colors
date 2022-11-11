import uniq from 'lodash.uniq';
import { triad, complement } from 'simpler-color';

export const getTriadColors = (hexColor: string) =>
  uniq([1, 2, 3].map((index) => triad(hexColor, index)));

export const getComplementColors = (hexColor: string) =>
  uniq(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) =>
      complement(hexColor, index),
    ),
  );
