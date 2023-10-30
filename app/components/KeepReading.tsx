import style from "../styles/components/KeepReading.module.scss";
import Link from "next/link";

export default function KeepReading({ id }: { id: number }): JSX.Element {
  return (
    <Link className={style.link} href={`/blog/${id}`}>
      <div className={style.keepReading}>
        <div className={style.keepReading__container}>Keep Reading </div>
        <div className={style.keepReading__container}> &#8599;</div>
      </div>
    </Link>
  );
}
