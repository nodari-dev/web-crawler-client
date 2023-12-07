import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {CgArrowRight, CgArrowLeft, CgPushLeft} from "react-icons/cg";
import useSearchParams from "../../../../hooks/useSearchParams.js";
import "./styles.scss"

const maxToShow = 5
const Pagination = ({max}) => {
    const {changePage} = useSearchParams()
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const page = params.get('page');
        setCurrentPage(Number(page))

    }, [location.search])

    const getPaginationButtons = () => {
        let indexes;
        if(max <= maxToShow){
            indexes = [...Array(max + 1).keys()].slice(1 , max + 1);
        } else if(currentPage + maxToShow >= max){
            indexes = [...Array(max + 1).keys()].slice(max - maxToShow , max + 1);
        } else{
            indexes = [...Array(max + 1).keys()].slice(currentPage, currentPage + maxToShow);
        }

        return indexes.map(index =>
            <button onClick={() => changePage(index)}
                    key={index}
                    className={index === currentPage ? "pagination-button-active" : "pagination-button"}>
                {index}
            </button>
        )
    }

    return (
        <div className="pagination">
            <div className="pagination-container">
                <button onClick={() => changePage(1)}
                        className="pagination-button"
                        disabled={currentPage === 1}>
                    <CgPushLeft/>
                </button>
                <button onClick={() => changePage(currentPage - 1)}
                        className="pagination-button"
                        disabled={currentPage === 1}>
                    <CgArrowLeft/>
                </button>
                {getPaginationButtons()}
                {currentPage + maxToShow < max && (
                        <>
                            <button disabled className="pagination-button">...</button>
                            <button className="pagination-button" onClick={() => changePage(max)}>
                                {max}
                            </button>
                        </>
                    )
                }
                <button onClick={() => changePage(currentPage + 1)}
                        disabled={currentPage === max}
                        className="pagination-button">
                    <CgArrowRight/>
                </button>
            </div>
        </div>
    )
}

export default Pagination;