import React from "react";
import { Link } from "react-router-dom";
import { getPages } from "../../helpers/utils";
import styles from "./Footer.module.scss";

const Footer = ({
  itemCount,
  currentPage,
}: {
  itemCount: number;
  currentPage: number;
}) => {
  return (
    <div className={styles.footer}>
      {getPages(itemCount).map((item: number, index: number) => {
        return currentPage - 2 <= index + 1 && index + 1 <= currentPage + 2 ? (
          <Link
            key={index}
            to={`/users/page/${item}`}
            className={
              index + 1 === currentPage
                ? styles.pageItemActive
                : styles.pageItem
            }
          >
            {item}
          </Link>
        ) : (
          <></>
        );
      })}
    </div>
  );
};
export default Footer;
