import { useState } from "react";
import { updateUser, deleteUser } from "../utils";

export const Settings = ({ user, setUser }) => {
  const [pass, setPass] = useState();
  const [email, setEmail] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    updateUser(user, pass, { email }, setUser);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          placeholder="Password"
          onChangeCapture={(e) => setPass(e.target.value)}
        />
        <input
          placeHolder="New Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
      <button onClick={() => deleteUser(setUser)}>Delete Profile</button>
    </div>
  );
};