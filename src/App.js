import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddProject from './components/AddProject';
import ProjectCard from './components/ProjectCard';
import Card from './components/Card';

function App() {
    const [modalToggle, setModalToggle] = useState(false);
    let [projects, setProjects] = useState([]);
    const handleClick = () => {
        setModalToggle((modalToggle) => !modalToggle);
    };

    const displayData = () => {
        projects = projects.map((project) => {
            return {
                id: project.id,
                name: project.projectTitle,
                details: project.projectDetails
            };
        });
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
                projects={projects}
                setProjects={setProjects}
                displayData={displayData}
            />
            <Card projects={projects} />
        </div>
    );
}

export default App;
