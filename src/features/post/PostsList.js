import { useSelector } from "react-redux";
import { AddPostFormComponent } from "./AddPostFormComponent";
import { selectAllPosts } from "./postSlice";
import PostAuthor from "./PostAuthor"
import TimeAgo from "./TimeAgo";

const PostList = () =>{
    const posts = useSelector(selectAllPosts);
    const renderedPosts = posts.map(post=>(
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
            <PostAuthor userId={post.userId}/>
            <TimeAgo timeStamp={post.date}/>
        </article>
    ));
    return(<><AddPostFormComponent/><section>{renderedPosts}</section></>)
}

export default PostList;