import { useContext } from "react";
import {RGBContext} from '../context';
import {toRGB} from '../utility';

const ColorSwatch = () => {
  
  const colorData = useContext(RGBContext);
  const colors = toRGB(colorData);


  return (
    <div 
    className="color-swatch"
    style={{backgroundColor: colors}}
    >    
    </div>
  )
}

export default ColorSwatch