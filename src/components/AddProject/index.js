import './AddProject.css'
import Button from '../Button'
import Tag from '../Tag'

 const AddProject = ({buttonTextSave, buttonTextCancel, modalToggle, setModalToggle}) => {
     

    
    const handleSubmit = (e) => {
        e.preventDefault();
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
                        />
                    </div> 
                </div>
     
            </form>
        </div> 
    )
 }

 export default AddProject

                                /*                         <input 
                            id="project-title" 
                            type="text" 
                            placeholder="Add your project... "
                            value={projects}
                            onChange={(e) => setProjects(e.target.value)}
                            /> */