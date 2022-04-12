import './App.css';
import ProjectCard from "./components/ProjectCard/ProjectCard";

function App() {
  const handleClick = () => {
    console.log('i have been clicked!');
}
  return (
    <div className='container'>
      <ProjectCard handleClick={handleClick}/>
    </div>
  );
}

export default App;
