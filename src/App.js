import React from 'react';

import './App.scss';
import SocialCard from './components/SocialCard';

function App() {
  const cardData = {
    author: 'Wendy Tang',
    author_handle: '@WendyTang',
    timestamp: new Date(2020,5,1,14),
    text_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu arcu a sapien egestas vulputate venenatis ut lorem. Suspendisse potenti. Nunc eu dolor sit amet tellus viverra laoreet. Quisque ut scelerisque nulla. Nunc rhoncus ligula nec erat viverra, eu tempus lectus viverra. Suspendisse lobortis luctus venenatis. Etiam finibus, nisl vel varius accumsan, risus mi varius dolor, vitae rutrum tellus elit in urna. Cras ut lobortis diam, a mattis eros. Duis quis lobortis massa. Etiam id metus felis. Vestibulum sed lacus nunc. Vivamus id est nec sem venenatis feugiat.',
    comments: 12,
    retweets: 24,
    likes: 56,
  }

  const cards = [
    {
      id: 0,
      author: 'Wendy Tang',
      author_handle: '@OneD10',
      timestamp: new Date(2020,4,1,14),
      text_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu arcu a sapien egestas vulputate venenatis ut lorem. Suspendisse potenti. Nunc eu dolor sit amet tellus viverra laoreet. Quisque ut scelerisque nulla. Nunc rhoncus ligula nec erat viverra, eu tempus lectus viverra. Suspendisse lobortis luctus venenatis. Etiam finibus, nisl vel varius accumsan, risus mi varius dolor, vitae rutrum tellus elit in urna. Cras ut lobortis diam, a mattis eros. Duis quis lobortis massa. Etiam id metus felis. Vestibulum sed lacus nunc. Vivamus id est nec sem venenatis feugiat.',
      comments: 12,
      retweets: 24,
      likes: 56,
    },
    {
      id: 1,
      author: 'Anthony Yu',
      author_handle: '@Yuthony',
      timestamp: new Date(2020,5,5,14),
      text_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu arcu a sapien egestas vulputate venenatis ut lorem. Suspendisse potenti. Nunc eu dolor sit amet tellus viverra laoreet. Quisque ut scelerisque nulla. Nunc rhoncus ligula nec erat viverra, eu tempus lectus viverra. Suspendisse lobortis luctus venenatis. Etiam finibus, nisl vel varius accumsan, risus mi varius dolor, vitae rutrum tellus elit in urna. Cras ut lobortis diam, a mattis eros. Duis quis lobortis massa. Etiam id metus felis. Vestibulum sed lacus nunc. Vivamus id est nec sem venenatis feugiat.',
      comments: 1,
      retweets: 4,
      likes: 11,
    },

    {
      id: 2,
      author: 'Amanda P',
      author_handle: '@mornda',
      timestamp: new Date(2020,5,10,14),
      text_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu arcu a sapien egestas vulputate venenatis ut lorem. Suspendisse potenti. Nunc eu dolor sit amet tellus viverra laoreet. Quisque ut scelerisque nulla. Nunc rhoncus ligula nec erat viverra, eu tempus lectus viverra. Suspendisse lobortis luctus venenatis. Etiam finibus, nisl vel varius accumsan, risus mi varius dolor, vitae rutrum tellus elit in urna. Cras ut lobortis diam, a mattis eros. Duis quis lobortis massa. Etiam id metus felis. Vestibulum sed lacus nunc. Vivamus id est nec sem venenatis feugiat.',
      comments: 0,
      retweets: 0,
      likes: 0,
    },
  ];

  const socialCards = cards.map(card => <SocialCard cardData={card} key={card.id} />);

  return (
    <div className="App">
      {socialCards}
    </div>
  );
}

export default App;
