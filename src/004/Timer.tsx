import React, { useState, useRef } from 'react';
import './layout.css';

function Timer () {
    const [text, setText] = useState("");
    
    const [errMsg, setErrMsg] = useState("");

    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const handleChange = (event) => {
        // 入力値を取得
        var input = event.target.value;
        var pattern = /^[0-9]$/;
        //var isTime = !/^([01][0-9]|2[0-3]):[0-5][0-9]$/.test(input);

        if (!pattern.test(input) ? true : false) {
            setErrMsg("数値を入力してください。");
            setText(input);
            return;
        }
        setErrMsg("");
        //setText(input);
        formatInput(input);
    }

    const formatInput = (input) => {
        const num = parseInt(input, 10);
        if (!num && "" == input) {
            setText("00:00");
            return;
        }

        const minutes = Math.floor(num / 60);
        const seconds = Math.floor(num % 60);

        const formattedMinutes = String(minutes).padStart(2, "0");
        const formattedSeconds = String(seconds).padStart(2, "0");

        setText(`${formattedMinutes}:${formattedSeconds}`);
        return;
    }
    
    function handleStart() {
    }

    function handlePause() {

    }

    function handleReset() {
        setText("");
    }

    return (
        <div className="container">
            <div className="input-area">
                <input 
                    value={text} 
                    onChange={handleChange} 
                    type="text" 
                    placeholder="00:00" 
                    maxLength={5} 
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