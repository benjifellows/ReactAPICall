import React from 'react';
import './App.css';
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
	return (
  	<div>{props.message}</div>
  );
}

function App() {
	const [response, setResponse] = React.useState(0);
  const makeRequest = () => setResponse(
        fetch('https://7h1a1zzgya.execute-api.eu-west-1.amazonaws.com/default/HelloBenji')
        );
	return (
    <div className = "App">
      <Button onClickFunction={makeRequest}  />

      <Display message={response}/>
    </div>
  );
}



export default App;
