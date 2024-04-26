import styles from "./Navbar.module.css";
import avatar from "../../assets/default-avatar.svg";

type User = {
  email: string;
  password: string;
  loggedIn: boolean;
};


const Navbar = ({ user } ) => {
  return (
    <nav id={styles.wrapper}>
      <h1 id={styles.title}>oink</h1>
      <div id={styles.navItems}>
        {user.loggedIn ? (
          <>
            <p>{user.email}</p>
            <img src={avatar} alt="avatar" id={styles.avatar} />
          </>
        ) : (
          <>
            <p>login</p>
            <p className={styles.navButton}>|</p>
            <p className={styles.navButton}>sign up</p>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
