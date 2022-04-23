import { v4 as uuidv4 } from 'uuid';

export const initialState = {
    projects: []
};

export const actions = {
    set_project: 'set_project',
    delete_project: 'delete_project',
    log_project: 'log_project'
};

export const dashboardReducer = (state, action) => {
    switch (action.type) {
        case actions.set_project:
            return {
                projects: [
                    ...state.projects,
                    {
                        projectName: action.projectTitle,
                        projectDetails: action.projectDetails,
                        id: uuidv4()
                    }
                ]
            };
        case actions.delete_project:
            console.log(state);
            return state.filter((project) => project.id !== action.id);
        case actions.log_project:
            console.log(state, actions);
            return state.map((project) => {
                console.log(project);
            });
        default:
            return state;
    }
};
