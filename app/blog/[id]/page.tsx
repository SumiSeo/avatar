"use client";

import { useQuery } from "@apollo/client";
import { QUERY_BLOG_DETAIL } from "@/app/utilities/queries/QueryBlogDeatil";

export default function BlogDetail({ params }: { params: any }): JSX.Element {
  const id = params.id;
  const { data, loading } = useQuery(QUERY_BLOG_DETAIL, {
    variables: { id: id },
  });

  if (loading) {
    return <div>Loading...</div>;
  } else console.log(data);
  return <div>{id}</div>;
}
