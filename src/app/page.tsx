export default function HomePage() {
  return (
    <main className="bg-primary">
      <div className="flex flex-col p-16 text-white">
        <h2 className="mb-4 font-thin text-3xl">Are you a driver?</h2>
        <h3 className="mb-6 font-bold text-4xl w-full md:w-2/3">Access our marketplace with 1000's of ETS Vendors to work with.</h3>

        <p className="font-extralight text-xl">100% transparency on the pricing and business model.</p>
        <a href="#" className="my-8 w-[fit-content] bg-secondary text-white text-lg font-semibold py-2 px-6 rounded-full hover:text-secondary hover:bg-primary hover:outline hover:outline-secondary transition-all">
          Download Now
        </a>
      </div>
    </main>
  )
}
