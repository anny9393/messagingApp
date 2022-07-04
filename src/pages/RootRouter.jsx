import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { sendChatsRequest } from '../actions/chats';
import About from './About/About';
import Home from './Home/Home';
import EmptyPage from './EmptyPage/EmptyPage';
import Chats from './Chats/Chats';
// import {mockChats, mockMessages} from './Chats/MockChats';



const RootRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch (sendChatsRequest());
  }, [dispatch]);
    // dispatch(getChatsSuccess(mockChats));
    // dispatch(getMessagesSuccess(mockMessages));

    // fetch('https://swapi.dev/api/people/1/')
    // .then (res => res.json())
    // .then (res => {
    //   console.log(res)
    //   dispatch( { type: 'EXAMPLE', payload: res})
    //   }) 
    //   .catch(e => {})
    //   .finaly (() => {})

 
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about">
        <About />
      </Route>
      <Route path="/chats/:chatId" component={Chats} />
      <Route component={EmptyPage} />
    </Switch>
  );
};

export default RootRouter;