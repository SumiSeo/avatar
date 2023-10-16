import Image from "next/image";
import styles from "../styles/components/PresentationImg.module.scss";
import Contacky from "../../public/contact-favorite.gif";
import AiConcierge from "../../public/ai-video.gif";

export default function PresentationImg({ id }: { id: number }): JSX.Element {
  let source;
  if (id === 1) {
    source = AiConcierge;
  } else if (id === 2) {
    source = Contacky;
  }
  return (
    <div>
      <Image
        fill
        className={styles.img}
        src={source ? source : AiConcierge}
        alt="descritioin"
      />
    </div>
  );
}
