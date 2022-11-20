import React from "react";
import "./styles/home.css";
import { Link } from "react-router-dom";
import Axios from "axios";

function Home() {
  const [name, setName] = React.useState("");
  const createRoom = async () => {
    console.log(name);
    let data = { name: name, owner_id: Date.now().toString() };
    const res = await Axios.post(
      "http://localhost:5000/createroom/",
      data
    ).then((res) => {
      res = res;
    });
    console.log(res, "RES");
  };
  return (
    <div className="home">
      <div className="regbox">
        <input
          type="text"
          className="reg-name"
          onChange={(e) => setName(e.target.value)}
        />
        <input type="submit" value="Create room" onClick={createRoom} /> Create
        room
      </div>
    </div>
  );
}

export default Home;
