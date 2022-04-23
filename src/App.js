import './App.css';
import { useState } from 'react';
import AddProject from './components/AddProject';
import ProjectCard from './components/ProjectCard';
import Card from './components/Card';

function App() {
    const [modalToggle, setModalToggle] = useState(false);
    const [projects, setProjects] = useState([{}]);
    const handleClick = () => {
        setModalToggle((modalToggle) => !modalToggle);
    };

    const createProjectTitleText = (text) => {
        setProjects(text);
    };

    let buttonTextSave = 'Save';
    let buttonTextCancel = 'Cancel';

    return (
        <div className='container'>
            <ProjectCard handleClick={handleClick} />
            <AddProject
                createProjectTitleText={createProjectTitleText}
                projects={projects}
                setProjects={setProjects}
                modalToggle={modalToggle}
                buttonTextSave={buttonTextSave}
                buttonTextCancel={buttonTextCancel}
                setModalToggle={setModalToggle}
            />
            <Card />
        </div>
    );
}

export default App;
