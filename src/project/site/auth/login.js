import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import { AppContext } from "../../../App";
import { AUTH } from "../../utils/routes/constant";

function Login() {
  const context = useContext(AppContext);
  const history = useHistory()

  const [tokenValue, setTokenValue] = context;

  const [inputToken, setInputToken] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputToken.length == 0) {
     setTokenValue(inputToken);
     history.push(AUTH)
    }
     
  };

  return (
    <div>
      <h2>Login Here</h2>
      <br />
      <p>Enter anything in the form below to continue to <b>AUTH</b> page.</p>

      <form onSubmit={handleSubmit} action="">
        <label htmlFor="" className="input_toke_value">
          Input Token Value
        </label>
        <br />
        <input
          type="text"
          value={inputToken}
          onChange={(e) => setInputToken(e.target.value)}
        />
        <br />
        <button>Login to Continue</button>
      </form>
    </div>
  );
}

export default Login;
