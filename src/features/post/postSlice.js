import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { sub } from 'date-fns';
import axios from "axios";

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
    posts:[],
    status:'idle',
    error:null
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts',async ()=>{
    const response = await axios.get(POSTS_URL);
    return response.data;
});

export const addNewPost = createAsyncThunk('posts/addNewPost', async(initialPost) => {
    const response = await axios.post(POSTS_URL,initialPost);
    return response.data;
});

const postsSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{
        postAdded:{
            reducer(state,action){
                state.posts.push(action.payload)
            },
            prepare(title,content,userId){ 
                return {
                    payload:{
                    id:nanoid(),
                    title,
                    body:content,
                    date:new Date().toISOString(),
                    userId:parseInt(userId),
                    reactions:{
                        thumbsUp:0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0
                        }
                }
            }
            }
        },
        reactionAdded(state,action){
            const { postId, reaction } = action.payload;
            const existingPost = state.posts.find(post=>post.id === postId);
            if (existingPost){
                existingPost.reactions[reaction]++
            }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // Adding date and reactions
                let min = 1;
                const loadedPosts = action.payload.map(post => {
                    post.date = sub(new Date(), { minutes: min++ }).toISOString();
                    post.reactions = {
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0
                    }
                    return post;
                });
                // Add any fetched posts to the array
                let tempPosts = state.posts.concat(loadedPosts)
                state.posts = [...new Map(tempPosts.map((m) => [m.id, m])).values()];
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(addNewPost.fulfilled,(state,action)=>{
                action.payload.date = new Date().toISOString();
                action.payload.userId = Number(action.payload.userId);
                action.payload.reactions={
                        thumbsUp:0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0
                        };
                console.log(action.payload)
                state.posts.push(action.payload)
            })
    }
});

export const selectAllPosts = (state) => state.posts.posts;
export const getPostStatus = (state) => state.posts.status;
export const getPostError = (state) => state.posts.error;
export const { postAdded, reactionAdded } = postsSlice.actions;
export default postsSlice.reducer;