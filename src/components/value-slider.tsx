'use client';

import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react"
import 'swiper/css';

type SlideCard = {
  image: string;
  title: string;
  description: string;
  linkText: string;
  link: string;
}

export const ValueSlider = () => {
  const slides: SlideCard[] = [
    {
      title: "Enhance Your Operations",
      description: "Forget about payouts to your drivers and with our daily payments your driver partners will be happier than before to serve you better.",
      image: "home/slider/value-slider-1.png",
      linkText: "Read More",
      link: "#"
    },
    {
      title: "Plug & Play Solution",
      description: "Unleash the power of JEETH in few simple steps. No hefty documentation and 100% Online.",
      image: "home/slider/value-slider-2.png",
      linkText: "Get in Touch",
      link: "#"
    },
    {
      title: "Always available Invntory",
      description: "With our marketplace you dont need to worry about driver attrition, or new business opportunities etc. make a campaign and source unlimited drivers.",
      image: "home/slider/value-slider-3.png",
      linkText: "Read More",
      link: "#"
    },
    {
      title: "Enhance Your Operations",
      description: "Forget about payouts to your drivers and with our daily payments your driver partners will be happier than before to serve you better.",
      image: "home/slider/value-slider-1.png",
      linkText: "Read More",
      link: "#"
    },
    {
      title: "Plug & Play Solution",
      description: "Unleash the power of JEETH in few simple steps. No hefty documentation and 100% Online.",
      image: "home/slider/value-slider-2.png",
      linkText: "Get in Touch",
      link: "#"
    },
    {
      title: "Always available Invntory",
      description: "With our marketplace you dont need to worry about driver attrition, or new business opportunities etc. make a campaign and source unlimited drivers.",
      image: "home/slider/value-slider-3.png",
      linkText: "Read More",
      link: "#"
    },
  ];

  return (
    <div className="my-8 py-8">
      <Swiper
        spaceBetween={0}
        slidesPerView={window.innerWidth > 768 ? 3 : 1}
        draggable={true}
        loop={true}
        autoplay= {{
          delay: 1000,
          pauseOnMouseEnter: true,
        }}
        centeredSlides={true}
        grabCursor={true}
        wrapperClass="flex items-center"
        className="p-8"
      >{
          slides.map((slide) => (
            <SwiperSlide key={slide.title}>
              <SlideCard data={slide} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export const SlideCard = ({ data }: { data: SlideCard }) => {

  const swiperSlide = useSwiperSlide();

  return (    
    <div className={`rounded-2xl p-12 border ${swiperSlide.isActive ? 'shadow-md border-primary bg-white w-100' : 'bg-slate-50'}`}>
      <img className={`m-auto transition-[width] duration-300 ${swiperSlide.isActive ? 'w-[250px]' : 'w-[180px]'}`} src={data.image} alt={data.title} />
      <h4 className={`${swiperSlide.isActive ? 'text-primary' : 'text-secondary'} text-xl font-bold my-4`}>{data.title}</h4>
      <p className="text-sm font-light mb-4">{data.description}</p>
      <a href={data.link} className="mt-4 w-[fit-content] bg-secondary text-white text-lg font-semibold py-2 px-6 rounded-full hover:text-secondary hover:bg-primary hover:outline hover:outline-secondary transition-all">
        {data.linkText}
      </a>
    </div>
  )
}