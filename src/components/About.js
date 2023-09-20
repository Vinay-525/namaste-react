import React from "react";
import UserClass from "./UserClass";
import User from "./User";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("Parent ComponentDidMount called()");
    this.timer = setInterval(() => {
      console.log("settimeout");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Parent ComponentDidUpdate() called");
  }

  componentWillUnmount() {
    console.log("Parent componentWillUnmount called()");
    clearInterval(this.timer);
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Us</h1>
        <h2>This is Namaste React Web Series 🚀</h2>
        <h2>{this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count Increase
        </button>
        <User
          name="First"
          email="vinaybansalvinay@gmail.com"
          instagram="vinay123"
        />
        <UserClass
          name="Second"
          email="vinaybansalvinay@gmail.com"
          instagram="vinay123"
        />
      </div>
    );
  }
}

export default About;
