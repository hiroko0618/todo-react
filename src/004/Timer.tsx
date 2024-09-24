import React, { useState, useRef } from 'react';
import './layout.css';

function Timer () {
    const [formattedText, setFormattedText] = useState("00:00");
    const [rawInput, setRawInput] = useState("");    
    const [errMsg, setErrMsg] = useState("");

    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (event) => {
        // 入力値を取得
        var input = event.target.value;
        var pattern = /^[0-9]*$/;

        if (!pattern.test(input) ? true : false) {
            setRawInput(input);
            setErrMsg("数値を入力してください。");
            return;
        }
        setErrMsg("");
        setRawInput(input);
        setIsEditing(true);
    }

    const handleBlur = () => {
        if ("" == rawInput) {
            setFormattedText("00:00");
        } else {
            setFormattedText(formatInput(rawInput));
        }
        setIsEditing(false);
    }
    
    const handleFocus = () => {
        setIsEditing(true);
    }

    const formatInput = (input) => {
        const padInput = String(input).padStart(4, "0");
        const minutes = padInput.slice(0, 2);
        const seconds = padInput.slice(2, 4);

        return `${minutes}:${seconds}`;
    }
    
    function handleStart() {
    }

    function handlePause() {

    }

    function handleReset() {
        setRawInput("");
        setFormattedText("00:00");
        setIsEditing(true);
    }

    return (
        <div className="container">
            <div className="input-area">
                <input 
                    value={isEditing ? rawInput : formattedText} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus} 
                    type="text" 
                    placeholder="00:00" 
                    maxLength={4} 
                    className="input-text"
                />
                <span><p className="error">{errMsg}</p></span>
            </div>
            <div className="button-area">
                <button onClick={handleStart}>Start</button>
                <button onClick={handlePause}>Pause</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}

export default Timer;