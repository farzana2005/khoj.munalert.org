import footerLogo from "../assets/footerLogo.png"; // MUN Alert logo
import partner from "../assets/partner.png"; // Center logo (optional)
import { FiPhone, FiMail } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { footer } from "motion/react-client";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white w-full mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 lg:px-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

        {/* Left - MUN Alert + description + logo + social */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img src={footerLogo} alt="footerLogo" className="h-40 w-auto" />
            
          </div>
          <p className="text-white/80 text-sm">
            নিখোঁজ শিশুদের রিপোর্ট এবং খুঁজে বের করার জন্য বাংলাদেশের জাতীয় প্ল্যাটফর্ম। প্রতিটি সেকেন্ড গুরুত্বপূর্ণ। একসাথে, আমরা শিশুদের ঘরে ফিরিয়ে আনি।
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4 mt-2">
            <a href="https://www.facebook.com/share/1KEYKkRGBu/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E01075] transition-colors">
              <FaFacebookF size={20} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E01075] transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E01075] transition-colors">
              <FaYoutube size={20} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E01075] transition-colors">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

        {/* Center Logo */}
        <div className="flex justify-center flex-1">
          <img src={partner} alt="Partner Logo" className="h-40 w-auto" />
        </div>

        {/* Right - Contact */}
        <div className="flex-1 flex flex-col gap-3">
          <h3 className="font-semibold text-xl">জরুরি যোগাযোগ</h3>
          <p className="flex items-center gap-2">
            <FiPhone className="text-[#E01075]" /> 13219 / 999
          </p>
          <p className="flex items-center gap-2">
            <FiMail className="text-[#E01075]" /> help@munalert.org
          </p>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-white/30 mt-8 pt-4 text-center text-white/60 text-sm">
        © ২০২৬ মুন অ্যালার্ট। বাংলাদেশ সরকার। সর্বস্বত্ব সংরক্ষিত।
      </div>
    </footer>
  );
}
