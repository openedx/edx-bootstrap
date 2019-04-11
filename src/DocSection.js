import React from 'react';
import PropTypes from 'prop-types';

export default function DocSection(props) {
  return (
    <React.Fragment>
      <a href={`#${props.id}`} id={props.id} className="sr-only">Section</a>
      <section className="pt-3 pb-3 mb-5 mt-5">
        <h2 className="mb-5">{props.title}</h2>
        {props.children}
      </section>
    </React.Fragment>
  );
}

DocSection.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
