import { useReducer } from "react";

import ColorSwatch from "./components/ColorSwatch";
import ColorInputs from "./components/ColorInputs";
import ColorSliders from "./components/ColorSliders";

import {reducer, RGBColorType, AdjustmentAction} from './reducer'
import {toRGB} from './utility'

import './style.scss';

const App = () => {

    const [rgb, dispatch] = useReducer(reducer, {
        red: 0,
        green: 0,
        blue: 0,
    });

    return (
        <main style={{borderColor: toRGB(rgb)}}>
            <ColorSwatch {...rgb}/>
            <ColorInputs {...rgb}/>
            <ColorSliders {...rgb} dispatch={dispatch}/>
        </main>
    )
}

export default App