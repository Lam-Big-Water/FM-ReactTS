import {RGBColorType} from '../reducer';
import ColorInput from "./ColorInput";

const ColorInputs = ({red, green, blue}: RGBColorType) => {
  return (
    <section className="color-inputs">
      <ColorInput id="red-input" label="Red" value={red}/>
      <ColorInput id="green-input" label="Green" value={green}/>
      <ColorInput id="blue-input" label="Blue" value={blue}/>
    </section>
  );
};

export default ColorInputs