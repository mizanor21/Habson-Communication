import Link from "next/link";

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
    <div
      data-aos="fade-up"
      className="lg:max-w-[1000px] lg:container lg:mx-auto mx-3 lg:mt-28"
    >
      <div
        style={styles}
        className="flex justify-center items-center min-h-60 lg:h-[30vh] rounded-badge"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-10">
          <h2 className="text-4xl lg:text-5xl font-sans font-medium text-white lg:pr-5">
            Elevate Your Brand Today!
          </h2>
          <div>
            <p className="text-white">
              Ready to transform your digital presence? Let&apos;s create magic
              together! book our services now!
            </p>
            <div className="mt-5">
              <Link
                href={
                  "https://www.google.com/maps/place/Living+Brands/@23.7843436,90.3953062,17z/data=!3m1!4b1!4m6!3m5!1s0x3755c700426d1655:0x8a70d2c34d6aae47!8m2!3d23.7843436!4d90.3953062!16s%2Fg%2F11y5gz5c5_?entry=ttu"
                }
                target="_blank"
                className="bg-white rounded-full mt-5 px-6 py-2 text-[#185C5D] hover:text-white hover:bg-[#1d7374] font-semibold"
              >
                Book A Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Elevate;
