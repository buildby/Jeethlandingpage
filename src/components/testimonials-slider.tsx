'use client';

import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react"
import 'swiper/css';

type SlideCard = {
  image: string;
  title: string;
  description: string;
  companyName: string;
}

export const TestimonialsSlider = () => {
  const slides: SlideCard[] = [
    {
      title: "Mr. Kiran Kumar",
      description: "Jeeth changed the way we operate the business, we have seen dramatic change in our numbers. Kudos Team!",
      image: "solutions/testimonials/client-testimonial-1.png",
      companyName: "Srinivasa Logistics",
    },
    {
      title: "Mr. Ranjeeth Reddy",
      description: "My business performance has been increased like never before. Thanks Team Jeeth!",
      image: "solutions/testimonials/client-testimonial-1.png",
      companyName: "AU Logistics",
    },
    {
      title: "Mr. Vikas",
      description: "We are able to streamline our business operations using Jeeth Dashboard.",
      image: "solutions/testimonials/client-testimonial-1.png",
      companyName: "Vennela Logistics",
    },
    {
      title: "Mr. Kiran Kumar",
      description: "Jeeth changed the way we operate the business, we have seen dramatic change in our numbers. Kudos Team!",
      image: "solutions/app-mockup.png",
      companyName: "Srinivasa Logistics",
    },
    {
      title: "Mr. Ranjeeth Reddy",
      description: "My business performance has been increased like never before. Thanks Team Jeeth!",
      image: "solutions/testimonials/client-testimonial-1.png",
      companyName: "AU Logistics",
    },
    {
      title: "Mr. Vikas",
      description: "We are able to streamline our business operations using Jeeth Dashboard.",
      image: "solutions/testimonials/client-testimonial-1.png",
      companyName: "Vennela Logistics",
    },
  ];

  const isBrowser = () => typeof window !== "undefined"

  return (
    <div className="my-8">
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

const SlideCard = ({ data }: { data: SlideCard }) => {

  const swiperSlide = useSwiperSlide();

  return (    
    <div className={`rounded-2xl p-12 border ${swiperSlide.isActive ? 'shadow-md border-primary bg-white w-100' : 'bg-slate-50'}`}>
      <img className={`m-auto transition-[width]  border-4 border-primary object-cover aspect-square rounded-full duration-300 ${swiperSlide.isActive ? 'w-[250px]' : 'w-[180px]'}`} src={data.image} alt={data.title} />
      <h4 className={`${swiperSlide.isActive ? 'text-primary' : 'text-secondary'} text-center text-xl font-bold my-4`}>{data.title}</h4>
      <p className="text-sm text-center font-light mb-4">{data.description}</p>
      <p className="mt-4 text-red-500 text-sm text-center font-semibold py-2">
        {data.companyName}
      </p>
    </div>
  )
}