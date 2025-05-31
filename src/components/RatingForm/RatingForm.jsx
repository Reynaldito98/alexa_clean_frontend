import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RatingForm({modalOpened, handleClose}) {
    return (
        <ModalWithForm handleClose={handleClose} modalOpened={modalOpened}>
            <fieldset className="modal__fieldset">
                <label for="rating">How would you rate your experience?:</label>
                <select id="rating" className="modal__input">
                    <option value="r-bad">Really Bad</option>
                    <option value="bad">Bad</option>
                    <option value="normal">Normal</option>
                    <option value="good">Good</option>
                    <option value="r-good">Really good</option>
                </select>
            </fieldset>

            <fieldset className="modal__fieldset">
                <label className="modal__label" htmlFor="service">Comments: </label>
                <textarea type="text" className="modal__textarea modal__textarea2" id="service" placeholder="Enter message here..."></textarea>
            </fieldset>

            <fieldset className="modal__fieldset modal__fieldset_button">
                <button type="submit" className="modal__submit">Submit</button>
                <button type="reset" className="modal__reset">Reset</button>
            </fieldset>
        </ModalWithForm>
    )
}

export default RatingForm;