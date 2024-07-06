import React, { useState } from "react";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { FiCamera } from "react-icons/fi";
import Button from "./Button";

const Home = () => {
  const [activeButton, setActiveButton] = useState("User");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="home-main">
      <div className="btn-container">
        <Button
          name="Home"
          icon={<IoHomeOutline />}
          isActive={activeButton === "Home"}
          onClick={() => handleButtonClick("Home")}
        />
        <Button
          name="Camera"
          icon={<FiCamera />}
          isActive={activeButton === "Camera"}
          onClick={() => handleButtonClick("Camera")}
        />
        <Button
          name="User"
          icon={<FaRegUser />}
          isActive={activeButton === "User"}
          onClick={() => handleButtonClick("User")}
        />

        <Button
          name="Chat"
          icon={<AiOutlineMessage />}
          isActive={activeButton === "Chat"}
          onClick={() => handleButtonClick("Chat")}
        />
        <Button
          name="Settings"
          icon={<IoSettingsOutline />}
          isActive={activeButton === "Settings"}
          onClick={() => handleButtonClick("Settings")}
        />
      </div>
    </div>
  );
};

export default Home;
