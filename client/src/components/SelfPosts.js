import React from "react";
import SelfPostCard from "./SelfPostCard";
import { useEffect } from "react";



function SelfPosts({ user, posts, handleLike, setPosts, handleDeletePost}) {

    useEffect(() => {
        const fetchSelfPosts = async () => {
        let response = await fetch(`/self_posts/${user.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        })
        .then((response) => response.json())
        setPosts(response)
    }
    fetchSelfPosts()
},[])

    return (
        <div>
                {posts.slice(0).reverse().map((post) => (
                  <SelfPostCard
                    key={post.id}
                    post={post}
                    handleDeletePost={handleDeletePost}
                    handleLike={handleLike}
                    user={post.user.username}
                  />
                ))}
            </div>
    )
}

export default SelfPosts;