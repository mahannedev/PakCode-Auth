import Image from "next/image";

const Article = ({
  title,
  content,
  image,
  date,
  author,
  category,
}: {
  title: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
}) => {
  return (
    <div className="border-3 border-black">
      <div className="container-fluid">
        <Image src={image} alt={title} width={4000} height={4000} />
      </div>
      <div className="container mx-auto p-8">
        <div className="column flex space-x-4 items-center p-4">
          <span className="bg-gray-200 text-gray-500 px-4 py-2 rounded-xl">
            {category}
          </span>
          <span className="bg-gray-200 text-gray-500 px-4 py-2 rounded-xl">
            {category}
          </span>
          <span>{date}</span>
        </div>
        <div className="column p-4 space-y-4">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p>{content}</p>
        </div>
        <div className="p-4 flex justify-between items-center">
          <div className="items-center flex space-x-4">
            <Image src={"/globe.svg"} alt={title} width={20} height={20} />
            <h1 className="text-sm font-bold">{author}</h1>
          </div>
          <div className="items-center flex space-x-4">
            <Image src={"/like.png"} alt={title} width={20} height={20} />
            <Image src={"/comment.png"} alt={title} width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
