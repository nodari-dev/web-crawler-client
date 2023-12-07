import Logo from "../Logo";
import "./styles.scss"

const Header = ({children}) => {
    return (
        <header className="header">
            <div className="header-container">
                <Logo small/>
                {children}
            </div>
        </header>
    )
}

export default Header;