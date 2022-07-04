import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Box, Backdrop  } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Messages from '../../components/Messages/Messages';
import FormMessage from '../../components/FormMessage/FormMessage';
import './Chats.css';
// import { getChatsSuccess } from '../../actions/chats';
import  {getChats } from '../../selectors/chats';
// import {mockChats} from './MockChats';
import Layout from '../../components/Layout/Layout';
// import './MessageField.css';

class Chats extends Component {
 
  componentDidMount()  {}
  render() {
const { currentChat, updated, isFetching } = this.props;
console.log(isFetching)
    return (
      <Layout>
        <Backdrop open={isFetching}>
          <CircularProgress color="inherit" />
        </Backdrop>
        <Box p={3} mt={2} flexGrow={1}>
        <Messages messages={currentChat.messageList} updated={updated}/>
        <FormMessage />
        </Box>
      </Layout>
    );
  }
}

Chats.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      chatId: PropTypes.string,
    }),
  }).isRequired,
};

const mapStateToProps = (store, ownProps) => {
  const {
    match: {
      params: { chatId },
    },
  } = ownProps;
  return {
    currentChat: getChats(store, chatId),
    updated: store.messages.updated,
    isFetching: store.chats.isFetching,
  };
};


export default connect(mapStateToProps)(Chats);
