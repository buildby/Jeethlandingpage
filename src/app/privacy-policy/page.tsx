export default function PrivacyPolicyPage() {

  return (
    <main className="">
      <section className="mx-auto bg-primary relative">
        <div className="p-8 md:p-12 container mx-auto"></div>

        <div className="min-h-[20px] md:min-h-[100px]"></div>
        <div className="w-full absolute bottom-0">
          <img className="w-full" src="home/wave.svg" alt="" />
        </div>
      </section>

      <section className="container mx-auto">
        <div className="p-4 md:p-12 md:pt-0  container mx-auto">
          <h3 className="text-primary text-2xl font-bold text-center">Privacy Policy</h3>
          <div className="bg-primary my-4 w-[48px] h-[4px] rounded-lg m-auto"></div>
          <div className="text-secondary font-light leading-8 mt-8">
            <p>Welcome to Jeeth, a mobile application platform developed by Jeeth Balaji Tech Pvt. Ltd. (“Jeeth,” “we,” “us,” or “our”). This Privacy Policy explains how we collect, use, and share your information when you use the Jeeth platform. By accessing our services, you agree to the terms outlined in this Privacy Policy. If you do not agree, please refrain from using our services.</p>
            <ol className="gap-2 flex flex-col list-decimal m-4">
              <li><b className="font-semibold">Information Collection</b>: To use Jeeth, you need to create a User Account by providing personal information such as your name, email address, phone number, date of birth, and financial details for KYC compliance. We may also collect transaction information, location data, and device details. We respect your privacy choices and allow you to control your data preferences.</li>
              <li><b className="font-semibold">Use of Information</b>: We collect and use your information to provide services, assess creditworthiness, enhance user experience, manage accounts, and comply with legal obligations. We may also use cookies to improve our services.</li>
              <li><b className="font-semibold">Sharing of Information</b>: We do not sell your personal information. However, we may share it with authorized personnel, affiliates, business partners, and service providers for specific tasks. In certain circumstances, we might disclose information to comply with legal requirements or protect our rights.</li>
              <li><b className="font-semibold">Data Retention and Deletion</b>: We retain your information as long as your registration is valid and for legal compliance. You can access, review, and modify your personal information through your User Account. You can also request deletion of your data, subject to legal requirements.</li>
              <li><b className="font-semibold">Security Measures</b>: We employ physical, electronic, and procedural safeguards to protect your information against loss or misuse. Our security measures include encryption, firewalls, secure sockets layer (SSL) transmission, and strict data protection provisions for our partners.</li>
              <li><b className="font-semibold">Communication Preferences</b>: We may send you product information, special deals, and newsletters. You can unsubscribe from promotional communications while essential customer service messages will still be sent.</li>
              <li><b className="font-semibold">Indemnification and Limitation of Liability</b>: You agree to indemnify Jeeth for any claims related to your information shared on the platform. Jeeth is not liable for damages arising from platform use or unauthorized access to your information.</li>
              <li><b className="font-semibold">Governing Laws and Disputes</b>: This Privacy Policy is governed by Indian laws. Disputes will be subject to arbitration in Bangalore as per the Arbitration and Conciliation Act, 1996.</li>
              <li><b className="font-semibold">Changes to this Policy</b>: We may update this Privacy Policy without notice. Continued use of our services indicates your acceptance of these changes.</li>
              <li><b className="font-semibold">Age Restrictions</b>: Jeeth services are intended for users aged 18 or older. Users under 18 should not provide information to Jeeth.</li>
              <li><b className="font-semibold">Contact Information</b>: For questions or grievances regarding this Privacy Policy, please contact our Grievance Officer at grievances@jeeth.co.in</li>
              <li>Thank you for choosing Jeeth. We are committed to safeguarding your privacy and providing you with a secure and seamless experience on our platform</li>
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}
