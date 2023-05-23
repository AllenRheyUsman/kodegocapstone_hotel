import React from 'react';

export default function Logo(props) {
  const { imageUrl, text } = props;

  return (
    <div>
      <a className="link-opacity-50-hover" href="#">
        <img src={imageUrl} alt="Makethis as a props" />
        <p>{text}</p>
      </a>
    </div>
  );
}