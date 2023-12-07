const useAPI = () => {
    const search = async (q, page, size) => {
        const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/search/request?q=${q}&page=${page}&size=${size}`);
        return await response.json()
    }

    const submit = async (text) => {
        await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/crawling/request`, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain",
            },
            body: text,
        });
    }

    return {search, submit}
}

export default useAPI;