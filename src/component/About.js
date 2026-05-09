import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    this.timer = null;
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Mounted");
    let i = 1;
    this.timer = setInterval(() => {
      console.log("Namaskaram React", i++);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Parent Component Unmounted");
  }

  render() {
    // console.log("Parent Rendered");
    return (
      <div className="about">
        <h1>This is About Us Page.</h1>
        <h1> Apka Swagat hai...!</h1>
        <div className="user-details">
          <User
            name={"Ritik Functional"}
            location={"Bangalore Functional"}
            contact={"@CRitik100 Functional"}
          />

          <UserClass
            name={"Ritik Class"}
            location={"Bangalore Class"}
            contact={"@CRitik100 Class"}
          />
        </div>
      </div>
    );
  }
}

export default About;
