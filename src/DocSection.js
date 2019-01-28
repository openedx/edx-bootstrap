import React from 'react';
import PropTypes from 'prop-types';

export default function DocSection(props) {
  return (
    <React.Fragment>
      <a href={`#${props.id}`} id={props.id} />
      <section className="pt-5 pb-5">
        <h3 className="mb-5">{props.title}</h3>
        {props.children}
      </section>
    </React.Fragment>
  );
}

DocSection.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
