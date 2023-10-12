import styles from "../styles/components/PresentationContainer.module.scss";

//comp
import PresentationBar from "./PresentationBar";
import PresentationImg from "./PresentationImg";
import PresentationLists from "./PresentationLists";

export default function PresentationContainer(): JSX.Element {
  return (
    <div className={styles.presentation}>
      <div className={styles.presentation__container}>
        <PresentationBar />
      </div>
      <div className={styles.presentation__container}>
        <PresentationImg />
      </div>
      <div className={styles.presentation__container}>
        {/* <PresentationLists /> */}
      </div>
    </div>
  );
}
