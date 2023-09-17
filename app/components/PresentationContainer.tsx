import styles from "../styles/components/PresentationContainer.module.scss";
import PresentationBar from "./PresentationBar";

export default function PresentationContainer(): JSX.Element {
  return (
    <div className={styles.presentation}>
      <div className={styles.presentation__container}>
        <PresentationBar />
      </div>
      <div className={styles.presentation__container}>2</div>
      <div className={styles.presentation__container}>3</div>
    </div>
  );
}
