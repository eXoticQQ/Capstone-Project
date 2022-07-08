import placeholder from "../assets/Placeholder.jpeg";
import avatar from "../assets/avatar.png";
import "../styles/PostCard.css";

function PostCard({ post, handleDeletePost, handleLike, user }) {
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
    </div>
  );
}

export default PostCard;
