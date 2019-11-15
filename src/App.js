import React from "react";
import "./App.css";
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
        console.log("Results", results);
        return results.json();
      })
      .then(data => {
        console.log("Data", data);
        let pictures = data.results[0].email;
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
