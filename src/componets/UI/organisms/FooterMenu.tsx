import React from 'react';

interface IProp {
  title: string;
  items: string[]
}

const FooterMenu = ({ title, items }: IProp) => {
  return (
    <div className="footer__column">
      <h4 className="footer__title">{title}</h4>
      {items.map(item => <a className="footer__item">{item}</a>)}
    </div>
  )
}

export default FooterMenu;
