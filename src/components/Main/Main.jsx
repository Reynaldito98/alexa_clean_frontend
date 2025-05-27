import './Main.css';
import people from "../../images/alexa.jpg";

function Main() {
    return (
        <main className="main">
            <h1 className="main__title">AlexaClean</h1>

            <div className="main__buttons">
                <a href="#" className="main__button">Who are we?</a>
                <a href="#" className="main__button">Why should you choose us?</a>
                <a href="#quote" className="main__button main__button_quote">Services</a>
                <a href="#" className="main__button">I want an appointment</a>
                <a href="#" className="main__button">Pricing</a>
                <a href="#book" className="main__button main__button_quote">Get in touch</a>
            </div> 
        </main>
    )
}

export default Main;