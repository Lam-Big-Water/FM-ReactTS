import {useReducer, Dispatch, ChangeEvent} from 'react';
import './style/challenge-06.scss';

type AdjustmentAction = {
    type: 'ADJUST_RED' | 'ADJUST_GREEN' | 'ADJUST_BLUE';
    payload: number;
}

const reducer = (
    state: RGBColorType,
    action: AdjustmentAction
): RGBColorType => {
    switch(action.type) {
        case 'ADJUST_RED': {
            return {...state, red: action.payload};
        };
        case 'ADJUST_GREEN': {
            return {...state, green: action.payload};
        };
        case 'ADJUST_BLUE': {
            return {...state, blue: action.payload};
        };
        default: return state;
    }
}

const toRGB = ({red, green, blue}: RGBColorType): string => {
    return `rgb(${red}, ${green}, ${blue})`;
};


const App = () => {
    const [rgb, dispatch] = useReducer(reducer, {
        red: 0,
        green: 0,
        blue: 0
    });

    return (
        <main style={{borderColor: toRGB(rgb)}}>
            <ColorSwatch {...rgb} />
            <ColorInputs {...rgb} />
            <ColorSliders {...rgb} dispatch={dispatch} />
        </main>
    )
};

interface RGBColorType {
    red: number;
    green: number;
    blue: number;
}

const ColorSwatch = ({red, green, blue}: RGBColorType) => {
    return (
        <div className='color-swatch' style={{backgroundColor: `rgb(${red}, ${green}, ${blue})`}}>
        </div>
    )
}

const ColorInputs = ({red, green, blue}: RGBColorType) => {
    return (
        <section className='color-inputs'>
            <ColorInput id='red-input' label='Red' value={red} />
            <ColorInput id='green-input' label='Green' value={green} />
            <ColorInput id='blue-input' label='Blue' value={blue} />
        </section>
    );
};

interface ColorInputProps {
    id: string;
    label: string;
    value: number;
}

const ColorInput = ({id, label, value}: ColorInputProps) => {
    return (
        <div className="color-input">
            <label htmlFor={id}>{label}</label>
            <input id={id} type="number" min="0" max="255" value={value} />
        </div>
    );
};


interface ColorSidersProps extends RGBColorType {
    dispatch: Dispatch<AdjustmentAction>;
}

const ColorSliders = ({
    red,
    green,
    blue,
    dispatch
}: ColorSidersProps) => {
    const adjustRed = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch({type: 'ADJUST_RED', payload: +event.target.value});
    };
    const adjustGreen = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch({type: 'ADJUST_GREEN', payload: +event.target.value});
    };
    const adjustBlue = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch({type: 'ADJUST_BLUE', payload: +event.target.value});
    };

    return (
        <section className='color-sliders'>
            <ColorSlider 
                id='red-slider'
                label='Red'
                value={red}
                onChange={adjustRed}
            />
            <ColorSlider 
                id='green-slider'
                label='Green'
                value={green}
                onChange={adjustGreen}
            />
            <ColorSlider 
                id='blue-slider'
                label='Blue'
                value={blue}
                onChange={adjustBlue}
            />
        </section>
    )
}

interface ColorSliderProps {
    id: string;
    label: string;
    value: number;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const ColorSlider = ({
    id,
    label,
    value,
    onChange
}: ColorSliderProps) => {
    return (
        <div className="color-slider">
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type="range"
                min="0"
                max="255"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default App