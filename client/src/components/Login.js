import iphone from "../assets/Instagram_iphone.png";
import instagram_logo from "../assets/instagram_logo.png"
import "../styles/Login.css";

import LoginForm from './LoginForm'


function Login({setCurrentUser}) {

    return (
        <div className="splash-container">
            <div className="iphone-image">
                <img src={iphone} alt="Iphone with Instagram profile"></img>
            </div>
            <div className="login-container">
                <div className="logo">
                    <img src={instagram_logo} alt="instagram logo"></img>
                </div>
                <LoginForm setCurrentUser={setCurrentUser}/>
            </div>
        </div>
    );
}

export default Login;
