"use client";
import { useState } from "react";
import { CommentType } from "../../../typings";
import Image from "next/image";
import left from "../../../public/Left 2.svg";
import { postCommentAction, postSubComment } from "../../../actions";
import user from "../../../public/commentAvatar.svg";
import user2 from "../../../public/subComment.svg";

export default function Comment({
  taskComment,
  id,
}: {
  taskComment: CommentType[];
  id: string;
}) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<CommentType[]>(taskComment);

  async function handleComment() {
    const data = await postCommentAction(id, comment);

    setComment("");
    setComments((prev) => [...prev, data]);
    window.location.reload();
  }

  function handleSubComment(parentId: number | null, comment: string) {
    postSubComment(id, parentId, comment);
    setComment("");
  }

  return (
    <div className="flex flex-col bg-[#F8F3FEA6] text-black h-[975px] w-[741px] border-[1px] border-[#DDD2FF] rounded-[10px]">
      <div className="relative flex items-start  px-5 pt-[18px] pb-[15px]  mx-[45px] my-10 bg-white rounded-lg shadow-md">
        <textarea
          minLength={5}
          maxLength={255}
          placeholder="დაანახე კომენტარი"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="flex-1 p-2 text-gray-500  border-none !h-[135px] outline-none bg-transparent"
        />

        <button
          onClick={handleComment}
          className="absolute right-5 bottom-[15px] px-4 py-2 active:bg-[#B588F4] text-white bg-[#8338EC] cursor-pointer rounded-full"
        >
          დააკომენტარე
        </button>
      </div>
      <div className="flex flex-col px-[45px]  overflow-hidden ">
        <div
          className="mt-6 overflow-y-auto 
"
        >
          <div className="flex items-center gap-2">
            <span className="font-bold">კომენტარები</span>
            <span className=" bg-[#8338EC] text-white px-2 py-[1px] rounded-full text-[14px]">
              {taskComment.length}
            </span>
          </div>

          <div className="mt-4">
            {comments.length > 0 &&
              comments.map((item) => (
                <div key={item.id} className="flex flex-col mb-6">
                  <div className="flex items-start space-x-4">
                    <Image
                      src={user}
                      // src={item.author_avatar}
                      alt="avatar"
                      width={38}
                      height={38}
                      className="object-cover w-[38px] h-[38px] rounded-full"
                    />
                    <div className="flex flex-col">
                      <p className="font-bold">{item.author_nickname}</p>
                      <p className="text-gray-600">{item.text}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleSubComment(item.id, comment)}
                    className="flex items-center gap-1 ml-12 mt-2 cursor-pointer hover:underline text-[#8338EC]"
                  >
                    <Image
                      src={left}
                      alt="answer icon"
                      width={16}
                      height={16}
                    />
                    <p className="active:text-[#B588F4]">უპასუხე</p>
                  </button>

                  {item?.sub_comments?.length > 0 && (
                    <div className="flex items-start space-x-4 ml-12 mt-3">
                      <Image
                        src={user2}
                        // src={item.sub_comments[0].author_avatar}
                        alt="avatar"
                        width={38}
                        height={38}
                        className="object-cover w-[38px] h-[38px] rounded-full"
                      />
                      <div className="flex flex-col">
                        <p className="font-bold">
                          {item.sub_comments[0].author_nickname}
                        </p>
                        <p className="text-gray-600">
                          {item.sub_comments[0].text}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
