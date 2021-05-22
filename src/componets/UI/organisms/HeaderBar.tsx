import React from 'react';
import { IMenuItem } from '../../../interfaces/IMenuItem';
import Button from '../../UI/atoms/Button';
import Logo from '../../UI/atoms/Logo';
import HeaderMenu from '../../UI/molecules/HeaderMenu';

interface IProp {
  items: IMenuItem[];
}

const HeaderBar = ({ items }: IProp) => {
  return (
    <div className="header__bar">
      <div className="header__nav">
        <Logo />
        <HeaderMenu items={items} />
      </div>
      <div className="header__auth">
        <Button title="Login" type="link" />
        <Button title="Sign Up" />
      </div>
    </div>
  )
}

export default HeaderBar;
