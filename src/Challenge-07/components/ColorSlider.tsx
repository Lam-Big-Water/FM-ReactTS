import { ChangeEvent } from "react";

interface ColorSliderProps {
  id: string;
  label: string;
  value: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}


const ColorSlider = ({id, label, value, onChange}: ColorSliderProps) => {
  return (
    <div className="color-slider">
        <label htmlFor={id}>{label}</label>
        <input id={id} type="range" min="0" max="255" value={value} onChange={onChange}/>
    </div>
  )
}

export default ColorSlider