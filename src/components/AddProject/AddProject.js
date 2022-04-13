import './AddProject.css'
import Button from '../Button'

 const AddProject = ({buttonTextSave, buttonTextCancel, handleSubmit}) => {
     return (
        <div className="modal">
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="project-title"> Project Title </label>
                <input id="project-title" type="text" placeholder="Add your project... "/>
            </div>
            <div>
                <label htmlFor="project-details"> Project Details </label>
                <textarea placeholder='Add details...' id="project-details" defaultValue=''></textarea>
            </div>
            <div className="button-group">
                <Button className='test' buttonText={buttonTextCancel} />
                <Button buttonText={buttonTextSave} />
            </div>
        </form>
        </div> 
    )
 }

 export default AddProject