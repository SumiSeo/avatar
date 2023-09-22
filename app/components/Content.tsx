import styles from "../styles/components/Content.module.scss";

export default function Content(): JSX.Element {
  return (
    <div className={styles.content}>
      <div className={styles.content__text}>implant</div>
      <div className={styles.content__img}>img</div>
    </div>
  );
}
