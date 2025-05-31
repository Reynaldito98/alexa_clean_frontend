import ModalWithForm from "../ModalWithForm/ModalWithForm"

function BookingForm({modalOpened, handleClose}) {
    return (
        <ModalWithForm handleClose={handleClose} modalOpened={modalOpened}>
            <fieldset className="modal__fieldset">
                <label className="modal__label" htmlFor="first-name">First name: </label>
                <input type="text" className="modal__input" id="first-name" placeholder="Enter first name" required></input>
            </fieldset>

            <fieldset className="modal__fieldset">
                <label className="modal__label" htmlFor="last-name">Last name: </label>
                <input type="text" className="modal__input" id="last-name" placeholder="Enter last name" required></input>
            </fieldset>

            <fieldset className="modal__fieldset">
                <label className="modal__label" htmlFor="phone">Phone: </label>
                <input type="tel" className="modal__input" id="phone" placeholder="Enter phone number" required></input>
            </fieldset>

            <fieldset className="modal__fieldset">
                <label className="modal__label" htmlFor="email">Email: </label>
                <input type="email" className="modal__input" id="email" placeholder="Enter email address" required></input>
            </fieldset>

            <fieldset className="modal__fieldset">
                <label className="modal__label" htmlFor="email">Date: </label>
                <input type="date" className="modal__input" id="date" required></input>
            </fieldset>

            <fieldset className="modal__fieldset">
                <label className="modal__label" htmlFor="email">Time: </label>
                <input type="time" className="modal__input" id="time" min="08:00" max="16:00" step="1800" required></input>
            </fieldset>

            <fieldset className="modal__fieldset">
                <label className="modal__label" htmlFor="service">Comments: </label>
                <textarea type="text" className="modal__textarea" id="service" placeholder="Enter message here..."></textarea>
            </fieldset>

            <fieldset className="modal__fieldset modal__fieldset_button">
                <button type="submit" className="modal__submit">Request Appointment</button>
                <button type="reset" className="modal__reset">Reset</button>
            </fieldset>
        </ModalWithForm>
    )
}

export default BookingForm;