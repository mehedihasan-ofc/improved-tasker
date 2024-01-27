/* eslint-disable no-case-declarations */
const initialState = {
    tasksData: [
        {
            id: 1,
            title: "Learn React Native",
            description:
                "I want to Learn React such that I can treat it like my slave and make it do whatever I want to do.",
            tags: ["web", "react", "js"],
            priority: "High",
            isFavorite: true,
        },
        {
            id: 2,
            title: "Build a To-Do App",
            description:
                "I need to build a to-do app to organize my tasks and improve productivity.",
            tags: ["web", "react", "js"],
            priority: "Medium",
            isFavorite: false,
        },
        {
            id: 3,
            title: "Study Redux",
            description:
                "Understanding Redux is crucial for managing state in React applications effectively.",
            tags: ["web", "react", "redux"],
            priority: "High",
            isFavorite: true,
        }
    ]
};

const tasksReducer = (state, action) => {
    let searchTerm;
    switch (action.type) {
        case "ADD_TASK":
            const newTask = {
                id: state.tasksData.length + 1,
                isFavorite: false,
                ...action.payload
            };
            return {
                ...state,
                tasksData: [...state.tasksData, newTask]
            };
        case "REMOVE_TASK":
            return {
                ...state,
                tasksData: state.tasksData.filter(x => x.id !== action.payload.id)
            };
        case "TOGGLE_FAVORITE":
            return {
                ...state,
                tasksData: state.tasksData.map(task =>
                    task.id === action.payload.id ? { ...task, isFavorite: !task.isFavorite } : task
                )
            };
        case "SEARCH_TASK":
            searchTerm = action.payload.toLowerCase();
            if (searchTerm.trim() === "") {
                return initialState;
            }
            return {
                ...state,
                tasksData: state.tasksData.filter(task =>
                    task.title.toLowerCase().includes(searchTerm)
                )
            };
        case "DELETE_ALL_TASKS":
            return {
                ...state,
                tasksData: []
            };
        case "EDIT_TASK":
            const updatedTask = action.payload;
            return {
                ...state,
                tasksData: state.tasksData.map(task =>
                    task.id === updatedTask.id ? updatedTask : task
                )
            };
        default:
            return state;
    }
};

export { initialState, tasksReducer };