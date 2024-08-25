import ColorSwatch from "./components/ColorSwatch";
import ColorInputs from "./components/ColorInputs";
import ColorSliders from "./components/ColorSliders";
import './style.scss';

const App = () => {

    return (
        <main>
            <ColorSwatch />
            <ColorInputs />
            <ColorSliders />
        </main>
    )
}

export default App