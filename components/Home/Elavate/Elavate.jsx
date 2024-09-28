import Button from "@/components/Custom/Button";
import Link from "next/link";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Elevate = () => {
  const styles = {
    display: "flex",
    justifyContent: "center",
    backgroundImage: `url("https://i.postimg.cc/5NVmLML6/cta-bg.png")`,
    backgroundSize: "cover", // Adjust based on your preference
    backgroundPosition: "center",
    height: "", // Adjust based on your preference
  };
  return (
    <div className="bg-white relative z-[110] py-10">
      <div
        data-aos="fade-up"
        className="lg:max-w-[1200px] lg:container lg:mx-auto px-[5%] md:px-0 lg:pt-28"
      >
        <div
          style={styles}
          className="flex justify-center items-center min-h-60 lg:h-[30vh] rounded-lg md:rounded-badge"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-[5%]">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-sans font-medium text-white lg:pr-5">
              Elevate Your Brand Today!
            </h2>
            <div>
              <p className="text-white">
                Ready to transform your digital presence? Let&apos;s create
                magic together! book our services now!
              </p>
              <div className="mt-5">
                <Link
                  href={
                    "https://www.google.com/maps/place/Living+Brands/@23.7843436,90.3953062,17z/data=!3m1!4b1!4m6!3m5!1s0x3755c700426d1655:0x8a70d2c34d6aae47!8m2!3d23.7843436!4d90.3953062!16s%2Fg%2F11y5gz5c5_?entry=ttu"
                  }
                  target="_blank"
                >
                  <Button>
                    Book A Call <MdOutlineArrowRightAlt className="text-xl" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Elevate;
