import './ModalWithForm.css';
import close from "../../images/close.png";
import { useEffect } from 'react';

function ModalWithForm({children, modalOpened, handleClose}) {
    const handleClick = (evt) => {
        evt.preventDefault();
        handleClose();
    }

    const handleRemoteClick = (evt) => {
        if(evt.target===evt.currentTarget) {
            handleClick(evt);
        }   
    }

    useEffect(() => {
        if (!modalOpened) return;
        const handleEscClose = (evt) => {
            if(evt.key === 'Escape') {
                handleClick(evt);    
            }
        }

        window.addEventListener('keydown', handleEscClose);
        return () => {
            window.removeEventListener("keydown", handleEscClose);
        };
    }, [modalOpened])

    return (
        <div className={`modal ${modalOpened?'modal_opened':''}`} onMouseDown={handleRemoteClick}>
                <form className="modal__form">
                    {children}

                    <button className="modal__button"><img src={close} className="modal__icon" onClick={handleClick}></img></button>
            </form>
        </div>
    )
}

export default ModalWithForm;