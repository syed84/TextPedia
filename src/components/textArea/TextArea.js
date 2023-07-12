import React, { useState } from "react";

export default function TextArea(props) {
  const onHandleUpClick = () => {
    // console.log("UpperCase was clicked");
    let newText = text.toUpperCase();
    props.showAlert("Converted to Uppercase", "success")
    
    setText(newText);
  };
  
  
  
  const onHandleLowClick = () => {
    // console.log("LowerCase was clicked");
    let newText = text.toLowerCase();
    
    setText(newText);
    props.showAlert("Converted to Lowercase", "success")
  };
  const onHandleToClear = () => {
    // console.log("Clear Text was clicked");
    let newText = "";
    
    setText(newText);
    props.showAlert("Cleared Text", "success")
  };
  
  const onHandleChange = (event) => {
    // console.log("Handle On Change");
    setText(event.target.value);
  };
  
  const onHandleCopy = () => {
    // var text = document.getElementById("myBox");
    // text.select();
    // document.getSelection().removeAllRanges();   //deselection
    // navigator.clipboard.writeText(text.value);
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success")
    
  };
  const onHandleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed Extra Spaces", "success")
    
  };
  const onHandleCapitalize = () => {
    let newText = text.toLowerCase();
    let newText2 = newText.charAt(0).toUpperCase() + newText.slice(1)
    setText(newText2)
    props.showAlert("First letter capitalized", "success")
    
  };

  const [text, setText] = useState("");
  //   text="NewText" //wrong way
  //   setText=("New Text"); //correct way
  let words = text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length;
  return (
    <div>
      <h1 className="mb-3">{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          value={text}
          onChange={onHandleChange}
          rows="8"
          style={{backgroundColor: props.mode === "light" ? "white": "#222", color : props.mode=== "light" ? "#222" : "white"}}
        ></textarea>
      </div>

      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={onHandleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={onHandleLowClick}>Convert to Lowercase</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={onHandleToClear}>Clear Text</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={onHandleCopy}>Copy Text</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={onHandleExtraSpaces}>Remove Extra Spaces</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={onHandleCapitalize}>Capitalize</button>
      <div className="container my-2">
        <h2>Your Text Summary</h2>

        <p>
          {words} words &nbsp; {text.length} characters &nbsp; {words / 125} {" "}
          {words / 125 === 1 ? "minute taken to read" : "minutes taken to read"}
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0  ? text : "Nothing to preview!"}</p>
      </div>
    </div>
  );
}
