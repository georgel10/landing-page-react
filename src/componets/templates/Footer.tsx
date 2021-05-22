import React from 'react';
import FooterMenu from '../UI/organisms/FooterMenu';

interface IProp {
  logo: any;
  items: {
    title: string;
    items: string[];
  }[];
}

const Footer = ({ logo, items }: IProp) => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__column"><img className="footer__logo" src={logo} alt="logo" /></div>
        {items.map(item => <FooterMenu title={item.title} items={item.items} />)}
      </div>
    </footer>
  )
}

export default Footer;
