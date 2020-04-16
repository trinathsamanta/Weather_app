import {REPORT} from '../action/action'
const data = []


export const DataReducer =(state=data,action)=>{
    let newState=state
switch (action.type) {
    case REPORT:
        newState = action.payload;
        return newState
        

    default:
        return state
        
}
}

