import React, { useState } from "react";

const ProfileCard = ({ name, bio, profilePic }) => {
  const [bgColor, setBgColor] = useState("white");

  const colorChange = (color) => setBgColor(color);

  return (
    <div
      className="profile-card"
      style={{ backgroundColor: bgColor }}
      onMouseEnter={() => colorChange("lightgreen")}
      onMouseLeave={() => colorChange("white")}>
      <img src={profilePic} alt={name} className="profile-picture" />
      <p className="profile-name">{name}</p>
      <p className="profile-bio">{bio}</p>
    </div>
  );
};

export default ProfileCard;
