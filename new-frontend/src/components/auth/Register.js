import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/dj-rest-auth/registration/", {
        email,
        password1,
        password2,
      });
      console.log(response.data);
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Password:</label>
        <input type="password" value={password1} onChange={(e) => setPassword1(e.target.value)} required />

        <label>Confirm Password:</label>
        <input type="password" value={password2} onChange={(e) => setPassword2(e.target.value)} required />

        <button type="submit">Register</button>
      </form>
      {error && <div>Error: {JSON.stringify(error)}</div>}
    </div>
  );
};

export default Register;
