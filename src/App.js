import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddProject from './components/AddProject';
import ProjectCard from './components/ProjectCard';
import Card from './components/Card';

function App() {
    const [modalToggle, setModalToggle] = useState(false);
    const [projects, setProjects] = useState([
        {
            id: uuidv4(),
            projectTitle: 'New project',
            projectDetails: 'Project details'
        }
    ]);
    const handleClick = () => {
        setModalToggle((modalToggle) => !modalToggle);
    };

    const addProject = (name, details) => {
        setProjects([
            ...projects,
            {
                id: uuidv4(),
                projectTitle: name,
                projectDetails: details
            }
        ]);
    };

    let buttonTextSave = 'Save';
    let buttonTextCancel = 'Cancel';

    return (
        <div className='container'>
            <ProjectCard handleClick={handleClick} />
            <AddProject
                buttonTextSave={buttonTextSave}
                buttonTextCancel={buttonTextCancel}
                modalToggle={modalToggle}
                setModalToggle={setModalToggle}
            />
        </div>
    );
}

export default App;
