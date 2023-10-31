import sample from "../../public/fluuent.jpg";
import Image from "next/image";
import styles from "../styles/components/PlogImage.module.scss";

import KeepReading from "./KeepReading";

export default function PlogImage(): JSX.Element {
  const id = 1;
  return (
    <div className={styles.plog}>
      <div className={styles.plog__container}>
        <Image width={600} alt="sample" src={sample} />
      </div>
      <div className={styles.plog__title}>NextJS(3)</div>
      <div className={styles.plog__date}>3 September 2023</div>
      <div className={styles.plog__more}>
        <KeepReading id={id} />
      </div>
    </div>
  );
}
