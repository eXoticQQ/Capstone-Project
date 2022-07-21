import instagram_logo from "../assets/instagram_logo.png"
import '../styles/Navbar.css';
import { Button } from "../styles"
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";


function Navbar({ loggedIn, setUser, setPosts, setLoggedIn, allPosts }) {
    const user = useSelector(state => state.user.value)
    const navigate = useNavigate()
    const selfPosts = async () => {
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

    function logOut() {
        setUser({});
        setLoggedIn(false);
        setPosts([]);
        localStorage.token = '';
        navigate("/");
      }
    


    return (
        <div className="navbar-container">
            <div className="navbar-logo">
                <img src={instagram_logo} alt="instagram logo"></img>
            </div>
            <div>
                <NavLink to="/self_posts" onClick={selfPosts} >
                    Your posts
                </NavLink>
                <br></br>
                <NavLink to="/" onClick={allPosts}>
                    All Posts
                </NavLink>
            </div>
            <div className="navbar-buttons">
                <img src={user.image} alt=""></img>
                <h2>{user ? user.username : ' '}</h2>
                {loggedIn ? <Button onClick={logOut}> Log Out </Button> : ''}
            </div>

        </div>
    )
}

export default Navbar;