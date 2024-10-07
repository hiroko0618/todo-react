import React, { useState, useRef, useEffect } from 'react';
import './layout.css';

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
        var formattedMinutes = padInput.slice(0, 2).toString();
        var formattedSeconds = padInput.slice(2, 4).toString().padStart(2, "0");

        if (Number(formattedSeconds) >= 60) {
            formattedMinutes = (Number(formattedMinutes) + 1).toString();
            formattedSeconds = (Number(formattedSeconds) - 60).toString();
        }
        if (Number(formattedMinutes) > 99) {
            formattedMinutes = "99";
        }

        return `${formattedMinutes}:${formattedSeconds}`;
    }
    
    const formatTime = (inputTime) => {
        const minutes = Math.floor(inputTime / 60000).toString().padStart(2, "0");
        const seconds = Math.floor((inputTime % 60000) / 1000).toString().padStart(2, "0");

        return `${minutes}:${seconds}`;
    }

    function handleStart() {
        const inputTime = rawInput.replace(":", "");
        const minutes = Number(inputTime.slice(0, 2)) * 60000;
        const seconds = Number(inputTime.slice(2, 4)) * 1000;
        const totalMilliseconds = minutes + seconds;

        setTime(totalMilliseconds);
        
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(() => {
            setTime((prevTime) => {
                if (prevTime <= 0) {
                    clearInterval(intervalRef.current);
                    return 0;
                }
                return prevTime - 1000;
            });
        }, 1000);
    }

    function handlePause() {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    }

    function handleReset() {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        setTime(0);

        setRawInput("");
        setFormattedText("00:00");
        setIsEditing(true);
    }

    useEffect(() => {
        setFormattedText(formatTime(time));
    }, [time]);

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