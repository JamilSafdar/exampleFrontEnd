const url = process.env.REACT_APP_REST_API;

export const tokenFetch = async (setUser) => {
  try {
    const response = await fetch(`${url}user`, {
      method: "GET",
      headers: { Authorization: `Bearer ${localStorage.getItem("MyToken")}` },
    });
    const data = await response.json();
    setUser(data.user);
  } catch (error) {
    console.log(error);
  }
};

export const logOrSign = async (
  email,
  password,
  setUser,
  username = "None"
) => {
  console.log(username);
  try {
    let route;
    if (username !== "None") {
      route = "user";
    } else {
      route = "login";
    }
    const response = await fetch(`${url}${route}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });
    const data = await response.json();
    setUser(data.user);
    localStorage.setItem("MyToken", data.token);
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (user, password, updateObj, setUser) => {
  try {
    const response = await fetch(`${url}user`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: user,
        password,
        updateObj,
      }),
    });
    const data = await response.json();
    setUser(data.user);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (setUser) => {
  try {
    const response = await fetch(`${url}user`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${localStorage.getItem("MyToken")}` },
    });
    const data = await response.json();
    if (data.message === "Success") {
      setUser();
      localStorage.removeItem("MyToken");
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
};