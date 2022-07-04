import { combineReducers } from 'redux';
import ChatsReducer from './ChatsReducer';
import ProfileReducer from './ProfileReducer';
import messagesReducer from './messagesReducer'

const rootReducer = combineReducers({
  chats: ChatsReducer,
  profile: ProfileReducer,
  messages: messagesReducer,
});

export default rootReducer;
