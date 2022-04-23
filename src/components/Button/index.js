import './Button.css'

const Button = ({buttonText, btnTest, addProjectTitle, projectName, modalToggle, setModalToggle}) => {
    const toggleModal = () => {
        setModalToggle(modalToggle=>!modalToggle)
    }
    return (
        <button onClick={() => {
                {buttonText === 'Save' ? addProjectTitle(projectName) : btnTest(buttonText) }
                toggleModal();
        }}  data-btn={buttonText}>{buttonText}</button>
    )
}


export default Button;