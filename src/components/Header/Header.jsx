import React from 'react';
import {useParams} from 'react-router-dom';
import { useSelector} from 'react-redux';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { DRAWER_WIDTH } from '../../utils/constants';
import { red } from '@material-ui/core/colors';
import { getChats } from '../../selectors/chats';
import { getUserName } from '../../selectors/profile';

export const orange300 = '#ffb74d';

const useStyles = makeStyles(theme => {
  return {
    toolbar: {
      paddingRight: theme.spacing(3),
    },
    appBar: {
      backgroundColor: orange300,
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        backgroundColor: red,
      }),
    },
    appBarShift: {
      marginLeft: DRAWER_WIDTH,
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    title: {
      flexGrow: 1,
    },
  };
});

const Header = () => {
  const classes = useStyles();
  const {chatId} = useParams();
  const { title } = useSelector(store => getChats (store, chatId));
  const userName = useSelector(getUserName);


  return (
    <AppBar position="absolute" className={classnames(classes.appBar, classes.appBarShift)}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
        {  `Hi ${userName} ,Welcome to ${ title }`}
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
