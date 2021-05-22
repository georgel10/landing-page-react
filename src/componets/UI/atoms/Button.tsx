import React from 'react';

interface IProp {
  title: string;
  type?: 'primary' | 'outlined' | 'link';
}

const Button = ({ title, type = 'primary' }: IProp) => {
  return <button className={`button button--${type}`}>{title}</button>
};

export default Button;
