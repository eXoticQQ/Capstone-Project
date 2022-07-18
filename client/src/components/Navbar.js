import instagram_logo from "../assets/instagram_logo.png"
import '../styles/Navbar.css';
import { Button, Input } from "../styles"

function Navbar({user, logOut, loggedIn}) {
    return (
        <div className="navbar-container">
            <div className="navbar-logo">
                <img src={instagram_logo} alt="instagram logo"></img>
            </div>
            <div className="navbar-search">
                <Input type="text"></Input>
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