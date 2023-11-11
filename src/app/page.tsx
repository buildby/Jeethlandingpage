'use client';
import { useState } from "react";
import { Button } from "../components/Button";
import { ClientListing } from "../components/client-listing";
import { NewsLetter } from "../components/news-letter";
import { Testimonials } from "../components/testimonials";
import { ValueSlider } from "../components/value-slider";

export default function HomePage() {
  const [isTryDemoFormOpen, setIsTryDemoFormOpen] = useState(false);
  const openTryDemoForm = () => setIsTryDemoFormOpen(true);
  const closeTryDemoForm = () => setIsTryDemoFormOpen(false);

  return (
    <main className="">

      <section className="mb-0 text-white bg-primary relative">
        <div className="p-4 md:p-0 container mx-auto grid md:grid-cols-2 overflow-hidden">
          <div className="flex flex-col py-8 md:py-16 order-2 md:order-1">
            <h2 className="mb-4 font-thin text-3xl">Are you an Employee Transportation Service provider?</h2>
            <h3 className="mb-6 font-bold text-3xl"><i>Guess what?</i> You've just hit the jackpot!</h3>

            <p className="font-extralight text-xl">We help you revolutionize your transportation game with our cutting-edge technology and financial solutions.</p>
            <Button text="Try Demo" link="#" className="mt-8" onClick={openTryDemoForm} />
          </div>
          <div className="order-1 md:order-2 translate-x-[-40%] translate-y-[40%] md:translate-x-[-20%] md:translate-y-[30%]">
            <img className="scale-[1.7] md:scale-[1.5]" src="home/car-with-shadow-2.png" alt="" />
          </div>
        </div>
        
        <div className="min-h-[20px] md:min-h-[100px]"></div>
        <div className="w-full absolute bottom-0">
          <img className="w-full" src="home/wave.svg" alt="" />
        </div>
      </section>

      <section className="">
        <div className="p-4 md:p-0 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <img className="rounded-3xl w-[450px]" src="home/app-screenshot.png" alt="Jeeth Mobile App" />
          <div className="w-full">
            <h3 className="text-primary text-2xl font-bold">What do we do?</h3>
            <div className="bg-primary w-[48px] h-[4px] rounded-lg"></div>

            <ul className="pl-4 mt-8 w-full md:w-3/4 list-disc text-md font-light flex flex-col justify-between">
              <li className="mb-2">Enable your driver partners with <b className="font-semibold">instant access to their earnings</b> through our user-friendly mobile app. </li>
              <li className="mb-2">Source verified driver partners with compliant vehicles through the <b className="font-semibold">world's first dedicated marketplace</b> for ETS segment.</li>
              <li className="mb-0">Efficiently manage your entire operations using our <b className="font-semibold">advanced technology</b> suit.</li>
              <a target="_blank" href="https://drive.google.com/file/d/1eoJSy0vEkIVK2KHtYtQD-ek9g8lup1Tc/view?usp=sharing" className="mt-12 w-[fit-content] bg-secondary text-white text-lg font-semibold py-2 px-6 rounded-full hover:bg-primary hover:text-white transition-all">Download the App</a>
            </ul>
          </div>
        </div>

      </section>

      <section className="pb-8 text-white bg-primary">
        <div className="relative">
          <div className="w-full">
            <img className="w-full" src="home/wave-inverted.svg" alt="" />
          </div>
        </div>
        <div className="md:my-0 md:p-4 p-4 my-4 container mx-auto md:py-16">
          <ClientListing />
        </div>
      </section>

      <section className="p-4 md:p-0 mt-8 container mx-auto">
        <h3 className="text-primary text-2xl font-bold text-center">The Value We Add</h3>
        <div className="bg-primary my-4 w-[48px] h-[4px] rounded-lg m-auto"></div>
        <p className="text-center">A dynamic, user-friendly solution designed to empower, engage,<br/> and retain your workforce effectively.</p>
        <ValueSlider />
      </section>

      <section className="mx-auto bg-primary relative">
        <div className="relative">
          <div className="w-full">
            <img className="w-full" src="home/wave-inverted.svg" alt="" />
          </div>
        </div>
        <div className="p-4 md:p-12 container mx-auto">
          <h3 className="text-white text-2xl font-bold text-center">Thousands Of happy drivers across the country.</h3>
          <div className="bg-white my-4 w-[48px] h-[4px] rounded-lg m-auto"></div>
          <p className="text-white m-auto text-center md:w-1/2">Yeah! we're proud with numbers. We've helped thousands of driver partners all around the world with our bespoke service. Hover ontop of them pic to view their testimonials.</p>
          <Testimonials />
        </div>

        <div className="min-h-[20px] md:min-h-[160px]"></div>
        <div className="w-full absolute bottom-0">
          <img className="w-full" src="home/wave.svg" alt="" />
        </div>
      </section>

      <section className="mx-auto">
        <div className="p-4 md:p-12 md:pt-0  container mx-auto">
          <h3 className="text-primary text-2xl font-bold text-center">Subscribe our newsletter</h3>
          <div className="bg-primary my-4 w-[48px] h-[4px] rounded-lg m-auto"></div>
          <p className="text-secondary m-auto text-center md:w-1/2">Subscribe to our newsletter for daily/weekly<br/>update of our products and services.</p>
          <NewsLetter />
        </div>
      </section>

    </main>
  )
}
