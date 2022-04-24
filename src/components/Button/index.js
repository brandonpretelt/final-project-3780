import './Button.css'

const Button = ({buttonText, btnTest, modalToggle, setModalToggle}) => {
    const toggleModal = () => {
        setModalToggle(modalToggle=>!modalToggle)
    }
    return (
        <button onClick={() => {
                {buttonText === 'Save' ? alert('saved') : btnTest(buttonText) }
                toggleModal();
        }}  data-btn={buttonText}>{buttonText}</button>
    )
}


export default Button;