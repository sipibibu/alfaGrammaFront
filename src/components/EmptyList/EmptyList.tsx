import React from "react";
import styles from "./empty-list.module.css";

type EmptyListProps = {
  children: React.ReactNode;
};

export default function EmptyList({ children }: EmptyListProps) {
  return <p className={styles.empty}>{children}</p>;
}
