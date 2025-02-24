import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const ImageSlider = () => {
    const images = [
      "https://i.ibb.co.com/fMC5dKc/pexels-frans-van-heerden-201846-1438832.jpg",
      "https://i.ibb.co.com/9qh1Yqh/pexels-binyaminmellish-1396132.jpg",
      "https://i.ibb.co.com/7J3V69h/pexels-alex-staudinger-829197-1732414.jpg",
      "https://i.ibb.co.com/bgKjRtN/pexels-pixabay-210617.jpg",
    ];
    const [current, setCurrent] = useState(0);


    const nextImage = () => {
        setCurrent((next) => (next + 1) % images.length)
    } 
    const prevImage = () => {
        setCurrent((prev) => (prev -1 + images.length)% images.length)
    }
    useEffect(() => {
        const looping = setInterval(() => nextImage(), 3000)
        return () => clearInterval(looping)
    },[])
    
    return (
      <div className="flex items-center gap-3 ">
        <button onClick={prevImage} className="border-solid">
            <FaAngleLeft/>
        </button>
        <div>
          <img className="rounded-2xl" src={images[current]} />
        </div>
        <button onClick={nextImage} className="">
          <FaAngleRight/>
        </button>
      </div>
    );
};

export default ImageSlider;