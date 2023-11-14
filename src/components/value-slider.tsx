'use client';

import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react"
import 'swiper/css';
import { ContactFormOpenButton } from "./ContactFormOpenButton";

type SlideCard = {
  image: string;
  title: string;
  description: string;
}

export const ValueSlider = () => {
  const slides: SlideCard[] = [
    {
      title: "Enhance Your Operations",
      description: "Let our Technology suite automate back office operations and let your team focus on what matters the most.",
      image: "home/slider/value-slider-1.png",
    },
    {
      title: "Plug & Play Solution",
      description: "Unleash the power of JEETH in few simple steps. No hefty documentation and 100% Online.",
      image: "home/slider/value-slider-2.png",
    },
    {
      title: "Always available Inventory",
      description: "Run a sourcing campaign on our marketplace to seemlessly hire verified driver partners as and when required.",
      image: "home/slider/value-slider-3.png",
    },
    {
      title: "Enhance Your Operations",
      description: "Let our Technology suite automate back office operations and let your team focus on what matters the most.",
      image: "home/slider/value-slider-1.png",
    },
    {
      title: "Plug & Play Solution",
      description: "Unleash the power of JEETH in few simple steps. No hefty documentation and 100% Online.",
      image: "home/slider/value-slider-2.png",
    },
    {
      title: "Always available Inventory",
      description: "Run a sourcing campaign on our marketplace to seemlessly hire verified driver partners as and when required.",
      image: "home/slider/value-slider-3.png",
    },
  ];

  const isBrowser = () => typeof window !== "undefined"

  return (
    <div className="mt-8">
      <Swiper
        spaceBetween={0}
        slidesPerView={isBrowser() && window.innerWidth > 768 ? 3 : 1}
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
    <div className={`rounded-2xl p-12 border ${swiperSlide.isActive ? 'shadow-md border-primary bg-white w-100' : 'bg-slate-50'} text-center`}>
      <img className={`m-auto transition-[width] duration-300 ${swiperSlide.isActive ? 'w-[250px]' : 'w-[180px]'}`} src={data.image} alt={data.title} />
      <h4 className={`${swiperSlide.isActive ? 'text-primary' : 'text-secondary'} text-xl font-bold my-4`}>{data.title}</h4>
      <p className="text-sm font-light mb-4">{data.description}</p>
      <ContactFormOpenButton text="Contact Now" className="mt-4 w-[fit-content] bg-secondary text-white text-lg font-semibold py-2 px-6 rounded-full hover:text-white hover:bg-primary transition-all" />
    </div>
  )
}