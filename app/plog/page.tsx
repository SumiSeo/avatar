import Header from "../components/Header";
import styles from "../styles/Plog.module.scss";

//comp
import PlogLayout from "../components/PlogLayout";

export default function Plog(): JSX.Element {
  return (
    <div className={styles.plog}>
      <div className={styles.plog__container}>
        <Header title="Programming Log" link="plog" />
      </div>
      <div className={styles.plog__container}>
        <PlogLayout />
      </div>
    </div>
  );
}
