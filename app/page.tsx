import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import BoxFilter from "@/components/HomePage/BoxFilter";
import Footer from "@/components/layout/Footer";
import Article from "@/components/layout/Article";

export default function Home() {
  const article = [
    {
      title: "متن نمونه برای عناوین سایت",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. تولید سادگی نامفهوم و ساده برای استفاده در طراحی سایت.",
      image: "/image.png",
      date: "2023-01-01",
      author: "علی رضا",
      category: "تکنولوژی",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده در ستون و سطرآنچنان که لازم استدر ستون و سطرآنچنان لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده در ستون و سطرآنچنان که لازم استدر ستون و سطرآنچنان که لازم استدر ستون و سطرآنچنا صنعت چاپ و با استفاده در ستون و سطرآنچنان که لازم استدر ستون و سطرآنچنان که لازم استدر ستون و سطرآنچنا صنعت چاپ و با استفاده در ستون و سطرآنچنان که لازم استدر ستون و سطرآنچنان که لازم استدر ستون و سطرآنچنا",
      tags: ["تکنولوژی", "طراحی", "برنامه‌نویسی"],
    },
    {
      title: "متن نمونه برای عناوین سایت",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. تولید سادگی نامفهوم و ساده برای استفاده در طراحی سایت.",
      image: "/image.png",
      date: "2023-01-01",
      author: "علی رضا",
      category: "تکنولوژی",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده در ستون و سطرآنچنان که لازم استدر ستون و سطرآنچنان لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده در ستون و سطرآنچنان که لازم استدر ستون و سطرآنچنان که لازم استدر ستون و سطرآنچنا صنعت چاپ و با استفاده در ستون و سطرآنچنان که لازم استدر ستون و سطرآنچنان که لازم استدر ستون و سطرآنچنا صنعت چاپ و با استفاده در ستون و سطرآنچنان که لازم استدر ستون و سطرآنچنان که لازم استدر ستون و سطرآنچنا",
      tags: ["تکنولوژی", "طراحی", "برنامه‌نویسی"],
    },
  ];

  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-42 flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900">
            متن نمونه برای عناوین سایت
          </h1>
          <div className="max-w-md mx-auto text-xl text-gray-700 leading-relaxed p-10">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. تولید
              سادگی نامفهوم و ساده برای استفاده در طراحی سایت. test
            </p>
          </div>
        </div>
      </main>
      <BoxFilter />
      <article className="container mx-auto py-24 space-y-24">
        {article.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <Article
              title={item.title}
              content={item.content}
              image={item.image}
              date={item.date}
              author={item.author}
              category={item.category}
            />
          </div>
        ))}
      </article>
      <Footer />
    </div>
  );
}
