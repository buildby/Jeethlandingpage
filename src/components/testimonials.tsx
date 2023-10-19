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
    <div className="bg-white rounded-md p-2 w-[300px]">
      <p>{data.name}</p>
      <p>{data.rating}</p>
      <p>{data.title}</p>
      <p>{data.description}</p>
    </div>
  )
}