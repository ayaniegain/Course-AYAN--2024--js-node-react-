import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function ReactQuery() {
  const retrievePosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["postList"],
    queryFn: () => retrievePosts(),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ReactQuery;
