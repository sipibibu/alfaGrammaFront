import * as classNames from "classnames";
import styles from "../TopMenu/topmenu.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

export interface Link {
  link: string;
  text: string;
}

const CustomLink = ({ link, text }: Link) => {
  const location = useLocation().pathname;
  return (
    <Link
      to={link}
      className={classNames(
        styles.link,
        location === link ? styles.linkActive : "",
      )}
    >
      {text}
    </Link>
  );
};

export default CustomLink;
