import { useState } from "react";

export default function App() {
  const [slack, setSlack] = useState("");
  const [trello, setTrello] = useState("");
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
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const [toggle5, setToggle5] = useState(false);
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
          toggle1={toggle1}
          setToggle1={setToggle1}
          toggle2={toggle2}
          setToggle2={setToggle2}
          toggle3={toggle3}
          setToggle3={setToggle3}
          toggle4={toggle4}
          setToggle4={setToggle4}
          toggle5={toggle5}
          setToggle5={setToggle5}
        />
        <Button
          slack={slack}
          handletoggle={handletoggle}
          toggle={toggle}
          trello={trello}
          toggle1={toggle1}
        />
      </div>
    </div>
  );
}

function Button({ slack, toggle, trello, toggle1 }) {
  const add = "Add More Apps";
  // console.log(trello);
  console.log(toggle1);

  return (
    <>
      <br />
      <hr />
      <button>{toggle ? slack : add && toggle1 ? trello : add}</button>
    </>
  );
}

function Listapp({
  handletoggle,
  toggle,
  toggle1,
  setToggle1,
  toggle2,
  setToggle2,
  toggle3,
  setToggle3,
  toggle4,
  setToggle4,
  toggle5,
  setToggle5,
  handletoggle1,
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
        onClick={() => setToggle2((tg) => !tg)}
      >
        <i className="fa-brands fa-discord" style={{ color: "#B197FC" }}></i>
        <p>Discord</p>
      </div>

      <div
        className={toggle3 ? "fouth one-name toggle" : "fouth one-name"}
        onClick={() => setToggle3((tg) => !tg)}
      >
        <i className="fa-brands fa-linkedin"></i>
        <p>linkedin</p>
      </div>

      <div
        className={toggle4 ? "fith one-name toggle" : "fith one-name"}
        onClick={() => setToggle4((tg) => !tg)}
      >
        <i className="fa-brands fa-github"></i>
        <p>Github</p>
      </div>

      <div
        className={toggle5 ? "fith one-name toggle" : "fith one-name"}
        onClick={() => setToggle5((tg) => !tg)}
      >
        <i className="fa-brands fa-google"></i>
        <p>Google</p>
      </div>
    </div>
  );
}
