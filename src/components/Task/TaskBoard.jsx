import { useContext, useState } from "react";
import NoTasksFound from "./NoTasksFound";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import { TaskContext } from "../../context/tasksContext";
import AddTaskModal from "./AddTaskModal";
import { toast } from "react-toastify";

const TaskBoard = () => {

    const [showAddModal, setShowAddModal] = useState(false);
    const { state, dispatch } = useContext(TaskContext);
    const [taskToUpdate, setTaskToUpdate] = useState(null);

    const handleAddEditTask = (newTask, isAdd) => {
        if (isAdd) {
            dispatch({
                type: "ADD_TASK",
                payload: newTask
            });
            setShowAddModal(false);
        } else {
            dispatch({
                type: "EDIT_TASK",
                payload: newTask
            });
            setShowAddModal(false);
            setTaskToUpdate(null);
            toast.success(`Task updated successfully!`);
        }
    };

    const handleDeleteAllClick = () => {

        const isConfirmed = window.confirm(`Are you sure you want to delete all?`);

        if (isConfirmed) {
            dispatch({
                type: "DELETE_ALL_TASKS"
            });
            toast.success(`Deleted successful!`);
        }
        else {
            toast.warning("Deletion cancelled.");
        }
    };

    function handleEditTask(task) {
        setTaskToUpdate(task);
        setShowAddModal(true);
    }

    function handleCloseClick() {
        setShowAddModal(false);
        setTaskToUpdate(null);
    }

    return (
        <section className="mb-20" id="tasks">

            {showAddModal && (
                <AddTaskModal taskToUpdate={taskToUpdate} onCloseClick={handleCloseClick} onSave={handleAddEditTask} />
            )}

            <div className="container">
                <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                    <TaskActions onAddClick={() => setShowAddModal(true)} onDeleteAllClick={handleDeleteAllClick} />
                    {state?.tasksData.length > 0 ? <TaskList onEdit={handleEditTask} state={state} dispatch={dispatch} /> :
                        <NoTasksFound />}
                </div>
            </div>
        </section>
    );
};

export default TaskBoard;