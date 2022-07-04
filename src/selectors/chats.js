
import { createSelector } from 'reselect';

export const getMessagesByIds = store => {
  return store.messages.byIds;
};
export const getChatslength = ({chats}) => {
  const {ids} = chats;
  const type = (ids.length + 1).toString()
  return type;
}

// export const getChatsIdsLength = ({chats}) => {
//   const 
// }

export const getChats = (store, chatId) => {
  const currentChat = store.chats.byIds[chatId]; //chat info
  const messagesByIds = getMessagesByIds(store);;
  if (currentChat) {
    return {
      ...currentChat,
      messageList: currentChat.messageList.map(id => messagesByIds[id]),
    };
  }

  return {
    title: '',
    messageList: [],
  };

};

// export const getAllChats = store => {
//   const { ids, byIds } = store.chats;
//   const messagesByIds = getMessagesByIds(store);
//   return ids.map(id => ({
//     ...byIds[id],
//     messageList: byIds[id].messageList.map(messageId => messagesByIds[messageId]),
//   }));
// };

const chatsByIds = store => store.chats.byIds;
const chatsIds = store => store.chats.ids;

export const getAllChats = createSelector(
  chatsByIds,
  chatsIds,
  getMessagesByIds,
  (byIds, ids, messagesByIds) =>
    ids.map(id => ({
      ...byIds[id],
      messageList: byIds[id].messageList.map(messageId => messagesByIds[messageId]),
    })),
);
