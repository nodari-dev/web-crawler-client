import "./styles.scss"
import {Link} from "react-router-dom";

const Logo = ({small = false}) => {
    return (
        <Link to="/">
            <img
                className={small ? "logo-image-small" : "logo-image"}
                src="src/assets/image/logo.png"
                alt="RobertDuckSearch"
            />
        </Link>
    )
}

export default Logo