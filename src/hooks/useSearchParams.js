import {useNavigate} from "react-router-dom";

const useSearchParams = () => {
    const navigate = useNavigate()

    const searchByQuery = (text) => {
        const params = new URLSearchParams({
            q: text,
            page: '1',
            size: '10',
        });
        updateAndScroll(params)
    }

    const changePage = (page) => {
        const params = new URLSearchParams(location.search);
        updateAndScroll(new URLSearchParams({
            q: params.get('q'),
            page: page,
            size: '10',
        }))
    }

    const updateAndScroll = (params) => {
        window.scroll(0, 0)
        navigate(`/search?${params.toString()}`);
    }

    return {searchByQuery, changePage}
}

export default useSearchParams
