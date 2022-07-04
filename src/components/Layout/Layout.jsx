import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Header from '../Header/Header';
import ChatList from '../ChatList/ChatList';
import PropTypes from 'prop-types';

const useStyle = makeStyles(theme => ({
  content: {
    flexGrow: 2,
    flexDirection: 'column',
    height: '100vh',
    overflow: 'auto',
    marginTop: theme.spacing(9),
    backgroundColor: ' rgba(233, 227, 227, 0.856)',
  },
  root: {
    display: 'flex',
    // paddingBottom: '80px',
  },
}));

const Layout = ({ children }) => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Header />
      <ChatList />
      <main className={classes.content}>{children}</main>
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
    .isRequired,
};

export default Layout;
