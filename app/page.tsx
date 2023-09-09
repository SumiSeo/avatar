import styles from "./styles/Home.module.scss";

//components
import SkipBar from "./components/SkipBar";
export default function Home() {
  return (
    <main className={styles.home}>
      <div className={styles.home__wrapper}>
        <div className={styles.home__container}>
          <SkipBar />
        </div>
        <div className={styles.home__container}>2</div>
        <div className={styles.home__container}>3</div>
      </div>
    </main>
  );
}
