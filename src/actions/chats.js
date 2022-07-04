import { createAction } from 'redux-actions';
import { ROBOT_MAME } from '../utils/constants';
import { v4 as uuidv4 } from 'uuid';
import { getUserName } from '../selectors/profile';
import { getChatslength } from '../selectors/chats';
//simple actions, just rerurn objects with type and payload  

export const getApiRequest = createAction('chats/GET_API_REQUEST');
export const getChatsSuccess = createAction('chats/GET_CHATS_SUCCESS');
export const getApiFailure = createAction('chats/GET_API_FAILURE');
export const getApiEnd = createAction('chats/GET_API_END');
export const saveMessage = createAction('chats/ADD_MESSAGE');
export const getMessagesSuccess = createAction('messages/GET_MESSAGES_SUCCESS');
export const deleteChat = createAction('chats/DELETE_CHAT');
export const addChat = createAction('chats/ADD_CHAT');
export const addUpdatedMessage = createAction ('chats/ADD_UPDATED_MESSAGE');
export const deleteUpdatedMessage = createAction ('chats/DELETE_UPDATED_MESSAGE');

// smart actions, they check arguments and returns functions which dispatches 
//another function whih returns object
//get some data /dispatch data
export const addMessage = data => (dispatch, getState )=> {
    const fullName = getUserName (getState());
    if (data.message.user !== ROBOT_MAME) {
        setTimeout(()=> {
            dispatch(
                saveMessage( {
                chatId: data.chatId, 
                message: {user: ROBOT_MAME, text: 'Hi, I am Robot', id: uuidv4() },
            }),
            )
        }, 500);  
} 
   dispatch (
    saveMessage({    
    chatId: data.chatId, 
    message: {user: fullName, ...data.message }
   }))
}

export const saveAddChat = () => (dispatch, getState) => {
  const chatsLength = getChatslength(getState());
  dispatch (addChat ({
    chatId: chatsLength
  })

  )
}
export const saveDeleteChat = (data) => (dispatch) => {
  dispatch (deleteChat ({
    chatIdToDelete: data,
  })

  )
}

// export const sendChatrequestApi = () =>  dispatch => {
//     dispatch (getApiRequest())
//     fetch('/api/chats.json')
//     .then (res => res.json())
//     .then ( res => {
//      dispatch(getMessagesSuccess(res.messages));
//     dispatch (getChatsSuccess(res.chats));
//   })
//     .catch ( e => {
//       disptch (getApiFailure())
//     })
//     .finally (() => {
//        dispatch (getApiEnd());
//     })
//   }

export const sendChatsRequest = () => dispatch => {
  dispatch(getApiRequest());
 fetch('/api/chats.json')
 .then(res => res.json())
 .then (res => {
  dispatch(getMessagesSuccess(res.messages));
  dispatch(getChatsSuccess(res.chats));
 })
.catch (e => {
    dispatch(getApiFailure());
  })
.finally ( (e) => {
  dispatch(getApiEnd());
})
}