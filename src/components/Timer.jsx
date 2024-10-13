import React, { useState, useEffect } from 'react'
import './Timer.css'

const Timer = () => {
    const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
    const [isActive, setIsActive] = useState(false);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        if (isActive) {
            const Id = setInterval(() => {
                setTime((prvTime) => {
                    let { hours, minutes, seconds } = prvTime;
                    if (seconds === 59) {
                        seconds = 0;
                        minutes++;
                    }
                    else seconds++;

                    if (minutes === 59) {
                        minutes = 0;
                        hours++;
                    }
                    return { hours, minutes, seconds };
                })
            }, 1000);
            setIntervalId(Id);
        }
        else if (!isActive && intervalId) {
            clearInterval(intervalId);
        }
        return () => clearInterval(intervalId);
    }, [isActive]);

    const resetTimer = () => {
        setIsActive(false);
        setTime({ hours: 0, minutes: 0, seconds: 0 });
    }

    const toggleTimer = () => {
        setIsActive(!isActive);
    }

    return (
        <div>
            <h1>
                {`${time.hours.toString().padStart(2, '0')}:${time.minutes.toString().padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}`}
            </h1>
            <button onClick={toggleTimer} className='btn'>
                {isActive ? 'Stop' : 'Start'}
            </button>
            <button onClick={resetTimer} className='btn'>Reset</button>
        </div>
    )
}

export default Timer