import React from "react";
import "./_loginScreen.scss";

const LoginScreen = () => {
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
          alt="Youtube Logo"
        />
        <button>Login with Google</button>
        <p>Youtube Clone made with React and youtube Data API.</p>
      </div>
    </div>
  );
};

export default LoginScreen;
