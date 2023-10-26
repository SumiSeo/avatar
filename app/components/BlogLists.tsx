import style from "../styles/components/BlogLists.module.scss";
import Blog from "./Blog";

export default function BlogLists(): JSX.Element {
  return (
    <div className={style.BlogLists}>
      <Blog />
    </div>
  );
}
