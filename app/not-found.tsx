import styles from "./styles/NotFound.module.scss";

export default function NotFound(): JSX.Element {
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <h3>Oops! I can develop pages, but I can't find this page.</h3>
    </div>
  );
}
