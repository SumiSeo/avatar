import styles from "./styles/Home.module.scss";

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
        </div>
        <div className={styles.home__container}>
          <PresentationContainer />
        </div>
      </div>
    </main>
  );
}
