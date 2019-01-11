import React from 'react';

export default class Tables extends React.Component {
  render() {
    return (
<main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
  <h1 className="bd-title" id="content">Tables</h1>
  <p className="bd-lead">Documentation and examples for opt-in styling of tables (given their prevalent use in JavaScript plugins) with Bootstrap.</p>
  
  <h2 id="examples"><span className="bd-content-title">Examples</span></h2>
  <p>Due to the widespread use of tables across third-party widgets like calendars and date pickers, we’ve designed our tables to be <strong>opt-in</strong>. Just add the base class <code className="highlighter-rouge">.table</code> to any <code className="highlighter-rouge">&lt;table&gt;</code>, then extend with custom styles or our various included modifier classes.</p>
  <p>Using the most basic table markup, here’s how <code className="highlighter-rouge">.table</code>-based tables look in Bootstrap. <strong>All table styles are inherited in Bootstrap 4</strong>, meaning any nested tables will be styled in the same manner as the parent.</p>
  <div className="bd-example">
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;table</span> <span className="na">class=</span><span className="s">"table"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;thead&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>#<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>First<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>Last<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>Handle<span className="nt">&lt;/th&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/thead&gt;</span>{"\n"}{"  "}<span className="nt">&lt;tbody&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>1<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Mark<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Otto<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@mdo<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>2<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Jacob<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Thornton<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@fat<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>3<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Larry<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>the Bird<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@twitter<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/tbody&gt;</span>{"\n"}<span className="nt">&lt;/table&gt;</span></code></pre></figure>
  <p>You can also invert the colors—with light text on dark backgrounds—with <code className="highlighter-rouge">.table-dark</code>.</p>
  <div className="bd-example">
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;table</span> <span className="na">class=</span><span className="s">"table table-dark"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;thead&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>#<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>First<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>Last<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>Handle<span className="nt">&lt;/th&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/thead&gt;</span>{"\n"}{"  "}<span className="nt">&lt;tbody&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>1<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Mark<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Otto<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@mdo<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>2<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Jacob<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Thornton<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@fat<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>3<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Larry<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>the Bird<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@twitter<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/tbody&gt;</span>{"\n"}<span className="nt">&lt;/table&gt;</span></code></pre></figure>
  <h2 id="table-head-options"><span className="bd-content-title">Table head options</span></h2>
  <p>Similar to tables and dark tables, use the modifier classes <code className="highlighter-rouge">.thead-light</code> or <code className="highlighter-rouge">.thead-dark</code> to make <code className="highlighter-rouge">&lt;thead&gt;</code>s appear light or dark gray.</p>
  <div className="bd-example">
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
    <table className="table">
      <thead className="thead-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;table</span> <span className="na">class=</span><span className="s">"table"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;thead</span> <span className="na">class=</span><span className="s">"thead-dark"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>#<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>First<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>Last<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>Handle<span className="nt">&lt;/th&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/thead&gt;</span>{"\n"}{"  "}<span className="nt">&lt;tbody&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>1<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Mark<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Otto<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@mdo<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>2<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Jacob<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Thornton<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@fat<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>3<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Larry<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>the Bird<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@twitter<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/tbody&gt;</span>{"\n"}<span className="nt">&lt;/table&gt;</span>{"\n"}{"\n"}<span className="nt">&lt;table</span> <span className="na">class=</span><span className="s">"table"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;thead</span> <span className="na">class=</span><span className="s">"thead-light"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>#<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>First<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>Last<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>Handle<span className="nt">&lt;/th&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/thead&gt;</span>{"\n"}{"  "}<span className="nt">&lt;tbody&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>1<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Mark<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Otto<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@mdo<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>2<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Jacob<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Thornton<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@fat<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>3<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Larry<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>the Bird<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@twitter<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/tbody&gt;</span>{"\n"}<span className="nt">&lt;/table&gt;</span></code></pre></figure>
  <h2 id="striped-rows"><span className="bd-content-title">Striped rows</span></h2>
  <p>Use <code className="highlighter-rouge">.table-striped</code> to add zebra-striping to any table row within the <code className="highlighter-rouge">&lt;tbody&gt;</code>.</p>
  <div className="bd-example">
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;table</span> <span className="na">class=</span><span className="s">"table table-striped"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;thead&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>#<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>First<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>Last<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>Handle<span className="nt">&lt;/th&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/thead&gt;</span>{"\n"}{"  "}<span className="nt">&lt;tbody&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>1<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Mark<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Otto<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@mdo<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>2<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Jacob<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Thornton<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@fat<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>3<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Larry<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>the Bird<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@twitter<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/tbody&gt;</span>{"\n"}<span className="nt">&lt;/table&gt;</span></code></pre></figure>
  <div className="bd-example">
    <table className="table table-striped table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;table</span> <span className="na">class=</span><span className="s">"table table-striped table-dark"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;thead&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>#<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>First<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>Last<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>Handle<span className="nt">&lt;/th&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/thead&gt;</span>{"\n"}{"  "}<span className="nt">&lt;tbody&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>1<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Mark<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Otto<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@mdo<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>2<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Jacob<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Thornton<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@fat<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>3<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Larry<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>the Bird<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@twitter<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/tbody&gt;</span>{"\n"}<span className="nt">&lt;/table&gt;</span></code></pre></figure>
  <h2 id="bordered-table"><span className="bd-content-title">Bordered table</span></h2>
  <p>Add <code className="highlighter-rouge">.table-bordered</code> for borders on all sides of the table and cells.</p>
  <div className="bd-example">
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;table</span> <span className="na">class=</span><span className="s">"table table-bordered"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;thead&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>#<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>First<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>Last<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>Handle<span className="nt">&lt;/th&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/thead&gt;</span>{"\n"}{"  "}<span className="nt">&lt;tbody&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>1<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Mark<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Otto<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@mdo<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>2<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Jacob<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Thornton<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@fat<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>3<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td</span> <span className="na">colspan=</span><span className="s">"2"</span><span className="nt">&gt;</span>Larry the Bird<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@twitter<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/tbody&gt;</span>{"\n"}<span className="nt">&lt;/table&gt;</span></code></pre></figure>
  <div className="bd-example">
    <table className="table table-bordered table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;table</span> <span className="na">class=</span><span className="s">"table table-bordered table-dark"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;thead&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>#<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>First<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>Last<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>Handle<span className="nt">&lt;/th&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/thead&gt;</span>{"\n"}{"  "}<span className="nt">&lt;tbody&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>1<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Mark<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Otto<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@mdo<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>2<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Jacob<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Thornton<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@fat<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>3<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td</span> <span className="na">colspan=</span><span className="s">"2"</span><span className="nt">&gt;</span>Larry the Bird<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@twitter<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/tbody&gt;</span>{"\n"}<span className="nt">&lt;/table&gt;</span></code></pre></figure>
  <h2 id="borderless-table"><span className="bd-content-title">Borderless table</span></h2>
  <p>Add <code className="highlighter-rouge">.table-borderless</code> for a table without borders.</p>
  <div className="bd-example">
    <table className="table table-borderless">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;table</span> <span className="na">class=</span><span className="s">"table table-borderless"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;thead&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>#<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>First<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>Last<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>Handle<span className="nt">&lt;/th&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/thead&gt;</span>{"\n"}{"  "}<span className="nt">&lt;tbody&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>1<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Mark<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Otto<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@mdo<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>2<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Jacob<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Thornton<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@fat<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>3<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td</span> <span className="na">colspan=</span><span className="s">"2"</span><span className="nt">&gt;</span>Larry the Bird<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@twitter<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/tbody&gt;</span>{"\n"}<span className="nt">&lt;/table&gt;</span></code></pre></figure>
  <p><code className="highlighter-rouge">.table-borderless</code> can also be used on dark tables.</p>
  <div className="bd-example">
    <table className="table table-borderless table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;table</span> <span className="na">class=</span><span className="s">"table table-borderless table-dark"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;thead&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>#<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>First<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>Last<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>Handle<span className="nt">&lt;/th&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/thead&gt;</span>{"\n"}{"  "}<span className="nt">&lt;tbody&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>1<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Mark<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Otto<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@mdo<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>2<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Jacob<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Thornton<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@fat<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>3<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td</span> <span className="na">colspan=</span><span className="s">"2"</span><span className="nt">&gt;</span>Larry the Bird<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@twitter<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/tbody&gt;</span>{"\n"}<span className="nt">&lt;/table&gt;</span></code></pre></figure>
  <h2 id="hoverable-rows"><span className="bd-content-title">Hoverable rows</span></h2>
  <p>Add <code className="highlighter-rouge">.table-hover</code> to enable a hover state on table rows within a <code className="highlighter-rouge">&lt;tbody&gt;</code>.</p>
  <div className="bd-example">
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;table</span> <span className="na">class=</span><span className="s">"table table-hover"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;thead&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>#<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>First<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>Last<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>Handle<span className="nt">&lt;/th&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/thead&gt;</span>{"\n"}{"  "}<span className="nt">&lt;tbody&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>1<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Mark<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Otto<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@mdo<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>2<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Jacob<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Thornton<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@fat<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>3<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td</span> <span className="na">colspan=</span><span className="s">"2"</span><span className="nt">&gt;</span>Larry the Bird<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@twitter<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/tbody&gt;</span>{"\n"}<span className="nt">&lt;/table&gt;</span></code></pre></figure>
  <div className="bd-example">
    <table className="table table-hover table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;table</span> <span className="na">class=</span><span className="s">"table table-hover table-dark"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;thead&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>#<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>First<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>Last<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>Handle<span className="nt">&lt;/th&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/thead&gt;</span>{"\n"}{"  "}<span className="nt">&lt;tbody&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>1<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Mark<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Otto<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@mdo<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>2<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Jacob<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Thornton<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@fat<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>3<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td</span> <span className="na">colspan=</span><span className="s">"2"</span><span className="nt">&gt;</span>Larry the Bird<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@twitter<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/tbody&gt;</span>{"\n"}<span className="nt">&lt;/table&gt;</span></code></pre></figure>
  <h2 id="small-table"><span className="bd-content-title">Small table</span></h2>
  <p>Add <code className="highlighter-rouge">.table-sm</code> to make tables more compact by cutting cell padding in half.</p>
  <div className="bd-example">
    <table className="table table-sm">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;table</span> <span className="na">class=</span><span className="s">"table table-sm"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;thead&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>#<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>First<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>Last<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>Handle<span className="nt">&lt;/th&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/thead&gt;</span>{"\n"}{"  "}<span className="nt">&lt;tbody&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>1<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Mark<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Otto<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@mdo<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>2<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Jacob<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Thornton<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@fat<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>3<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td</span> <span className="na">colspan=</span><span className="s">"2"</span><span className="nt">&gt;</span>Larry the Bird<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@twitter<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/tbody&gt;</span>{"\n"}<span className="nt">&lt;/table&gt;</span></code></pre></figure>
  <div className="bd-example">
    <table className="table table-sm table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;table</span> <span className="na">class=</span><span className="s">"table table-sm table-dark"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;thead&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>#<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>First<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>Last<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>Handle<span className="nt">&lt;/th&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/thead&gt;</span>{"\n"}{"  "}<span className="nt">&lt;tbody&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>1<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Mark<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Otto<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@mdo<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>2<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Jacob<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Thornton<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@fat<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>3<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td</span> <span className="na">colspan=</span><span className="s">"2"</span><span className="nt">&gt;</span>Larry the Bird<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@twitter<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/tbody&gt;</span>{"\n"}<span className="nt">&lt;/table&gt;</span></code></pre></figure>
  <h2 id="contextual-classes"><span className="bd-content-title">Contextual classes</span></h2>
  <p>Use contextual classes to color table rows or individual cells.</p>
  <div className="bd-example">
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Class</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
        </tr>
      </thead>
      <tbody>
        <tr className="table-active">
          <th scope="row">Active</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">Default</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr className="table-primary">
          <th scope="row">Primary</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr className="table-secondary">
          <th scope="row">Secondary</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr className="table-success">
          <th scope="row">Success</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr className="table-danger">
          <th scope="row">Danger</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr className="table-warning">
          <th scope="row">Warning</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr className="table-info">
          <th scope="row">Info</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr className="table-light">
          <th scope="row">Light</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr className="table-dark">
          <th scope="row">Dark</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="c">&lt;!-- On rows --&gt;</span>{"\n"}<span className="nt">&lt;tr</span> <span className="na">class=</span><span className="s">"table-active"</span><span className="nt">&gt;</span>...<span className="nt">&lt;/tr&gt;</span>{"\n"}{"\n"}<span className="nt">&lt;tr</span> <span className="na">class=</span><span className="s">"table-primary"</span><span className="nt">&gt;</span>...<span className="nt">&lt;/tr&gt;</span>{"\n"}<span className="nt">&lt;tr</span> <span className="na">class=</span><span className="s">"table-secondary"</span><span className="nt">&gt;</span>...<span className="nt">&lt;/tr&gt;</span>{"\n"}<span className="nt">&lt;tr</span> <span className="na">class=</span><span className="s">"table-success"</span><span className="nt">&gt;</span>...<span className="nt">&lt;/tr&gt;</span>{"\n"}<span className="nt">&lt;tr</span> <span className="na">class=</span><span className="s">"table-danger"</span><span className="nt">&gt;</span>...<span className="nt">&lt;/tr&gt;</span>{"\n"}<span className="nt">&lt;tr</span> <span className="na">class=</span><span className="s">"table-warning"</span><span className="nt">&gt;</span>...<span className="nt">&lt;/tr&gt;</span>{"\n"}<span className="nt">&lt;tr</span> <span className="na">class=</span><span className="s">"table-info"</span><span className="nt">&gt;</span>...<span className="nt">&lt;/tr&gt;</span>{"\n"}<span className="nt">&lt;tr</span> <span className="na">class=</span><span className="s">"table-light"</span><span className="nt">&gt;</span>...<span className="nt">&lt;/tr&gt;</span>{"\n"}<span className="nt">&lt;tr</span> <span className="na">class=</span><span className="s">"table-dark"</span><span className="nt">&gt;</span>...<span className="nt">&lt;/tr&gt;</span>{"\n"}{"\n"}<span className="c">&lt;!-- On cells (`td` or `th`) --&gt;</span>{"\n"}<span className="nt">&lt;tr&gt;</span>{"\n"}{"  "}<span className="nt">&lt;td</span> <span className="na">class=</span><span className="s">"table-active"</span><span className="nt">&gt;</span>...<span className="nt">&lt;/td&gt;</span>{"\n"}{"  "}{"\n"}{"  "}<span className="nt">&lt;td</span> <span className="na">class=</span><span className="s">"table-primary"</span><span className="nt">&gt;</span>...<span className="nt">&lt;/td&gt;</span>{"\n"}{"  "}<span className="nt">&lt;td</span> <span className="na">class=</span><span className="s">"table-secondary"</span><span className="nt">&gt;</span>...<span className="nt">&lt;/td&gt;</span>{"\n"}{"  "}<span className="nt">&lt;td</span> <span className="na">class=</span><span className="s">"table-success"</span><span className="nt">&gt;</span>...<span className="nt">&lt;/td&gt;</span>{"\n"}{"  "}<span className="nt">&lt;td</span> <span className="na">class=</span><span className="s">"table-danger"</span><span className="nt">&gt;</span>...<span className="nt">&lt;/td&gt;</span>{"\n"}{"  "}<span className="nt">&lt;td</span> <span className="na">class=</span><span className="s">"table-warning"</span><span className="nt">&gt;</span>...<span className="nt">&lt;/td&gt;</span>{"\n"}{"  "}<span className="nt">&lt;td</span> <span className="na">class=</span><span className="s">"table-info"</span><span className="nt">&gt;</span>...<span className="nt">&lt;/td&gt;</span>{"\n"}{"  "}<span className="nt">&lt;td</span> <span className="na">class=</span><span className="s">"table-light"</span><span className="nt">&gt;</span>...<span className="nt">&lt;/td&gt;</span>{"\n"}{"  "}<span className="nt">&lt;td</span> <span className="na">class=</span><span className="s">"table-dark"</span><span className="nt">&gt;</span>...<span className="nt">&lt;/td&gt;</span>{"\n"}<span className="nt">&lt;/tr&gt;</span></code></pre></figure>
  <p>Regular table background variants are not available with the dark table, however, you may use <a href="/docs/4.2/utilities/colors/">text or background utilities</a> to achieve similar styles.</p>
  <div className="bd-example">
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-primary">
          <th scope="row">1</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr className="bg-success">
          <th scope="row">3</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr className="bg-info">
          <th scope="row">5</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr className="bg-warning">
          <th scope="row">7</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">8</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr className="bg-danger">
          <th scope="row">9</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="c">&lt;!-- On rows --&gt;</span>{"\n"}<span className="nt">&lt;tr</span> <span className="na">class=</span><span className="s">"bg-primary"</span><span className="nt">&gt;</span>...<span className="nt">&lt;/tr&gt;</span>{"\n"}<span className="nt">&lt;tr</span> <span className="na">class=</span><span className="s">"bg-success"</span><span className="nt">&gt;</span>...<span className="nt">&lt;/tr&gt;</span>{"\n"}<span className="nt">&lt;tr</span> <span className="na">class=</span><span className="s">"bg-warning"</span><span className="nt">&gt;</span>...<span className="nt">&lt;/tr&gt;</span>{"\n"}<span className="nt">&lt;tr</span> <span className="na">class=</span><span className="s">"bg-danger"</span><span className="nt">&gt;</span>...<span className="nt">&lt;/tr&gt;</span>{"\n"}<span className="nt">&lt;tr</span> <span className="na">class=</span><span className="s">"bg-info"</span><span className="nt">&gt;</span>...<span className="nt">&lt;/tr&gt;</span>{"\n"}{"\n"}<span className="c">&lt;!-- On cells (`td` or `th`) --&gt;</span>{"\n"}<span className="nt">&lt;tr&gt;</span>{"\n"}{"  "}<span className="nt">&lt;td</span> <span className="na">class=</span><span className="s">"bg-primary"</span><span className="nt">&gt;</span>...<span className="nt">&lt;/td&gt;</span>{"\n"}{"  "}<span className="nt">&lt;td</span> <span className="na">class=</span><span className="s">"bg-success"</span><span className="nt">&gt;</span>...<span className="nt">&lt;/td&gt;</span>{"\n"}{"  "}<span className="nt">&lt;td</span> <span className="na">class=</span><span className="s">"bg-warning"</span><span className="nt">&gt;</span>...<span className="nt">&lt;/td&gt;</span>{"\n"}{"  "}<span className="nt">&lt;td</span> <span className="na">class=</span><span className="s">"bg-danger"</span><span className="nt">&gt;</span>...<span className="nt">&lt;/td&gt;</span>{"\n"}{"  "}<span className="nt">&lt;td</span> <span className="na">class=</span><span className="s">"bg-info"</span><span className="nt">&gt;</span>...<span className="nt">&lt;/td&gt;</span>{"\n"}<span className="nt">&lt;/tr&gt;</span></code></pre></figure>
  <div className="bd-callout bd-callout-warning">
    <h5 id="conveying-meaning-to-assistive-technologies">Conveying meaning to assistive technologies</h5>
    <p>Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the <code className="highlighter-rouge">.sr-only</code> class.</p>
  </div>
  <p>Create responsive tables by wrapping any <code className="highlighter-rouge">.table</code> with <code className="highlighter-rouge">.table-responsive{'{'}-sm|-md|-lg|-xl{'}'}</code>, making the table scroll horizontally at each <code className="highlighter-rouge">max-width</code> breakpoint of up to (but not including) 576px, 768px, 992px, and 1120px, respectively.</p>
  <div className="bd-callout bd-callout-info">
    <p>Note that since browsers do not currently support <a href="https://www.w3.org/TR/mediaqueries-4/#range-context">range context queries</a>, we work around the limitations of <a href="https://www.w3.org/TR/mediaqueries-4/#mq-min-max"><code className="highlighter-rouge">min-</code> and <code className="highlighter-rouge">max-</code> prefixes</a> and viewports with fractional widths (which can occur under certain conditions on high-dpi devices, for instance) by using values with higher precision for these comparisons.</p>
  </div>
  <h2 id="captions"><span className="bd-content-title">Captions</span></h2>
  <p>A <code className="highlighter-rouge">&lt;caption&gt;</code> functions like a heading for a table. It helps users with screen readers to find a table and understand what it’s about and decide if they want to read it.</p>
  <div className="bd-example">
    <table className="table">
      <caption>List of users</caption>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;table</span> <span className="na">class=</span><span className="s">"table"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;caption&gt;</span>List of users<span className="nt">&lt;/caption&gt;</span>{"\n"}{"  "}<span className="nt">&lt;thead&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>#<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>First<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>Last<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span className="nt">&gt;</span>Handle<span className="nt">&lt;/th&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/thead&gt;</span>{"\n"}{"  "}<span className="nt">&lt;tbody&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>1<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Mark<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Otto<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@mdo<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>2<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Jacob<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Thornton<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@fat<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"    "}<span className="nt">&lt;tr&gt;</span>{"\n"}{"      "}<span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span className="nt">&gt;</span>3<span className="nt">&lt;/th&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>Larry<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>the Bird<span className="nt">&lt;/td&gt;</span>{"\n"}{"      "}<span className="nt">&lt;td&gt;</span>@twitter<span className="nt">&lt;/td&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/tr&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/tbody&gt;</span>{"\n"}<span className="nt">&lt;/table&gt;</span></code></pre></figure>
  <h2 id="responsive-tables"><span className="bd-content-title">Responsive tables</span></h2>
  <p>Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive across all viewports by wrapping a <code className="highlighter-rouge">.table</code> with <code className="highlighter-rouge">.table-responsive</code>. Or, pick a maximum breakpoint with which to have a responsive table up to by using <code className="highlighter-rouge">.table-responsive{'{'}-sm|-md|-lg|-xl{'}'}</code>.</p>
  <div className="bd-callout bd-callout-warning">
    <h5 id="vertical-clippingtruncation">Vertical clipping/truncation</h5>
    <p>Responsive tables make use of <code className="highlighter-rouge">overflow-y: hidden</code>, which clips off any content that goes beyond the bottom or top edges of the table. In particular, this can clip off dropdown menus and other third-party widgets.</p>
  </div>
  <h3 id="always-responsive"><span className="bd-content-title">Always responsive</span></h3>
  <p>Across every breakpoint, use <code className="highlighter-rouge">.table-responsive</code> for horizontally scrolling tables.</p>
  <div className="bd-example">
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"table-responsive"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;table</span> <span className="na">class=</span><span className="s">"table"</span><span className="nt">&gt;</span>{"\n"}{"    "}...{"\n"}{"  "}<span className="nt">&lt;/table&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <h3 id="breakpoint-specific"><span className="bd-content-title">Breakpoint specific</span></h3>
  <p>Use <code className="highlighter-rouge">.table-responsive{'{'}-sm|-md|-lg|-xl{'}'}</code> as needed to create responsive tables up to a particular breakpoint. From that breakpoint and up, the table will behave normally and not scroll horizontally.</p>
  <p><strong>These tables may appear broken until their responsive styles apply at specific viewport widths.</strong></p>
  <div className="bd-example">
    <div className="table-responsive-sm">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"table-responsive-sm"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;table</span> <span className="na">class=</span><span className="s">"table"</span><span className="nt">&gt;</span>{"\n"}{"    "}...{"\n"}{"  "}<span className="nt">&lt;/table&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <div className="bd-example">
    <div className="table-responsive-md">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"table-responsive-md"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;table</span> <span className="na">class=</span><span className="s">"table"</span><span className="nt">&gt;</span>{"\n"}{"    "}...{"\n"}{"  "}<span className="nt">&lt;/table&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <div className="bd-example">
    <div className="table-responsive-lg">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"table-responsive-lg"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;table</span> <span className="na">class=</span><span className="s">"table"</span><span className="nt">&gt;</span>{"\n"}{"    "}...{"\n"}{"  "}<span className="nt">&lt;/table&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <div className="bd-example">
    <div className="table-responsive-xl">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"table-responsive-xl"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;table</span> <span className="na">class=</span><span className="s">"table"</span><span className="nt">&gt;</span>{"\n"}{"    "}...{"\n"}{"  "}<span className="nt">&lt;/table&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
</main>

    );
  }
}