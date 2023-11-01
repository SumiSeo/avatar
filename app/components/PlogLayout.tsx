"use client";

import styles from "../styles/components/PlogLayout.module.scss";
import { QUERY_PLOGS } from "../utilities/queries/QueryPlogs";
import { useQuery } from "@apollo/client";

//comps
import PlogImage from "./PlogImage";

export default function PlogLayout(): JSX.Element {
  const { data, loading } = useQuery(QUERY_PLOGS);
  if (loading) {
    return <div>Loading...</div>;
  } else console.log("data", data.plogs);
  const createPlogImage = () => {
    return (
      data &&
      data.plogs.map(
        ({ title, id }: { title: string; url: string; id: number }) => {
          return (
            <div key={id} className={styles.plog__container}>
              <PlogImage title={title} />
            </div>
          );
        }
      )
    );
  };
  return <div className={styles.plog}>{createPlogImage()}</div>;
}
