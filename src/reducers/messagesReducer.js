import { handleActions } from 'redux-actions';
import {
  getMessagesSuccess,
  saveMessage,
  addUpdatedMessage,
  deleteUpdatedMessage,
} from '../actions/chats';

const initialStore = {
  byIds: {},
  ids: [],
  updated: [],
};

const reducer = handleActions(
  {
    [getMessagesSuccess]: (store, { payload }) => ({
      ...store,
      byIds: payload.reduce((sum, item) => {
        sum[item.id] = item;
        return sum;
      }, {}),
      ids: payload.map(({ id }) => id),
    }),
    [saveMessage]: (store, { payload }) => ({
      ...store,
      byIds: { ...store.byIds, [payload.message.id]: payload.message },
      ids: [...store.ids, payload.message.id],
    }),
    [addUpdatedMessage]: (store, { payload }) => ({
      ...store,
      updated: [...store.updated, payload],
    }),
    [deleteUpdatedMessage]: (store, { payload }) => ({
      ...store,
      updated: store.updated.filter(i => i !== payload),
    }),
  },
  initialStore,
);

export default reducer;
