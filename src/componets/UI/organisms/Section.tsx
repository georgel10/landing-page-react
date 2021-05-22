import React, { FunctionComponent } from 'react';

interface IProp {
  title: string;
  alt?: boolean;
}

const Section: FunctionComponent<IProp> = ({ title, alt, children }) => {
  return (
    <div className="section">
      <h4 className={`section__title ${alt ? 'section__title--alt' : ''}`}>{title}</h4>
      <p className="section__description">
        {children}
      </p>
    </div>

  )
}

export default Section;
