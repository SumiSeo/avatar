import styles from "../styles/components/Header.module.scss";

export default function Header({ title }: { title: String }): JSX.Element {
  return (
    <>
      <div className={styles.header}>{title}</div>
      <div className={styles.write}>
        <div className={styles.write__container}></div>
        <div className={styles.write__container}>Write</div>
      </div>
    </>
  );
}
