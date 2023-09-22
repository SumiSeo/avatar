import styles from "../styles/components/PresentationContainer.module.scss";

//comp
import PresentationBar from "./PresentationBar";
import PresentationFooter from "./PresentationFooter";

export default function PresentationContainer(): JSX.Element {
  return (
    <div className={styles.presentation}>
      <div className={styles.presentation__container}>
        <PresentationBar />
      </div>
      <div className={styles.presentation__container}></div>
      <div className={styles.presentation__container}>
        <PresentationFooter
          text="
Our Approach
What's Next
Brain-computer interfaces have the potential to change lives for the better. We want to bring this technology from the lab into peoples' homes."
        />
      </div>
    </div>
  );
}