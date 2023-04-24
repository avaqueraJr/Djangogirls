import React, { useState } from 'react';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration API call here
    fetch("http://127.0.0.1:8000/dj-rest-auth/registration/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password1: password,
        password2: passwordConfirm,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error during registration.");
        }
      })
      .then((data) => {
        console.log("Registration successful:", data);
        // Store the token and user data in the state or localStorage here
        // Navigate to the login page or another page
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle registration error here, e.g., show a message to the user
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="passwordConfirm">Confirm Password:</label>
      <input
        type="password"
        id="passwordConfirm"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;

