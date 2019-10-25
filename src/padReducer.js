// JavaScript source code
import Sounds  from './Sounds';
import playPad from './playPad';
const initState={
    id:'',
    dis:'',
    sound:null
}
const padReducer =(state = initState, action)=>{
    switch(action.type){
        case 'play-pad':
            let newState = Sounds.filter((val)=> val.id==action.id);
            return {
                id:newState[0].id,
                dis:newState[0].dis,
                sound:newState[0].sound
            }

default:
    return state;
    }
}
export default padReducer
