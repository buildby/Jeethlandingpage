type TestimonialCard = {
  name: string;
  size: string;
  rating: number;
  image: string;
  title: string;
  description: string;
}

const testimonials: TestimonialCard[] = [
  { name: "Jane", size: "w-[100px]", rating: 5, image: "home/testimonials/user-1.png", title: "Wonderful service", description: "Good deal and very wonderful service thank you." },
  { name: "Allen", size: "w-[60px]", rating: 4, image: "home/testimonials/user-2.png", title: "Wonderful service", description: "Good deal and very wonderful service thank you." },
  { name: "Dave", size: "w-[80px]", rating: 4, image: "home/testimonials/user-3.png", title: "Wonderful service", description: "Good deal and very wonderful service thank you." },
  { name: "James", size: "w-[98px]", rating: 5, image: "home/testimonials/user-4.png", title: "Wonderful service", description: "Good deal and very wonderful service thank you." },
  { name: "Jimmy", size: "w-[40px]", rating: 5, image: "home/testimonials/user-5.png", title: "Wonderful service", description: "Good deal and very wonderful service thank you." },
  { name: "Jimmy", size: "w-[70px]", rating: 5, image: "home/testimonials/user-6.png", title: "Wonderful service", description: "Good deal and very wonderful service thank you." },
  { name: "Fido", size: "w-[40px]", rating: 5, image: "home/testimonials/user-7.png", title: "Wonderful service", description: "Good deal and very wonderful service thank you." },
  { name: "James", size: "w-[90px]", rating: 5, image: "home/testimonials/user-8.png", title: "Wonderful service", description: "Good deal and very wonderful service thank you." },
  { name: "Jimmy", size: "w-[60px]", rating: 5, image: "home/testimonials/user-9.png", title: "Wonderful service", description: "Good deal and very wonderful service thank you." },
  { name: "James", size: "w-[90px]", rating: 5, image: "home/testimonials/user-11.png", title: "Wonderful service", description: "Good deal and very wonderful service thank you." },
  { name: "Fido", size: "w-[60px]", rating: 5, image: "home/testimonials/user-10.png", title: "Wonderful service", description: "Good deal and very wonderful service thank you." },
  { name: "Oslo", size: "w-[50px]", rating: 4, image: "home/testimonials/user-13.png", title: "Wonderful service", description: "Good deal and very wonderful service thank you." },
  { name: "Jimmy", size: "w-[80px]", rating: 5, image: "home/testimonials/user-12.png", title: "Wonderful service", description: "Good deal and very wonderful service thank you." },
]

export const Testimonials = () => {

  return (
    <div className="flex flex-wrap items-center justify-center my-8 gap-y-6 gap-x-12 md:px-28">

      {
        testimonials.map((t, i) => {
          return (
            <div className={`${t.size} group/testimonial hover:cursor-pointer relative`} key={t.image}>
              <img src={t.image} alt={t.name}/>
              <div className={`hidden group-hover/testimonial:flex z-10 absolute md:translate-y-[-50%] md:translate-x-[20%]
              ${i == 3 ? 'flex' : 'hidden '
              }`}>
                {TestimonialCard(t)}
              </div>
            </div>
          )
        })
      }
    </div>
  )
};

export const TestimonialCard = (data: TestimonialCard) => {
  return (
    <div className="flex items-center p-4">
      <div className="">
        <svg width="15" height="18" viewBox="0 0 30 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.2239 35.0967L1.69396 19.849C0.44762 19.0742 0.455281 17.2533 1.70822 16.4602L26.2382 0.933846C27.5704 0.0906319 29.2935 1.02881 29.2935 2.59734L29.2935 33.3715C29.2935 34.9476 27.5555 35.9244 26.2239 35.0967Z" fill="#fff" stroke="#3B393A" strokeWidth={1}/>
        </svg>
      </div>
      <div className="bg-white bg-opacity-90 rounded-md p-2 min-w-[300px] border border-secondary">
        <p className="text-sm mb-2">{data.name}</p>
        <p className="flex gap-1">
          {Array(data.rating).fill(0).map((_, i) => {
            return (
              <img key={i} src="icons/star-blue.svg" alt="Rating Star" />
            )
          })}
        </p>
        <p className="my-1 text-sm font-semibold">{data.title}</p>
        <p className="text-xs">{data.description}</p>
      </div>
    </div>
  )
}