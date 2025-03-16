"use client";
import Image from "next/image";
import Hourglass from "../../../public/Hourglass.png";
import Link from "next/link";
import { CreateEmployee } from "./CreateEmployee";
import { useState } from "react";

function Header() {
  const [showCreateEmployee, setShowCreateEmployee] = useState(false);
  return (
    <>
      <header className="relative z-1000 flex justify-between items-center h-[100px] bg-gray-100 px-[120px] w-[1920px] ">
        <Link href={"/"} className="flex gap-1 items-center font-[31px] ">
          <h2 className="text-3xl text-[#8338EC] font-extrabold">Momentum </h2>
          <Image src={Hourglass} alt="logo" className="object-contain" />
        </Link>
        <div className="flex gap-10">
          <button
            className="text-black border-1 border-[#8338EC]  px-4 py-2 rounded cursor-pointer"
            onClick={() => setShowCreateEmployee((prev: boolean) => !prev)}
          >
            თანამშრომლის შექმნა
          </button>
          <button className="bg-purple-600 text-white px-4 py-2 rounded cursor-pointer">
            + შექმენი ახალი დავალება
          </button>
        </div>

        {showCreateEmployee && (
          <CreateEmployee setShowCreateEmployee={setShowCreateEmployee} />
        )}
      </header>
    </>
  );
}

export default Header;
