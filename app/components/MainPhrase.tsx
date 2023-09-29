import Image from "next/image";
import NeonPurple from "../../public/purple-neon.gif";
import styles from "../styles/components/MainPhrase.module.scss";

export default function MainPhrase(): JSX.Element {
  return (
    <>
      {/* <Image className={styles.img} src={NeonPurple} alt="neon=purple" fill /> */}
      <div className={styles.title}>as a</div>
    </>
  );
}
