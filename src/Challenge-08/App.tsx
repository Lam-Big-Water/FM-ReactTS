
import ColorSwatch from "./components/ColorSwatch";
import ColorInputs from "./components/ColorInputs";
import ColorSliders from "./components/ColorSliders";


import { RGBContextProvider } from "./context";

import './style.scss';

const App = () => {

    return (
        <RGBContextProvider>
            <main>
                <ColorSwatch />
                <ColorInputs />
                <ColorSliders />
            </main>
        </RGBContextProvider>
    )
}

export default App