import './Main.css';
import people from "../../images/alexa.jpg";
import arrowDown from '../../images/arrow-down.png';
import { useState } from 'react';

function Main() {
    const [descriptionOpened, setDescriptionOpened] = useState(false);
    const [description2Opened, setDescription2Opened] = useState(false);

    function handleDescriptionOpened() {
        setDescriptionOpened(!descriptionOpened);
    }

    function handleDescription2Opened() {
        setDescription2Opened(!description2Opened);
    }

    return (
        <main className="main">
            <h1 className="main__title">AlexaClean</h1>

            <div className="main__buttons">
                <a href="#" className="main__button">
                    <div className="main__container" onClick={handleDescriptionOpened}>
                        Who are we? 
                        <img src={arrowDown} className={`main__arrow ${descriptionOpened?'main__arrow_rotate':''}`}/>
                    </div> 

                    <p className={`main__description ${descriptionOpened?'main__description_opened':''}`}>
                        We are wanderers beneath a sky that has never stopped watching us. From the first flicker of awareness in the cave to the electric glow of screens in high-rise towers, we’ve been reaching — for light, for meaning, for each other. The world has changed its clothes a thousand times, wearing ice, dust, rainforests, and cities, but the core remains: the need to belong, to know, to build something that lasts longer than the bones beneath us.
                        The pigeons wore goggles now. Ever since the storm of orange feathers last spring, nothing had been quite the same in the city of Marrowlight. Streetlamps whispered rumors to stray cats, and vending machines occasionally dispensed fortunes instead of candy. People didn’t question it — not anymore.
                        In the northeast quarter, where buildings leaned like tired dancers, a boy with copper-colored eyes played a silent violin. No strings, no bow — just the idea of music hanging in the air like steam from a midnight kettle. Those who passed by swore they could feel the notes inside their chestbones.
                    </p>                   
                </a>
                <a href="#" className="main__button">
                    <div className="main__container" onClick={handleDescription2Opened}>
                        Why should you choose us? 
                        <img src={arrowDown} className={`main__arrow ${description2Opened?'main__arrow_rotate':''}`}/>
                    </div>

                    <p className={`main__description ${description2Opened?'main__description_opened':''}`}>
                        We are wanderers beneath a sky that has never stopped watching us. From the first flicker of awareness in the cave to the electric glow of screens in high-rise towers, we’ve been reaching — for light, for meaning, for each other. The world has changed its clothes a thousand times, wearing ice, dust, rainforests, and cities, but the core remains: the need to belong, to know, to build something that lasts longer than the bones beneath us.
                        The pigeons wore goggles now. Ever since the storm of orange feathers last spring, nothing had been quite the same in the city of Marrowlight. Streetlamps whispered rumors to stray cats, and vending machines occasionally dispensed fortunes instead of candy. People didn’t question it — not anymore.
                        In the northeast quarter, where buildings leaned like tired dancers, a boy with copper-colored eyes played a silent violin. No strings, no bow — just the idea of music hanging in the air like steam from a midnight kettle. Those who passed by swore they could feel the notes inside their chestbones.
                    </p> 
                </a>
                <a href="#quote" className="main__button main__button_quote">Services & Pricing</a>
                <a href="#" className="main__button">I want an appointment</a>
                <a href="#" className="main__button">What did you think of our service?</a>
                <a href="#book" className="main__button main__button_quote">Get in touch</a>
            </div> 
        </main>
    )
}

export default Main;