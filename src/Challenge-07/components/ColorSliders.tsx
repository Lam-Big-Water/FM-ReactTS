import { ChangeEvent, Dispatch } from "react";
import ColorSlider from "./ColorSlider"
import {RGBColorType, AdjustmentAction} from '../reducer';

interface ColorSlidersProps extends RGBColorType {
  dispatch: Dispatch<AdjustmentAction>
}

const ColorSliders = ({red, green, blue, dispatch}: ColorSlidersProps) => {
  const adjustRed = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({type: "ADJUST_RED", payload: +event.target.value});
  };
  const adjustGreen = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({type: "ADJUST_GREEN", payload: +event.target.value});
  };
  const adjustBlue = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({type: "ADJUST_BLUE", payload: +event.target.value});
  };
  return (
    <section className="color-sliders">
        <ColorSlider id="red-slider" label="Red" value={red} onChange={adjustRed}/>
        <ColorSlider id="green-slider" label="Green" value={green} onChange={adjustGreen}/>
        <ColorSlider id="blue-slider" label="Blue" value={blue} onChange={adjustBlue}/>
    </section>
  )
}

export default ColorSliders