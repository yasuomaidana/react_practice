import React from 'react'
import { Button } from "react-bootstrap";

import { useDispatch } from "react-redux";
import { reactionAdded } from "./postSlice";

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
}

const ReactionButtons = ({post}) => {
    const dispatch = useDispatch();
    const reactionButtons = Object.entries(reactionEmoji).map(([name,emoji])=>{
        return(
            <Button key={name}
            variant="outline-primary"
            onClick = {()=> dispatch(reactionAdded({postId: post.id, reaction: name}))}
            >{emoji} {post.reactions[name]}
            </Button>
        )
    });
    return (
        <div>{reactionButtons}</div>
    );
}

export default ReactionButtons