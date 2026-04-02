import { useEffect, useState } from "react";
import './ImageCarousel.css';
import {imageList} from "./ImageData";

function ImageCarousel() {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // change the current image when the "previous image" button is pressed
    const handlePreviousClick = () => {
        setCurrentImageIndex(currentImageIndex === 0 ? imageList.length - 1 : currentImageIndex - 1);
    }

    // change the current image when the "next image" button is pressed
    const handleNextClick = () => {
        setCurrentImageIndex((currentImageIndex + 1) % imageList.length);
    }

    function SetClassname(currentImageIndex: number, index: number){
        switch(currentImageIndex){
            case index: 
                return "slideIn";
            case (index + 1) % imageList.length: 
                return "slideOut";
            default: 
                return "hidden";
        }
    }

    // auto-timer to passively rotate through images after the "next image" button is pressed
    useEffect(() => {
        const timer = setTimeout(() => {
            handleNextClick();
        }, 10000);
        return () => clearTimeout(timer);
    }, [currentImageIndex]);

    return (
        <div id="image-container">
            <button className="prev-button" onClick={handlePreviousClick}>&lt;</button>
            {imageList.map((image, index) => (
                <img
                    src={image.url}
                    alt="Previous Projects & Works"
                    className={SetClassname(currentImageIndex, index)}
                    key={image.id}
                />
            ))}
            <button className="next-button" onClick={handleNextClick}>&gt;</button>
        </div>
    )

}

export default ImageCarousel;