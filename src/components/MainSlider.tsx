import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import mainBanner from "../assets/banners/Green-Remodeling-in-Process.jpeg";

const MainSlider: React.FC = () => {
    const [progress, setProgress] = useState(0);
    const SLIDE_DURATION = 5000; // 5 seconds per slide
    const swiperRef = useRef<any>(null);  // Reference to the Swiper instance

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                const newProgress = prev + 100 / (SLIDE_DURATION / 100);
                if (newProgress >= 100) {
                    // When progress reaches 100, change the slide
                    if (swiperRef.current) {
                        swiperRef.current.swiper.slideNext(); // Change slide
                    }
                    return 0; // Reset progress to 0
                }
                return newProgress;
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Swiper
                ref={swiperRef} // Attach the reference to Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper relative"
                onSlideChange={() => setProgress(0)} // Reset progress on slide change
            >
                <div className="circle-timer">
                    <svg className="circle">
                        <circle cx="25" cy="25" r="30" />
                        <circle
                            cx="25"
                            cy="25"
                            r="30"
                            style={{
                                strokeDasharray: '150.8',
                                strokeDashoffset: `${150.8 - (150.8 * progress) / 100}`,
                                transition: 'stroke-dashoffset 0.1s ease',
                            }}
                        />
                    </svg>
                    <span className='absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>
                        {Math.floor(progress / 20)}
                    </span>
                </div>
                {[0, 1, 2, 3, 4].map((elem) => (
                    <SwiperSlide key={elem}>
                        <div className='w-full flex justify-end p-7 bg-center bg-no-repeat h-[70dvh] bg-cover' style={{ backgroundImage: `url(${mainBanner})` }}>
                            <div className='bg-white rounded-ss-[100px] rounded-ee-[100px] shadow-2xl shadow-main-color h-fit xl:w-1/2 '>
                                <p className='m-10'>
                                    ლორემ იპსუმ როკომ დაგვიანებულ მენახოს დაჰკარგვიათ მარნის მოგდევს ყოყმანობდა...
                                    ლორემ იპსუმ როკომ დაგვიანებულ მენახოს დაჰკარგვიათ მარნის მოგდევს ყოყმანობდა...
                                    ლორემ იპსუმ როკომ დაგვიანებულ მენახოს დაჰკარგვიათ მარნის მოგდევს ყოყმანობდა...

                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default MainSlider;
