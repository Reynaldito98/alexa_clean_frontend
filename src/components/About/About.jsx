import './About.css';
import people from "../../images/appointment.jpg";

function About() {
    return (
        <section>
            <img src={people} className="about__image" alt="company runners"></img>
        </section>
    )
}

export default About;