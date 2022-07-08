import instagram_logo from "../assets/instagram_logo.png"
import '../styles/Navbar.css';

function Navbar({user, logOut, loggedIn}) {
    return (
        <div className="navbar-container">
            <div className="navbar-logo">
                <img src={instagram_logo} alt="instagram logo"></img>
            </div>
            <div className="navbar-search">
                <input type="text"></input>
            </div>
            <div className="navbar-buttons">
                <img src={user.image} alt=""></img>
                <h2>{user ? user.username : ' '}</h2>
                {loggedIn ? <button onClick={logOut}> LogOut </button> : ''}
            </div>

        </div>
    )
}

export default Navbar;