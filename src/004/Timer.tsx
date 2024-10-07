import React, { useState, useRef } from 'react';
import './layout.css';
import { setInterval } from 'timers/promises';

function Timer () {
    const [formattedText, setFormattedText] = useState("00:00");
    const [rawInput, setRawInput] = useState("");    
    const [errMsg, setErrMsg] = useState("");

    const [isEditing, setIsEditing] = useState(false);

    const [time, setTime] = useState(0);
    const intervalRef = useRef(null);

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
        var formattedMinutes = padInput.slice(0, 2);
        var formattedSeconds = padInput.slice(2, 4);

        if (Number(formattedSeconds) >= 60) {
            formattedMinutes = (Number(formattedMinutes) + 1).toString();
            formattedSeconds = (Number(formattedSeconds) - 60).toString();
        }
        if (Number(formattedMinutes) > 99) {
            formattedMinutes = "99";
        }

        return `${formattedMinutes}:${formattedSeconds}`;
    }
    
    function handleStart() {
        const inputTime = rawInput.replace(":", "");
        const minutes = Number(inputTime.slice(0, 2)) * 60000;

        setTime(minutes);
        
        intervalRef.current = (() => {
            setTime(prevTime => prevTime - 1);
        }, 1000);
    }

    function handlePause() {
        clearInterval(intervalRef.current);
    }

    function handleReset() {
        clearInterval(intervalRef.current);
        setTime(0);

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
                <button onClick={handleStart} className="btn-s">Start</button>
                <button onClick={handlePause} className="btn-p">Pause</button>
                <button onClick={handleReset} className="btn-r">Reset</button>
            </div>
        </div>
    )
}

export default Timer;