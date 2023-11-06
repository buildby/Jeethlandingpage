import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-secondary text-white p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

          <div className="my-4">
            <img className="mb-4" src={'logo-light.png'} alt="Jeeth Logo" />
            <p className="text-sm text-gray-400">The world's first solution tailored for employee transportation service businesses, seamlessly integrating cutting-edge technology and financial innovations within a single platform.</p>
            <div className="flex mt-4">
              <Link href="#"><img width="24px" className="mr-6" src={'icons/social-facebook.svg'} alt="Facebook" /></Link>
              <Link href="#"><img width="24px" className="mr-6" src={'icons/social-x.svg'} alt="X" /></Link>
              <Link href="#"><img width="24px" className="mr-6" src={'icons/social-linkedin.svg'} alt="LinkedIn" /></Link>
              <Link href="#"><img width="24px" className="mr-6" src={'icons/social-instagram.svg'} alt="Instagram" /></Link>
            </div>
          </div>

          <div className="my-4">
            <h3 className="mb-4 font-medium">Quick Links</h3>
            <ul className="mt-2 text-sm text-gray-400">
              <li className="text-sm mb-2"><Link href="#">About</Link></li>
              <li className="text-sm mb-2"><Link href="#">Solution</Link></li>
              <li className="text-sm mb-2"><Link href="#">Blog</Link></li>
              <li className="text-sm mb-2"><Link href="#">Privacy Policy</Link></li>
              <li className="text-sm mb-2"><Link href="#">Terms & Condition</Link></li>
            </ul>
          </div>

          <div className="my-4">
            <h3 className="mb-4 font-medium">Contact Us</h3>
            <div className="h-full flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <p className="text-sm text-gray-400">+91 8220 151 247</p>
                <p className="text-sm text-gray-400">contact@jeeth.co.in</p>
                <p className="text-sm text-gray-400 mt-6">3rd Floor, P.No 38, Sridevi Arcade,<br/>JNTU, Kukatpally, Hyderabad - 500085 </p>
              </div>
            </div>
          </div>

          <div className="my-4">
            <h3 className="font-medium">Download the apps</h3>
            <div className="mt-6 flex flex-col gap-4">
                <Link className="text-sm text-gray-400" href="#">
                  <img src={'icons/app-playstore.svg'} alt="Google Play" />
                </Link>
                <Link className="text-sm text-gray-400" href="#">
                  <img src={'icons/app-appstore.svg'} alt="Apple App Store" />
                </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 text-xs text-gray-400">
          &copy; 2024 | Jeeth Balaji Tech Pvt Ltd.
        </div>
      </div>

    </div>
  );
};
