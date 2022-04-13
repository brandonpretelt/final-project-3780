import './App.css';
import { useState } from 'react';
import AddProject from './components/AddProject';
import ProjectCard from './components/ProjectCard';

function App() {

    const [modalToggle, setModalToggle] = useState(false);

    const handleClick = () => {
        setModalToggle(modalToggle => !modalToggle)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    let buttonTextSave = 'Save';
    let buttonTextCancel = 'Cancel';

    return (
        <div className='container'>
            <ProjectCard handleClick={handleClick} />
            <AddProject
                modalToggle={modalToggle}
                buttonTextSave={buttonTextSave}
                buttonTextCancel={buttonTextCancel}
                handleSubmit={handleSubmit}
                setModalToggle={setModalToggle}
            />
        </div>
    );
}

export default App;
