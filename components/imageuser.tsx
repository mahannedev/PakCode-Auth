import Image, { StaticImageData } from "next/image";
type props = {
  image: StaticImageData;
  alt: string;
};
export default function SmallImg({ image, alt }: props) {
  return (
    <>
      <Image src={image} alt={alt} width={24} height={24} />
    </>
  );
}
