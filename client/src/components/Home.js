import Login from "./Login";
import Posts from "./Posts"

function Home({setCurrentUser, user, loggedIn, handleDeletePost, posts, handleSubmitPost, handleLike}) {
    if (!loggedIn) {
        return (
          <>
            <Login setCurrentUser={setCurrentUser} />
            {/* <button onClick={routeChange}>Sign up</button> */}
          </>
        )
    } else {
        return ( 
          <>
            {user.posts !== undefined ? < Posts user={user} handleDeletePost={handleDeletePost} handleSubmitPost={handleSubmitPost} handleLike={handleLike} posts={posts} /> : <></>}
          </>
        )
    }
}

export default Home;