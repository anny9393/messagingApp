import { handleAction } from 'redux-actions';

const initialStore = {
    userName: 'Anna',
    userSurname: 'Obruchkova'
}

const reducer = handleAction( '', state => state,
    initialStore)

export default reducer;