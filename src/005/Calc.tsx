import React, { useState } from 'react';
import { evaluate } from 'mathjs';

import './layout.css';

function Calc () {
    const [input, setInput] = useState("");
    const [message, setMessage] = useState("");
    const [resetFlg, setResetFlg] = useState(false);

    const handleClick = (value) => {
        if (!resetFlg) {
            setInput((prevInput) => prevInput + value);
        } else {
            setInput(value);
            setResetFlg(false);
        }
    }

    const handleCalculate = () => {
        try {
            const result = evaluate(input);
            setInput(result.toString());
            setResetFlg(true);
        } catch (e) {
            setMessage("Error");
            setResetFlg(true);
        }
    }

    const clearValue = () => {
        setInput("");
    }

    return (
        <div className="container">
            <div className="output-area">
                <span>
                    {input != "" ? input : "0"}
                </span>
            </div>
            <div className="input-area">
                <table>
                    <tr>
                        <td><button onClick={() => handleClick("7")}>7</button></td>
                        <td><button onClick={() => handleClick("8")}>8</button></td>
                        <td><button onClick={() => handleClick("9")}>9</button></td>
                        <td><button onClick={() => handleClick("+")}>+</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={() => handleClick("4")}>4</button></td>
                        <td><button onClick={() => handleClick("5")}>5</button></td>
                        <td><button onClick={() => handleClick("6")}>6</button></td>
                        <td><button onClick={() => handleClick("-")}>-</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={() => handleClick("1")}>1</button></td>
                        <td><button onClick={() => handleClick("2")}>2</button></td>
                        <td><button onClick={() => handleClick("3")}>3</button></td>
                        <td><button onClick={() => handleClick("*")}>*</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={() => handleClick("8")}>0</button></td>
                        <td><button onClick={() => handleClick("/")}>/</button></td>
                        <td><button onClick={() => handleClick(".")}>.</button></td>
                        <td><button onClick={handleCalculate}>=</button></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan={2}><button onClick={clearValue} className="btn-clear">Clear</button></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Calc;