import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './Messages.css';
import classnames from 'classnames';
import Chats from '../../pages/Chats/Chats';
import { ROBOT_MAME } from '../../utils/constants';
import { Container, Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  updated: {
    backgroundColor: '#abc',
  },
}));

const Messages = ({ messages, updated }) => {
  const classes = useStyles();

  return (
 
    <Container maxWidth="md">
      <Box display="flex" flexDirection="column">
        {messages.map(({ id, user, text }) => (
          <Box
            key={id}
            alignSelf={user === ROBOT_MAME ? 'flex-end' : 'flex-start'}
            className={classnames(updated.includes(id) && classes.updated)}
          >
            <p>{`user: ${user}`}</p>
            <p>{`text: ${text}`}</p>
          </Box>
        ))}
      </Box>
    </Container>
  );
};


//     <div className="messagesWrap">
//       <ul className="messagesAll">
//         {messages.map(({ id, user, text }) => (
//           <li
//             key={id}
//             className={classnames('messagesItem', user === ROBOT_MAME && 'messagesItemRobot')
//          }
//           >
//             <div
//               className={classnames(
//                 'TextandUserContainer',
//                 user === ROBOT_MAME && 'TextandUserContainerRobot',)
//                 }
//             >
//               <div className="userNameInMessage">
//                 <strong>{user} </strong>
//               </div>
//               <div
//                 className={classnames(
//                   'contextInMesssage',
//                   user === ROBOT_MAME && 'contextInMesssageRobot',
//                 )}
//               >
//                 {text}
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      user: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
};
export default memo(Messages);
