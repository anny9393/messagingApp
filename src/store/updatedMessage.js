import { addMessage,addUpdatedMessage, deleteUpdatedMessage, saveMessage } from "../actions/chats";

const updatedMessages = ({dispatch}) => next => action => {
    if (action.type === saveMessage.toString()) {
        const {id} = action.payload.message;
        dispatch(addUpdatedMessage(id));

        setTimeout(() => {
            dispatch(deleteUpdatedMessage(id));
          }, 3000);

    }
    return next (action);
}

export default updatedMessages;