import React from 'react'
import { USER_ACTIVITY } from '../../hooks/graphql/queries/user';
import { useQuery } from '@apollo/client';

const UserActivityPage = () => {
    const { data, error, loading } = useQuery(USER_ACTIVITY, {
        variables: { username: 'current_username' },
      });    
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error: {error.message}</p>;
    
      return (
        <div>
      <h1>My Activity</h1>
      <h2>PostIts:</h2>
      <ul>
        {data.userActivity.postIts.content.map((postIt: { id: React.Key | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
          <li key={postIt.id}>{postIt.title}</li>
        ))}
      </ul>
      <h2>Comments:</h2>
      <ul>
        {data.userActivity.comments.content.map((comment: { id: React.Key | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
          <li key={comment.id}>{comment.title}</li>
        ))}
      </ul>
      <h2>Comment Votes:</h2>
      <ul>
        {data.userActivity.commentVotes.map((commentVote: { commentId: React.Key | null | undefined; voteType: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
          <li key={commentVote.commentId}>{commentVote.voteType}</li>
        ))}
      </ul>
      <p>Public: {data.userActivity.public ? 'Yes' : 'No'}</p>
    </div>
      );
}

export default UserActivityPage