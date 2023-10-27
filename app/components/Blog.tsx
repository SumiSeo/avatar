import style from "../styles/components/Blog.module.scss";
import { BlogProps } from "../types/BlogProps";
import KeepReading from "./KeepReading";

export default function Blog({
  content,
  date,
  classification,
  id,
  title,
}: BlogProps): JSX.Element {
  return (
    <div className={style.blog}>
      <div className={style.blog__container}>
        <div className={style.blog__box}>
          <div className={style.blog__classification}>{classification}</div>
          <div className={style.blog__dot}></div>
          <div className={style.blog__date}>{date}</div>
        </div>
        <div className={style.blog__box}>
          <div className={style.blog__title}>{title}</div>
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
