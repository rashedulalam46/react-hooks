import React, {useState} from 'react';



function UseState() {
    const [Name, setName] = useState("Josim");

    const changeName = () => {
      setName("Karim");
    };

  return (
    <div>
      <h1>My Name is {Name}</h1>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default UseState;
