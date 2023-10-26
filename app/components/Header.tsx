import styles from "../styles/components/Header.module.scss";

export default function Header({ title }: { title: String }): JSX.Element {
  return (
    <>
      <div className={styles.header}>{title}</div>
    </>
  );
}
