import React from 'react';
import './styles.scss'

const TagBubbles = ({ tags }) => {
  return (
    <div className='tag-bubble-container'>
      {tags.map((tag, index) => (
        <span key={index} className="tag-bubble">
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TagBubbles;