"use client";
import Image from "next/image";
import Hourglass from "../../../public/Hourglass.png";
import Link from "next/link";
import { CreateEmployee } from "./CreateEmployee";
import { useState } from "react";

function Header() {
  const [showCreateEmployee, setShowCreateEmployee] = useState(false);
  return (
    <header className="relative z-100 flex justify-between items-center max-w-[1920px] mx-auto h-[100px] px-[120px] w-full">
      <Link
        href="/"
        className="header-logo flex gap-1 items-center font-[31px] cursor-pointer "
      >
        <h2 className="text-3xl text-[#8338EC] font-extrabold">Momentum </h2>
        <Image src={Hourglass} alt="logo" className="object-contain" />
      </Link>

      <div className="flex gap-[40px]">
        <button
          className="text-black border-1 transition duration-200 border-[#8338EC] active:border-[#B588F4] px-4 py-2 rounded cursor-pointer"
          onClick={() => setShowCreateEmployee((prev: boolean) => !prev)}
        >
          თანამშრომლის შექმნა
        </button>

        <Link
          href="/create-new-task"
          className="bg-[#8338EC] transition duration-200 text-white px-4 py-2 rounded active:bg-[#B588F4] cursor-pointer"
        >
          + შექმენი ახალი დავალება
        </Link>
      </div>

      {showCreateEmployee && (
        <CreateEmployee setShowCreateEmployee={setShowCreateEmployee} />
      )}
    </header>
  );
}

export default Header;
