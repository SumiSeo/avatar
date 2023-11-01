import sample from "../../public/fluuent.jpg";
import Image from "next/image";
import styles from "../styles/components/PlogImage.module.scss";
import Link from "next/link";

export default function PlogImage({
  title,
  id,
}: {
  title: string;
  id: number;
}): JSX.Element {
  return (
    <div className={styles.plog}>
      <div className={styles.plog__container}>
        <Image
          objectFit="cover"
          layout="responsive"
          alt="sample"
          src={sample}
        />
      </div>
      <div className={styles.plog__icons}>
        <div className={styles.plog__like}>&#x2764;</div>
        <Link href={`/plog/${id}`}>
          <div className={styles.plog__more}>&#x2b;</div>
        </Link>
      </div>
      <div className={styles.plog__title}>{title}</div>
    </div>
  );
}
