"use client";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import image from "../../public/github.jpg";
// import Article from "@/components/layout/Article";
import Svg from "../../public/articleSvg.svg";
import { useState } from "react";
import like from "../../public/like.png";
import disLike from "../../public/dislike.svg";
import eye from "../../public/eyes.svg";
import info from "../../public/info.svg";
import shild from "../../public/shild.svg";
import share from "../../public/share.svg";
import avatar from "../../public/avatar.svg";
import flash from "../../public/flashDown.svg";
import CommentCard from "@/components/commentCard";

import SmallImg from "@/components/imageuser";
import Footer from "@/components/layout/Footer";

export default function ArticlePage() {
  const [copied, setCopied] = useState(false);
  const code = `# --- Hello, World! Example ---
print("Hello, World!")

# --- Function Example: Adding two numbers ---

def add_numbers(num1, num2):
    """
    This function takes two numbers as input and returns their sum.
    """
    sum_result = num1 + num2
    return sum_result

# Calling the function
number_a = 10
number_b = 25
result = add_numbers(number_a, number_b)

print("The sum of", number_a, "and", number_b, "is", result)`;

  function handleCopy() {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }
  type Comment = {
    id: number;
    author: string;
    time: string;
    text: string;
    replies?: Comment[];
  };

  const testComments: Comment[] = [
    {
      id: 1,
      author: "متن نمونه برای عنوان سایت",
      time: "۵ دقیقه قبل",
      text: "متن نمونه برای عنوان سایت متن نمونه برای عنوان سایت متن نمونه برای عنوان سایت",
      replies: [
        {
          id: 2,
          author: "همان نویسنده",
          time: "۳ دقیقه قبل",
          text: "پاسخ نمونه به کامنت بالا",
        },
      ],
    },
    {
      id: 3,
      author: "متن نمونه برای عنوان سایت",
      time: "۴ دقیقه قبل",
      text: "کامنت دیگر برای تست",
    },
  ];
  const [comments] = useState<Comment[]>(testComments);
  return (
    <>
      <Navbar />
      <div className="relative w-full h-[634px]">
        <Image src={image} alt="articleImg" fill />
      </div>
      {/* route info */}
      <div className="bg-[#9CA3AF] flex gap-5 px-10">
        <p>خانه</p>
        <p>{">"}</p>
        <p>مقالات</p>
        <p>{">"}</p>
        <p>پایتون</p>
      </div>
      {/* body */}
      <div className="mt-15 px-10">
        <div className="flex justify-between">
          <div>
            <h2 className="text-5xl font-bold">متن نمونه برای عنوان مقاله</h2>
            <div className="flex gap-10 mt-10">
              <p className="inline-flex items-center gap-2">
                <Image src={avatar} alt="avatar" width={32} height={32} />
                علی ملکی
              </p>
              <p className="inline-flex items-center gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                    fill="black"
                  />
                  <path
                    d="M15.7099 15.93C15.5799 15.93 15.4499 15.9 15.3299 15.82L12.2299 13.97C11.4599 13.51 10.8899 12.5 10.8899 11.61V7.51001C10.8899 7.10001 11.2299 6.76001 11.6399 6.76001C12.0499 6.76001 12.3899 7.10001 12.3899 7.51001V11.61C12.3899 11.97 12.6899 12.5 12.9999 12.68L16.0999 14.53C16.4599 14.74 16.5699 15.2 16.3599 15.56C16.2099 15.8 15.9599 15.93 15.7099 15.93Z"
                    fill="black"
                  />
                </svg>
                8 دقیقه مطالعه
              </p>
              <p className="inline-flex items-center gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 5.75C7.59 5.75 7.25 5.41 7.25 5V2C7.25 1.59 7.59 1.25 8 1.25C8.41 1.25 8.75 1.59 8.75 2V5C8.75 5.41 8.41 5.75 8 5.75Z"
                    fill="black"
                  />
                  <path
                    d="M16 5.75C15.59 5.75 15.25 5.41 15.25 5V2C15.25 1.59 15.59 1.25 16 1.25C16.41 1.25 16.75 1.59 16.75 2V5C16.75 5.41 16.41 5.75 16 5.75Z"
                    fill="black"
                  />
                  <path
                    d="M20.5 9.83997H3.5C3.09 9.83997 2.75 9.49997 2.75 9.08997C2.75 8.67997 3.09 8.33997 3.5 8.33997H20.5C20.91 8.33997 21.25 8.67997 21.25 9.08997C21.25 9.49997 20.91 9.83997 20.5 9.83997Z"
                    fill="black"
                  />
                  <path
                    d="M16 22.75H8C4.35 22.75 2.25 20.65 2.25 17V8.5C2.25 4.85 4.35 2.75 8 2.75H16C19.65 2.75 21.75 4.85 21.75 8.5V17C21.75 20.65 19.65 22.75 16 22.75ZM8 4.25C5.14 4.25 3.75 5.64 3.75 8.5V17C3.75 19.86 5.14 21.25 8 21.25H16C18.86 21.25 20.25 19.86 20.25 17V8.5C20.25 5.64 18.86 4.25 16 4.25H8Z"
                    fill="black"
                  />
                  <path
                    d="M8.5 14.5C8.37 14.5 8.24 14.47 8.12 14.42C8 14.37 7.89001 14.3 7.79001 14.21C7.70001 14.11 7.62999 14 7.57999 13.88C7.52999 13.76 7.5 13.63 7.5 13.5C7.5 13.24 7.61001 12.98 7.79001 12.79C7.89001 12.7 8 12.63 8.12 12.58C8.3 12.5 8.50001 12.48 8.70001 12.52C8.76001 12.53 8.82 12.55 8.88 12.58C8.94 12.6 9 12.63 9.06 12.67C9.11 12.71 9.15999 12.75 9.20999 12.79C9.24999 12.84 9.29999 12.89 9.32999 12.94C9.36999 13 9.40001 13.06 9.42001 13.12C9.45001 13.18 9.47001 13.24 9.48001 13.3C9.49001 13.37 9.5 13.43 9.5 13.5C9.5 13.76 9.38999 14.02 9.20999 14.21C9.01999 14.39 8.76 14.5 8.5 14.5Z"
                    fill="black"
                  />
                  <path
                    d="M12 14.5C11.74 14.5 11.48 14.39 11.29 14.21C11.25 14.16 11.21 14.11 11.17 14.06C11.13 14 11.1 13.94 11.08 13.88C11.05 13.82 11.03 13.76 11.02 13.7C11.01 13.63 11 13.57 11 13.5C11 13.37 11.03 13.24 11.08 13.12C11.13 13 11.2 12.89 11.29 12.79C11.57 12.51 12.02 12.42 12.38 12.58C12.51 12.63 12.61 12.7 12.71 12.79C12.89 12.98 13 13.24 13 13.5C13 13.57 12.99 13.63 12.98 13.7C12.97 13.76 12.95 13.82 12.92 13.88C12.9 13.94 12.87 14 12.83 14.06C12.79 14.11 12.75 14.16 12.71 14.21C12.61 14.3 12.51 14.37 12.38 14.42C12.26 14.47 12.13 14.5 12 14.5Z"
                    fill="black"
                  />
                  <path
                    d="M8.5 18C8.37 18 8.24 17.97 8.12 17.92C8 17.87 7.89001 17.8 7.79001 17.71C7.70001 17.61 7.62999 17.51 7.57999 17.38C7.52999 17.26 7.5 17.13 7.5 17C7.5 16.74 7.61001 16.48 7.79001 16.29C7.89001 16.2 8 16.13 8.12 16.08C8.49 15.92 8.92999 16.01 9.20999 16.29C9.24999 16.34 9.29999 16.39 9.32999 16.44C9.36999 16.5 9.40001 16.56 9.42001 16.62C9.45001 16.68 9.47001 16.74 9.48001 16.81C9.49001 16.87 9.5 16.94 9.5 17C9.5 17.26 9.38999 17.52 9.20999 17.71C9.01999 17.89 8.76 18 8.5 18Z"
                    fill="black"
                  />
                </svg>
                تاریخ انتشار{" "}
              </p>
            </div>
          </div>
          <Image src={Svg} alt="article svg" width={100} height={100} />
        </div>
        {/* text */}
        <p className="mt-10">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
      </div>
      {/* code */}
      <div dir="ltr">
        <div className="relative bg-[#F3F4F6] text-black rounded-xl p-4 text-sm font-mono shadow-lg border border-gray-700 mx-5">
          <div className="absolute top-0 right-0 bg-white text-black text-xs p-3 rounded-bl-2xl rounded-tr-xl">
            پایتون
          </div>

          <button
            onClick={handleCopy}
            className="absolute bottom-4 right-3 text-xs bg-white hover:bg-gray-200  px-7 py-2  rounded transition"
          >
            {copied ? "کپی شد" : "کپی"}
          </button>

          <pre className="whitespace-pre-wrap mt-8 p-5">{code}</pre>
        </div>
      </div>
      <div className="p-4">
        <p className="mt-10">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
      </div>
      <div className="relative max-w-[700px] h-[400px] mx-auto">
        <Image src={image} alt="img" fill />
      </div>
      <div className="p-4 border-b-2 border-[#D1D5DB]">
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
          و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
          در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
          و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
      </div>
      <div className="flex justify-between mt-5 p-5 items-center">
        <div className="inline-flex gap-10">
          <div className="flex gap-2 ">
            <button>
              <SmallImg image={like} alt="like" />
            </button>
            <p>30</p>
          </div>
          <div className="flex gap-2 ">
            <button>
              <SmallImg image={disLike} alt="dislike" />
            </button>
            <p>30</p>
          </div>
          <div className="flex gap-2 ">
            <button>
              <SmallImg image={eye} alt="eye" />
            </button>
            <p>33 بازدید</p>
          </div>
        </div>
        <div className="inline-flex gap-10 items-center">
          <button>
            <div className="flex gap-2 border rounded p-2 hover:bg-gray-200">
              <SmallImg image={info} alt="info" />

              <p>اطلاعات مقاله</p>
            </div>
          </button>
          <div className="flex gap-2 ">
            <button>
              <SmallImg image={shild} alt="shild" />
            </button>
            <p>گزارش</p>
          </div>
          <div className="flex gap-2 ">
            <button>
              <SmallImg image={share} alt="share" />
            </button>
            <p> اشتراک</p>
          </div>
        </div>
      </div>
      <div className="w-full p-4">
        <div className="bg-gray-200 rounded-lg p-4 flex flex-col gap-3 ">
          <textarea
            className="bg-transparent outline-none text-sm text-right resize-none"
            rows={2}
            placeholder="نوشتن کامنت..."
          />

          <div>
            <button className="border border-gray-400 text-sm px-3 py-1 rounded hover:bg-gray-300 transition ">
              ارسال
            </button>
          </div>
        </div>
      </div>
      <div className="p-4 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-2">
          <div className="text-gray-600">کامنت‌ها</div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">۳۰</span>
            <span className="text-sm">جدیدترین</span>
          </div>
        </div>

        {/* Comments List */}
        {comments.map((comment) => (
          <div key={comment.id} className="space-y-3">
            <CommentCard comment={comment} />

            {comment.replies?.map((reply) => (
              <div className="mt-2 mx-[8%]" key={reply.id}>
                <CommentCard comment={reply} isReply />
              </div>
            ))}
          </div>
        ))}
        <div className="flex justify-center mt-10">
          <button className="inline-flex flex-row-reverse hover:translate-y-1">
            دیدن بیشتر
            <SmallImg image={flash} alt="flash" />
          </button>
        </div>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
      {/* <Article /> */}
    </>
  );
}
