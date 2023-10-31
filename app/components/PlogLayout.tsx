import styles from "../styles/components/PlogLayout.module.scss";

import PlogImage from "./PlogImage";

export default function PlogLayout(): JSX.Element {
  return (
    <div className={styles.plog}>
      <div className={styles.plog__container}>
        <div className={styles.plog__box}>
          <PlogImage />
        </div>
      </div>
      <div className={styles.plog__container}></div>
    </div>
  );
}
