
import partnerLogo from "../assets/partner.png";
import verifyLogo from "../assets/verify.png";



export default function Hero() {
  return (
    <div className="h-[80vh] relative overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/mun.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/95 z-10"></div>

      {/* Top Logos */}
      <div className="absolute top-0 left-0 w-full z-20 flex justify-between items-center px-6 py-4">

        {/* Left Logo */}
        <img
          src={partnerLogo}
          alt="Partner Logo"
          className="h-42 md:h-40 object-contain"
        />

        {/* Right Logo */}
        <img
          src={verifyLogo}
          alt="Verified Logo"
          className="h-40 md:h-48 object-contain"
        />

      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center">
        
    <h2 className="font-bethany text-5xl md:text-6xl mb-4 font-black text-[#E01075] drop-shadow-[0_3px_8px_rgba(0,0,0,0.8)] leading-[1.4]">
  প্রত্যেক নিখোঁজের জন্য<br />
  একত্রিত হই
</h2>





        <p className="font-centra text-lg md:text-xl font-semibold text-white drop-shadow-md max-w-2xl">
          তাদের খুঁজে পাওয়া হোক, আশা ও প্রার্থনার মাধ্যমে
        </p>

      </div>

    </div>
  );
}