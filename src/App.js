import './App.css';
import AddProject from './components/AddProject/AddProject';
import ProjectCard from './components/ProjectCard/ProjectCard';

function App() {
    const handleClick = () => {
        console.log('i have been clicked!');
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
                buttonTextSave={buttonTextSave}
                buttonTextCancel={buttonTextCancel}
                handleSubmit={handleSubmit}
            />
        </div>
    );
}

export default App;
