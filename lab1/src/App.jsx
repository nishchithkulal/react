import React from "react";
import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <h1>{text || "Type Something.."}</h1>
      <input
        type="text"
        placeholder="Type Something.."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
    </div>
  );
};

export default App;
