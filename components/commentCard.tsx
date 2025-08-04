import like from "../public/like.png";
import dislike from "../public/dislike.svg";
import avatar from "../public/avatar.svg";
import answer from "../public/answer.svg";
import Image from "next/image";
import SmallImg from "./imageuser";

interface commentProps {
  comment: {
    author: string;
    time: string;
    text: string;
  };
  isReply?: boolean;
}
export default function CommentCard({ comment }: commentProps) {
  return (
    <div className="bg-white flex gap-2 items-start">
      {/* Avatar */}
      <div className="pt-1">
        <Image src={avatar} alt="avatar" width={32} height={32} />
      </div>

      {/* Content */}
      <div className="flex-1 space-y-1 text-sm text-gray-800">
        <div className="font-bold">{comment.author}</div>
        <div className="text-xs text-gray-400">{comment.time}</div>
        <div>{comment.text}</div>

        {/* Actions */}
        <div className="flex gap-4 text-xs text-gray-500 mt-1">
          <button className="hover:text-blue-500 flex items-center gap-1">
            <SmallImg image={answer} alt="answer" /> پاسخ
          </button>
          <div className="flex items-center gap-1">
            <SmallImg image={like} alt="like" /> <span>۳۰</span>
          </div>
          <div className="flex items-center gap-1">
            <SmallImg image={dislike} alt="dislike" /> <span>۰</span>
          </div>
        </div>
      </div>
    </div>
  );
}
