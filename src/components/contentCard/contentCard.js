import React from 'react';
import './contentCard.css';

const ContentCard = (props) => {

  return(
    <div className={`contentRight ${props.fullHeight ? "height-full" : ""}`}>
      <div className="card-co">
        {props.children}
      </div>
    </div>
  )
};

export default ContentCard;