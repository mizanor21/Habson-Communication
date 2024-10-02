import Button from "@/components/Custom/Button";
import Link from "next/link";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Journey = () => {
  const styles = {
    display: "flex",
    justifyContent: "center",
    backgroundImage: `url('https://i.postimg.cc/y8X6x0BD/cta-2-bg.png')`,
    backgroundSize: "cover", // Adjust based on your preference
    backgroundPosition: "center", // Adjust based on your preference
  };
  return (
    <div className="bg-white relative z-[110]">
      <div className=" flex justify-center items-center px-[5%] py-10 lg:pt-36">
        <div
          style={styles}
          className="flex lg:max-w-[1200px] justify-center items-center min-h-60 lg:h-[40vh] rounded-lg md:rounded-badge"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-[5%] items-center py-10">
            <div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-sans font-medium text-white">
                Start Your Journey With Us Now
              </h2>

              <div className="mt-5">
                <Link
                  href={
                    "https://www.google.com/maps/place/Living+Brands/@23.7843436,90.3953062,17z/data=!3m1!4b1!4m6!3m5!1s0x3755c700426d1655:0x8a70d2c34d6aae47!8m2!3d23.7843436!4d90.3953062!16s%2Fg%2F11y5gz5c5_?entry=ttu"
                  }
                  target="_blank"
                >
                  <Button className="text-white">
                    Start Now <MdOutlineArrowRightAlt className="text-xl" />
                  </Button>
                </Link>
              </div>
            </div>
            <h2 className="text-4xl lg:text-6xl font-sans font-medium text-white lg:px-20">
              <img
                className="w-44 md:max-w-60 mt-5 md:mt-5 "
                src="https://i.postimg.cc/fRhTM844/cta-round.png"
                alt=""
              />
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
