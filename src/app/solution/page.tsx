import { Button } from "../../components/Button";
import { NewsLetter } from "../../components/news-letter";
import { TestimonialsSlider } from "../../components/testimonials-slider";

export default function SolutionPage() {
  return (
    <main className="">

      <section className="mb-0 text-white bg-primary relative">
        <div className="p-4 md:p-0 container mx-auto grid md:grid-cols-3 overflow-hidden">
          <div className="col-span-2 mt-12 flex flex-col py-8 md:py-16 order-2 md:order-1">
            <h2 className="mb-4 font-thin text-3xl">Cutting-edge technology solutions to address <b className="font-semibold">capital and driver churn</b> issues in the Employee Transportation service segment.</h2>
            <Button text="Try Demo" link="#" className="mt-8" />
          </div>
          <div className="order-1 md:order-2">
            <img className="mt-8 md:ml-auto" src="solutions/app-mockup.png" alt="" />
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
              <h3 className="text-primary text-2xl font-bold uppercase">Our Offerings</h3>
              <div className="bg-primary my-4 w-[48px] h-[4px] rounded-lg m-auto"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 my-8">
            <div className="flex flex-col gap-4 items-center">
              <img className="max-h-[100px] mb-4 " src="solutions/icons/Cab.png" alt="Source Online" />
              <p className="font-bold text-md text-secondary">Source Online</p>
              <p className="text-sm font-light text-secondary ">Stop chasing drivers,  launch a campaign on our marketplace to source instantly.</p>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <img className="max-h-[100px] mb-4 " src="solutions/icons/Check.png" alt="100% Compliant Vehicles" />
              <p className="font-bold text-md  text-secondary">100% Compliant Vehicles</p>
              <p className="text-sm font-light text-secondary ">We verify documents digitally using government-provided APIs to authenticate submitted documents.</p>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <img className="max-h-[100px] mb-4 " src="solutions/icons/auto pay.png" alt="Enable Daily Payments" />
              <p className="font-bold text-md  text-secondary">Enable Daily Payments</p>
              <p className="text-sm font-light text-secondary ">We facilitate drivers with instant payment from the mobile app based on their earnings.</p>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <img className="max-h-[100px] mb-4 " src="solutions/icons/auto pay-1.png" alt="Easy Repayments" />
              <p className="font-bold text-md  text-secondary">Easy Repayments</p>
              <p className="text-sm font-light text-secondary ">Repayment of the amounts withdrawn by drivers will be deducted from their monthly payouts.</p>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <img className="max-h-[100px] mb-4 " src="solutions/icons/Check List.png" alt="Effortless Vehicle Induction" />
              <p className="font-bold text-md  text-secondary">Effortless Vehicle Induction</p>
              <p className="text-sm font-light text-secondary ">Repayment of the amounts withdrawn by drivers will be deducted from their monthly payouts.</p>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <img className="max-h-[100px] mb-4 " src="solutions/icons/Cloud.png" alt="100% Paperless" />
              <p className="font-bold text-md  text-secondary">100% Paperless</p>
              <p className="text-sm font-light text-secondary ">Seamless digital process from onboarding to hassle-free repayments for utmost convenience.</p>
            </div>
          </div>
          
        </div>
      </section>

      <section className="pb-8 text-white bg-primary">
        <div className="relative">
          <div className="w-full">
            <img className="w-full" src="home/wave-inverted.svg" alt="" />
          </div>
        </div>
        
        <h3 className="text-white text-2xl font-bold mt-12 text-center uppercase">Why choose us</h3>
        <div className="bg-white my-4 w-[48px] h-[4px] rounded-lg m-auto"></div>
        
        <div className="md:my-8 md:p-4 p-4 my-4 container mx-auto">
          <div className="grid md:grid-cols-3 gap-12 my-8">
              <div className="flex flex-col gap-4 items-center">
                <img className="max-h-[100px] mb-4 " src="solutions/icons/Fire.png" alt="Enhanced Efficiency" />
                <p className="font-bold text-md text-white">Enhanced Efficiency</p>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <img className="max-h-[100px] mb-4 " src="solutions/icons/Process Improvement.png" alt="Improved Driver Productivity" />
                <p className="font-bold text-md  text-white">Improved Driver Productivity</p>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <img className="max-h-[100px] mb-4 " src="solutions/icons/Money.png" alt="Optimized Costs" />
                <p className="font-bold text-md  text-white">Optimized Costs</p>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <img className="max-h-[100px] mb-4 " src="solutions/icons/New Job.png" alt="Increased Opportunities" />
                <p className="font-bold text-md  text-white">Increased Opportunities</p>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <img className="max-h-[100px] mb-4 " src="solutions/icons/Personal Growth.png" alt="Higher Retention" />
                <p className="font-bold text-md  text-white">Higher Retention</p>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <img className="max-h-[100px] mb-4 " src="solutions/icons/Trophy.png" alt="Outperform Competitors" />
                <p className="font-bold text-md  text-white">Outperform Competitors</p>
              </div>
            </div>
        </div>
      </section>

      <section className="p-4 md:p-0 mt-8 container mx-auto">
        <h3 className="text-primary text-2xl font-bold text-center">The Value We Add</h3>
        <div className="bg-primary my-4 w-[48px] h-[4px] rounded-lg m-auto"></div>
        <p className="text-center">Get the best out of our product in premium.</p>
        <TestimonialsSlider />
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
