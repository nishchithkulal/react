import React from "react";
import ProfileCard from "./ProfileCard";
import "./App.css";

import profile from "./profile.webp";

const App = () => {
  const profilePic = profile;
  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "50px" }}>
        <ProfileCard
          name="Simba"
          bio="Passionate React Developer with a keen eye for design, performance and User Experience"
          profilePic={profilePic}
        />
      </div>
    </div>
  );
};

export default App;
