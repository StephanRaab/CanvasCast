import { useState } from "react";
import Painting from "../types/painting";
import TimeUnit from "../types/timeUnit";
import Modal from "./Modal";

function Canvas() {
    const test: Painting = {
        title: "The Night Watch",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Night_Watch_-_HD.jpg/1920px-The_Night_Watch_-_HD.jpg",
        artist: "Rembrandt van Rijn",
        year: 1642,
        type: "painting"
    }

    const [timer, setTimer] = useState(1);
    const [timerUnit, setTimerUnit] = useState(TimeUnit.Minute);
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible)
    }

    return (
        <>
            <div className="container">
                <img className="painting" src={test.url} alt={test.title} />

                {!modalVisible &&
                    <div className="timer-duration" onClick={toggleModal}>Painting duration: {timer} {timerUnit}</div>
                }

                {modalVisible &&
                <div className="modal-container">
                    <Modal isVisible={modalVisible} />
                </div>
                }
                

                {!modalVisible &&
                    <div className="painting-info">
                        <h2>{test.title} by <span className="artist-name">{test.artist}</span></h2>
                        <h3>{test.type} <span className="circle">●</span> {test.year}</h3>
                    </div>
                }

                <div className="settings-gear" onClick={toggleModal}>⚙️</div>
            </div>
        </>
    )
}

export default Canvas;