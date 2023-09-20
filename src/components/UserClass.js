import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {
        name: "Demo",
        avatar_url: "demo.svg",
      },
    };
    console.log(this.props.name + " Child Constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + " Child componentDidMount() called");
    const data = await fetch("https://api.github.com/users/vinay-525");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });

    this.timer = setInterval(() => {
      console.log("update class");
    }, 1000);
  }

  componentDidUpdate() {
    console.log(this.props.name + " Child componentDidUpdate() called");
  }

  componentWillUnmount() {
    console.log(this.props.name + " Child componentWillUnmount called");
    clearInterval(this.timer);
  }

  render() {
    const { name, avatar_url } = this.state.userInfo;

    console.log(this.props.name + " Child Render");

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h1>{name}</h1>
      </div>
    );
  }
}

export default UserClass;
