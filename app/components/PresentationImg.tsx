import Image from "next/image";
import styles from "../styles/components/PresentationImg.module.scss";
import Contacky from "../../public/contact-favorite.gif";
import AiConcierge from "../../public/ai-video.gif";

export default function PresentationImg(): JSX.Element {
  return (
    <div>
      <Image fill className={styles.img} src={AiConcierge} alt="descritioin" />
    </div>
  );
}
