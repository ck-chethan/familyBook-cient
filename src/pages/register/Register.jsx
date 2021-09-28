import axios from "axios"
import { useRef } from "react"
import { useHistory } from "react-router"
import "./register.css"

export default function Register() {

    const username = useRef()
    const email = useRef()
    const password = useRef()
    const passwordAgain = useRef()
    const history = useHistory();

    const handleClick = async (e) => {
        e.preventDefault()
        if (passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity("Password didn't match")
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            }
            try {
                await axios.post("/auth/register", user);
                history.push("/login");
            } catch (err) {
                console.log(err);
            }

        }
    };

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Familybook</h3>
                    <span className="loginDesc">
                        Connect with friends, family and world arond you on Familybook.
                    </span>
                </div>
                <div className="loginRight">
                    <form className="registerBox" onSubmit={handleClick}>
                        <input placeholder="Username" required ref={username} className="loginInput" />
                        <input placeholder="Email" required type="email" ref={email} className="loginInput" />
                        <input placeholder="Password" required type="password" minLength="6" ref={password} className="loginInput" />
                        <input placeholder="Confirm Password" required type="password" ref={passwordAgain} className="loginInput" />
                        <button className="loginButton" type="submit">Sign Up</button>
                        <button className="loginRegisterButton">Login to your Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
