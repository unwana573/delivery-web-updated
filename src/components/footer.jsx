import logo from "../assets/applestore.png";
import apple from "../assets/applestore.png";
import google from "../assets/playstore.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faSnapchat,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      {/* MAIN FOOTER */}
      <footer className="bg-[#eee] px-16 py-8 mt-12 max-lg:px-6">
        <div className="flex justify-between gap-8 flex-wrap max-lg:flex-col">

          {/* LEFT SECTION */}
          <div>
            <img src={logo} alt="logo" className="w-[130px] mb-4" />

            <div className="flex gap-2 mb-4">
              <img src={apple} alt="App Store" className="w-[130px]" />
              <img src={google} alt="Play Store" className="w-[130px]" />
            </div>

            <p className="text-sm text-gray-600 max-w-[280px]">
              Company # 490039-445, Registered with House of companies.
            </p>
          </div>

          {/* MIDDLE SECTION */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Get Exclusive Deals in your Inbox
            </h4>

            <div className="flex items-center bg-white w-[330px] p-2 rounded-full shadow-sm mb-2 max-sm:w-full">
              <input
                type="email"
                placeholder="youremail@gmail.com"
                className="flex-1 outline-none px-4 text-sm"
              />
              <button className="bg-[#FC8A06] text-white font-bold px-6 py-2 rounded-full hover:bg-[#09092c] transition">
                Subscribe
              </button>
            </div>

            <p className="text-xs mb-4">
              we wont spam, read our{" "}
              <a href="#" className="font-medium hover:underline">
                email policy
              </a>
            </p>

            <div className="flex gap-4 text-xl">
              <FontAwesomeIcon
                icon={faFacebook}
                className="hover:text-[#FC8A06] cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="hover:text-[#FC8A06] cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faTiktok}
                className="hover:text-[#FC8A06] cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faSnapchat}
                className="hover:text-[#FC8A06] cursor-pointer"
              />
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex gap-16 max-sm:flex-col max-sm:gap-6">
            <div>
              <h4 className="font-semibold mb-4">Legal Pages</h4>
              <a className="block text-sm mb-3 hover:text-[#FC8A06]" href="#">
                Terms and conditions
              </a>
              <a className="block text-sm mb-3 hover:text-[#FC8A06]" href="#">
                Privacy
              </a>
              <a className="block text-sm mb-3 hover:text-[#FC8A06]" href="#">
                Cookies
              </a>
              <a className="block text-sm hover:text-[#FC8A06]" href="#">
                Modern Slavery Statement
              </a>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Important Links</h4>
              <a className="block text-sm mb-3 hover:text-[#FC8A06]" href="#">
                Get help
              </a>
              <a className="block text-sm mb-3 hover:text-[#FC8A06]" href="#">
                Add your restaurant
              </a>
              <a className="block text-sm mb-3 hover:text-[#FC8A06]" href="#">
                Sign up to deliver
              </a>
              <a className="block text-sm hover:text-[#FC8A06]" href="#">
                Create a business account
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* BOTTOM BAR */}
      <div className="bg-[#09092c] text-white px-16 py-4 flex justify-between flex-wrap max-lg:px-6 max-sm:flex-col max-sm:text-center max-sm:gap-2">
        <p className="text-sm">
          Order.uk Copyright 2024, All Rights Reserved.
        </p>

        <div className="flex gap-4 flex-wrap justify-center text-sm">
          <a className="hover:underline" href="#">Privacy Policy</a>
          <a className="hover:underline" href="#">Terms</a>
          <a className="hover:underline" href="#">Pricing</a>
          <a className="hover:underline" href="#">
            Do not sell or share my personal information
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
