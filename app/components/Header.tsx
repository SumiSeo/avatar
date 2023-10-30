import styles from "../styles/components/Header.module.scss";
import WriteIcon from "./WriteIcon";

export default function Header({ title }: { title: String }): JSX.Element {
  return (
    <>
      <div className={styles.header}>{title}</div>
      <div className={styles.write}>
        <div className={styles.write__container}>
          <WriteIcon />
        </div>
        <div className={styles.write__container}>Write</div>
      </div>
    </>
  );
}
