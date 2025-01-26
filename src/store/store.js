import {configureStore} from '@reduxjs/toolkit';
import taskReducer from './taskSlice';

const loadState =()=>{
    try {
        const serializedState = localStorage.getItem('tasks');
        return serializedState ? JSON.parse(serializedState) : undefined;
    }
    catch(error){
        console.log(error);
        return undefined;
    }
}

const saveState=(state)=>{
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem('tasks', serializedState);
    }
    catch(error){
        console.log(error);
    }
}


const preloadedState = loadState();

const store = configureStore(
    {
        reducer: {
            tasks: taskReducer,
        },
        preloadedState,

    }
);

store.subscribe(() => {
    saveState(store.getState().tasks);
});

export default store;