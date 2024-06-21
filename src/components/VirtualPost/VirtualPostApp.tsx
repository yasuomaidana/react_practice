import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { USER_ACTIVITY } from "../../hooks/graphql/queries/user";
import PostItList from "./PostItList";
import Pagination from "./Pagination";

const VirtualPostApp = () => {
  const [postsPage, setPostsPage] = useState(1);
  const [commentsPage, setCommentsPage] = useState(1);

  const { data, error, loading } = useQuery(USER_ACTIVITY, {
    variables: {
      postsOffset: (postsPage - 1) * 10,
      commentsOffset: (commentsPage - 1) * 10,
    },
    notifyOnNetworkStatusChange: true,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { userActivity } = data;
  console.log("data", userActivity.comments);

  return (
    <div>
      <h1>My Activity</h1>
      <PostItList
        postIts={userActivity.postIts.content}
        currentPage={postsPage}
        totalPages={userActivity.postIts.totalPages}
        onPageChange={setPostsPage}
      />
      <h2>Comments:</h2>
      <div>
        <h2>PostIts:</h2>
        <ul>
          {userActivity.comments.content.map((comment:any) => (
            <li key={comment.id}>
                {comment.title}
            </li>
          ))}
        </ul>
        <Pagination
          currentPage={0}
          totalPages={0}
          onPageChange={()=>{}}
        />
      </div>
    </div>
  );
};

export default VirtualPostApp;
