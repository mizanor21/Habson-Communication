import Video from "next-video";
import intro from "@/videos/intro.mp4";
const IntroVideo = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      {/* <Video src={intro} autoPlay loop muted /> */}
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/uwfP_WdNK2E?si=6xeDD_wAdQ4kmk2w"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default IntroVideo;
