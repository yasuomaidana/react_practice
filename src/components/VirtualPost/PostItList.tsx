import React from 'react';
import PostItCard from './PostItCard' ; 
import { PostIt } from './PostIt';
import Pagination from './Pagination';

interface PostItListProps {
    postIts: PostIt[];
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    
}
const PostItList : React.FC<PostItListProps> = ({ postIts, currentPage, totalPages, onPageChange }) => {  
  return (
    <div>
      <h2>PostIts:</h2>
      <ul>
      {postIts.map((postIt) => (
        <PostItCard {...postIt} />
      ))}
      </ul>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
    </div>
  );
};      
export default PostItList;