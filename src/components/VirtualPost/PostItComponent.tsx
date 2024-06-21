import React from 'react';
import { PostIt } from './PostIt';

const PostItComponent: React.FC<PostIt> = ({ id, title, content }) => {    
  return (
    <div key={id}>
      <h3>{title}</h3>
      <p>{content}</p>
      {/* Add more details of the PostIt here (e.g., comments, children, etc.) */}
    </div>
  );
};
export default PostItComponent;