import React, { useState } from 'react';

function UseState() {
    const [Name, setName] = useState("Josim");

    const changeName = () => {
        setName("Karim");
    };

    // State for registration form fields
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    // Handle input change for registration form
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        console.log("Form Data:", formData);
    };

    // Handle form reset
    const handleReset = () => {
        setFormData({
            name: "",
            email: "",
            password: ""
        });
        console.log("Form cleared!");
    };

    return (
        <div>
            <h1>Use State Hook Practice</h1>
            <h2>My Name is {Name}</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="typeName" className="form-label">Type Your Name</label>
                    <input type="text" className="form-control" id="typeName" value={Name} onChange={(e) => setName(e.target.value)} />
                </div>
            </form>

            <button className='btn btn-primary' onClick={changeName}>Change Name</button>
            <div className='container'>
                <h3>Registration form</h3>
                <form onSubmit={handleSubmit} onReset={handleReset}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" value={formData.password} onChange={handleChange} />
                    </div>
                    <button type="reset" className="btn btn-secondary ms-2">Reset</button>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default UseState;
