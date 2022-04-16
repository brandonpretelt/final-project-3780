import './Button.css'

const Button = ({buttonText, btnTest, addProjectTitle, projectName, modalToggle, setModalToggle}) => {
    return (
        <button onClick={() => {
                {buttonText === 'Save' ? addProjectTitle(projectName) : btnTest(buttonText) }
                setModalToggle(modalToggle=>!modalToggle)
        }}  data-btn={buttonText}>{buttonText}</button>
    )
}


export default Button;