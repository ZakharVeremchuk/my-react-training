const Mailbox = ({ username, messages }) => {
  return (
    <>
      <p>Hello {username}</p>
      {messages.length > 0 && (
        <p>You have {messages.length} unread messages</p>
      )}
    </>
  );
};

const Mailbox2 = ({ username, unreadMessages }) => {
  return (
    <>
      <p>Hello {username}</p>
      {
        messages.length > 0 ? 
        `You have ${unreadMessages.length} unread messages`
        : `No unread messages`
        }
    </>
  );
};

const Practice1 = ({}) => {
  return (
    <div>
       {[1,2,3].map(item => <div> {item} </div>)}
    </div>
  )

}

