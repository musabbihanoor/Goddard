import React, { Fragment, useEffect, useState } from "react";
import Graph from "./graph";
import "./Mainscreen2.css";

const Mainscreen2 = () => {
  let initData = {
    id: "-",
    details: "-",
    description: "No description",
  };

  let [dtlstate, setdtlstate] = useState(initData);
  const [nav, setNav] = useState("home");

  function shwoDetail(node) {
    console.log(node);
    setdtlstate({
      id: node.id,
      //   details: node.detail,
      //   description: node.description,
    });
  }

  useEffect(() => {
    document.body.style.background = "#096191";
  });
  return (
    <div className='main2'>
      <div>
        <img src={process.env.PUBLIC_URL + "/logo.png"}></img>
        <Fragment>
          <nav>
            <ul>
              <li>
                <button
                  className={`${nav === "home" ? "clicked" : "unclicked"}`}
                >
                  <i
                    className='fa fa-home mx-auto'
                    onClick={() => setNav("home")}
                  ></i>
                  <span className='mx-auto'>Home</span>
                </button>
              </li>
              <li>
                <button
                  className={`${nav === "search" ? "clicked" : "unclicked"}`}
                >
                  <i
                    className='fa fa-search mx-auto'
                    onClick={() => setNav("search")}
                  ></i>
                  <span className='mx-auto'>Search</span>
                </button>
              </li>
              <li>
                <button
                  className={`${nav === "account" ? "clicked" : "unclicked"}`}
                >
                  <i
                    className='fa fa-user-circle mx-auto'
                    onClick={() => setNav("account")}
                  ></i>
                  <span className='mx-auto'>Account</span>
                </button>
              </li>
              <li>
                <button
                  className={`${nav === "help" ? "clicked" : "unclicked"}`}
                >
                  <i
                    className='fa fa-question-circle mx-auto'
                    onClick={() => setNav("help")}
                  ></i>
                  <span className='mx-auto'>Help</span>
                </button>
              </li>
            </ul>
          </nav>
        </Fragment>
      </div>

      <div className='content'>
        <div className='head'>
          <div>
            <label>
              <i className='fa fa-plus-circle'></i>
              <input type='file' style={{ display: "none" }} required></input>
              <span>Add</span>
            </label>
            <label>
              <i className='fa fa-times-circle-o'></i>
              <span>Remove</span>
            </label>
          </div>
          <form>
            <input type='text' placeholder='🔎 Search'></input>
          </form>
        </div>
        <Fragment>
          {nav === "home" && (
            <div className='home'>
              <button onClick={() => setNav("")}>
                {" "}
                <i className='fa fa-times'></i>
              </button>
              <Graph style={{ margin: "" }} dtlUpdate={shwoDetail} />
              <div className='detail'>
                <h1>Paper Detail</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          )}
        </Fragment>
      </div>
    </div>
  );
};

export default Mainscreen2;
