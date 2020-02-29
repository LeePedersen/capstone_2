import React from 'react';
import { Link } from 'react-router-dom';
// import Conversation from './Conversation';

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
      <div>
      {conversations.map((conversation) =>
        <div>
          <p>{conversation.user1_id}</p>
          <p>{conversation.user2_id}</p>
        </div>
      )}
      </div>
    )
  }
}

export default Conversations;
