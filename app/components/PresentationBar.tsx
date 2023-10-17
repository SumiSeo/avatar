import styles from "../styles/components/PresentationBar.module.scss";

//comp

export default function PresentationBar({
  title,
  id,
  clicked,
}: {
  title: String;
  id: number;
  clicked: number;
}) {
  console.log("clicked", clicked);
  const createProjectBar = (): JSX.Element => {
    const active = styles.circle;
    const nonActive = styles.circle__hidden;
    return (
      <div key={id} className={styles.bar__link}>
        <div className={styles.link}>
          <div className={clicked === id ? active : nonActive}></div>
          <p className={styles.name}>{title}</p>
        </div>
      </div>
    );
  };

  return <div className={styles.bar}>{createProjectBar()}</div>;
}
