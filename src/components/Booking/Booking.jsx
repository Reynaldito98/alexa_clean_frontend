import './Booking.css';

function Booking() {
    return (
        <main className="booking" id="book">
            <div className="booking__background">

            </div>

            <h1 className="booking__heading">Request an Appointment</h1>
            <hr></hr>

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
                    <label className="booking__label" htmlFor="email">Email: </label>
                    <input type="email" className="booking__input" id="email" placeholder="Enter email" required></input>
                </fieldset>

                <fieldset className="booking__fieldset">
                    <label className="booking__label" htmlFor="phone">Phone: </label>
                    <input type="tel" className="booking__input" id="phone" placeholder="Enter phone number" required></input>
                </fieldset>

                <fieldset className="booking__fieldset">
                    <label className="booking__label" htmlFor="service">Service requested: </label>
                    <input type="text" className="booking__input" id="service" placeholder="Enter service requested - Ex. Snow removal" required></input>
                </fieldset>

                <fieldset className="booking__fieldset">
                    <label className="booking__label" htmlFor="date">Date: </label>
                    <input type="date" className="booking__input" id="date" placeholder="Enter date" required></input>
                </fieldset>

                <fieldset className="booking__fieldset">
                    <label className="booking__label" htmlFor="time">Time: </label>
                    <input type="time" className="booking__input" id="time" placeholder="Enter time" required></input>
                </fieldset>

                <fieldset className="booking__fieldset booking__fieldset_button">
                    <button type="submit" className="booking__submit">Submit</button>
                    <button type="reset" className="booking__reset">Reset</button>
                </fieldset>
            </form>
        </main>
    )
}

export default Booking;