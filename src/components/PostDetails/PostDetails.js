import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';

const PostDetails = () => {
    const {PostId} = useParams();
    const [post, setPost] = useState([]);

    useEffect(() => {
       const url = `https://jsonplaceholder.typicode.com/posts/${PostId}`;
       fetch(url)
       .then(res => res.json())
       .then(data => setPost(data))
    },[])
    return (
        <div>
            <h2> PostDetails of {PostId}</h2>
            <h4>userId: {post.userId}</h4>
            <h4>Post id: {post.id} </h4>
            <h2>Post Title: {post.title}</h2>
            <p>{post.body}</p>
            <Comments id={PostId}></Comments>
            
        </div>
    );
};

export default PostDetails;