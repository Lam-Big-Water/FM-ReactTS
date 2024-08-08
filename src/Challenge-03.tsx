import { useState } from "react";

import './style/challenge-03.scss';
const Challenge = () => {
  return (
    <div>
        <form className="form-filed">
            <label htmlFor="" className="form-filed--label">
                Number of Dog Facts
            </label>

            <input type="text" className="form-filed--input" />

            <button className="form-filed--button">
                <span>Fetch Dog Facts</span>
            </button>
        </form>
    </div>
  )
}

export default Challenge