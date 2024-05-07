import { useState } from "react";

export default function App() {
  const [slack, setSlack] = useState("");
  const [trello, setTrello] = useState("");
  const [discord, setDiscord] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [google, setGoogle] = useState("");
  function handlegoogle() {
    setGoogle("you clicked google");
  }
  function handlegithub() {
    setGithub("you clicked github");
  }
  function handlelinkedin() {
    setLinkedin("you clicked linkedin");
  }
  function handlediscord() {
    setDiscord(" you clicked Discord");
  }
  function handletrello() {
    setTrello("you clicked Trello");
  }

  function handleslack() {
    setSlack("you clicked slack");
  }

  const [toggle, setToggle] = useState(false);
  function handletoggle() {
    setToggle((tg) => !tg);
    handleslack();
  }
  const [toggle1, setToggle1] = useState(false);
  function handletoggle1() {
    setToggle1((tg) => !tg);
    handletrello();
  }
  const [toggle2, setToggle2] = useState(false);
  function handletoggle2() {
    setToggle2((tg) => !tg);
    handlediscord();
  }
  const [toggle3, setToggle3] = useState(false);
  function handletoggle3() {
    setToggle3((tg) => !tg);
    handlelinkedin();
  }
  const [toggle4, setToggle4] = useState(false);
  function handletoggle4() {
    setToggle4((tg) => !tg);
    handlegithub();
  }
  const [toggle5, setToggle5] = useState(false);
  function handletoggle5() {
    setToggle5((tg) => !tg);
    handlegoogle();
  }
  return (
    <div className="container">
      <div className="card">
        <h1> Apps</h1>
        <hr class="firsthr" />
        <Listapp
          handleslack={handleslack}
          toggle={toggle}
          handletoggle={handletoggle}
          handletoggle1={handletoggle1}
          handletoggle2={handletoggle2}
          toggle1={toggle1}
          toggle2={toggle2}
          toggle3={toggle3}
          toggle4={toggle4}
          toggle5={toggle5}
          handletoggle3={handletoggle3}
          handletoggle4={handletoggle4}
          handletoggle5={handletoggle5}
        />
        <Button
          slack={slack}
          handletoggle={handletoggle}
          toggle={toggle}
          trello={trello}
          toggle1={toggle1}
          toggle2={toggle2}
          discord={discord}
          linkedin={linkedin}
          toggle3={toggle3}
          toggle4={toggle4}
          github={github}
          google={google}
          toggle5={toggle5}
        />
      </div>
    </div>
  );
}

function Button({
  slack,
  toggle,
  trello,
  toggle1,
  discord,
  toggle2,
  linkedin,
  toggle3,
  toggle4,
  github,
  google,
  toggle5,
}) {
  const add = "Add More Apps";

  return (
    <>
      <br />
      <hr />
      <button>
        {toggle
          ? slack
          : add && toggle1
          ? trello
          : add && toggle2
          ? discord
          : add && toggle3
          ? linkedin
          : add && toggle4
          ? github
          : add && toggle5
          ? google
          : add}
      </button>
    </>
  );
}

function Listapp({
  handletoggle,
  toggle,
  toggle1,
  toggle2,
  toggle3,
  toggle4,
  toggle5,
  handletoggle1,
  handletoggle2,
  handletoggle3,
  handletoggle4,
  handletoggle5,
}) {
  return (
    <div className="app">
      <div
        className={toggle ? "first one-name toggle" : "first one-name"}
        onClick={handletoggle}
      >
        <i
          className="fa-brands fa-slack fa-spin-pulse"
          style={{ color: "#63E6BE" }}
        ></i>
        <p>Slack</p>
      </div>

      <div
        className={toggle1 ? " second one-name toggle " : "second one-name"}
        onClick={handletoggle1}
      >
        <i className="fa-brands fa-trello" style={{ color: "#74C0FC" }}></i>
        <p>Trello</p>
      </div>

      <div
        className={toggle2 ? "third one-name toggle" : "third one-name"}
        onClick={handletoggle2}
      >
        <i className="fa-brands fa-discord" style={{ color: "#B197FC" }}></i>
        <p>Discord</p>
      </div>

      <div
        className={toggle3 ? "fouth one-name toggle" : "fouth one-name"}
        onClick={handletoggle3}
      >
        <i className="fa-brands fa-linkedin"></i>
        <p>linkedin</p>
      </div>

      <div
        className={toggle4 ? "fith one-name toggle" : "fith one-name"}
        onClick={handletoggle4}
      >
        <i className="fa-brands fa-github"></i>
        <p>Github</p>
      </div>

      <div
        className={toggle5 ? "fith one-name toggle" : "fith one-name"}
        onClick={handletoggle5}
      >
        <i className="fa-brands fa-google"></i>
        <p>Google</p>
      </div>
    </div>
  );
}
