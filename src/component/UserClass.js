import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter1: 11,
      userInfo: {
        name: "Dummy Name",
        login: "XYZ",
      },
    };

    console.log("Child Constructor");
  }

  async componentDidMount() {
    console.log("Child Component Mounted");
    const data = await fetch("https://api.github.com/users/CRitik100");
    const json = await data.json();
    console.log("Fetched Data:", json);
    this.setState({
        userInfo: {
          name: json.name,
          login: json.login
        }
    });
  }

  async componentDidUpdate() {
    console.log("Child Component Updated");
  } 

  async componentWillUnmount() {
    console.log("Child Component Unmounted");
  }

  render() {
    const { location } = this.props;
    const { name, login } = this.state.userInfo;
    const { counter1 } = this.state;
    console.log("Child Rendered");
    return (
      <div className="user-card">
        <h2> User : {name}</h2>
        <h3> Location : {location}</h3>
        <h3> Contact : {login}</h3>
        <h3> Counter-1 : {counter1}</h3>
        <button
          id="updateCounter"
          onClick={() => {
            this.setState({
              counter1: counter1 + 1,
            });
          }}
        >
          Next
        </button>
      </div>
    );
  }
}

export default UserClass;
