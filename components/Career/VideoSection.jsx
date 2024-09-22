// import ReactPlayer from "react-player";

const VideoSection = () => {
  return (
    <div className="video-container w-full h-screen">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/CUTNgE4NPPg?si=vlqpjX_W9PXgUfr3"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoSection;
