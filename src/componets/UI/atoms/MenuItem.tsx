import React, { useState } from 'react';

interface IProp {
  title: string;
  items?: string[];
}

const MenuItem = ({ title, items }: IProp) => {
  const [active, setActive] = useState(false);
  const classActive = active ? 'active' : 'inactive';
  return (
    <div className="dropdowm" onMouseLeave={() => setActive(false)} onMouseEnter={() => setActive(true)}>
      <a className={`dropdowm__link dropdowm__link--${classActive}`}>{title}</a>
      <div className={`dropdowm__content dropdowm__content--${classActive}`}>
        {items?.map(item => <a className="dropdowm__item">{item}</a>)}
      </div>
    </div>)
};

export default MenuItem;
