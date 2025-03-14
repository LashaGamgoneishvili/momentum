import Image from "next/image";
import React, { ReactNode } from "react";
import { D_E_P } from "../../../typings";

const DropdownHeader = ({
  children,
  handleClick,
  header,
  section_name,
}: {
  children: ReactNode;
  handleClick: (section: D_E_P) => void;
  header: string;
  section_name: D_E_P;
}) => {
  return (
    <div className=" flex items-center  text-[#212529] ">
      <div
        className="flex gap-6 w-[200px] cursor-pointer  "
        onClick={() => handleClick(section_name)}
      >
        <span className="px-[18px] py-[10px]">{header}</span>
        <Image
          src={"/Shape.svg"}
          width={14}
          height={8}
          alt="arrow"
          className="object-contain"
        />
      </div>
      {children}
    </div>
  );
};

export default DropdownHeader;
