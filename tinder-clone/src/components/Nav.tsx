import whiteLogo from "../images/whiteLogo.png"
import colorLogo from "../images/colorLogo.png"

type NavProps = {
    minimal: boolean;
    authToken: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    showModal: boolean;
    setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>;
};

const Nav = ({ minimal, authToken, setShowModal, showModal, setIsSignUp }: NavProps) => {

    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(false)
    }

    return (
        <nav>
            <div className="logo-container">
                <img src={minimal ? colorLogo : whiteLogo} alt="logo" className="logo"/>
            </div>

            {!authToken && !minimal && 
            <button 
                className="nav-button"
                onClick={handleClick}
                disabled={showModal}
            >
                Log In
            </button>}
        </nav>
    )
}
export default Nav