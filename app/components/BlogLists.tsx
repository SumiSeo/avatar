"use client";

import Blog from "./Blog";
import { useQuery } from "@apollo/client";
import { QUERY_BLOGS } from "../utilities/queries/QueryBlogs";
import { BlogProps } from "../types/BlogProps";
import dateConversion from "../utilities/funcs/DateConversion";

export default function BlogLists(): JSX.Element {
  const { data, loading } = useQuery(QUERY_BLOGS);
  if (loading) {
    return <div>Loading...</div>;
  }

  const createBlogContainer = (): JSX.Element => {
    return (
      data &&
      data.blogs.map((blog: BlogProps): JSX.Element => {
        const finalDate = dateConversion(blog.date);
        return (
          <div key={blog.id}>
            <Blog
              title={blog.title}
              classification={blog.classification}
              content={blog.content}
              id={blog.id}
              date={finalDate}
            />
          </div>
        );
      })
    );
  };
  return <div>{createBlogContainer()}</div>;
}
