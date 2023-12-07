import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import Header from "../../components/Header";
import ResultsList from "./components/ResultsList";
import Pagination from "./components/Pagination";
import "./styles.scss";
import Search from "../../components/Search/index.jsx";
import BasicLayout from "../../components/BasicLayout/index.jsx";
import useAPI from "../../hooks/useAPI.js";

const SearchResults = () => {
    const [seoData, setSeoData] = useState()
    const location = useLocation();
    const {search} = useAPI()

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const q = params.get('q');
        const page = params.get('page');
        const size = params.get('size');
        search(q, page, size).then(r => setSeoData(r))

    }, [location.search])

    return (
        seoData ?
            <BasicLayout>
                <Header><Search/></Header>
                <div className="results">
                    {seoData?.results.length
                        ? <>
                            <ResultsList results={seoData.results}/>
                            <Pagination max={seoData.totalPages}/>
                        </>
                        : <div className="not-found">
                            <img src="/src/assets/image/404.gif" alt="404"/>
                            <h3>Search better!</h3>
                        </div>
                    }
                </div>
            </BasicLayout>
            : <div/>
    )
}

export default SearchResults;