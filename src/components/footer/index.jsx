import { Link } from "react-router-dom";
import { footerlogo } from "../../utils/images";

function Footer() {
  return (
    <footer className="bg-stone-950 text-white py-12">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        <div>
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              className="w-[277.26px] h-[57.18px] mb-4 cursor-pointer"
              src={footerlogo}
              alt="Seatravo Logo"
            />
          </Link>

          <p className="font-primary text-[24px] mb-2">
            +1 (340) 555-FERRY (8AM - 5PM EST)
          </p>

          <p className="font-semibold font-primary text-[24px] mb-4">
            support@seatravo.com
          </p>

          <div className="flex items-center gap-4 mt-3">
            <h4 className="font-primary font-semibold text-[24px]">
              Connect with us
            </h4>

            <a href="#" className="text-xl">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-xl">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Explore</h3>
          <ul className="space-y-2">
            <Link to="/ferries"><li className="hover:text-red-400">Ferry Routes</li></Link>
            <Link to="/excursion"><li className="hover:text-red-400">Excursions</li></Link>
            <Link to="/cars"><li className="hover:text-red-400">Car Rentals</li></Link>
            <Link to="/crusies"><li className="hover:text-red-400">Cruises</li></Link>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-red-400">Help Center</a></li>
            <li><a href="#" className="hover:text-red-400">Refund Policy</a></li>
            <li><a href="#" className="hover:text-red-400">Credits</a></li>
            <li><a href="#" className="hover:text-red-400">Contact Us</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-10 text-sm">
        © 2025 Seatravo. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
