import style from "../styles/components/Blog.module.scss";
import KeepReading from "./KeepReading";

export default function Blog(): JSX.Element {
  return (
    <div className={style.blog}>
      <div className={style.blog__container}>
        <div className={style.blog__box}>
          <div className={style.blog__classification}>Announcement</div>
          <div className={style.blog__dot}></div>
          <div className={style.blog__date}>19 September 2023</div>
        </div>
        <div className={style.blog__box}>
          <div className={style.blog__title}>
            Neuralink's First-in-Human Clinical Trial is Open for Recruitment
          </div>
        </div>
      </div>
      <div className={style.blog__container}>
        <div className={style.blog__box}>
          <div className={style.blog__summary}>
            We are happy to announce that we’ve received approval from the
            reviewing independent institutional review board and our first
            hospital site to begin recruitment for our first-in-human clinical
            trial.
          </div>
        </div>
        <div className={style.blog__box}>
          <KeepReading />
        </div>
      </div>
    </div>
  );
}
