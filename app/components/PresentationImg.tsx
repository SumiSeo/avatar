import Image from "next/image";
import styles from "../styles/components/PresentationImg.module.scss";
import Contacky from "../../public/contact-app.jpg";
import AiConcierge from "../../public/ai-video.gif";

//comp
import PresentationFooter from "./PresentationFooter";

export default function PresentationImg({
  id,
  desc,
}: {
  id: number;
  desc: string[];
}): JSX.Element {
  return (
    <div>
      {id === 1 ? (
        <Image
          fill
          className={styles.img}
          src={AiConcierge}
          alt="descritioin"
        />
      ) : (
        ""
      )}
      {id === 2 ? (
        <Image fill className={styles.img} src={Contacky} alt="descritioin" />
      ) : (
        ""
      )}
    </div>
  );
}
