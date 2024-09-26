// import ReactPlayer from "react-player";

const VideoSection = () => {
  return (
    <div className="video-container w-full h-60 md:h-screen">
      {/* <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/CUTNgE4NPPg?si=vlqpjX_W9PXgUfr3"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe> */}
      <video
        className=" h-[100%] top-0 left-0 w-full md:h-full object-cover" // Fullscreen & responsive
        autoPlay
        loop
        muted
      >
        <source src="/videos/career1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoSection;
