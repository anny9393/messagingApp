
import { handleActions } from 'redux-actions';
import { getChatsSuccess, saveMessage, getApiRequest, getApiEnd, addChat, deleteChat} from '../actions/chats';
import _ from "lodash";

const initialStore = {
  byIds: {},
  ids: [],
  isFetching: false,
};


const reducer = handleActions(
  {
    [getApiRequest]: store => ({...store, isFetching: true}),
    [getChatsSuccess]: (store, { payload }) => ({
      ...store,
      byIds: payload.reduce((sum, item) => {
        sum[item.id] = item;
        return sum;
      }, {}),
      ids: payload.map(({ id }) => id),
    }),
  
    [saveMessage]: (store, { payload }) => ({
      ...store,
      byIds: {
        ...store.byIds,
        [payload.chatId]: {
          ...store.byIds[payload.chatId],
          messageList: [...store.byIds[payload.chatId].messageList, payload.message.id],
        },
      },
    }),
    [addChat]: (store, {payload}) => ({
      ...store,
      byIds: {     
        ...store.byIds, 
        [payload.chatId]: {
          ...store.byIds[payload.chatId],
          id: payload.chatId.toString(),
          messageList:[],
          slug: `/chats/${payload.chatId}`, title: `Chat ${payload.chatId}`
        }
      },
      ids: [
        ...store.ids, 
        ...payload.chatId.toString()
    ]
      // ...store, 
      // ids: {
      //   ...store.ids,
      //   [payload.chatId]: payload.chatId
      // },
    }),
    [deleteChat]: (store, {payload}) => ({
      ...store,
      // byIds: _.values(store.byIds).filter (item => item.id !== payload.chatIdToDelete),
      ids: 
        store.ids.filter (item => item !== payload.chatIdToDelete)
    }),

    [getApiEnd]: store => ({...store, isFetching: false}),
  },
  initialStore,
);

export default reducer;

// import { handleActions } from 'redux-actions';
// import { getChatsSuccess, saveMessage, removeChat } from '../actions/chats';

// const initialStore = {
//     byIds: {},
//     ids: [],
// };

// const reducer = handleActions(
//   {
//     [getChatsSuccess]: (store, { payload }) => ({
//       ...store, 
//       // to be done on server 
//       byIds: payload.reduce( (sum, item) => {
//         sum[item.id] = item;
//         return sum;
//       }, {}),
//       ids: payload.map (({id}) => id),
//       }),
//       // [removeChat]: (store, {payload}) => ({
//       //   ...store,
//       //   ids: store.ids.filter ( id  => id !== payload.id)
//       // }),
//       [saveMessage]: (store, {payload}) => ({
//         ...store,
//         byIds: { //get all chats by Id
//           ...store.byIds, //copy the chat which maches id
//           [payload.chatId]: { //.
//             ...store.byIds[payload.chatId],//copy its content
//             messageList: [...store.byIds[payload.chatId].messageList, payload.message.id]//copy all previous messages and add one new
//           }
//         },
//       })
//   },
//   initialStore,
// );





//immer 
// [getChatsSuccess]: (store, { payload }) => 
// produce (store, draft => {
//   payload.forEach(chat => {
//     draft.byIds[chat.id] = chat;
//   })
//     draft.ids = Object.keys(draft.byIds)
// }):
//   [saveMessage]: (store, {payload}) => 
//   produce (store, draft => {
//     draft.byIds [patload.chatId].messageList.push ([ayload.message])
//   })
// )
// initialStore,
