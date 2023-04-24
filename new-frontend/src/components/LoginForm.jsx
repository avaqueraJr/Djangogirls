import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login API call here
    fetch("http://127.0.0.1:8000/dj-rest-auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error during login.");
        }
      })
      .then((data) => {
        console.log("Login successful:", data);
        // Store the token and user data in the state or localStorage here
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle login error here, e.g., show a message to the user
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
