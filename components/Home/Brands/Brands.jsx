import { cn } from "@/lib/utils";
import "./Brands.css";
import Image from "next/image";

const reviews = [
  {
    img: "https://i.postimg.cc/XYnP8q4S/l-1.png",
  },
  {
    img: "https://i.postimg.cc/VLqTnnyW/l-10.png",
  },
  {
    img: "https://i.postimg.cc/28RM1Tt5/l-12.png",
  },
  {
    img: "https://i.postimg.cc/SQzHQHD5/l-13.png",
  },
  {
    img: "https://i.postimg.cc/RhfYPnW9/l-14.png",
  },
  {
    img: "https://i.postimg.cc/76jcMNYm/l-17.png",
  },

  {
    img: "https://i.postimg.cc/mDPJHnRP/l-18.png",
  },
  {
    img: "https://i.postimg.cc/HLZFjmGG/l-2.png",
  },
  {
    img: "https://i.postimg.cc/HLsfpxh4/l-21.png",
  },
];

const Brands2 = [
  {
    img: "https://i.postimg.cc/BnCr9DMn/l-23.png",
  },
  {
    img: "https://i.postimg.cc/dVFbxnRf/l-24.png",
  },
  {
    img: "https://i.postimg.cc/zXTm74hW/l-25.png",
  },
  {
    img: "https://i.postimg.cc/Hn7zYDmt/l-8.png",
  },

  {
    img: "https://i.postimg.cc/T2zMrTKf/l-26.png",
  },
  {
    img: "https://i.postimg.cc/nVjfjXc3/l-3.png",
  },
  {
    img: "https://i.postimg.cc/3Rq9QrsR/l-5.png",
  },
  {
    img: "https://i.postimg.cc/s1dc16DC/l-6.png",
  },
  {
    img: "https://i.postimg.cc/d13nfZSp/l-7.png",
  },
];

// Duplicate the reviews to create a seamless loop
const duplicatedReviews = [...reviews, ...reviews];

const ReviewCard = ({ img, name, body }) => {
  return (
    <figure className={cn("relative cursor-pointer overflow-hidden")}>
      <div className="flex flex-row items-center gap-5"></div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
      <Image
        className="h-16 w-auto object-cover"
        width="200"
        height="100"
        alt={name}
        src={img}
      />
    </figure>
  );
};

const BrandsCard2 = ({ img, name, body }) => {
  return (
    <figure className={cn("relative cursor-pointer overflow-hidden")}>
      <div className="flex flex-row items-center gap-5"></div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
      <Image
        className="h-16 w-auto object-cover"
        width="200"
        height="100"
        alt={name}
        src={img}
      />
    </figure>
  );
};

const Brands = () => {
  return (
    <div className="bg-white z-[9999] relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden border bg-background md:shadow-xl">
      {/* Continuous Marquee */}
      <div className="marquee-container">
        <div className="marquee-content">
          {duplicatedReviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
      {/* Reverse Marquee */}
      <div className="marquee-container mt-10">
        <div className="marquee-content reverse">
          {duplicatedReviews.map((review, index) => (
            <BrandsCard2 key={index} {...review} />
          ))}
        </div>
      </div>
      {/* Shadow Gradient on the sides */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};

export default Brands;
