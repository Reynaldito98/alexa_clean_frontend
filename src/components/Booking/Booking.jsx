import './Booking.css';
import alexa from '../../images/alexa.jpg';

function Booking() {
    return (
        <main className="booking" id="book">
            <div className="booking__background">

            </div>

            <h1 className="booking__heading">Get in touch</h1>
            <hr></hr>

            <div className="booking__container">
                <div className="booking__container2">
                    <img src={alexa} className="booking__image" alt="alexa"/>
                    <p className="booking__description">If you have any questions, worries or suggestions, send me a message and I'm more than happy to get back to you as soon as I can...</p>
                </div>

                <form className="booking__form">
                    <fieldset className="booking__fieldset">
                        <label className="booking__label" htmlFor="first-name">First name: </label>
                        <input type="text" className="booking__input" id="first-name" placeholder="Enter first name" required></input>
                    </fieldset>

                    <fieldset className="booking__fieldset">
                        <label className="booking__label" htmlFor="last-name">Last name: </label>
                        <input type="text" className="booking__input" id="last-name" placeholder="Enter last name" required></input>
                    </fieldset>

                    <fieldset className="booking__fieldset">
                        <label className="booking__label" htmlFor="phone">Phone: </label>
                        <input type="tel" className="booking__input" id="phone" placeholder="Enter phone number" required></input>
                    </fieldset>

                    <fieldset className="booking__fieldset">
                        <label className="booking__label" htmlFor="service">Comments: </label>
                        <textarea type="text" className="booking__textarea" id="service" placeholder="Enter message here..." required></textarea>
                    </fieldset>

                    <fieldset className="booking__fieldset booking__fieldset_button">
                        <button type="submit" className="booking__submit">Submit</button>
                        <button type="reset" className="booking__reset">Reset</button>
                    </fieldset>
                </form>
            </div>
        </main>
    )
}

export default Booking;