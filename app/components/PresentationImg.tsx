import Image from "next/image";
import styles from "../styles/components/PresentationImg.module.scss";
import Contacky from "../../public/contact-app.jpg";
import AiConcierge from "../../public/ai-video.gif";
import Fluuent from "../../public/fluuent-2.jpg";
import MyCode from "../../public/mycode.gif";
import HarryPotter from "../../public/harrypotter.gif";
import WeatherUp from "../../public/weatherup.gif";

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
      )}
      {id === 3 ? (
        <Image fill className={styles.img} src={MyCode} alt="descritioin" />
      ) : (
        ""
      )}
      {id === 4 ? (
        <Image fill className={styles.img} src={WeatherUp} alt="descritioin" />
      ) : (
        ""
      )}
      {id === 5 ? (
        <Image
          fill
          className={styles.img}
          src={HarryPotter}
          alt="descritioin"
        />
      ) : (
        ""
      )}
      {id === 6 ? (
        <Image fill className={styles.img} src={Fluuent} alt="descritioin" />
      ) : (
        ""
      )}
    </div>
  );
}
