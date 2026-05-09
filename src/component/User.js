import {useState} from "react";

const User = ({name, location, contact}) => {
    const [counter1, setCounter1] = useState(1);
    const [counter2, setCounter2] = useState(2);

  return (
    <div className="user-card">
      <h2> User : {name}</h2>
      <h3> Location : {location}</h3>
      <h3> Contact : {contact}</h3>
      <h3> Counter-1 : {counter1}</h3>
      <button onClick={()=>{setCounter1(counter1+1)}}>Next</button>
    </div>
  );
};

export default User;
