export interface RGBColorType {
    red: number;
    green: number;
    blue: number;
}

export interface AdjustmentAction {
    type: "ADJUST_RED" | "ADJUST_GREEN" | "ADJUST_BLUE";
    payload: number;
};

export const reducer = (state: RGBColorType, action: AdjustmentAction): RGBColorType => {
    switch (action.type) {
        case "ADJUST_RED": {
            return {...state, red: action.payload};
        }
        case "ADJUST_GREEN": {
            return {...state, green: action.payload};
        }
        case "ADJUST_BLUE": {
            return {...state, blue: action.payload};
        }
        default:
            return state;
    }
};
