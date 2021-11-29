import { useState } from "react";
import { logOrSign } from "../utils";

export const LogOrSignForm = ({ setUser }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [logBool, setLogBool] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (username) {
      logOrSign(email, pass, setUser, username);
    } else {
      logOrSign(email, pass, setUser);
    }
  };
  return (
    <div>
      <h1>Please log in or sign up</h1>
      <form onSubmit={submitHandler}>
        {!logBool && <input onChange={(e) => setUsername(e.target.value)} />}
        <input onChange={(e) => setEmail(e.target.value)} />
        <input onChange={(e) => setPass(e.target.value)} />
        <button type="submit">{!logBool ? "Sign Up" : "Log In"}</button>
      </form>
      <button
        onClick={(e) => {
          setLogBool(!logBool);
          setUsername();
        }}
      >
        {!logBool ? "Already have an account?" : "Don't have an account?"}
      </button>
    </div>
  );
};