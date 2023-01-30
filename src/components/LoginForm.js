import React from "react";
import styles from "./LoginForm.css";

function LoginForm() {
  return (
    <form className={styles.form}>
      <label className={styles.label}>
        Username:
        <input className={styles.input} type="text" name="username" />
      </label>
      <label className={styles.label}>
        Password:
        <input className={styles.input} type="password" name="password" />
      </label>
      <button className={styles.submit} type="submit">
        Submit
      </button>
    </form>
  );
}

export default LoginForm;
