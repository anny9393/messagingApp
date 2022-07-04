// import { addMessage } from "../actions/chats";
// import { v4 as uuidv4 } from 'uuid';
// import { ROBOT_MAME } from "../utils/constants";

// const robotAnswer = ({ getState, dispatch}) => next => action => {
//     if(action.type === addMessage.toString()) {
//         console.log(action.payload.message)
//         if (action.payload.message.user !== ROBOT_MAME) {
//             setTimeout(()=> {
//                 dispatch(addMessage( {chatId: action.payload.chatId, 
//                     message: {user: ROBOT_MAME, text: 'Hi, I am Robot', id: uuidv4() },
//                 }),
//                 )
//             }, 500)
//         }
//     }
//     return next(action)
// }

// export default robotAnswer;