import React from 'react';
import Layout from '../../components/Layout/Layout';



const About = props => {
const messages = ['Hi, Welcome to the About Page!'];

const MessageComponent = (props) => <div>{props.text}</div>;

const MessagesAll = (props) => props.messages.map (message => <MessageComponent text={message}/>);
  return (
    <Layout>
      <h1><MessagesAll messages={messages}/></h1>
    </Layout>
  );
};

export default About;