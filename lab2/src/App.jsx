import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Header title="Welcome to my react app" />
      <main className="content">
        <p>
          This is the main content of the app.Create React App (CRA) is a tool
          that helps developers quickly start a React project
        </p>
      </main>
      <Footer copyright="CSD@CEC" tagline="React Lab" />
    </div>
  );
};

export default App;
