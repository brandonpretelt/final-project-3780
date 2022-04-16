import './Card.css'
import { useContext } from "react";
import { DashboardContext } from "../../contexts/DashboardContext";

const Card = () => {
    const { projects, deleteProjects } = useContext(DashboardContext);
    console.log(projects, ' line 7 of card file')
    return (
        <>
            {projects.map((test) => (
                <div className='card' onClick={() => deleteProjects(test.id)}>
                    <h3>{test.projectName}</h3>
                </div>
            ))}
        </>
    )
}

export default Card;