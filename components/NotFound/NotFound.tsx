import React from "react";
import styles from "./NotFound.module.scss";

const NotFound = ({ title }: { title: string }) => {
  return (
    <div className={styles.header}>
      <h1 className={`h1 ${styles.title}`}>{title}</h1>
    </div>
  );
};
export default NotFound;
