import styles from "../styles/components/PresentationBar.module.scss";

//comp

export default function PresentationBar({
  title,
  id,
}: {
  title: String;
  id: number;
}) {
  const createProjectBar = (): JSX.Element => {
    return (
      <div key={id} className={styles.bar__link}>
        <div className={styles.link}>
          <div className={styles.circle}></div>
          <p className={styles.name}>{title}</p>
        </div>
      </div>
    );
  };

  return <div className={styles.bar}>{createProjectBar()}</div>;
}
