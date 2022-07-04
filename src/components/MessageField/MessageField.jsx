import React from 'react';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './MessageField.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import RootRouter from '../../pages/RootRouter';
import storeConfig from '../../store';

const {store } = storeConfig();

const theme = createMuiTheme();

const MessageField = () => {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RootRouter />
        </ThemeProvider>
      </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  );
};

//   <ThemeProvider theme={theme}>
//             <CssBaseline />
//             <Header/>
//             <div className="MessageFieldContainer">
//                 <div className="Chatlist">
//                     <ChatList />
//                 </div>
//                 <div className='MessageField'>
//                     <div className="message">
//                         <Message messages={messages} />
//                     </div>
//                     <div className="FormMessage"><FormMessage messages={messages} sendMessage={this.sendMessage} />
//                     </div>

//                 </div>

//             </div>

//         </ThemeProvider>

export default MessageField;
