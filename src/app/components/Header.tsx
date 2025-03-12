import Image from "next/image";
import Hourglass from "../../../public/Hourglass.png";
function Header() {
  return (
    <>
      <header className="flex justify-between items-center mb-6 h-[100px]">
        <div className="flex gap-1 items-center font-[31px] ">
          <h2 className="text-3xl text-[#8338EC] font-extrabold">Momentum </h2>
          <Image src={Hourglass} alt="logo" className="object-contain" />
        </div>
        <div className="flex gap-10">
          <button className="text-black border-1 border-[#8338EC]  px-4 py-2 rounded cursor-pointer">
            თანამშრომლის შექმნა
          </button>
          <button className="bg-purple-600 text-white px-4 py-2 rounded cursor-pointer">
            + შექმენი ახალი დავალება
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
