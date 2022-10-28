import React, { useState } from "react";

export default function MainContent(props) {
  const [text, setText] = useState("Enter Text Here");
  let upClick = () => {
    let convertedText = text.toUpperCase();
    setText(convertedText);
  };
  // ---------------------------------------
  let onChange = (event) => {
    setText(event.target.value);
  };
  // ---------------------------------------
  let lowClick = () => {
    let convertedTextTwo = text.toLowerCase();
    setText(convertedTextTwo);
  };
  // ---------------------------------------
  let clearText = () => {
    let newText = "";
    setText(newText);
  };
  // ---------------------------------------
  let inverse = () => {
    let textOne = document.getElementById("box").value;
    let textRev = textOne.split("");
    let reversedArr = textRev.reverse();
    let joinArr = reversedArr.join("");

    setText(joinArr);
  };
  // ---------------------------------------
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="content">
          <textarea
            className="textarea"
            id="box"
            cols="150"
            rows="15"
            value={text}
            onChange={onChange}
          ></textarea>
        </div>
        <button className="btn" onClick={upClick}>
          To UpperCase
        </button>

        <button className="btn" onClick={lowClick}>
          To LowerCase
        </button>

        <button className="btn" onClick={clearText}>
          Clear Text
        </button>

        <button className="btn" onClick={inverse}>
          Reverse
        </button>
      </div>
      <div className="container2">
        <h2>Total Words and Characters</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <div className="prev">
          <h3>Preview:</h3>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
