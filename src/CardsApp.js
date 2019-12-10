import React from "react";
import "./CardsApp.css";

const testData = [
  {
    name: "Dan Abramov",
    avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
    company: "@facebook"
  },
  {
    name: "Sophie Alpert",
    avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
    company: "Humu"
  },
  {
    name: "Sebastian Markbåge",
    avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
    company: "Facebook"
  }
];

class Form extends React.Component {
  state = { userName: "" };
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.userName);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="GitHub username"
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          required
        />
        <button>Add Card</button>
      </form>
    );
  }
}
class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className="github-pro" style={{ margin: "1rem" }}>
        <img style={{ width: "75px" }} src={profile.avatar_url} />
        <div
          className="info"
          style={{ display: "inline-block", marginLeft: 10 }}
        >
          <div className="name" style={{ fontSize: "125%" }}>
            {profile.name}
          </div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}

const CardList = props => (
  <div>
    {props.profiles.map(profile => (
      <Card {...profile} />
    ))}
  </div>
);

class CardsApp extends React.Component {
  constructor(props) {
    super();
    this.state = { profiles: testData };
  }

  // state = { profiles: testData };

  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default CardsApp;
