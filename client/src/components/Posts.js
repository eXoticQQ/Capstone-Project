import PostCard from './PostCard';
import React, { useState } from 'react';
import '../styles/Posts.css';
import { Input } from "../styles"


function Posts({user, handleDeletePost, handleSubmitPost, handleLike, posts}) {
    const [newPost, setNewPost] = useState("");
    
    return (
        <div className="Posts">
          <form onSubmit={handleSubmitPost} id="post_form">
            <Input 
                className='post-input'
                type="text" 
                placeholder="New post"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
            ></Input>
          </form>
          {posts.slice(0).reverse().map((post) => (
              <PostCard
                key={post.id}
                post={post}
                handleDeletePost={handleDeletePost}
                handleLike={handleLike}
                user={post.user.username}
              />
          ))}
        </div>
      );
}

export default Posts;