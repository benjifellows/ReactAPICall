import React, { Component } from "react";
import "./App.css";
import Background from "./Background.js";
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
  const [response, setResponse] = React.useState(0);
  const makeRequest = () =>
    fetch("https://randomuser.me/api/?results=1")
      .then(results => {
        return results.json();
      })
      .then(data => {
        console.log(data);

        let pictures = data.results.map(pic => {
          return <div key={pic.results}>{pic.email}</div>;
        });
        this.setState({ pictures: pictures });
        console.log("state", this.state.pictures);
      });
  return (
    <div className="App">
      <Button onClickFunction={makeRequest} />
      <Display message={response} />
      <Splash />
    </div>
  );
}
export default App;

class Splash extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div className="bodydiv">
        <div className="titlediv"></div>
        <Background />
      </div>
    );
  }
}
