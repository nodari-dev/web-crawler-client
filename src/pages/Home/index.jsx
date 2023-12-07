import {Link} from "react-router-dom";
import Search from "../../components/Search";
import Logo from "../../components/Logo";
import "./styles.scss";

const Home = () => {
    return (
        <div className="home-page-layout">
            <div className="container">
                <div className="logo">
                    <Logo/>
                    <h1>Robert Duck Search</h1>
                    <p>The most hilarious and useless Google and DuckDuckGo ish search engine</p>
                </div>
                <Search/>
                <Link to="/search-console" className="console-link">Pond console</Link>
            </div>
        </div>
    )
}

export default Home