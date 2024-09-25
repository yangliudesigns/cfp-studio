import "./Video.scss";
import videoSrc from "../../assets/videos/behind-the-scenes.mp4";


export default function Video() {
  return (
    <div className="video-background">
        <video
            className="background-video"
            autoPlay
            loop
            muted
            playsInline
        >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
  )
}
