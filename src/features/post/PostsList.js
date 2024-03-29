import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { selectAllPosts, getPostStatus, getPostError, fetchPosts } from "./postSlice";

import { AddPostFormComponent } from "./AddPostFormComponent";
import PostExcerpt from "./PostExcerpt";

const PostList = () =>{
    const dispatch = useDispatch();

    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector(getPostStatus);
    const error = useSelector(getPostError);

    useEffect(()=>{
        if(postStatus === 'idle'){
            dispatch(fetchPosts());
        }
    }, [postStatus, dispatch]);


    let content;
    if(postStatus === 'loading'){
        content = <p>"Loading ..."</p>;
    } else if(postStatus === 'succeeded'){
        const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date));
        content = orderedPosts.map(post => <PostExcerpt key={post.id} post={post}/>)
    } else if(postStatus === 'failed'){
        content = <p>{error}</p>
    }
    return(<><AddPostFormComponent/><section>{content}</section></>)
}

export default PostList;