import React from 'react';
import PropTypes from 'prop-types';

export default function DocSection(props) {
  return (
    <React.Fragment>
      <a href={`#${props.id}`} id={props.id} />
      <section className="pt-3 pb-3">
        <h3 className="mb-3">{props.title}</h3>
        {props.children}
      </section>
    </React.Fragment>
  );
}

DocSection.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
