import Header from "../components/Header";
import style from "../styles/Plog.module.scss";

export default function Plog(): JSX.Element {
  return (
    <div className={style.plog}>
      <div className={style.plog__container}>
        <Header title="Programming Log" />
      </div>
      <div className={style.plog__container}></div>
    </div>
  );
}
