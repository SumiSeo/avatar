import styles from "../styles/components/Header.module.scss";
import Link from "next/link";

//comp
import WriteIcon from "./WriteIcon";

export default function Header({
  title,
  link,
}: {
  title: String;
  link: String;
}): JSX.Element {
  return (
    <>
      <div className={styles.header}>{title}</div>
      {/* <div className={styles.write}> */}
      {/* <div className={styles.write__container}>
          <WriteIcon />
        </div>
        <div className={styles.write__container}>
          <Link className={styles.write__link} href={`/new-${link}`}>
            <div>Write</div>
          </Link>
        </div> */}
      {/* </div> */}
    </>
  );
}
