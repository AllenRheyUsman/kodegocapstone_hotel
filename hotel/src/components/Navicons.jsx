import React from 'react';

export default function Navicons({link1, linkname}) {
  return (
    <div>
      <p>
        <a href={link1} className="navtext">
          {linkname}
        </a>
      </p>
    </div>
  );
}
Navicons.defaultProps={
    link1:"page2.html",
    linkname:"FAQ",
}
