import {useState} from "react";
import BasicLayout from "../../components/BasicLayout";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";
import "./styles.scss"
import useAPI from "../../hooks/useAPI.js";

const SearchConsole = () => {
    const {submit} = useAPI()
    const [text, setText] = useState("")
    const [hasSuccess, showSuccess] = useState(false)
    const [hasError, showError] = useState(false)
    const isDisabled = text.length === 0

    const urlRegex = /^(https?):\/\/[^\s/$.?#].[^\s]*$/i;

    const onKeyDown = async (key) => {
        if(key === "Enter"){
            await handleSubmit()
        }
    }

    const handleSubmit = async () => {
        if(urlRegex.test(text)){
            showSuccess(true)
            setTimeout(() => {
                showSuccess(false)
            }, 3500)
            setText("")
            await submit(text)
        } else{
            showError(true)
            setTimeout(() => {
                showError(false)
            }, 3500)
        }
    }

    return (
        <BasicLayout>
            <Header><h3>Pond console</h3></Header>
            <div className="search-console">
                <h3>Submit you website</h3>
                {hasSuccess && <p>Now wait while Robert Duck is digesting it...</p>}
                {hasError && <p>Wait, what the hell is that? It's not an URL!</p>}
                <div className="input-container">
                    <Input value={text} onKeyDown={onKeyDown} onChange={setText} placeholder="Feed pond with you url"/>
                    <Button onClick={handleSubmit} disabled={isDisabled}>Submit</Button>
                </div>
            </div>
        </BasicLayout>
    )
}

export default SearchConsole;