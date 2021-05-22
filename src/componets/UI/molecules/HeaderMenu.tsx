import React from 'react';
import { IMenuItem } from '../../../interfaces/IMenuItem';
import MenuItem from '../atoms/MenuItem';

interface IProp {
  items: IMenuItem[];
}

const HeaderMenu = ({ items }: IProp) => {
  return <div className="header__menu">
    {items.map(item => <MenuItem title={item.title} items={item.children} />)}
  </div>
};

export default HeaderMenu;
