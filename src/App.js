import React from "react";
import "./App.css";
// import Background from "./Background.js";
// import Button from "./Button.js";
//import { makeStyles, useTheme } from '@material-ui/core/styles'

function Button(props) {
  // const handleClick = () => setCounter(counter+1);

  return (
    <button className="Button" onClick={props.onClickFunction}>
      Call API
    </button>
  );
}

function Display(props) {
  return <div>{props.message}</div>;
}

function App() {
  const [response, setResponse] = React.useState("test");
  const makeRequest = () =>
    fetch("https://randomuser.me/api/?results=1")
      .then(results => {
        return results.json();
      })
      .then(data => {
        console.log(data);

        let pictures = data.results[0].email;
        console.log("state", pictures);
        setResponse(pictures);
      });

  return (
    <div className="App">
      <Button onClickFunction={makeRequest} />
      <Display message={response} />
    </div>
  );
}
export default App;
