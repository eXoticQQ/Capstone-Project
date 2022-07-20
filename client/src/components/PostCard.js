import placeholder from "../assets/Placeholder.jpeg";
import avatar from "../assets/avatar.png";
import "../styles/PostCard.css";
import { v4 as uuidv4 } from "uuid"
import { useState } from "react";




function PostCard({ post, handleDeletePost, handleLike, user }) {

  const [comments, setComments] = useState([])

  function handleDeleteComment(id) {
    fetch(`/comments/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
    .then((response) => response.json())
    .then((deletedComment)=> setComments(comments.filter((c) => c.id !== deletedComment.id)))
  }

  // function handleSubmitPost(e) {
  //   const newP = {
  //     description: e.target.children[0].value,
  //     likes: 0,
  //     user_id: user.id
  //   }
    
  //   fetch('/posts', {
  //     method: 'POST',
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${localStorage.token}`
  //     },
  //     body: JSON.stringify(newP),
  //   })
  //   .then((r) => r.json())
  //   .then((res) => setPosts([...posts, res]))
    
  //   document.getElementById('post_form').reset();
  //   // e.preventDefault();
  //   e.target.reset();
  // }

  return (
    <div className="postCard">
      <div className="post-card-header">
        <img className="post-card-avatar" src={avatar} alt="avatar"></img>
        <h4>{user}</h4>
      </div>

      <img
        className="post-card-image"
        src={placeholder}
        alt="placeholder"
      ></img>

      <div className="post-card-buttons">
        <button className="deleteButton" onClick={() => handleDeletePost(post)}>
          X
        </button>
        <button className="likeButton" onClick={() => handleLike(post)}>
          Like
        </button>
        <button className="commentButton">
          Comment
        </button>
      </div>

      <div className="post-card-description">
          <p><strong>{`Likes: ${post.likes}`}</strong></p>
        <p><strong>{`${user}`}</strong> {`${post.description}`}</p>
      </div>
      <div className="post-card-comments">
        {post.user_comments.map(comment => <div key={uuidv4()}><b key={uuidv4()}>{comment.user}</b> <p key={uuidv4()}> {comment.comment}</p><button onClick={handleDeleteComment}>X</button></div>)}
      </div>
    </div>
  );
}

export default PostCard;
