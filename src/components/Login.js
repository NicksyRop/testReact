import React, { useState } from "react";

function Login() {
  const [error, setErr] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="container">
      <form>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled="true">Login</button>
      </form>
      <span
        data-testid="error"
        style={{ visibility: error ? "visible" : "hidden" }}
      >
        Something went wrong
      </span>
    </div>
  );
}

export default Login;
