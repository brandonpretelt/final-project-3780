import './ProjectCard.css';

const ProjectCard = ({ handleClick }) => {
    return (
        <div className='project-card' data-add-project onClick={handleClick}>
            <span> Add Icon Goes Here </span>
            <h3> Add New Project </h3>
        </div>
    );
};

export default ProjectCard;
