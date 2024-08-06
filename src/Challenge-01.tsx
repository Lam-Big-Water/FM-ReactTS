import { useState } from "react";
import './style/challenge.scss';

const Demo = () => {

    return (
        <div className="container">
            <Box />
        </div>
    )
}

const Box = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="box">
            <header className="box--title">
                What song is playing at the beginning of Iron Man (2008)?
            </header>
            <p className="box--text">
                <span className={open ? 'visited' : 'blurred'} >"Back in Black" by AC/DC</span>
            </p>
            <footer className="btn-field">
                <button className="btn-field--btn" onClick={() => setOpen(!open)}>Toggle Answer</button>
            </footer>
        </div>
    )
}

export default Demo;