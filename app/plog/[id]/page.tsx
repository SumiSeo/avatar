"use client";

import { useQuery } from "@apollo/client";
import { QUERY_PLOG_DETAIL } from "@/app/utilities/queries/QueryPlogDetail";
import style from "../../styles/components/BlogDetail.module.scss";
import dateConversion from "@/app/utilities/funcs/DateConversion";

export default function PlogDetail({ params }: { params: any }): JSX.Element {
  const id = params.id;
  const { data } = useQuery(QUERY_PLOG_DETAIL, {
    variables: { id: id },
  });
  console.log("data", data);
  const getTicket = (): JSX.Element => {
    return (
      data && (
        <div className={style.blogDetail}>
          <div className={style.blogDetail__container}>
            <div className={style.blogDetail__classification}>
              {data.plogs[0].classification}
            </div>
            <div className={style.blogDetail__dot}></div>
            <div className={style.blogDetail__date}>
              {dateConversion(data.plogs[0].date)}
            </div>
          </div>
          <div className={style.blogDetail__container}>
            <div className={style.blogDetail__title}>{data.plogs[0].title}</div>
          </div>
          <div className={style.blogDetail__container}>
            <div className={style.blogDetail__content}>
              {data.plogs[0].content}
            </div>
          </div>
        </div>
      )
    );
  };

  return <>{getTicket()}</>;
}
