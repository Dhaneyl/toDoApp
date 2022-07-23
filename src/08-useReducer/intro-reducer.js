
const initialState = [{
    id: 1,
    toDo: 'Find the one piece',
    done: false,
}];

//The reducer hook recieve two inputs, the first one is a state, and the second one is a action
const toDoReducer = (state = initialState, action={}) =>{

    if(action.type === '[TODO] add toDo'){
        return [...state, action.payload];
    }
    return state;

}

let toDo = toDoReducer();
//New to do state
const newtoDo = {
    id: 2,
    toDo: 'Become the best swordman in the world',
    done: false,
}
//Action to add the state
const addNewtoDo = {
    type:'[TODO] add toDo',
    payload: newtoDo,
}
//Call the varible that contain reducer, the paramethers are toDo, and the new state which is a action
toDo = toDoReducer(toDo, addNewtoDo)


console.log(toDo);