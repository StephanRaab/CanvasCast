interface Props {
    isVisible: boolean;
}

const Modal: React.FC<Props> = ({isVisible}) => {
    return(
        <div className="modal">modal</div>
    )
}

export default Modal;