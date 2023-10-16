import Image from "next/image";
import styles from "../styles/components/PresentationImg.module.scss";
import Contacky from "../../public/contact-app.jpg";
import AiConcierge from "../../public/ai-video.gif";
import Fluuent from "../../public/fluuent-2.jpg";

export default function PresentationImg({ id }: { id: number }): JSX.Element {
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
      )}{" "}
      {id === 6 ? (
        <Image fill className={styles.img} src={Fluuent} alt="descritioin" />
      ) : (
        ""
      )}
    </div>
  );
}
