import React from 'react';

const Like = ({ onClick, liked }) => {
  let classes = "fa fa-heart";
  if (!liked) classes += "-o";
  return <i className={classes} aria-hidden="true" style={{ cursor: 'pointer' }} onClick={onClick} ></i>;
}

export default Like;
