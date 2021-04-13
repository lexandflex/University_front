import React from 'react';
import './Button.scss';

const Button = (props) => {
  return (
    <div className='button' onClick={props.handleClick}>
      {props.children && <span className='button-icon'>{props.children}</span>}
      <p className='button-name'>{props.name}</p>
    </div>
  );
};

export default Button;
