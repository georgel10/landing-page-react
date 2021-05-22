import React from 'react';
import { ISection } from '../../interfaces/ISections';

import Section from '../UI/organisms/Section';

interface IProp {
  title?: string;
  sections: ISection[];
  image: any;
  position?: 'default' | 'reverse';
  alt?: boolean;
}

const Container = ({ title, sections, image, position = 'default', alt }: IProp) => {
  return (
    <section className={`container container--${position} ${alt ? 'container--alt' : ''}`}>
      {title && (<h2 className="container__title">{title}</h2>)}
      <div className={`container__info container__info--${position}`}>
        {sections.map(section =>
          <Section title={section.title} alt={alt}>
            {section.description}
          </Section>
        )}
      </div>
      <div className={`container__image container__image--${position} ${alt ? 'container__image--alt' : ''}`}>
        <img src={image} alt="section" />
      </div>
    </section>
  )
}

export default Container;
