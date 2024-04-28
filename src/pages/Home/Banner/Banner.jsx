import { useEffect } from 'react';
import video1 from '../../../assets/mixkit-artist-mixing-paint-on-a-palette-41611-medium.mp4';
import video2 from '../../../assets/video-2.mp4';
import video3 from '../../../assets/video-3.mp4';

const Banner = () => {
    useEffect(() => {
        const videos = document.querySelectorAll('.carousel-item video');
        videos.forEach(video => {
            video.play().catch(error => {
                console.error('Autoplay was prevented:', error);
            });
        });
    }, []);

    return (
        <div className='w-full container'>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <video src={video1} className='w-full lg:h-[710px]' loop muted></video>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className=" text-[#f17941]">❮</a>
                        <a href="#slide2" className=" text-[#f17941]">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <video src={video2} className='w-full md:h-[705px]' loop muted></video>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className=" text-[#f17941]">❮</a>
                        <a href="#slide3" className=" text-[#f17941]">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <video src={video3} className='w-full md:h-[705px]' loop muted></video>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className=" text-[#f17941]">❮</a>
                        <a href="#slide1" className=" text-[#f17941]">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
