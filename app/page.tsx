import styles from "./styles/Home.module.scss";
import Image from "next/image";
import Light from "../public/light.gif";
//components
import SkipBar from "./components/SkipBar";
import AboutContainer from "./components/AboutContainer";
import PresentationContainer from "./components/PresentationContainer";

export default function Home() {
  return (
    <main className={styles.home}>
      <div className={styles.home__wrapper}>
        <div className={styles.home__container}>
          <SkipBar />
        </div>
        <div className={styles.home__container}>
          <AboutContainer />
          {/* <div>
            <Image fill className={styles.test} src={Light} alt="light" />
          </div> */}
        </div>
        <div className={styles.home__container}>
          <PresentationContainer />
        </div>
      </div>
    </main>
  );
}
