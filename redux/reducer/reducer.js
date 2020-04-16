import {ADD} from '../action/action'
const initial = "Unknown User"


export const NameReducer =(state=initial,action)=>{
switch (action.type) {
    case ADD:
        state=action.payload
        return state
        

    default:
        return state
        
}
}

