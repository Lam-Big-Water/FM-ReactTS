import {RGBColorType} from '../reducer';
import {toRGB} from '../utility';

const ColorSwatch = (rgb: RGBColorType) => {
  
  const color = toRGB(rgb);

  return (
    <div 
    className="color-swatch"
    style={{backgroundColor: color}}
    >    
    </div>
  )
}

export default ColorSwatch