import './AddProject.css'
import { useState, useContext } from "react";
import { DashboardContext } from '../../contexts/DashboardContext';
import Button from '../Button'
import Tag from '../Tag'

 const AddProject = ({buttonTextSave, buttonTextCancel, modalToggle, setModalToggle, createProjectTitleText}) => {
     
     const { addProject } = useContext(DashboardContext);
     const [projectName, setProjectName] = useState('');
     const [projectDetails, setProjectDetails] = useState('');
     

    const handleSubmit = (e) => {
        e.preventDefault();
        setProjectDetails('');
        setProjectName('')
        
        createProjectTitleText(projectName)
        console.log(projectName);
    };

     let tagTextWIP = 'work in progress';
     let tagTextDone = 'done';

     const btnTest = (text) => {
         console.log(text);
         if (text === 'Cancel') {
             setModalToggle(modalToggle=> !modalToggle);
         }
     }

     return (
        <div className={modalToggle ?  "modal" : "modal-hide"}>
            <form onSubmit={handleSubmit}>
                <div className="text-field-group">
                    <div>
                        <label htmlFor="project-title"> Project Title </label>
                        <input 
                            id="project-title" 
                            type="text" 
                            placeholder="Add your project... "
                            value={projectName}
                            onChange={(e) => setProjectName(e.target.value)}
                            />
                    </div>
                    <div>
                        <label htmlFor="project-details"> Project Details </label>
                        <textarea placeholder='Add details...' id="project-details" defaultValue=''></textarea>
                    </div>

                </div>
                <div className="input-field-group">
                    <div className="tag-group">
                    <h3> Tags </h3>
                        <Tag tagText={tagTextDone} />
                        <Tag tagText={tagTextWIP} />
                    </div>
                        <div className="priority-group">
                        <h3> Priority </h3>
                        <label htmlFor="low-priority">
                            <input type="radio" name="priority" /> Low !
                        </label>
                        <label htmlFor="medium-priority">                    
                            <input type="radio" name="priority" /> Medium !!
                        </label>
                        <label htmlFor="high-priority">
                            <input type="radio" name="priority" /> High !!!
                        </label>
                    </div>
                    <div className="button-group">
                        <Button buttonText={buttonTextCancel} btnTest={btnTest}/>
                        <Button 
                            modalToggle={modalToggle}
                            setModalToggle={setModalToggle}
                            buttonText={buttonTextSave} 
                            addProject={addProject} 
                            projectName={projectName} 
                            setProjectName={setProjectName}/>
                    </div> 
                </div>
     
            </form>
        </div> 
    )
 }

 export default AddProject

 /*        // projectTitle = e.target.value;
                                // createProjectTitleText(projectTitle);
                                // setProjectTitle(projectTitle) */