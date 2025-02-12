import { useEffect, useState } from "react";
import Painting from "../types/painting";
import TimeUnit from "../types/timeUnit";
import Modal from "./Modal";

type CanvasProps = {
    paintings: Painting[];
};
const MS_IN_MINUTE:number = 60000;
const MS_IN_HOUR: number = 3600000;

function Canvas({ paintings }: CanvasProps) {
    const [currentPainting, setCurrentPainting] = useState<Painting>(paintings[0]);
    const [timer, setTimer] = useState(1);
    const [timerUnit, setTimerUnit] = useState(TimeUnit.Minute);
    const [modalVisible, setModalVisible] = useState(false);

    const getRandomPainting = () => {
        const randomIndex = Math.floor(Math.random() * paintings.length);
        const newPainting = paintings[randomIndex];
        // Ensure we don't show the same painting twice in a row
        if (paintings.length > 1 && newPainting.id === currentPainting.id) {
            return getRandomPainting();
        }
        console.log("New painting: ", newPainting);
        return newPainting;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            console.log(`${date.getHours()}:${date.getMinutes()} Changing image...`);
            setCurrentPainting(getRandomPainting());
            //setCurrentPainting(1);
        }, timer * (timerUnit === TimeUnit.Minute ? MS_IN_MINUTE : MS_IN_HOUR));
      
        return () => clearInterval(interval);
    }, [timer, timerUnit, paintings]);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    return (
        <div className="container">
            <img 
                className="painting" 
                src={currentPainting.url} 
                alt={currentPainting.title} 
            />
            {!modalVisible && (
                <div className="timer-duration" onClick={toggleModal}>
                    Painting duration: {timer} {timerUnit}
                </div>
            )}
            {modalVisible && (
                <div className="modal-container">
                    <Modal isVisible={modalVisible} />
                </div>
            )}
            {!modalVisible && (
                <div className="painting-info">
                    <h2>{currentPainting.title} by <span className="artist-name">{currentPainting.artist}</span></h2>
                    <h3>{currentPainting.type} <span className="circle">●</span> {currentPainting.year}</h3>
                    <p>{currentPainting.location}</p>
                </div>
            )}
            <div className="settings-gear" onClick={toggleModal}>⚙️</div>
        </div>
    );
}

export default Canvas;
