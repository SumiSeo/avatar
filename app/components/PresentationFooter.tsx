import styles from "../styles/components/PresentationFooter.module.scss";
import { PresentationFooterProps } from "../types/PresentationProps";

export default function PresentationFooter(): JSX.Element {
  return <div className={styles.footer}>More Info &#8599;</div>;
}
