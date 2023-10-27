"use client";

import style from "../styles/components/BlogLists.module.scss";
import Blog from "./Blog";
import { useQuery } from "@apollo/client";
import { QUERY_BLOGS } from "../utilities/queries/QueryBlogs";

export default function BlogLists(): JSX.Element {
  const { data, loading } = useQuery(QUERY_BLOGS);
  if (loading) {
    return <div>Loading...</div>;
  }
  console.log("data", data.blogs[0]);
  const createBlogContainer = (): JSX.Element => {
    return (
      data &&
      data.blogs.map(() => {
        return <Blog />;
      })
    );
  };
  return <div className={style.BlogLists}>{createBlogContainer()}</div>;
}
