import { useEffect, useState } from "react";
import Painting from "../types/painting";
import TimeUnit from "../types/timeUnit";
import Modal from "./Modal";

type PaintingProps = {
    painting: Painting;
}

function Canvas({painting}): PaintingProps {
    const [timer, setTimer] = useState(1);
    const [timerUnit, setTimerUnit] = useState(TimeUnit.Minute);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            console.log(`${date.getHours()}:${date.getMinutes()} Change image...`);
        }, 60000);
      
        return () => clearInterval(interval);
    }, [timer]);

    const toggleModal = () => {
        setModalVisible(!modalVisible)
    }

    return (
        <>
            <div className="container">
                <img className="painting" src={painting.url} alt={painting.title} />

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
                        <h2>{painting.title} by <span className="artist-name">{painting.artist}</span></h2>
                        <h3>{painting.type} <span className="circle">●</span> {painting.year}</h3>
                        <p>{painting.location}</p>
                    </div>
                }

                <div className="settings-gear" onClick={toggleModal}>⚙️</div>
            </div>
        </>
    )
}

export default Canvas;
