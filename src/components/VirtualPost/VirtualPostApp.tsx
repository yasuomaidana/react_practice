import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { USER_ACTIVITY } from "../../hooks/graphql/queries/user";
import PostItList from "./PostItList";
import Pagination from "./Pagination";
import { Card, CardContent, Grid } from "@mui/material";

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
    <Grid container spacing={3}>
      {/* Left Side: My Activity */}      
      <Grid item xs={6}>
        <h1>My Activity</h1>
        <PostItList
        postIts={userActivity.postIts.content}
        currentPage={postsPage}
        totalPages={userActivity.postIts.totalPages}
        onPageChange={setPostsPage}
      />
      </Grid>      
      {/* Right Side: Comments */}      
      <Grid item xs={6}>
      <h2>Comments:</h2>          
          {/* Use Cards to display comments */}
          <div>
            {userActivity.comments.content.map((comment: any) => (
              <Card key={comment.id}>
                <CardContent>
                  <h3>{comment.title}</h3>
                  <p>{comment.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Pagination
            currentPage={commentsPage}  // Use commentsPage for Comments pagination
            totalPages={userActivity.comments.totalPages} // Set appropriate totalPages
            onPageChange={setCommentsPage}
          />
      </Grid>    
    </Grid>  );
 };   
export default VirtualPostApp;
