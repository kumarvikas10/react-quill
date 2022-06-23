import React from "react";
import { useState } from "react";
import AddText from "./AddText";
import "./App.css";

function App() {
  const [cover, setCover] = useState("");
  const [picture, setPicture] = useState("");
  const [text, setText] = useState("Enter your first instance");
  const [option, setOption] = useState(false);
  const [textOption, setTextOption] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [container, setContainer] = useState([]);
  const [imgcontainer, setImgContainer] = useState([]);
  const [submitToogle, setSubmitToogle] = useState(false);

  const toggling = () => {
    setOption(!option);
  };

  const submitBtn = () => {
    console.log(submitBtn);
    setSubmitToogle(!submitToogle);
  };

  const onSelctedOption = (value) => () => {
    setSelectedOption(value);
    console.log(selectedOption);
  };

  const changeCover = (e) => {
    console.log("picture: ", picture);
    setCover(URL.createObjectURL(e.target.files[0]));
  };
  const changePicture = (e) => {
    const img = React.createElement("img", {
      className: "img",
      src: URL.createObjectURL(e.target.files[0]),
    });
    const button = React.createElement(
      "button",
      {
        className: "deleteBtn",
        onClick: () => {
          deleteBtn();
        },
      },
      "delete"
    );
    const div = [
      {
        div: React.createElement(
          "div",
          { className: "imageDiv", id: "imageDiv" },
          [button, img]
        ),
      },
      ...imgcontainer,
    ];
    setOption(false);
    console.log("picture: ", picture);
    setPicture(URL.createObjectURL(e.target.files[0]));
    setImgContainer(div);
  };

  const deleteBtn = () => {
    {
      document.getElementById("text") &&
        document.getElementById("text").remove();
    }
    {
      document.getElementById("imageDiv") &&
        document.getElementById("imageDiv").remove();
    }
  };

  const changeText = () => {
    const title = React.createElement("h4", {}, "Enter your Text");
    const textArea = React.createElement(
      "textarea",
      {
        onChange: (e) => {
          setText(e.target.value);
        },
      },
      `${text}`
    );
    const button = React.createElement(
      "button",
      {
        className: "deleteBtn",
        onClick: () => {
          deleteBtn();
        },
      },
      "delete"
    );
    const div = [
      {
        div: React.createElement("div", { className: "text", id: "text" }, [
          button,
          title,
          textArea,
        ]),
      },
      ...container,
    ];
    setContainer(div);
    setOption(false);
    setTextOption(true);
  };
  console.log(container);
  return (
    <div className="App">
      <h1>React Quill</h1>
      <div className="profile">
        <h3>Profile</h3>
        <div className="main">
          <div className="profilesection">
            <h4>Choose Your Cover Page</h4>
            {cover.length == 0 ? (
              <div className="imagebox">
                <div className="imageicon">
                  <i class="fa-solid fa-image"></i>
                </div>
                <div className="imagebtn">
                  <input
                    class="profilePic"
                    type="file"
                    onChange={changeCover}
                  />
                </div>
              </div>
            ) : (
              <div className="profileavtar">
                <img className="profilepic" src={cover}></img>
              </div>
            )}
          </div>
          <div className="plussection">
            {submitToogle ? (
              <div>{text}</div>
            ) : (
              <>
                {picture.length === 0 ? null : (
                  <>
                    {imgcontainer.map((item) => {
                      return <div>{item.div}</div>;
                    })}
                  </>
                )}
                {textOption ? (
                  <>
                    {container.map((item) => {
                      return <AddText  item={item}/>
                    })}
                  </>
                ) : null}
              </>
            )}
          </div>
          <div className="dropdownContainer">
            {submitToogle ? null : (
              <>
                <i class="fa-solid fa-plus icon" onClick={toggling}>
                  <span className="option"></span>
                </i>
                <div className="dropdownHeader">
                  {option && (
                    <ul className="dropdownList">
                      <li
                        className="listItem"
                        onClick={onSelctedOption(option)}
                      >
                        <i class="fa-solid fa-file-image"></i>
                        <input
                          className="addimage"
                          type="file"
                          id="img"
                          onChange={changePicture}
                        />
                      </li>
                      <li
                        className="listItem"
                        onClick={onSelctedOption(option)}
                      >
                        <i class="fa-solid fa-file-image"></i>
                        <button onClick={changeText}>Add Text</button>
                      </li>
                    </ul>
                  )}
                </div>
              </>
            )}
            <button
              className="submitBtn"
              onClick={() => {
                submitBtn();
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
