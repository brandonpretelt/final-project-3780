import './Card.css'
import { useContext, useState } from "react";

const Card = ({projects}) => {
    const buttonText = 'delete';
    console.log(projects)
    const deleteProjects = (id) => {
        return projects.filter((project) => id !== project.id);
    }

    return (
        <>
            {projects && projects.map((test) => (
                <div key={test.id} className='card' onClick={(e)=>{
                    console.log(e.target);
                }}>
                    <h3>{test.projectName}</h3>
                    <button key={test.id} onClick={(e) => {
                        e.stopPropagation();
                        deleteProjects(test.id)
                    }} >{buttonText}</button>
                </div>
                
            ))}
        </>
    )
}

export default Card;