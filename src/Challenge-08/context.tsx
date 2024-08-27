import { Dispatch, createContext, ReactNode, useReducer } from 'react';
import {reducer, RGBColorType, AdjustmentAction} from './reducer';

interface RGBContextType extends RGBColorType {
    dispatch: Dispatch<AdjustmentAction>;
}

const initialState: RGBColorType = {
    red: 0,
    green: 0,
    blue: 0,
};

export const RGBContext = createContext<RGBContextType> (
    initialState as RGBContextType
);

export const RGBContextProvider = ({children}: {children: ReactNode}) => {
    const [rgb, dispatch] = useReducer(reducer, {
        red: 0,
        green: 0,
        blue: 0,
    });

    return (
        <RGBContext.Provider value={{...rgb, dispatch}}>
            {children}
        </RGBContext.Provider>
    );
};