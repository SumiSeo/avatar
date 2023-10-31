import Header from "../components/Header";
import style from "../styles/Plog.module.scss";

//comp
import PlogLayout from "../components/PlogLayout";

export default function Plog(): JSX.Element {
  return (
    <div className={style.plog}>
      <div className={style.plog__container}>
        <Header title="Programming Log" />
      </div>
      <div className={style.plog__container}>
        <PlogLayout />
      </div>
    </div>
  );
}
