import MeetOurTeam from "@/components/About/MeetOurTeam";

const page = () => {
  return (
    <div className=" relative z-[110] bg-white">
      <div className="flex justify-center my-20 ">
        <h2 className="text-2xl  md:text-5xl font-bold text-[#125b5c]">
          Out Team
        </h2>
      </div>
      <div className="mx-4 lg:mx-72">
        <MeetOurTeam />
      </div>
    </div>
  );
};

export default page;
