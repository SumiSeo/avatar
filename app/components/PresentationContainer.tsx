import styles from "../styles/components/PresentationContainer.module.scss";

//comp
import PresentationBar from "./PresentationBar";
import PresentationFooter from "./PresentationFooter";
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
        {/* <PresentationFooter
          text="
Our Approach
What's Next
Brain-computer interfaces have the potential to change lives for the better. We want to bring this technology from the lab into peoples' homes."
        /> */}
        <PresentationLists />
      </div>
    </div>
  );
}
