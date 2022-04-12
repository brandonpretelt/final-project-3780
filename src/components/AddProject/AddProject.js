 const AddProject = () => {
     return (
        <form>
            <div>
                <label htmlFor="project-title"> Project Title </label>
                <input id="project-title" type="text" placeholder="Add your project... "/>
            </div>
            <div>
                <label htmlFor="project-details"> Project Details </label>
                <textarea id="project-details" defaultValue='Add details...'></textarea>
            </div>
        </form>
    )
 }

 export default AddProject