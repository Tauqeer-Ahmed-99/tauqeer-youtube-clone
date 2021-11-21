import { AiFillEye } from "react-icons/ai";

import "./_video.scss";

const Video = () => {
  return (
    <div className="video">
      <div className="video__top">
        <img
          src="https://i.ytimg.com/vi/A0wcdnzzyIE/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB00BMZxzeVgHDUtg2qLjUPZ-4S8g"
          alt="Thumbnail"
        />
        <span>6:06</span>
      </div>
      <div className="video__title">Youtube Clone Video</div>
      <div className="video__details">
        <span>
          <AiFillEye /> 89m Views •
        </span>

        <span>2 days ago</span>
      </div>
      <div className="video__channel">
        <img
          src="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s68-c-k-c0x00ffffff-no-rj"
          alt="Channel Logo"
        />
        <p>React App Channel</p>
      </div>
    </div>
  );
};

export default Video;
