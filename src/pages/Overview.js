import React from 'react';

export default class Overview extends React.Component {
  render() {
    return (
      <main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">

        <h1 className="display-4 mt-5">edX Bootstrap</h1>
        <p className="lead mb-5">Tools for designing & building great user experiences faster.</p>

        <h2>A succinct yet powerful system.</h2>
        <p>
          This library aims to be a set of <strong>powerful tools that remain as succinct as possible</strong>. We can get a lot done with just a small set of tools. Check out <a href="https://airbnb.design/building-a-visual-language/">Airbnb's thoughts on the matter</a>.
        </p>

        <h2>Minimize design & tech debt.</h2>
        <p>
          When designing and building our products <strong>use these patterns first</strong>. Every time we design or build a new component or variation of an element, we take on design and technical debt. Let's always keep our broader system in mind when we make new things.
        </p>

        <h2>Flexible and ready for changes.</h2>
        <p>
          Nothing here to help you get your job done? Building something you think might be a useful pattern? <strong>Reach out in the <strong>#arch-team-fed-ux</strong> channel</strong>.
        </p>
        
        <h2>Built on Bootstrap.</h2>
        <p>This library is a subset of Bootstrap tools mixed with some custom edX components. Bootstrap components documented here will link to the <a href="getbootstrap.com">Bootstrap documentation</a> for usage details. Broadly speaking, learn to build with Bootstrap and you'll know how to build with edX Bootstrap.</p>

        
      </main>
    );
  }
}