import React from 'react';
import { StatTitle } from '../Statistics/Statistics.styled';

const Section = ({ title, children }) => {
  return (
    <section>
      <div>
        <StatTitle>{title}</StatTitle>
        {children}
      </div>
    </section>
  );
};

export default Section;
