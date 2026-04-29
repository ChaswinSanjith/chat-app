function ChatItem({ name, message, time, avatar }) {
  return (
    <div className="chat-item">
      <img src={avatar} alt={name} className="avatar" />

      <div className="chat-info">
        <div className="top-row">
          <h4>{name}</h4>
          <span className="time">{time}</span>
        </div>
        <p>{message}</p>
      </div>

      <span className="star">⭐</span>
    </div>
  );
}

export default ChatItem;