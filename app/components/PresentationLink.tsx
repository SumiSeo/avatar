import styles from "../styles/components/PresentationLink.module.scss";
export interface PropsTypes {
  name: String;
}

export default function PresentationLink({ name }: PropsTypes): JSX.Element {
  return (
    <div className={styles.link}>
      <div className={styles.circle}></div>
      <p className={styles.name}>{name}</p>
    </div>
  );
}
