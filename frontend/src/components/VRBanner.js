import vrImage from '../StoreComponents/images/vr_cleaned.png';

function VrBanner() {
  return (
    <div className="w-full z-50">
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        <div className="relative h-[280px] rounded-[32px] overflow-visible bg-gradient-to-r from-[#18206F] via-[#17255A] via-[#D88373] to-[#BD1E1E]">
          {/* Content Container */}
          <div className="absolute inset-0 flex items-center overflow-hidden rounded-[32px]">
            {/* Left Side - Text Content */}
            <div className="pl-14 z-10 flex flex-col justify-center flex-shrink-0">
              <h2 className="text-black text-[52px] font-bold leading-[1.1] mb-6">
                Explore the world<br />
                of virtual reality
              </h2>
              <button className="bg-[#BD1E1E] hover:bg-[#9a1818] text-white font-bold px-7 py-3.5 rounded-lg transition w-fit text-sm">
                Explore All
              </button>
            </div>

            {/* Decorative gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/5 pointer-events-none"></div>
          </div>

          {/* Right Side - Image (Outside overflow) */}
          <div className="absolute right-12 -top-8 bottom-0 h-[350px] w-auto z-20 flex items-end justify-end">
            <img
              src={vrImage}
              alt="Person with VR headset"
              className="h-full w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VrBanner