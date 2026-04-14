import { useEffect, useState } from "react";
import './ImageCarousel.css';
import { imageList } from "./ImageData";
import { preload } from "react-dom";

function ImageCarousel() {
    // for(var x = 0; x < imageList.length; x++){
    //     preload(imageList[x].url, {
    //         as: "image",
    //         imageSrcSet: imageList[x].url
    //     });
    // }
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [prevImageIndex, setPrevImageIndex] = useState(imageList.length);

    // change the current image when the "previous image" button is pressed
    const handlePreviousClick = () => {
        setPrevImageIndex(currentImageIndex);
        setCurrentImageIndex(currentImageIndex === 0 ? imageList.length - 1 : currentImageIndex - 1);
    }

    // change the current image when the "next image" button is pressed
    const handleNextClick = () => {
        setPrevImageIndex(currentImageIndex);
        setCurrentImageIndex((currentImageIndex + 1) % imageList.length);
    }

    function SetClassname(imageIndex: number, index: number) {
        switch (imageIndex) {
            case index:
                return "fadeIn";
            case prevImageIndex:
                return "fadeOut";
            default:
                return "hidden";
        }
    }

    function PreloadImage(imageUrl: string){
        preload(imageUrl, {as: "image"});
        return imageUrl;
    }

    // auto-timer to passively rotate through images after the "next image" button is pressed
    useEffect(() => {
        const timer = setTimeout(() => {
            handleNextClick();
        }, 6000);
        return () => clearTimeout(timer);
    }, [currentImageIndex]);

    return (
        <div id="image-container">
            <button className="prev-button" onClick={handlePreviousClick}>&lt;</button>
            {imageList.map((image, index) => (
                <img
                    src={PreloadImage(image.url)}
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