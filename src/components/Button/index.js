import './Button.css'

const Button = ({buttonText, btnTest}) => {
    return (
        <button onClick={() => btnTest(buttonText)} data-btn={buttonText}>{buttonText}</button>
    )
}


export default Button;