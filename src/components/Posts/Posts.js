import React from 'react';
import { useHistory } from 'react-router-dom';

const Posts = (props) => {
    console.log(props)
    const {userId, id, title, body} = props.post;
    const history = useHistory();

    const handleShowMore = (PostId) => {
        const url = `/post/${PostId}`;
        history.push(url);

    }
    return (
        <div style={{border: '1px solid maroon', margin: '5px', padding: '5px'}}>
        
           <h2>Title: {title}</h2>
            <p>{body}</p>
            <button onClick={()=>handleShowMore(id)}>Show more</button>
        </div>
    );
};

export default Posts;