import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-secondary text-white p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

          <div className="my-4">
            <img className="mb-4" src={'logo.png'} alt="Jeeth Logo" />
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas repudiandae pariatur culpa quam est, earum beatae fuga tenetur ad.</p>
          </div>

          <div className="my-4">
            <h3 className="mb-4 font-thin">Footer Links</h3>
            <ul className="mt-2 text-sm text-gray-500">
              <li className="text-sm mb-2"><Link href="#">Home</Link></li>
              <li className="text-sm mb-2"><Link href="#">About Us</Link></li>
              <li className="text-sm mb-2"><Link href="#">Blog</Link></li>
              <li className="text-sm mb-2"><Link href="#">Sell</Link></li>
              <li className="text-sm mb-2"><Link href="#">Contact Us</Link></li>
            </ul>
          </div>

          <div className="my-4">
            <h3 className="mb-4 font-thin">Contact Us</h3>
            <div className="h-full flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <p className="text-sm text-gray-500">(+234) 137632128</p>
                <p className="text-sm text-gray-500">grasshopper@gmail.com</p>
                <p className="text-sm text-gray-500">Address goes here</p>
              </div>
              <div className="mt-auto">
                <Link className="text-sm text-gray-500" href="#">Download Our App</Link>
              </div>
            </div>
          </div>

          <div className="my-4">
            <h3 className="font-thin">Footer Nav</h3>
          </div>
        </div>

        <div className="mt-8 text-xs text-gray-500">
          &copy; 2023. All rights reserved.
        </div>
      </div>

    </div>
  );
};
