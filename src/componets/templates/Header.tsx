import React from 'react';
import { IMenuItem } from '../../interfaces/IMenuItem';
import HeaderBar from '../UI/organisms/HeaderBar';
import HeaderTitle from '../UI/organisms/HeaderTitle';

interface IProp {
  items: IMenuItem[];
}

const Header = ({ items }: IProp) => {
  return (
    <header className="header">
      <div className="header__container">
        <HeaderBar items={items} />
        <HeaderTitle title="A modern publishing platform" subTitle="Grow your audience and build your online brand" />
      </div>
    </header>
  )
}

export default Header;
