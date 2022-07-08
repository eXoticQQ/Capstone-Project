import PostCard from './PostCard';
import React, { useState } from 'react';
import '../styles/Posts.css';


function Posts({user, handleDeletePost, handleSubmitPost, handleLike, posts}) {
    const [newPost, setNewPost] = useState("");
    return (
        <div className="Posts">
          <form onSubmit={handleSubmitPost} id="post_form">
            <input 
                className='post-input'
                type="text" 
                placeholder="New post"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
            ></input>
          </form>
          {posts.slice(0).reverse().map((post) => (
              <PostCard
                key={post.id}
                post={post}
                handleDeletePost={handleDeletePost}
                handleLike={handleLike}
                user={user.username}
              />
          ))}
        </div>
      );
}

export default Posts;