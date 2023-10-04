"use client";

import styles from "./styles/Home.module.scss";
import { useEffect } from "react";
import { useGlobalContext } from "./context/store";

//components
import SkipBar from "./components/SkipBar";
import AboutContainer from "./components/AboutContainer";
import PresentationContainer from "./components/PresentationContainer";
import CircleContainer from "./components/CircleContainer";

export default function Home() {
  const { skippedIntro, setSkippedIntro } = useGlobalContext();
  useEffect(() => {
    console.log("checking context", skippedIntro);
    setSkippedIntro(true);
  }, [skippedIntro]);

  return (
    <main className={styles.home}>
      <div className={styles.home__wrapper}>
        <div className={styles.home__container}>
          <CircleContainer />
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
