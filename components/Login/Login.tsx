import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { loginStart } from "../../store/app/appActionCreator";
import styles from "./Login.module.scss";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className={styles.loginWrapper}>
      <form className={styles.loginForm}>
        <div className={styles.inputWrapper}>
          <label className={styles.label}>Email</label>
          <input
            className="form-control"
            placeholder="email"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label className={styles.label}>Password</label>
          <input
            className="form-control"
            placeholder="Password"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className={`btn btn-primary ${styles.loginBtn}`}
          onClick={(e) => {
            e.preventDefault();
            dispatch(loginStart(email, password, history));
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
