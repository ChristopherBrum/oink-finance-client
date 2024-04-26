import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import LoginForm from "./components/LoginForm/LoginForm";
import Main from "./components/Main/Main";

class User {
  email: string;
  password: string;
  loggedIn: boolean;

  constructor(email = "", password = "", loggedIn = false) {
    this.email = email;
    this.password = password;
    this.loggedIn = loggedIn;
  }
}

function App() {
  // adjust the boolean value to see the different views
  const [user, setUser] = useState(new User("chris@hi.com", "password", true));

  return (
    <>
      <Navbar user={user} />
      {user.loggedIn ? <Main /> : <LoginForm setUser={setUser} />}
    </>
  );
}

export default App;
