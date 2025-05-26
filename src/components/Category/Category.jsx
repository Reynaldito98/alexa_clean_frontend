import './Category.css';
import { useState } from 'react';

function Category({item}) {
    const [isVisible, setIsVisible] = useState(false);

    const handleContentVisible = () => {
        setIsVisible(!isVisible);
    }

    return (
        <li className="category"> 
            <div className="category__heading">
                <h1 className="category__title">{item.title}</h1>
                <img src="https://www.freeiconspng.com/uploads/white-down-arrow-png-2.png" alt="down arrow" className={`category__arrow ${isVisible?"category__arrow_rotate":""}`} onClick={handleContentVisible}></img>
            </div>

            <div className={`category__content ${isVisible?'category__content_visible':''}`}>
                {
                    item.description.map((item, index) => {
                        return (
                            <p className="category__description" key={index}>{item}</p>
                        )
                    })
                }
            </div>
        </li>
    )
}

export default Category;