import QuoteCard from '../QuoteCard/QuoteCard';
import home from '../../images/home.jpg';
import office from '../../images/office.jpg';
import postConstruction from '../../images/post-construction.jpg';
import shop from '../../images/shop.jpg';
import space from '../../images/space.jpg';
import floor from '../../images/floor.jpg';

import './Quote.css';

function Quote() {
    const services = [
        {
            name: 'Residential Cleaning - Houses, Apartment and Condominiums',
            source: home,
            description: `Basic and Regular Maintenance\nDeep Clean\nHeavy-Duty Deep Clean\nPre-Moving Clean\nPost-Moving Clean\nGreen Clean`
        }, 
        {
            name: 'Office and Commercial Cleaning',
            source: office,
            description: `Office Clean\nStore Clean\nMedical Clinic Clean\nCorporation Clean\n`
        }, 
        {
            name: 'Post-construction Cleaning',
            source: postConstruction,
            description: `Interior and exterior deep clean.\nRemoval of debris, dust and paintb stains`
        },
        {
            name: 'Shop and Clean',
            source: shop,
            description: `A market where cleaning products and organizers are sold.`,
            button: true
        }, 
        {
            name: 'Space Organization',
            source: space,
            description: `Classification and depuration\nStorage Optimization\nAesthetic Transformation\nThe goal is to optimize the environment to befunctional, aesthetical and easy to maintain.`
        }, 
        {
            name: 'Floor and Carpet Polishing',
            source: floor,
            description: `Carpet Cleaning\n Joint and Edge Cleaning\nWooden or Lamina Floor Polishing.`
        }
    ]


    return (
        <main className="quote" id="quote">
            <h1 className="quote__heading">Services & Pricing</h1>
            <hr></hr>

            <ul className="quote__list">
               {
                services.map((service, index) => {
                    return (
                        <QuoteCard key={index} service={service}></QuoteCard>
                    )
                })
               }
            </ul>
        </main>
    )
}

export default Quote;