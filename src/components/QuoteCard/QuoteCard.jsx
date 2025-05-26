import './QuoteCard.css';


function QuoteCard({service}) {
    return (
        <li className="quote-card">
            <img src={service.source} className="quote-card__image"/>

            <h2 className="quote-card__title">{service.name}</h2>

            {service.description.split('\n').map((item, index) => {
                return (
                    <p key={index} className="quote-card__description">{item}</p>
                )
            })}

            {
                service.button ? <button className="quote-card__button">Go to store</button> : ''
            }
        </li>
    )
}

export default QuoteCard;