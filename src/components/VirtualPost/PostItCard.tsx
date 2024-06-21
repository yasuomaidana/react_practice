import React from 'react';
import { PostIt } from './PostIt';
import { Card } from '@mui/material';

const PostItCard: React.FC<PostIt> = ({ id, title, content }) => {    
  return (
    <Card key={id}>
      <h3>{title}</h3>
      <p>{content}</p>
      {/* Add more details of the PostIt here (e.g., comments, children, etc.) */}
    </Card>
  );
};
export default PostItCard;