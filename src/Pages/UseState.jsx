import React, { useState } from 'react';

function UseState() {
    const [Name, setName] = useState("Josim");

    const changeName = () => {
        setName("Karim");
    };

    return (
        <div>
            <h1>Use State Hook Practice</h1>
            <h2>My Name is {Name}</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="typeName" className="form-label">Type Name</label>
                    <input type="text" className="form-control" id="typeName" value={Name} onChange={(e) => setName(e.target.value)} />
                </div>
            </form>

            <button className='btn btn-primary' onClick={changeName}>Change Name</button>
            <div className='container'>
                <h3>Registration form</h3>
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" value={Name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default UseState;
