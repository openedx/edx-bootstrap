import React from 'react';
import DocSection from '../DocSection';

export default class Examples extends React.Component {
  render() {
    return (
      <main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
        <h1>Examples</h1>

        
        <DocSection id="kitchenSink" title="Kitchen Sink Example">
            <h1>On the events <br />in question</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#demo">My Courses</a></li>
                <li className="breadcrumb-item"><a href="#demo">Introduction to Animal Behaviour</a></li>
                <li className="breadcrumb-item active" aria-current="page">Unit 1</li>
              </ol>
            </nav>
            <p className=" mb-4">On glancing over my notes of the <strong>seventy odd cases</strong> in which I have during the last eight years studied the methods of my friend Sherlock Holmes, I find many tragic, some comic, a large number merely strange, but none commonplace; for, working as he did rather for the love of his art than for the acquirement of wealth, he refused to associate himself with any investigation which did not tend towards the unusual, and even the fantastic.</p>
            <h4>What we know:</h4>
            <p>The events in question occurred in the early days of my association with Holmes:</p> 
            <ul>
              <li>We were sharing rooms as bachelors in Baker Street.</li> 
              <li>It is possible that I might have placed them upon record before.</li>
              <li>A promise of secrecy was made at the time.</li>
              <li>It was early in April in the year '83.</li>
            </ul>
            <p className="mt-4">
              <a href="#demo" className="btn btn-primary mr-2">Solve the case</a>
              <a href="#demo" className="btn btn-outline-primary">Ask Watson</a>
            </p>

            <div className="pt-5 pb-5">
              <hr/>
            </div>

            <div className="bg-light-blue p-4">
              <h2>Not sure where to look?</h2>
              <div className="row">

              </div>
              <div className="row">
                <div className="col">
                <ul className="nav">
                  <li><a href="#demo">Data Science Courses</a></li>
                </ul>
                </div>
              </div>
              <div className="row">
              <div className="col">
                <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Enter your email address</label>
                <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
              </div>
              </div>
            </div>

        </DocSection>
      </main>
    );
  }
}
