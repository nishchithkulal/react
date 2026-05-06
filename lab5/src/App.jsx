import React, { useState } from "react";
import FigureList from "./components/FigureList";
import "./App.css";

import reactImg from "./react.jpg";
import mongodbImg from "./mongodb.png";
import nodeImg from "./node.png";

const App = () => {
  const [figures, setFigures] = useState([
    { id: 1, url: reactImg, caption: "React" },
    { id: 2, url: mongodbImg, caption: "Mongo DB" },
    { id: 3, url: nodeImg, caption: "Node JS" },
  ]);

  const addFigure = () => {
    const newFigure = {
      id: Date.now(),
      url: reactImg,
      caption: "New Image",
    };
    setFigures([...figures, newFigure]);
  };

  const removeFigure = (id) => {
    setFigures(figures.filter((figure) => figure.id !== id));
  };

  return (
    <div className="App">
      <h1>Figure Gallery</h1>
      <button onClick={addFigure} className="add-button">
        Add Figures
      </button>
      <FigureList figures={figures} removeFigure={removeFigure} />
    </div>
  );
};

export default App;
