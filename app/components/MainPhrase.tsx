import Image from "next/image";
import NeonPurple from "../../public/purple-neon.gif";
import styles from "../styles/components/MainPhrase.module.scss";

export default function MainPhrase(): JSX.Element {
  return (
    <div className={styles.phrase}>
      {/* <Image className={styles.img} src={NeonPurple} alt="neon=purple" fill /> */}
      <div className={styles.phrase__container}>
        <div className={styles.title}>
          as a <span>Software Engineer</span>
        </div>
      </div>
      <div className={styles.phrase__container}>
        <div className={styles.circle}></div>
      </div>
    </div>
  );
}
