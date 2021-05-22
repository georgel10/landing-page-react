import React from 'react';
import Button from '../atoms/Button';

interface IProp {
  title: string;
  subTitle?: string;
}

const HeaderTitle = ({ title, subTitle }: IProp) => {
  return (
    <div className="header__content">
      <h1 className="header__title">{title}</h1>
      <h4 className="header__subtitle">{subTitle}</h4>
      <div className="header__auth">
        <Button title="Start for Free" />
        <Button title="Learn More" type="outlined" />
      </div>
    </div>
  )
}

export default HeaderTitle;
