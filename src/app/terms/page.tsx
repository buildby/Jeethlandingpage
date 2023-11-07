import ContactForm from "../../components/contact-form";
import { NewsLetter } from "../../components/news-letter";

export default function TermsPage() {

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
          <h3 className="text-primary text-2xl font-bold text-center">Terms & Condition</h3>
          <div className="bg-primary my-4 w-[48px] h-[4px] rounded-lg m-auto"></div>
          <div className="text-secondary font-light leading-8 mt-8">
          <p>JEETH platform (“Platform”) is powered by Jeeth Balaji Tech Private Limited (“JEETH”). All transactions enabled on the Platform are guided by the Terms and Conditions ("T&Cs") mentioned herein. Please read these T&Cs in conjunction with the Privacy Policy carefully before using the Platform for online transactions. Please note that the T&Cs and Privacy Policy are binding on you. These T&Cs are in addition to any other agreement(s) you may have with JEETH.</p>       
          <p className="mt-6">Definitions:</p>
          <ul className="gap-2 flex flex-col list-disc m-4 ml-8">
            <li><b className="font-semibold">“Applicable Law”</b> shall mean any statute, law, regulation, ordinance, rule, judgment, order, decree, by-law, approval from the concerned authority, government resolution, directive, guideline, policy, requirement, or other governmental restriction or any similar form of decision, or determination by, or any interpretation, or adjudication having the force of law or any of the foregoing;</li>
            <li><b className="font-semibold">“Privacy Policy”</b> shall mean the privacy policy of JEETH, as provided on the website;</li>
            <li><b className="font-semibold">“Registration information/data”</b> shall mean the information shared by the Customer during the registration viz. OTP;</li>
            <li>The words <b className="font-semibold">"we"</b>, <b className="font-semibold">"us"</b> and <b className="font-semibold">"our"</b> refer to Platform/ JEETH as the case may be;</li>
            <li>The words <b className="font-semibold">“Customer”</b>, <b className="font-semibold">“you”</b>, <b className="font-semibold">“your”</b> and <b className="font-semibold">“user”</b> shall mean the person approved to perform transaction(s) on the Platform by JEETH.</li>
          </ul>
          <ol className="gap-2 flex flex-col list-decimal m-4">
            <li><b className="font-semibold">ACCEPTANCE OF TERMS</b> Usage of Platform is subject to the T&Cs governing the Platform. Use of Platform abides you to these T&Cs. In addition, when using the Platform, you will be subject to all guidelines or rules applicable to the Platform that may be posted from time to time at the JEETH website: https://www.jeeth.co.in/ (“website”).</li>
            Registration on Platform will confirm acceptance of Platform T&Cs and the revised versions, enhancements, modifications of the same. The Customer is entirely responsible for ensuring secure usage of the Platform & Registration information (PIN). Customer is liable for misuse/unwarranted disclosure of sensitive information such as the registration data. JEETH shall not be responsible for interception/misuse of the Platform. JEETH is not liable if the registration information is misused due to any reason whatsoever and/or if the terms and conditions relating to the use of this information are not complied with.
            <li><b className="font-semibold">CUSTOMER OBLIGATIONS</b> You shall provide complete, correct, honest, and current information as required by JEETH on the Platform registration page, including but not limited to the Registration information (“User Information”). If you provide any User Information that is untrue, inaccurate, not current, or incomplete, or if there are reasonable grounds to suspect that the User Information provided by you is untrue, inaccurate, not current, or incomplete, JEETH reserves the right to suspend, terminate, or refuse your current or future use of the Platform. To the extent that you have provided User Information to use the Platform, you represent that you have all rights required to provide such User Information and further represent that it is true and accurate.</li>
            All User Information provided by you will be used and processed in accordance with these T&Cs and the Privacy Policy. You acknowledge and agree that you have been provided with unrestricted access to the Privacy Policy and that it is your responsibility to read and understand the Privacy Policy. In the event you disagree with anything set forth in the Privacy Policy, it is your responsibility to bring it to JEETH’s notice using the notification mechanism set out in the Privacy Policy.
            <li><b className="font-semibold">REGISTRATION</b> The Customer is required to register his/her profile to be able to use the Platform. The Customer must provide the requested information to JEETH to validate their identity and have authorization for the usage of the Platform for transactions. JEETH reserves the right to disallow the customer from registration/usage of the service in case the information provided by the customer is incorrect/false. The Customer assures that all the information entered on the Platform is true and that they are legally entitled (viz older than 18 years of age) to use the services provided on the Platform. Customer not completing their registration will be disallowed from using the Platform services any further. You understand and agree that JEETH may, in its sole discretion, terminate your access to the Platform without notice and you waive any right to claim access to the Platform or any other claim that you may have. Any data of your usage may be retained or deleted at JEETH’s sole discretion. For all queries related to the Platform, contact the customer service email mentioned in section 15. JEETH may enhance the security features etc. of the Platform from time to time. The T&Cs may be modified for revised features in the future. Acceptance of these T&Cs will abide the customer for any future versions of the T&Cs.</li>
            <li><b className="font-semibold">AUTHENTICATION</b> During registration on Platform, you may be required to select an authentication method viz. OTP (One Time Password) or password, or challenge question/answer etc. for authenticating yourself. Along with that, you may be required to set a PIN for using the Platform. If you are unable to enter the correct PIN on opening the Platform or if the authentication otherwise fails, the registration will fail. Please note that you will be required to use the PIN for transactions done via the Platform therefore it is advised to you to strictly follow the instructions provided under section 7 below. You are successfully registered on the Platform only after you receive confirmation of the same from JEETH by way of in-platform notification/communication.</li>
            <li><b className="font-semibold">CONFIDENTIALITY</b> AND SECURITY OF REGISTRATION INFORMATION Customer is liable entirely for maintaining the confidentiality of the Registration information viz. PIN and other verification information used on the Platform. All activities that occur using the Registration information or other verification information supplied to or established by Customer with respect to Platform will be the sole responsibility of the Customer. JEETH is not liable if the registration information is misused by the Customer due to any reason whatsoever. Customer is responsible not to share information that enables access/usage of Platform to any third party. Customer should immediately notify JEETH of any unauthorized use of the Platform, verification information, or any other breach of security. The Customer agrees that JEETH will not be liable for any loss or damage arising from the failure of the customer to comply with these T&Cs.</li>
            <li><b className="font-semibold">CONFIDENTIALITY</b> OF USER INFORMATION The User Information will not be shared with any online merchant establishments for which Platform has been used. Customer agrees to permit JEETH to store the User Information in their databases and are permitted to disclose it if required to do so by Applicable Law, in good faith believing that such preservation or disclosure is permitted by Applicable Law, or as reasonably necessary to (i) comply with legal process or (ii) enforce these T&Cs. You hereby grant JEETH the right to use the User Information for the furtherance of these T&Cs and to store it and use it in a manner (either singularly or as an aggregate with information provided by other users on the Platform) that improves features and functionalities of the Platform or for undertaking any other analytics in relation to such information. JEETH shall put in necessary security protocols to ensure that any User Information is not breached or misused.</li>
            <li><b className="font-semibold">CUSTOMER RESPONSIBILITIES</b> As a Platform user, the Customer acknowledges and agrees to the following:
            The Customer will ensure confidentiality of PIN and not reveal it to any third party;
            Keep the OTP or Password or challenge questions, if any, used during the registration process, totally confidential and not reveal it to any third party;
            Ensure the PIN is not written down or stored physically or in soft form. The same should be memorized;
            Take necessary precautions to ensure that the mobile device or any other device accessing Platform during transactions is guarded from all unauthorized access;
            You agree that you will use the Platform only for the purposes set forth under these T&Cs and in accordance with these T&Cs. You are solely responsible for any content or material you upload and share on the Platform;
            You will use the Platform and any information available in accordance with all Applicable Law.
            The Customer will never access Platform with false/fake id or attempt impersonation of any kind;
            Hamper the functioning of the Platform in any manner of hardware or software malfunction by use of software viruses or any other programs or applications;
            Intentionally overload the Platform to hamper the service;
            Infringe upon the Intellectual Property rights of the Platform by attempting to re-create or reverse-engineer the solution or any part of it or the software used in connection with the Platform;
            Remove any copyright, trademark, or other proprietary rights notices contained in Platform;
            Re-create or use any part of the Platform without JEETH’s prior written authorization;
            Attempt to data mine, unlawfully obtain information specific to the Platform using any application, or other manual or automatic device or in any way and re-engineer or duplicate the user experience similar to Platform;
            Interfere with the functioning of Platform or its associated hardware/software by any means;
            Upload, transmit, email or publish any information or material which is harmful, threatening, abusive, libelous, obscene, derogatory (in any form), defamatory or libelous, discriminatory, racially or ethnically objectionable or contains pornography or encourages money laundering or gambling;
            Fail to adhere to any Applicable Law, regulation, guidelines or any terms and conditions advised by JEETH in connection with the use of Platform.</li>
            <li><b className="font-semibold">MERCHANTS</b> The Platform merely offers a mode to the Customers to do online digital transactions with the merchants. JEETH by no means intends to endorse any merchant over others. JEETH does not validate the merchant’s services or offering. Additionally, JEETH does not guarantee the Customer experience with the merchant in terms of delivery of the product, quality etc. Customer’s interaction with the merchant is independent of governance of Platform rules. Merchant’s terms of business with the Customer with regards to service/product quality, delivery, payment, guarantees/warranties, promotions, discounts etc. are an understanding between the Customer and merchant alone even if the Customer used the Platform for making the transaction. In no event will JEETH be liable for any loss or damage arising from the merchant’s service or product, including without limitation, indirect or consequential loss or damage, purchased using the Platform.</li>
            <li><b className="font-semibold">INTERNET FRAUDS</b> The Internet per se is susceptible to a number of frauds, misuses, hacking and other actions which could affect the use of Platform. While JEETH shall actively strive to provide security to prevent the same, there cannot be any absolute guarantee from such Internet frauds, hacking, and other actions which could affect the use of the Platform. JEETH will not take liability for any viruses or unlawful downloads that the Customer’s system may be exposed to while he accesses the internet for using Platform. The Customer shall separately evaluate all risks arising out of the same.</li>
            <li><b className="font-semibold">OPERATIONAL ISSUES</b> Every effort is made to keep the Platform/website up and running smoothly. However, JEETH will not be held liable for the website/Platform being temporarily unavailable due to operational issues beyond the control of JEETH.</li>
            <li><b className="font-semibold">INDEMNITY AND LIMITATION OF LIABILITY</b> You agree to indemnify and hold harmless JEETH, its directors, shareholders, officers, employees, and agents, against any claims, losses, damages, or costs arising from (i) your use of the Platform and its contents, (ii) your breach of these T&Cs or (iii) any acts or omission of yours in relation to the Platform and its use thereof. The aggregate liability of JEETH to you or anyone, whether in contract, tort, negligence, or otherwise, howsoever arising, whether in connection with these T&Cs, your access and use of the Platform and its contents and functionalities or for any reason related to the operation of the Platform, shall not exceed the total credit facility provided to you for a month immediately preceding the date on which the liability arose. In no event shall JEETH be liable for failed transactions which are incomplete due to any reason and any loss of profits (anticipated or real), loss of business, loss of reputation, loss of data, loss of goodwill, any business interruption, or any direct, indirect, special, incidental, consequential, punitive, tort, or other damages, however caused, whether or not it has been advised of the possibility of such damages.</li>
            <li><b className="font-semibold">DISCONTINUATION OF PLATFORM JEETH</b> reserves the right to discontinue the above service at any time whatsoever with suitable prior intimation to the Customer.</li>
            <li><b className="font-semibold">GRIEVANCE REDRESSAL</b> If you have any complaints, grievances, or questions related to the Platform and other content and services (“Grievances”), please contact our grievance officer in the following manner:</li>
          </ol>
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
          <h3 className="text-white text-2xl font-bold text-center mt-4 uppercase">Contact Us</h3>
          <div className="bg-white my-4 w-[48px] h-[4px] rounded-lg m-auto"></div>
          <div className="bg-white p-4 w-1/2 rounded-lg mx-auto my-6">
            <ContactForm />
          </div>
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
  );
}
