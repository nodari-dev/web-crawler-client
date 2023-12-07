import "./styles.scss";

const Input = ({value, onChange, onKeyDown, placeholder}) => {
    return (
        <input className="input"
               type="text"
               value={value}
               onKeyDown={(event) => onKeyDown(event.key)}
               onChange={(event) => onChange(event.target.value)}
               placeholder={placeholder}
        />
    )
}

export default Input;