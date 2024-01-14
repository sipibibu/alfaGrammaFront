import { Grid } from "react-loader-spinner";
import styles from "./loading.module.css";

export default function Loading() {
  return <Grid color="#1D8FDD" wrapperClass={styles.loading} />;
}
