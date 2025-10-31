import React, { useState } from 'react';

function UseState() {
    const [Name, setName] = useState("Josim");

    const changeName = () => {
        setName("Karim");
    };

    return (
        <div>
            <h1>Use State Hook</h1>
            <h2>My Name is {Name}</h2>
            <button className='btn btn-primary' onClick={changeName}>Change Name</button>
        </div>
    );
}

export default UseState;
