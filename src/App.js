import './App.css';
import { useState } from 'react';
import AddProject from './components/AddProject';
import ProjectCard from './components/ProjectCard';
import DashboardContextProvider from './contexts/DashboardContext';
import Card from './components/Card';

function App() {
    const [modalToggle, setModalToggle] = useState(false);
    const [projectTitle, setProjectTitle] = useState('');
    const handleClick = () => {
        setModalToggle((modalToggle) => !modalToggle);
    };

    const createProjectTitleText = (text) => {
        setProjectTitle(text);
    };

    let buttonTextSave = 'Save';
    let buttonTextCancel = 'Cancel';

    return (
        <div className='container'>
            <DashboardContextProvider>
                <ProjectCard handleClick={handleClick} />
                <AddProject
                    createProjectTitleText={createProjectTitleText}
                    projectTitle={projectTitle}
                    setProjectTitle={setProjectTitle}
                    modalToggle={modalToggle}
                    buttonTextSave={buttonTextSave}
                    buttonTextCancel={buttonTextCancel}
                    setModalToggle={setModalToggle}
                />
                <Card />
            </DashboardContextProvider>
        </div>
    );
}

export default App;
