// import { ChatBubbleIcon } from "@heroicons/react/outline";
import Image from "next/image";
import user from "../../../public/Ellipse 3892@2x.png";

const Card = () => {
  return (
    <div className=" flex flex-col border border-orange-300 rounded-lg p-4 max-w-md ">
      <div className="flex justify-between items-center mb-2">
        <div className="flex gap-2">
          <span className="bg-red-100 text-red-500 px-3 py-1 rounded-full text-sm font-semibold">
            მაღალი
          </span>
          <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            დიზაინი
          </span>
        </div>
        <span className="text-gray-500 text-sm">22 იანვარი, 2022</span>
      </div>

      <h3 className="font-bold text-md text-black">
        Redberry-ს საიტის ლენდინგის დიზაინი
      </h3>
      <p className="text-gray-700 text-sm mt-1">
        შემქნილი საიტის მთავარი გვერდი, რომელიც მოიცავს მთავარ სექციებს,
        ნავიგაციას.
      </p>

      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-2">
          <Image
            src={user}
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
            width={25}
            height={25}
          />
        </div>

        <div className="flex items-center gap-1 text-gray-500">
          <span className="text-sm">8</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
