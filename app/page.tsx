"use client";

import styles from "./styles/Home.module.scss";
import { useGlobalContext } from "./context/store";
import { useEffect } from "react";

//components
import SkipBar from "./components/SkipBar";
import AboutContainer from "./components/AboutContainer";
import PresentationContainer from "./components/PresentationContainer";
import CircleContainer from "./components/CircleContainer";

export default async function Home() {
  const { setDisappearCircles } = useGlobalContext();
  useEffect(() => {
    setDisappearCircles(false);
  }, []);

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
