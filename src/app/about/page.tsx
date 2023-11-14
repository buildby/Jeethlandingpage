import { Button } from "../../components/Button";
import { ContactFormOpenButton } from "../../components/ContactFormOpenButton";
import { NewsLetter } from "../../components/news-letter";

export default function AboutPage() {
  return (
    <main className="">

      <section className="mb-0 text-white bg-primary relative">
        <div className="p-4 md:p-0 container mx-auto grid md:grid-cols-2 overflow-hidden">
          <div className="flex flex-col py-8 md:py-16 order-2 md:order-1">
            <h2 className="mb-4 font-thin text-3xl">Empowering India's Blue Collar Workforce:</h2>
            <h3 className="mb-6 font-bold text-3xl">Bridging Opportunities, Transforming Lives</h3>

            <ContactFormOpenButton text="Try Demo" className="mt-8" />
          </div>
          <div className="order-1 md:order-2">
            <img className="mt-8 ml-auto" src="about/atf.svg" alt="" />
          </div>
        </div>

        <div className="min-h-[20px] md:min-h-[100px]"></div>
        <div className="w-full absolute bottom-0">
          <img className="w-full" src="home/wave.svg" alt="" />
        </div>
      </section>

      <section className="">
        <div className="p-4 md:p-0 container mx-auto md:text-center">

          <div className="md:w-5/6 mx-auto">
            <div className="mx-auto grid items-center">
              <h3 className="text-primary text-2xl font-bold">Introduction</h3>
              <div className="bg-primary my-4 w-[48px] h-[4px] rounded-lg m-auto"></div>
            </div>

            <p className="font-light mt-8 text-secondary leading-10">
              At <b className="font-semibold italic">Jeeth</b>, we are on a mission to revolutionize the lives of India's blue-collar workforce, the unsung heroes who power the nation's industries. Our vision is to bridge the gap between opportunities and skilled labor, creating a vibrant ecosystem that benefits both businesses and workers. With a deep understanding of the challenges faced by the backbone of our economy, we have crafted a comprehensive marketplace platform that addresses their most pressing issues.
            </p>

            <p className="font-light mt-8 text-secondary leading-10">
              <b className="font-semibold italic">Jeeth</b> is more than just a marketplace; it is a lifeline for the blue-collar workforce in India. We bring together businesses and skilled workers, fostering a seamless connection that ensures steady employment and financial stability. In a rapidly evolving economy, our platform stands as a beacon of hope, offering immediate access to employment opportunities and empowering workers to take charge of their finances.
            </p>

          </div>
        </div>

      </section>

      <section className="pb-8 text-white bg-primary">
        <div className="relative">
          <div className="w-full">
            <img className="w-full" src="home/wave-inverted.svg" alt="" />
          </div>
        </div>
        <div className="mt-8 p-4 md:p-0 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <img className="rounded-3xl" src="about/vision.png" alt="Jeeth Vision" />
          <div className="w-full md:mt-8">
            <h3 className="text-white text-2xl font-bold">Vision</h3>
            <div className="bg-white mt-4 w-[48px] h-[4px] rounded-lg"></div>

            <p className="my-8 w-full md:w-3/4 font-light leading-8">
              Our vision is to empower every blue-collar worker in India with access to dignified employment, financial literacy, and a secure future. We envision a society where every hardworking individual, regardless of their background, has the tools and knowledge to build a stable and prosperous life for themselves and their families.
            </p>

          </div>
        </div>
      </section>

      <section className="p-4 md:p-0 mt-8 container mx-auto">

        <div className="mt-8 p-4 md:p-0 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <img className="rounded-3xl md:order-2" src="about/mission.png" alt="Jeeth Vision" />
          <div className="w-full md:mt-8 md:order-1">
            <h3 className="text-primary text-2xl font-bold">Mission</h3>
            <div className="bg-primary mt-4 w-[48px] h-[4px] rounded-lg"></div>

            <p className="my-8 w-full font-light leading-8">
              At <b className="font-semibold italic">Jeeth</b>, our mission is twofold.
              <b className="font-semibold italic">Firstly</b>, we are dedicated to providing businesses with a reliable, cost-effective, and efficient way to source skilled labor. By connecting them directly with capable workers through our intuitive platform, we facilitate seamless collaborations that fuel productivity and growth.
              <br /><br />
              <b className="font-semibold italic">Secondly</b>, we are committed to solving the pressing financial challenges faced by blue-collar workers. We partner with leading financial institutions, including NBFCs and Banks, to offer a wide range of financial services. Through immediate payouts based on their earnings data, coupled with financial literacy initiatives, we empower workers to achieve financial freedom. Our mission is to enhance their lives by ensuring they have access to their hard-earned money, enabling them to plan for a secure future.
            </p>

          </div>
        </div>

      </section>

      <section className="mx-auto bg-primary relative">
        <div className="relative">
          <div className="w-full">
            <img className="w-full" src="home/wave-inverted.svg" alt="" />
          </div>
        </div>
        <div className="p-4 md:p-12 container mx-auto">
          <h3 className="text-white text-2xl font-bold text-center mt-4 uppercase">The Value We Add to the Nation</h3>
          <div className="bg-white my-4 w-[48px] h-[4px] rounded-lg m-auto"></div>
          <p className="text-white m-auto md:text-center md:w-5/6 my-8 leading-9 font-light"><b className="font-semibold italic">Jeeth</b>, is more than a platform; we are architects of change. By empowering the blue-collar workforce, we contribute significantly to the Indian economy. We facilitate financial stability for workers, reduce unemployment, and enhance the efficiency of businesses, especially MSMEs. By addressing the immediate needs of our nation's workforce, we are building a stronger, more resilient India, one opportunity at a time.
          Join us on this transformative journey as we redefine employment, financial stability, and empowerment for India's blue-collar workers. Together, let's build a future where every hardworking individual thrives and prospers.</p>
          <img className="mx-auto mb-16" src="about/ye-jeeth-bharat-ki.png" alt="Ye Jeeth Bharat Ki!" />
        </div>

        <div className="min-h-[20px] md:min-h-[100px]"></div>
        <div className="w-full absolute bottom-0">
          <img className="w-full" src="home/wave.svg" alt="" />
        </div>
      </section>

      <section className="mx-auto">
        <div className="p-4 md:p-12 md:pt-0  container mx-auto">
          <h3 className="text-primary text-2xl font-bold text-center">Subscribe our newsletter</h3>
          <div className="bg-primary my-4 w-[48px] h-[4px] rounded-lg m-auto"></div>
          <p className="text-secondary m-auto text-center md:w-1/2">Subscribe to our newsletter for daily/weekly<br />update of our products and services.</p>
          <NewsLetter />
        </div>
      </section>

    </main>
  )
}
