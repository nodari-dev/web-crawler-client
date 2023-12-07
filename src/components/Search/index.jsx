import { useState } from "react";
import { CgSearch } from "react-icons/cg";
import useSearchParams from "../../hooks/useSearchParams.js";
import Button from "../Button";
import Input from "../Input";
import "./styles.scss"

const Search = () => {
    const {searchByQuery} = useSearchParams()
    const params = new URLSearchParams(location.search);
    const searchText = params.get('q');
    const [text, setText] = useState(searchText || "");
    const isSearchDisabled = text.length === 0

    const removeEmptySpace = (string) => {
        const trimmedString = string.trim().replaceAll("'", "%27")
        return trimmedString.replace(/\s+/g, ' ')
    }

    const handleKeyPress = (key) => {
        if(!isSearchDisabled && key === "Enter"){
            searchByQuery(removeEmptySpace(text))
        }
    }

    return (
        <div className="search-container">
            <Input onChange={setText}
                   onKeyDown={handleKeyPress}
                   value={text}
                   placeholder="Search through the internet"/>
            <Button
                disabled={isSearchDisabled}
                onClick={() => searchByQuery(removeEmptySpace(text))}>
                <CgSearch/>
            </Button>
        </div>
    )
}

export default Search;