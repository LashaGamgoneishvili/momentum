import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

export const CreateEmployee = ({
  setShowCreateEmployee,
}: {
  setShowCreateEmployee: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="fixed w-full h-full top-0 left-0 bg-backdrop-modal backdrop-blur-[10px]">
      <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col px-[50px] pt-[117px] pb-[127px] gap-[45px]  text-black bg-white p-10 rounded-lg shadow-md w-[913px] h-auto mt-[120px]  z-20 ">
        <h1 className="text-4xl text-center">თანამშრომლის დამატება</h1>
        <button
          type="button"
          className="absolute right-5 top-3 cursor-pointer"
          onClick={() => setShowCreateEmployee((prev: boolean) => !prev)}
          title="close"
        >
          <Image width={40} height={40} src="/x.svg" alt="close" />
        </button>
        <form
          className="flex flex-col gap-[45px]"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="">
            <label htmlFor="name"></label>
            <input type="text" placeholder="name" id="name" />
            <p className="">მინიმუმ 2 სიმბოლო</p>
            <p className="">მაქსიმუმ 255 სიმბოლო</p>
          </div>
          <div className=""></div>
          <div className="*:cursor-pointer">
            <button>აუქმება</button>
            <button>დაამატე თანამშრომელი</button>
          </div>
        </form>
      </div>
    </div>
  );
};
