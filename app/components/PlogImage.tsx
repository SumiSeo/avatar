import sample from "../../public/fluuent.jpg";
import Image from "next/image";
import styles from "../styles/components/PlogImage.module.scss";

export default function PlogImage(): JSX.Element {
  const id = 1;
  return (
    <div className={styles.plog}>
      <div className={styles.plog__container}>
        <Image
          objectFit="cover"
          layout="responsive"
          alt="sample"
          src={sample}
        />
      </div>
      <div className={styles.plog__icons}>
        <div className={styles.plog__like}>&#x2764;</div>
        <div className={styles.plog__more}>&#x2b;</div>
      </div>
      <div className={styles.plog__title}>NextJS Crush 01</div>
    </div>
  );
}
