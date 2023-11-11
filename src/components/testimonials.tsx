type TestimonialCard = {
  name: string;
  size: string;
  rating: number;
  image: string;
  title: string;
  description: string;
}

const testimonials: TestimonialCard[] = [
  { name: "Arjun Sharma", size: "w-[100px]", rating: 5, image: "home/testimonials/user-1.jiff", title: "Exceptional solution", description: "Gratitude for the daily payments, it's been a game-changer for me." },
  { name: "Rajesh Patel", size: "w-[60px]", rating: 4, image: "home/testimonials/user-2.jiff", title: "Outstanding resolution", description: "Heartfelt thanks for the consistent daily support." },
  { name: "Sanjay Verma", size: "w-[80px]", rating: 4, image: "home/testimonials/user-3.jiff", title: "Impressive solution", description: "Thank you for making my daily earnings management seamless and effective." },
  { name: "Anand Mishra", size: "w-[98px]", rating: 5, image: "home/testimonials/user-4.jiff", title: "Remarkable solution", description: "I appreciate the daily payments, it has made a significant impact on my financial stability." },
  { name: "Amit Kapoor", size: "w-[40px]", rating: 5, image: "home/testimonials/user-5.jiff", title: "Excellent resolution", description: "Managing my earnings has become much easier, all thanks to this solution." },
  { name: "Harish Singh", size: "w-[70px]", rating: 5, image: "home/testimonials/user-6.jiff", title: "Fantastic solution", description: "Grateful for the daily payments that have positively influenced my financial situation." },
  { name: "Rakesh Gupta", size: "w-[40px]", rating: 5, image: "home/testimonials/user-7.jiff", title: "Superb resolution", description: "This solution has truly transformed the way I handle my earnings on a daily basis." },
  { name: "Prakash Reddy", size: "w-[90px]", rating: 5, image: "home/testimonials/user-8.jiff", title: "Exceptional solution", description: "Heartening to experience the positive impact on my daily finances. Thank you!" },
  { name: "Vinod Kumar", size: "w-[60px]", rating: 5, image: "home/testimonials/user-9.jiff", title: "Wonderful resolution", description: "The daily payments have been a blessing, and I'm genuinely thankful for this solution." },
  { name: "Manoj Tiwari", size: "w-[60px]", rating: 5, image: "home/testimonials/user-10.jiff", title: "Brilliant solution", description: "Managing my earnings has become a breeze, and the daily payments are much appreciated." },
  { name: "Naveen Choudhary", size: "w-[90px]", rating: 5, image: "home/testimonials/user-11.jiff", title: "Effective resolution", description: "Thankful for the daily support that has made a significant difference in my financial routine." },
  { name: "Arvind Yadav", size: "w-[50px]", rating: 4, image: "home/testimonials/user-13.jiff", title: "Terrific solution", description: "I am sincerely grateful for the consistent daily payments, making life much more manageable." },
  { name: "Sunil Raj", size: "w-[80px]", rating: 5, image: "home/testimonials/user-12.jiff", title: "Marvelous resolution", description: "This solution has made a positive impact on my financial stability, and I'm thankful for the daily payments." },
  { name: "Vivek Sharma", size: "w-[90px]", rating: 5, image: "home/testimonials/user-14.jiff", title: "Exceptional solution", description: "Heartfelt gratitude for the daily payments, which have been a source of great support in managing my earnings effectively." },
]

export const Testimonials = () => {

  return (
    <div className="flex flex-wrap items-center justify-center my-8 gap-y-12 gap-x-12 md:gap-x-24">

      {
        testimonials.map((t, i) => {
          return (
            <div className={`${t.size} group/testimonial hover:cursor-pointer relative`} key={t.image}>
              <img className="rounded-full object-cover aspect-square" src={t.image} alt={t.name}/>
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