import React, { useState } from "react";

function Login() {
  const [error, setErr] = useState(false);
  return (
    <div className="container">
      <form>
        <input type="text" placeholder="username" value="" />
        <input type="password" placeholder="password" value="" />
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
