import styles from "../styles/components/PresentationBar.module.scss";
import { useState } from "react";

//comp
import PresentationLink from "./PresentationLink";

export default function PresentationBar(): JSX.Element {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <div className={styles.bar}>
      <div className={styles.bar__link}>
        <PresentationLink name="AI-Concierge" />
      </div>
      <div className={styles.bar__link}>
        <PresentationLink name="Contacky" />
      </div>
      <div className={styles.bar__link}>
        <PresentationLink name="Our Approach" />
      </div>
      <div className={styles.bar__link}>
        <PresentationLink name="What's Next" />
      </div>
    </div>
  );
}
