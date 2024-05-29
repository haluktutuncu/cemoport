import utils from "../utils/utils";

export default function BottomBar() {
  return (
    <div className="flex w-full fixed bottom-0 justify-center items-center bg-slate-50 z-40  divide-x-2 divide-stone-950  border-t-2 border-stone-950 ">
      <a className="text-[5vw] lg:text-[4vmin] leading-[1.2] font-regular w-[50%] justify-start items-center flex text-center pl-2 py-2">
        <span className="scale-custom">EN</span>
      </a>
      <a
        href="#"
        onClick={() => utils("../public/downloads/Haluk.pdf", "haluk.pdf")}
        className="text-[5vw] lg:text-[4vmin] leading-[1.2] font-regular justify-start w-[50%] flex items-center text-center pl-2 py-2"
      >
        <a className="scale-custom cursor-pointer">Portfolio</a>
      </a>
    </div>
  );
}
