import {RGBColorType} from './reducer';
export const toRGB = ({red, green, blue}: RGBColorType): string => {
    return `rgb(${red}, ${green}, ${blue})`;
};