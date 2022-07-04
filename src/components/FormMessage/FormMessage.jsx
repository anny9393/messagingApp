import React, { memo, Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { TextField, IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { withStyles } from '@material-ui/core/styles';
import './FormMessage.css';
import { addMessage } from '../../actions/chats';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffe0b2',
    },
  },
});

export const orange300 = '#ffb74d';

const styles = theme => ({
  form: {
    display: 'flex',
    justifyContent: 'center',
    marginButton: theme.spacing(4),
    alignSelf: 'flex-start',
    width: '100%',
  },
  MessageInput: {
    width: '100%',
    color: orange300,
  },
  SendIcon: {
    color: orange300,
  },
});

class FormMessage extends Component {
  state = {
    user: 'Anna',
    text: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.sendMessage();
  };

  onChange = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  };

  sendMessage = () => {
    const { 
    addMessage,
    match: {params}, 
    } = this.props;
    const { text, user } = this.state;

    addMessage({ chatId: params.chatId, message:  { text, id: uuidv4() }});
    this.setState({
      text: '',
      // user: 'Anna',
    });
  };

  handleKeyUp = e => {
    if (e.keyCode === 13) {
      this.sendMessage();
    }
  };

  render() {
    const { user, text } = this.state;
    const { classes } = this.props;

    return (
      <div className="formwrap">
        <form className={classes.form} onSubmit={this.handleSubmit}>
          {/* <TextField
          className="textfieldName"
          variant="outlined"
          name="user"
          placeholder="Type your name..."
          value={user}
          onChange={this.onChange}
          onKeyUp={this.handleKeyUp}
        /> */}
          <br />
          <ThemeProvider theme={theme}>
            <TextField
              multiline
              rows={1}
              content="content"
              placeholder="Type your message..."
              variant="outlined"
              color="primary"
              name="text"
              value={text}
              onChange={this.onChange}
              onKeyUp={this.handleKeyUp}
              className={classes.MessageInput}
            />
          </ThemeProvider>
          <br />
          <IconButton type="submit" className={classes.SendIcon}>
            <SendIcon />
          </IconButton>
        </form>
      </div>
    );
  }
}

FormMessage.propTypes = {
  classes: PropTypes.shape({
    form: PropTypes.string,
  }).isRequired,
  addMessage: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      chatId: PropTypes.string,
    }),
  }).isRequired,

};
const mapDispatchToPops = {
  addMessage,
}

export default compose (
  connect(null, mapDispatchToPops),
  withStyles(styles, theme),
  withRouter,
  memo,
  )(FormMessage);
