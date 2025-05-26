import './InfoCenter.css';
import Category from '../Category/Category';

function InfoCenter() {
    const categories = [
        {
            title: 'General Information',
            description: ["Our offices are open 24 hours of the day from Monday to Saturday. ", "Services: ", "We offer three services: Lawn care, snow removal and power wash. If you need to know about our rates and prices, you can visit our Howme Page and scroll down to Get a Quote section.", "You can request a service either by scrolling down to the Book an Appointment section in the Home Page or calling us directly to this number: +1 (913) 636-9238. We just need some basic personal information like the name, email, phone number and the day you would like us to work. You may also enter details about the service you are requesting. ", "In L & S, we are at your service. Thank you for considering up. It will be a pleasure to work with you. "]
        },
        {
            title: 'Lawn Care',
            description: ["Lawn care refers to the practice of maintaining and improving the health, appearance, and functionality of grassy areas in residential, commercial, and public spaces. It involves a combination of routine maintenance, soil management, pest control, and seasonal treatments to ensure a lush, green, and well-maintained lawn.", "Services: ", "Mowing & Trimming - Regular cutting of grass to maintain an even height and promote healthy growth. Edging and trimming enhance the lawn's appearance.", "Watering - Proper irrigation ensures grass receives the necessary moisture for growth without overwatering, which can lead to disease.", "Fertilization - Application of nutrients like nitrogen, phosphorus, and potassium to promote strong roots, rich color, and dense growth.", "Weed Control - Preventing and removing unwanted plants that compete with grass for nutrients and space using manual removal or herbicides.", "Aeration & Dethatching - Loosening compacted soil and removing layers of dead grass (thatch) to improve air, water, and nutrient absorption.", "Pest & Disease Management - Identifying and treating lawn pests, fungi, and diseases that can damage or weaken the grass.", "Seeding & Sod Installation - Planting new grass seeds or laying sod to fill in bare patches and establish new lawns.", "Seasonal Lawn Care - Adjusting lawn care techniques based on the season, such as winterization, spring revival, summer hydration, and fall fertilization."]
        },
        {
            title: 'Power Wash',
            description: ["The process of using a high-pressure water spray to remove dirt, grime, mold, mildew, algae, and other debris from various surfaces. It is commonly used for cleaning exterior surfaces of buildings, driveways, sidewalks, decks, patios, and vehicles.", "Services: ", "Power washers use a motorized pump to pressurize water, which is then sprayed through a nozzle at high velocity. The pressure can be adjusted depending on the type of surface being cleaned to avoid damage.", "Driveways & Sidewalks - Removes oil stains, dirt, and tire marks to improve curb appeal.", "Home Exteriors (Siding & Brick) - Cleans mold, mildew, and accumulated dust to restore the original appearance.", "Decks & Patios - Eliminates algae and grime to prevent slippery surfaces and prolong wood or concrete life.", "Fences - Restores wooden or vinyl fences by removing dirt and discoloration.", "Roofs & Gutters - Clears moss, algae, and debris that can cause long-term damage.", "Vehicles & Equipment - Used to wash trucks, boats, and construction machinery for maintenance."]
        },
        {
            title: 'Snow Removal',
            description: ["Snow removal is the process of clearing snow and ice from driveways, sidewalks, roads, parking lots, and other surfaces to ensure safety and accessibility during winter months. It is an essential service for residential, commercial, and municipal properties in areas that experience heavy snowfall.", "Services: ", "Shoveling - Manually clearing snow using a shovel, often for small areas like walkways, steps, and driveways.", "Snow Blowing - Using a snow blower to remove larger amounts of snow more efficiently than shoveling.", "Plowing - Attaching a snowplow to a truck or ATV to push snow off roads, driveways, and large parking areas.", "Salting & Sanding - Applying salt, sand, or de-icing chemicals to prevent ice buildup and improve traction on slippery surfaces.", "Roof Snow Removal - Clearing accumulated snow from rooftops to prevent structural damage and ice dams."]
        }
    ]

    return (
        <main className="info-center">
            <h1 className="info-center__title">Information Center</h1>
            <hr></hr>

            <ul className="info-center__list">
                {
                    categories.map((item, index) => {
                        return (
                            <Category key={index} item={item}></Category>
                        )
                    })
                }
            </ul>
        </main>
    )
}

export default InfoCenter;