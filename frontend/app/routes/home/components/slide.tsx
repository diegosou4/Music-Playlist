
import React from "react";


// @ts-ignore
import Slider from "react-slick";
// @ts-ignore
import "slick-carousel/slick/slick.css";
// @ts-ignore
import "slick-carousel/slick/slick-theme.css";
import { ITrack} from '../../../../types/Tracks';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


interface SlideProps {
    recentsMusics: ITrack[] | ITrack;
    setCurrentMusicId: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function Slide({ recentsMusics, setCurrentMusicId }: SlideProps) {

    if(!recentsMusics) return null;
    let sliderRef = React.useRef<null | any>(null);


     var settings = {
            arrows: false,
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 9,
            slidesToScroll: 1,
            responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 5,
                slidesToScroll: 3,
                },
            },
            {
                breakpoint: 800,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                },
            },
            ]
  };

        const next = () => {
                if (!sliderRef.current) return;
                if (sliderRef.current.slickNext) sliderRef.current.slickNext();
        };
        const previous = () => {
            if (!sliderRef.current) return;
            if (sliderRef.current.slickPrev) sliderRef.current.slickPrev();
        };

    return(
        <>
        <div className="flex flex-row mt-5 mb-5 gap-2 justify-end w-11/12">
            <button className="bg-[#212124] text-gray-400 cursor-pointer p-0.75 rounded-full border-1 border-[#4C4E54]" onClick={previous}><IoIosArrowBack className="text-xl hover:text-white" /></button>
            <button className="bg-[#212124] text-gray-400 cursor-pointer p-0.75 rounded-full border-1 border-[#4C4E54]" onClick={next}><IoIosArrowForward className="text-xl hover:text-white" /></button>
        </div>
        <div className="flex flex-col w-full">
          <div className="slider-container  justify-center items-center *:cursor-pointer ">
            <Slider
                        ref={sliderRef}
                    {...settings}>
                       
                 {Array.isArray(recentsMusics) ? (
                recentsMusics.map((music) => (
           <div
                key={music.id}
                className="p-2 max-w-[150px] flex flex-col items-center"
                onClick={() => setCurrentMusicId(music.id)}
                >
                <div className="w-[150px] h-[150px] mb-4 overflow-hidden rounded-xl shadow-lg transform transition hover:scale-105">
                    <img
                    src={`http://localhost:3000/media/${music.album.image}`}
                    alt="Album Cover"
                    className="w-full h-full object-cover"
                    />
                </div>
                <div className="overflow-hidden text-center w-full">
                    <h2 className="text-white text-sm whitespace-nowrap overflow-hidden block hover:animate-marquee">
                    {music.name}
                    </h2>
                </div>
                <p className="text-gray-400 text-xs truncate text-center">{music.artist.name}</p>
                </div>

                    ))
                ) : <></>}

             </Slider>

        </div>
        </div>
        </>
    )

}