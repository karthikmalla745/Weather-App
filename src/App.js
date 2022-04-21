import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import axios from "axios";

function App() {
  const [data, setData] = useState("");
  const [result, setResult] = useState("");

  function changeHandler(e) {
    setData(e.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?appid=ea990e1c137d81fc41cb0dd2dcd58b2b&q=" +
          data.toString()
      )
      .then((res) => {
        const kelvin = res.data.main.temp;
        const celsius = kelvin - 273.15;
        setResult(Math.round(celsius));
        setData("");
      });
    //console.log(data)
  }
  return (
    <div>
      <center>
        <h1>WEATHER APP</h1>
        <br />
        <form onSubmit={submitHandler}>
          <input
            type="text"
            onChange={changeHandler}
            value={data}
            placeholder="enter the city"
          />
          <br />
          <br />
          <Button variant="primary" type="submit">
            Get Temperature
          </Button>
        </form>
        <br />
        <h2>
          Temperature is : <h1>{result}</h1>
        </h2>
      </center>
    </div>
  );
}
export default App;
