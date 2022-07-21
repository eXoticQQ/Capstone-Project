import placeholder from "../assets/Placeholder.jpeg";
import avatar from "../assets/avatar.png";
import "../styles/PostCard.css";
import { v4 as uuidv4 } from "uuid"




function selfPostCard({ post, handleDeletePost, handleLike, user }) {

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
      </div>

      <div className="post-card-description">
          <p><strong>{`Likes: ${post.likes}`}</strong></p>
        <p><strong>{`${user}`}</strong> {`${post.description}`}</p>
      </div>
      <div className="post-card-comments">
        {post.user_comments.map(comment => <div key={uuidv4()}><b key={uuidv4()}>{comment.user}</b> <p key={uuidv4()}> {comment.comment}</p></div>)}
      </div>
    </div>
  );
}

export default selfPostCard;
