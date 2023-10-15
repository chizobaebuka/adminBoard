import whiteLogo from "../images/whiteLogo.png"
import colorLogo from "../images/colorLogo.png"


const Nav = ({ minimal, authToken} ) => {
    return (
        <nav>
            <div className="logo-container">
                <img src={minimal ? colorLogo : whiteLogo} alt="logo" className="logo"/>
            </div>

            {!authToken && !minimal && <button className="nav-button">Log In</button>}
        </nav>
    )
}
export default Nav