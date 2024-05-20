import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
   return (
    <footer className="mt-16 md:20 lg:mt-28 text-[var(--clr-white)]">
      {/* footer top */}
      <div className="flex">
        <div className="w-1/2 bg-[#1F2937] flex justify-end">
          <div className="w-full max-w-[700px] pl-3 md:pl-8 lg:pl-10 text-end">
            <div className="text-center p-4 md:p-10 lg:p-16 py-8 md:py-16 lg:py-20">
              <h3 className="font-medium text-[var(--clr-white)]">CONTACT US</h3>
              <div className="mt-6 space-y-2">
                <p>123 ABS Street, Uni 21, Bangladesh</p>
                <p>+88 123456789</p>
                <p>Mon - Fri: 08:00 - 22:00</p>
                <p>Sat - Sun: 10:00 - 23:00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 bg-[#111827] flex justify-start">
          <div className=" w-full max-w-[700px] pr-3 md:pr-8 lg:pr-10 text-start">
          <div className="text-center p-4 md:p-10 lg:p-16 py-8 md:py-16 lg:py-20">
          <h3 className="font-medium text-[var(--clr-white)]">Follow US</h3>
              <div className="mt-6">
                <p>Join us on social media</p>
                <div className="flex justify-center gap-4 text-2xl mt-6">
                <FaFacebookF className="hover:text-[var(--clr-accent)] cursor-pointer"/> <FaTwitter className="hover:text-[var(--clr-accent)] cursor-pointer"/>    <FaInstagram className="hover:text-[var(--clr-accent)] cursor-pointer"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;