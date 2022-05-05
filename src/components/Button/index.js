import './Button.css'

const Button = ({buttonText, btnTest, modalToggle, setModalToggle, addProject}) => {
    const toggleModal = () => {
        setModalToggle(modalToggle=>!modalToggle)
    }
    return (
        <button onClick={() => {
                {buttonText === 'Save' ? addProject() : btnTest(buttonText) }
                toggleModal();
        }}  data-btn={buttonText}>{buttonText}</button>
    )
}


export default Button;