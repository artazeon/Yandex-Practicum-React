import React from 'react';
import './styles.css';

const Message = ({ message, repliedMessage, className = 'message' }) => {
  return (
    <div className={className}>
      {repliedMessage && <RepliedMessage message={repliedMessage} />}
      <h3>{message.user}</h3>
      <p>{message.text}</p>
    </div>
  );
};

const RepliedMessage = ({ message }) => {
  return (
    <Message message={message} className={'replied-message'} />
  );
};

const Chat = (props) => {
  return (
    <div className='thread'>
      {props.sms.map((el, index) => {
        const rMessage = el.replyTo && props.sms.find(item => item.id === el.replyTo)
        return <Message message={el} repliedMessage={rMessage} key={index}/>
        
      })}
    </div>
  );
};

export default class App extends React.Component {
  state = {
    messages: [
      {
        id: 1,
        user: 'Тамара',
        text: 'Всем привет! Кто в курсе, когда в нашем доме отключат горячую воду?'
      },
      {
        id: 2,
        user: 'Алексей',
        replyTo: 1,
        text: 'В подъезде висит объявление, скоро буду там, сфотографирую и пришлю сюда'
      },
      {
        id: 3,
        user: 'Катя',
        replyTo: 2,
        text: 'О! Спасибо! Ждём! :)'
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <Chat sms={this.state.messages} />
      </div>
    );
  }
}