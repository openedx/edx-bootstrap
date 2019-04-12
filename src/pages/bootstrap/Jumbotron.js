import React from 'react';

export default class Jumbotron extends React.Component {
  render() {
    return (
<main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
  <h1 className="bd-title" id="content">Jumbotron</h1>
  <p className="bd-lead">Lightweight, flexible component for showcasing hero unit style content.</p>
  <h2>To do</h2>
  <ul>
    <li>Delete this.</li>
  </ul>
  <p>A lightweight, flexible component that can optionally extend the entire viewport to showcase key marketing messages on your site.</p>
  <div className="bd-example">
    <div className="jumbotron">
      <h1 className="display-4">Hello, world!</h1>
      <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <a className="btn btn-primary btn-lg" href="#demo" role="button">Learn more</a>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"jumbotron"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;h1</span> <span className="na">class=</span><span className="s">"display-4"</span><span className="nt">&gt;</span>Hello, world!<span className="nt">&lt;/h1&gt;</span>{"\n"}{"  "}<span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"lead"</span><span className="nt">&gt;</span>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.<span className="nt">&lt;/p&gt;</span>{"\n"}{"  "}<span className="nt">&lt;hr</span> <span className="na">class=</span><span className="s">"my-4"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;p&gt;</span>It uses utility classes for typography and spacing to space content out within the larger container.<span className="nt">&lt;/p&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"btn btn-primary btn-lg"</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">role=</span><span className="s">"button"</span><span className="nt">&gt;</span>Learn more<span className="nt">&lt;/a&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <p>To make the jumbotron full width, and without rounded corners, add the <code className="highlighter-rouge">.jumbotron-fluid</code> modifier class and add a <code className="highlighter-rouge">.container</code> or <code className="highlighter-rouge">.container-fluid</code> within.</p>
  <div className="bd-example">
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Fluid jumbotron</h1>
        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
      </div>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"jumbotron jumbotron-fluid"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"container"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;h1</span> <span className="na">class=</span><span className="s">"display-4"</span><span className="nt">&gt;</span>Fluid jumbotron<span className="nt">&lt;/h1&gt;</span>{"\n"}{"    "}<span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"lead"</span><span className="nt">&gt;</span>This is a modified jumbotron that occupies the entire horizontal space of its parent.<span className="nt">&lt;/p&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
</main>

    );
  }
}