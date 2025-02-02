import { useState } from "react";
import Painting from "../types/painting";
import TimeUnit from "../types/timeUnit";

function Canvas () {
    const test: Painting = {
        title: "The Night Watch",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Night_Watch_-_HD.jpg/1920px-The_Night_Watch_-_HD.jpg",
        artist: "Rembrandt van Rijn",
        year: 1642,
        type: "painting"
    }

    const [timer, setTimer] = useState(1);
    const [timerUnit, setTimerUnit] = useState(TimeUnit.Minute);

    return (
        <>
            <div className="container">
                <img className="painting" src={test.url} alt={test.title} />

                <div className="timer-duration">Painting duration: {timer} {timerUnit}</div>
                <div className="painting-info">
                    <h2>{test.title} by <span className="artist-name">{test.artist}</span></h2>
                    <h3>{test.type} <span className="circle">●</span> {test.year}</h3>
                </div>
                <div className="settings-gear">⚙️</div>             
            </div>            
        </>
    )
}

export default Canvas;