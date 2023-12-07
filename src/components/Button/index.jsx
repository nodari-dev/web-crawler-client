import "./styles.scss";

const Button = ({onClick, disabled, children}) => {
    return (
        <button onClick={onClick}
                disabled={disabled}
                className="button">
            {children}
        </button>
    )
}

export default Button;