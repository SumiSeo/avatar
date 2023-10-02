import styles from "../styles/components/PresentationLink.module.scss";
import { PresentationLinkProps } from "../types/PresentationProps";

export default function PresentationLink({
  name,
}: PresentationLinkProps): JSX.Element {
  return (
    <div className={styles.link}>
      <div className={styles.circle}></div>
      <p className={styles.name}>{name}</p>
    </div>
  );
}
