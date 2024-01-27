import { createContext } from 'react';

export const TaskContext = createContext(null);

// import { createContext, useContext, useReducer } from "react";
// import { initialTasks } from "../data/tasks";

// export const TaskContext = createContext(null);
// export const TaskDispatchContext = createContext(null);

// export default function TasksProvider({ children }) {
//     // taskReducer,
//     const [tasks, dispatch] = useReducer(initialTasks);

//     return (
//         <TaskContext.Provider value={tasks}>
//             <TaskDispatchContext.Provider value={dispatch}>
//                 {children}
//             </TaskDispatchContext.Provider>
//         </TaskContext.Provider>
//     );
// }

// export function useTasks() {
//     return useContext(TaskContext);
// }

// export function useTasksDispatch() {
//     return useContext(TaskDispatchContext);
// }