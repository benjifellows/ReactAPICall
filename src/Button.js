import React, { Component } from "react";

class Button extends Component {
  constructor() {
    super();
    this.state = {
      pictures: []
    };
  }

  componentDidMount() {
    //     fetch(      "https://7h1a1zzgya.execute-api.eu-west-1.amazonaws.com/test/HelloBenji)
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
  }
  render() {
    return (
      <button>
        <div>{this.state.pictures}</div>
      </button>
    );
  }
}

export default Button;
