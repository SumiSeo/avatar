import Image from "next/image";
import Test from "./test.png";
import styles from "../styles/components/PresentationImg.module.scss";

export default function PresentationImg(): JSX.Element {
  return (
    <div>
      <Image fill className={styles.img} src={Test} alt="descritioin" />
    </div>
  );
}
