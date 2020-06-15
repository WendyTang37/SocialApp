import React from 'react';
import ReactTimeAgo from 'react-time-ago';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import './SocialCard.scss';


const SocialCard = (props) => {
  const data = props.cardData;

  return (
    <article className="SocialCard">
        <div className="author-icon">
            <img className="author-icon-img" src="https://picsum.photos/49"></img>
        </div>
        <div className="main">
            <div className="card-header">
                <span className="author-name"><strong>{data.author} </strong></span>
                <span className="verified"><FontAwesomeIcon icon="check-circle" /></span>

                <span className="author-handle">{data.author_handle}</span>
                <span> · </span>
                <span className="timestamp"><ReactTimeAgo date={data.timestamp}/></span>
            </div>
            <div className="content">
                {data.text_content}
            </div>
            <div className="cta-footer">
                <a className="comment"><div className="icon" ><FontAwesomeIcon icon={['far','comment']} /></div> {data.comments}</a>
                <a className="retweet"><div className="icon" ><FontAwesomeIcon icon={['fas','retweet']} /></div> {data.retweets}</a>
                <a className="like"><div className="icon" ><FontAwesomeIcon icon={['far','heart']} /></div> {data.likes}</a>
                <a className="share"><div className="icon" ><FontAwesomeIcon icon={['far','share-square']} /></div> </a>
            </div>
        </div>
    </article>
  )
}

export default SocialCard;