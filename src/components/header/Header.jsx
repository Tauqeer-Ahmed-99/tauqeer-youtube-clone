import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";

import "./_header.scss";

const Header = ({ handleToggleSideBar }) => {
  return (
    <div class="header">
      <FaBars
        className="header__menu"
        size={26}
        onClick={handleToggleSideBar}
      />
      <img
        src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
        alt="Youtube Logo"
        className="header__logo"
      />
      <form>
        <input type="text" placeholder="Search" />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>

      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img
          src="https://cdn.discordapp.com/attachments/294742173889331200/911713751894491206/pngegg.png"
          alt="Avatar Logo"
        />
      </div>
    </div>
  );
};

export default Header;
