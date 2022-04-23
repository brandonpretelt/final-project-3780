import { createContext, useReducer } from "react";
import { dashboardReducer, initialState, actions } from '../reducers/dashboardReducer'
import useLocalStorage from "../hooks/useLocalStorage";
export const DashboardContext = createContext('');

export const DashboardContextProvider = (props) => {
   /* dev branch shit */
    const localStorageCallback = () => {
        const dashboardData = localStorage.getItem('projects');
        return dashboardData ? JSON.parse(dashboardData) : initialState; 
    }

    const [state, dispatch] = useReducer(dashboardReducer, initialState, localStorageCallback);
        console.log(state, 'line 11 of dashboard context file')
        useLocalStorage('projects', state );



    const value = {
        projects: state.projects,
        addProject: (projectTitle, details) => {
            dispatch({type: actions.set_project, projectTitle, details})
            console.log(projectTitle, 'line 13 context file')
        },
        deleteProjects: (id) => {
            dispatch({type: actions.delete_project, id});
            console.log('deleted');
        },
        logProjects: () => {
            dispatch({type: actions.log_project});
            console.log('logged');
            console.log(this.projects);
        }
    }

    return (
        <DashboardContext.Provider value={value}>
            {props.children}
        </DashboardContext.Provider>
    )
}

export default DashboardContextProvider;

/*  */