import React, { useState, useRef } from 'react';
import './layout.css';

function Timer () {
    const [text, setText] = useState("00:00");

    const [isNumber, setIsNumber] = useState(false);
    const [isTime, setIsTime] = useState(false);

    const [errMsg, setErrMsg] = useState("");
    const [errFlag1, setErrFlag1] = useState(false);
    const [errFlag2, setErrFlag2] = useState(false);

    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const handleChange = (event) => {
        // 入力値を取得
        var text = event.target.value;
        setText(text);
        
        var pattern = /^([01][0-9]|2[0-3]):[0-5][0-9]$/;
        setIsNumber(isNaN(text.trim().slice(0,2)+text.slice(2,4)) ? true : false);
        setIsTime(pattern.test(text.trim()) ? true : false);

        if (0 < text.length) {
            // 数値以外が入力された場合
            setErrFlag1(isNumber ? true : false);
            if (errFlag1) {
                setErrMsg("数字を入力してください。");
                return; 
            } else {
                setErrMsg("");
            }

            // 数値以外が入力された場合
            if (4 == text.replaceAll(":", "").length) {
                text = text.slice(0, 2) + ":" + text.slice(2, 4);
                setText(text);
                setErrFlag2(isTime ? true : false);
            } 

            if (errFlag2) {
                setErrMsg("有効な時刻ではありません。");
                return;
            } else {
                setErrMsg("");
            }    
        } else {
            setErrFlag1(false);
            setErrFlag2(false);
            setErrMsg("");
        }
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