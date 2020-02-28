import React from 'react';
import { Link } from 'react-router-dom';

class Conversations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conversations: []
    };
  }

  componentDidMount() {
    const url = '/conversations/index';
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not okay.')
      })
      .then(response => this.setState({ conversations: response }))
      .catch(() => this.props.history.push('/'));
  }

  render() {
    const { conversations } = this.state;
    return (
      const allConversations = conversations.map((conversation, index) => (
        <div key={index}>
          <p>Conversation between {conversation.user1_id} and {conversation.user2_id}</p>
          <p><Link to={`/conversation/${conversation.id}`}>View Conversation</Link></p>
        </div>
      ))
    )
  }
}

export default Conversations;
