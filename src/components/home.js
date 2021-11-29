export const Home = ({ user, setUser }) => {
    const logOut = (e) => {
      e.preventDefault();
      localStorage.removeItem("MyToken");
      setUser();
    };
    return (
      <div>
        <h1>{user}</h1>
        <button onClick={logOut}>Log Out</button>
      </div>
    );
  };