import React, { useState } from "react";

function Register() {
  const [Name, setName] = useState('');
  const [Code, setCode] = useState('');
  const [branch, setBranch] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    if (!Name || !email || !password || !Code || !branch) {
      setError('All fields are required!');
      return;
    }

    console.log('User Registered:', { Name, email, password, branch, Code });

    // Clear form after submission
    setName('');
    setCode('');
    setBranch('');
    setEmail('');
    setPassword('');
    setError('');
  }

  return (
    <div>
      <form className="card">
        {error && <p style={{ color: 'red' }}>{error}</p>}
        
        <input
          type="text"
          value={Name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        /><br/>
        <br/>
        <input
          type="text"
          value={Code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter your Code"
        /><br/>
        <br/>
        
        <label>Branch:</label>
        <select value={branch} onChange={(e) => setBranch(e.target.value)}>
          <option value="">Select Branch</option>
          <option value="CSE">CSE</option>
          <option value="IT">IT</option>
          <option value="MECH">MECH</option>
        </select>
        <br/>
        <br/>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your Email"
        />
        <br/>
        <br/>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your Password"
        /><br/>
        <br/>
        
        <button onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
