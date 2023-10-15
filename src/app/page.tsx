import { ClientListing } from "../components/client-listing";
import { ValueSlider } from "../components/value-slider";

export default function HomePage() {
  return (
    <main className="">
      
      <section className="p-4 md:p-0 mb-8 text-white bg-primary">
        <div className="container mx-auto grid md:grid-cols-2">
          <div className="flex flex-col py-8 md:py-16">
            <h2 className="mb-4 font-thin text-3xl">Are you a driver?</h2>
            <h3 className="mb-6 font-bold text-4xl">Access our marketplace with 1000's of ETS Vendors to work with.</h3>

            <p className="font-extralight text-xl">100% transparency on the pricing and business model.</p>
            <a href="#" className="mt-8 w-[fit-content] bg-secondary text-white text-lg font-semibold py-2 px-6 rounded-full hover:text-secondary hover:bg-primary hover:outline hover:outline-secondary transition-all">
              Download Now
            </a>
          </div>
          <div className="md:block hidden relative">
            <img className="absolute left-0 bottom-0" src="home/car.png" alt="" />
          </div>
        </div>
      </section>

      {/* <section className="relative py-10">
        <img className="absolute translate-x-0 translate-y-[-70%]" src="home/wave.svg" alt="" />
      </section> */}

      <section className="p-4 md:p-0 mb-8 container mx-auto z-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <img className="md:block hidden border rounded-3xl" src="home/road.png" alt="ETS Vendors" />
          <div className="w-full">
            <h3 className="text-primary text-2xl font-bold">Hello ETS Vendors!</h3>
            <div className="bg-primary w-[48px] h-[4px] rounded-lg"></div>

            <ul className="pl-4 my-8 w-full md:w-3/4 list-disc text-sm font-light flex flex-col justify-between">
              <li className="mb-2">Empower your Driver Partners with immediate access to their earnings through JEETH. </li>
              <li className="mb-2">Onboard driver partners to your new business opportunities with hassle free documentation and induction process.</li>
              <li className="mb-0">List your onboarding campaigns with attractive fares & clear business model to attract and onboard driver partners from our massive inventory.</li>
            </ul>
            <a href="#" className="mt-0 w-[fit-content] bg-secondary text-white text-lg font-semibold py-2 px-6 rounded-full hover:text-secondary hover:bg-primary hover:outline hover:outline-secondary transition-all">
              Try Demo
            </a>
          </div>
        </div>
        
      </section>

      <section className="p-4 md:p-0 mb-8 text-white bg-primary">
        <div className="container mx-auto py-16">
          <ClientListing/>
        </div>
      </section>

      <section className="p-4 md:p-0 mb-8 container mx-auto z-1">
        <h3 className="text-primary text-2xl font-bold text-center">The Value We Add</h3>
        <div className="bg-primary my-4 w-[48px] h-[4px] rounded-lg m-auto"></div>
        <p className="text-center">Get the best out of our product in premium.</p>
        <ValueSlider/>
      </section>

    </main>
  )
}
