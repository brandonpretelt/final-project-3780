import { v4 as uuidv4 } from 'uuid';

export const initialState = {
    projects: []
};

export const actions = {
    set_project_title: 'set_project_title',
    delete_project: 'delete_project'
};

export const dashboardReducer = (state, action) => {
    switch (action.type) {
        case actions.set_project_title:
            return {
                projects: [
                    ...state.projects,
                    { projectName: action.projectTitle, id: uuidv4() }
                ]
            };
        case actions.delete_project:
            return state.filter((project) => project.id !== action.id);
        default:
            return state;
    }
};
