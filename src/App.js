import React, { useEffect, useState } from "react";
import { API } from "./consts/const";
import axios from "axios";

const App = (props) => {
  const [char, setChar] = useState("");
  async function readCharaters() {
    const { data } = await axios(API);
    setChar(data);
  }
  useEffect(() => {
    readCharaters();
  }, []);
  // console.log(char[0]);
  return (
    <div className="container">
      {char[0]?.map((elem) => (
        <div className="card" key={elem.id}>
          <div className="card__img">
            <img src={elem.image} alt="#" />
          </div>
          <div className="card__info">
            <h2 className="card__title">{elem.name}</h2>
            <p>{elem.status}</p>
            <p>{elem.species}</p>
            <p>{elem.gender}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
