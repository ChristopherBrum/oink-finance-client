import { useState } from "react";
import styles from "./LoginForm.module.css";

type User = {
  email: string;
  password: string;
  loggedIn: boolean;
};

type LoginFormProps = {
  setUser: (user: User) => void;
};

const LoginForm = ({ setUser }: LoginFormProps ) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // temporary login logic
    if (email !== "chris@hi.com" && password !== "password") {
      setPassword("");
      console.log("Invalid credentials");
      return;
    }
    setUser({ email, password, loggedIn: true });
    setEmail("");
    setPassword("");
    console.log("logged in");
  };

  return (
    <div id={styles.wrapper}>
      <h1 className={styles.loginTitle}>login</h1>
      <form onSubmit={handleLogin} id={styles.formWrapper}>
        <div className={styles.inputWrapper}>
          <label>email:</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.loginInput}
            type="text"
            placeholder="email..."
          />
        </div>
        <div className={styles.inputWrapper}>
          <label>password:</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.loginInput}
            type="password"
            placeholder="password..."
          />
        </div>
        <button id={styles.formButton}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
