import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { DRAWER_WIDTH } from '../../utils/constants';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import pageListChats from './pageListChats';
import pageListMain from './pageListMain';
import { addMessage, removeChat, addChat, saveAddChat, deleteChat, saveDeleteChat } from '../../actions/chats';
import { getAllChats } from '../../selectors/chats';
import {mockChats} from '../../pages/Chats/MockChats';
import _ from "lodash";

const useStyles = makeStyles(theme => {
  return {
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: DRAWER_WIDTH,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  };
});


const ChatList = ({chats}) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const allChats = useSelector(getAllChats); //getting an array


const handleDeleteChatClick = (e) => {
  e.preventDefault();
  const chatsIdClicked = e.currentTarget.value;
  dispatch (saveDeleteChat(chatsIdClicked))
  ;
  }
const handleAddNewChatClick = (e) => {
  e.preventDefault();
dispatch (saveAddChat());
}

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      open
    >
      <div className={classes.toolbarIcon}>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <div>
          <List>
            {pageListMain.map(({ id, title, slug }) => (
              <Link key={id} to={slug}>
                <ListItem button>
                  <ListItemIcon>
                    <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary={title} />
                </ListItem>
              </Link>
            ))}
          </List>
        </div>
      </List>
      <Divider />
      <List>
        {_.values(chats).map(({ id, title, slug }) => (
          <Link key={id} to={slug}>
            <ListItem button>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary={title} />
              {/* <button onClick={handleDeleteChatClick} value={id}> Delete Chat {id} </button> */}
            </ListItem>
          </Link>
        ))}
      </List>
      <List> 
            <ListItem button>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText  />
              <button onClick={handleAddNewChatClick}> Add New Chat </button>
            </ListItem>
      </List>
    </Drawer>
  );
};
const mapStateToProps = (store) => {
  return {
  chats: store.chats.byIds
}
}
const mapDispatchToPops = {
  // removeChat,
}

export default compose (
  connect(mapStateToProps, mapDispatchToPops),
  )(ChatList);