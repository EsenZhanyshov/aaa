import React, { useEffect, useState } from "react";
import { API } from "./consts/const";
import axios from "axios";

const App = (props) => {
  const [char, setChar] = useState("");
  async function readCharaters() {
    const { data } = await axios(API);
    setChar(data);
  }
  console.log(char);
  useEffect(() => {
    readCharaters();
  }, []);
  const Delete = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      readCharaters();
    } catch (error) {
      console.error("Ошибка при удалении персонажа:", error);
    }
  };
  // console.log(char[0]);
  return (
    <div className="wrapper">
      <div className="container">
        {Array.isArray(char) ? (
          char.map((elem) => (
            <div className="card" key={elem.id}>
              <div className="card__img">
                <img src={elem.image} alt="#" />
              </div>
              <div className="card__info">
                <h2 className="card__title">{elem.name}</h2>
                <p>{elem.status}</p>
                <p>{elem.species}</p>
                <p>{elem.gender}</p>
                <button onClick={() => Delete(elem.id)} className="btn__Delete">
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No characters available</p>
        )}
      </div>
    </div>
  );
};

export default App;
