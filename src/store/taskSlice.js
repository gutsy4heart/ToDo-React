import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    tasks: [],
    selectedTask: null,
    viewModel: null,
}

const taskSlice = createSlice(
    {
        name: 'tasks',
        initialState,
        reducers: {
            addTask: (state, action) => {
                state.tasks.push(action.payload);
            },
            deleteTask: (state, action) => {
                state.tasks = state.tasks.filter(task => task.id !== action.payload);
            },
            updateTask: (state, action) => {
                const {id, updateTasks} = action.payload;
                const task = state.tasks.find(task => task.id === id);
                task ? Object.assign(task, updateTasks) : tasks.push(updateTasks);
            },
            toggleTaskStatus(state, action){
                const task = state.tasks.find(task => task.id === action.payload);
                if (task) {
                    task.completed = !task.completed;
                }
            },
            viewTaskDetails(state, action){
                state.selectedTaskId = action.payload;
                state.viewMode = "detail";
            },
            editTask(state, action){
                state.selectedTaskId = action.payload;
                state.viewMode = "edit";
            },
            clearView(state) {
                state.selectedTaskId = null;
                state.viewMode = null;
            }
        }
    }
);

export const {
    addTask,
    deleteTask,
    updateTask,
    toggleTaskStatus,
    viewTaskDetails,
    editTask,
    clearView,
} = taskSlice.actions;

export default taskSlice.reducer;