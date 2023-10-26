import style from "../styles/components/KeepReading.module.scss";

export default function KeepReading(): JSX.Element {
  return (
    <div className={style.keepReading}>
      <div className={style.keepReading__container}>Keep Reading </div>
      <div className={style.keepReading__container}> &#8599;</div>
    </div>
  );
}
