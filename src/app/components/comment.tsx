"use client";
import { useState } from "react";
import { Task } from "../../../typings";
import Image from "next/image";
import avatar from "../../../public/Ellipse 3892@2x.png";

const comments = [
  {
    id: 1,
    name: "ემილია მორიარტი",
    text: "დიზაინი სუფთაა და ჩასას, მაღარიბი კომენტარების მენეჯმენტისთვის იდეალურია, როგორც ალგორითმები ეფექტურ შეტყობინებებს რენდერავენ.",
    avatar: "/avatar1.png",
  },
  {
    id: 2,
    name: "ნატალია გიგიბერია",
    text: "დიზაინი სუფთაა და ჩასას, მაღარიბი კომენტარების მენეჯმენტისთვის იდეალურია.",
    avatar: "/avatar2.png",
  },
  {
    id: 3,
    name: "ემილია მორიარტი",
    text: "დიზაინი სუფთაა და ჩასას, მაღარიბი კომენტარების მენეჯმენტისთვის იდეალურია, როგორც ალგორითმები ეფექტურ შეტყობინებებს რენდერავენ.",
    avatar: "/avatar1.png",
  },
  {
    id: 4,
    name: "ემილია მორიარტი",
    text: "დიზაინი სუფთაა და ჩასას, მაღარიბი კომენტარების მენეჯმენტისთვის იდეალურია, როგორც ალგორითმები ეფექტურ შეტყობინებებს რენდერავენ.",
    avatar: "/avatar1.png",
  },
];

export default function Comment({ task }: { task: Task }) {
  const [comment, setComment] = useState("");

  console.log("Task-Task-task", task);

  return (
    <div className="flex flex-col bg-[#F8F3FEA6] text-black h-[975px]  w-[741px] border-[1px] border-[#DDD2FF] rounded-[10px]">
      <div className="relative flex items-start h-[135px] px-5 pt-[18px] pb-[15px] mx-[45px] my-10 bg-white rounded-lg shadow-md">
        <input
          type="text"
          placeholder="დაანახე კომენტარი"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="flex-1 p-2 text-gray-500 border-none outline-none bg-transparent"
        />

        <button className="absolute right-5 bottom-[15px] px-4 py-2 text-white bg-purple-600 cursor-pointer rounded-full">
          დაკომენტარე
        </button>
      </div>
      <div className="flex flex-col px-[45px]">
        <div>
          <span>კომენტარები</span> 3
        </div>

        <div className="p-6 min-h-screen">
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-start space-x-4 mb-6">
              <Image src={avatar} alt={task.name} width={40} height={40} />

              <div>
                <p className="font-bold">{comment.name}</p>
                <p className="text-gray-600">{comment.text}</p>

                <div className="flex items-start flex-col">
                  <button className="mt-2 text-purple-500 hover:underline">
                    ↳ პასუხი
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
