import utils from "../utils/utils";

export default function DownloadBtn() {
  return (
    <div className="border-white bg-black text-white relative transition-all duration-500 ease-in-out">
      <button
        onClick={() => utils("../public/downloads/Haluk.pdf", "haluk.pdf")}
        className="w-full py-[3%] pl-[2%] md:py-[1.5%] md:pl-[2%] lg:py-[1.3%] lg:pl-[1%] text-left flex justify-between focus:outline-none focus-visible:ring focus-visible:ring-purple-500 items-center"
      >
        <span className="text-[6.5vmax] md:text-[6.5vmax] lg:text-[5vmax] leading-[0.7] text-left font-regular transform inline-block hover:animate-shake-horizontal scale-custom items-center line">
          PDF Download
        </span>
      </button>
    </div>
  );
}
