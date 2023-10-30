"use client";

import { useQuery } from "@apollo/client";
import { QUERY_BLOG_DETAIL } from "@/app/utilities/queries/QueryBlogDeatil";
import style from "../../styles/components/BlogDetail.module.scss";

export default function BlogDetail({ params }: { params: any }): JSX.Element {
  const getTicket = (): JSX.Element => {
    const id = params.id;
    const { data } = useQuery(QUERY_BLOG_DETAIL, {
      variables: { id: id },
    });
    console.log("data", data);
    return (
      data && (
        <div className={style.blogDetail}>
          <div className={style.blogDetail__container}>
            <div className={style.blogDetail__classification}>
              {data.blogs[0].classification}
            </div>
            <div className={style.blogDetail__dot}></div>
            <div className={style.blogDetail__date}>{data.blogs[0].date}</div>
          </div>
          <div className={style.blogDetail__container}>
            <div className={style.blogDetail__title}>{data.blogs[0].title}</div>
          </div>
          <div className={style.blogDetail__container}>
            <div className={style.blogDetail__content}>
              {data.blogs[0].content}
            </div>
          </div>
        </div>
      )
    );
  };

  return <>{getTicket()}</>;
}
