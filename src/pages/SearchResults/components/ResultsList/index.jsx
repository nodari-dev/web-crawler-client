import {Link} from "react-router-dom";
import "./styles.scss"

const createURLText = (url) => {
    const clearURL = url.replace("https://", "").replace("http://", "")
    const array = clearURL.split("/")
    return array.slice(0, -1).join(" > ")
}

const getListItems = (results) => {
    return results.map((result, index) =>
        <div className="result-item" key={index}>
            <Link to={result.url}>
                <p className="link">{createURLText(result.url)}</p>
                <h5 className="title">{result.title}</h5>
                <p className="description">{result.description}</p>
            </Link>
        </div>
    )
}

const ResultsList = ({results}) => {
    return (
        <div className="results-list">
            {getListItems(results)}
        </div>
    )
}

export default ResultsList;