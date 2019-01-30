import React from 'react';

export default class Pagination extends React.Component {
  render() {
    return (
<main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
  <h1 className="bd-title" id="content">Pagination</h1>
  <p className="bd-lead">Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages.</p>
  
  <h2 id="overview"><span className="bd-content-title">Overview</span></h2>
  <p>We use a large block of connected links for our pagination, making links hard to miss and easily scalable—all while providing large hit areas. Pagination is built with list HTML elements so screen readers can announce the number of available links. Use a wrapping <code className="highlighter-rouge">&lt;nav&gt;</code> element to identify it as a navigation section to screen readers and other assistive technologies.</p>
  <p>In addition, as pages likely have more than one such navigation section, it’s advisable to provide a descriptive <code className="highlighter-rouge">aria-label</code> for the <code className="highlighter-rouge">&lt;nav&gt;</code> to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be <code className="highlighter-rouge">aria-label="Search results pages"</code>.</p>
  <div className="bd-example">
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item"><a className="page-link" href="#">Next</a></li>
      </ul>
    </nav>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;nav</span> <span className="na">aria-label=</span><span className="s">"Page navigation example"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;ul</span> <span className="na">class=</span><span className="s">"pagination"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span className="nt">&gt;&lt;a</span> <span className="na">class=</span><span className="s">"page-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Previous<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span className="nt">&gt;&lt;a</span> <span className="na">class=</span><span className="s">"page-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>1<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span className="nt">&gt;&lt;a</span> <span className="na">class=</span><span className="s">"page-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>2<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span className="nt">&gt;&lt;a</span> <span className="na">class=</span><span className="s">"page-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>3<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span className="nt">&gt;&lt;a</span> <span className="na">class=</span><span className="s">"page-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Next<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/ul&gt;</span>{"\n"}<span className="nt">&lt;/nav&gt;</span></code></pre></figure>
  <h2 id="working-with-icons"><span className="bd-content-title">Working with icons</span></h2>
  <p>Looking to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support with <code className="highlighter-rouge">aria</code> attributes.</p>
  <div className="bd-example">
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">«</span>
          </a>
        </li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">»</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;nav</span> <span className="na">aria-label=</span><span className="s">"Page navigation example"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;ul</span> <span className="na">class=</span><span className="s">"pagination"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"page-link"</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">aria-label=</span><span className="s">"Previous"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;span</span> <span className="na">aria-hidden=</span><span className="s">"true"</span><span className="nt">&gt;</span><span className="ni">&amp;laquo;</span><span className="nt">&lt;/span&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/a&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span className="nt">&gt;&lt;a</span> <span className="na">class=</span><span className="s">"page-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>1<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span className="nt">&gt;&lt;a</span> <span className="na">class=</span><span className="s">"page-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>2<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span className="nt">&gt;&lt;a</span> <span className="na">class=</span><span className="s">"page-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>3<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"page-link"</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">aria-label=</span><span className="s">"Next"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;span</span> <span className="na">aria-hidden=</span><span className="s">"true"</span><span className="nt">&gt;</span><span className="ni">&amp;raquo;</span><span className="nt">&lt;/span&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/a&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/ul&gt;</span>{"\n"}<span className="nt">&lt;/nav&gt;</span></code></pre></figure>
  <h2 id="disabled-and-active-states"><span className="bd-content-title">Disabled and active states</span></h2>
  <p>Pagination links are customizable for different circumstances. Use <code className="highlighter-rouge">.disabled</code> for links that appear un-clickable and <code className="highlighter-rouge">.active</code> to indicate the current page.</p>
  <p>While the <code className="highlighter-rouge">.disabled</code> class uses <code className="highlighter-rouge">pointer-events: none</code> to <em>try</em> to disable the link functionality of <code className="highlighter-rouge">&lt;a&gt;</code>s, that CSS property is not yet standardized and doesn’t account for keyboard navigation. As such, you should always add <code className="highlighter-rouge">tabindex="-1"</code> on disabled links and use custom JavaScript to fully disable their functionality.</p>
  <div className="bd-example">
    <nav aria-label="...">
      <ul className="pagination">
        <li className="page-item disabled">
          <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">Previous</a>
        </li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item active" aria-current="page">
          <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
        </li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item">
          <a className="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;nav</span> <span className="na">aria-label=</span><span className="s">"..."</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;ul</span> <span className="na">class=</span><span className="s">"pagination"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item disabled"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"page-link"</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">tabindex=</span><span className="s">"-1"</span> <span className="na">aria-disabled=</span><span className="s">"true"</span><span className="nt">&gt;</span>Previous<span className="nt">&lt;/a&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span className="nt">&gt;&lt;a</span> <span className="na">class=</span><span className="s">"page-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>1<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item active"</span> <span className="na">aria-current=</span><span className="s">"page"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"page-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>2 <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>(current)<span className="nt">&lt;/span&gt;&lt;/a&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span className="nt">&gt;&lt;a</span> <span className="na">class=</span><span className="s">"page-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>3<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"page-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Next<span className="nt">&lt;/a&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/ul&gt;</span>{"\n"}<span className="nt">&lt;/nav&gt;</span></code></pre></figure>
  <p>You can optionally swap out active or disabled anchors for <code className="highlighter-rouge">&lt;span&gt;</code>, or omit the anchor in the case of the prev/next arrows, to remove click functionality and prevent keyboard focus while retaining intended styles.</p>
  <div className="bd-example">
    <nav aria-label="...">
      <ul className="pagination">
        <li className="page-item disabled">
          <span className="page-link">Previous</span>
        </li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item active" aria-current="page">
          <span className="page-link">
            2
            <span className="sr-only">(current)</span>
          </span>
        </li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item">
          <a className="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;nav</span> <span className="na">aria-label=</span><span className="s">"..."</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;ul</span> <span className="na">class=</span><span className="s">"pagination"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item disabled"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"page-link"</span><span className="nt">&gt;</span>Previous<span className="nt">&lt;/span&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span className="nt">&gt;&lt;a</span> <span className="na">class=</span><span className="s">"page-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>1<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item active"</span> <span className="na">aria-current=</span><span className="s">"page"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"page-link"</span><span className="nt">&gt;</span>{"\n"}{"        "}2{"\n"}{"        "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>(current)<span className="nt">&lt;/span&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/span&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span className="nt">&gt;&lt;a</span> <span className="na">class=</span><span className="s">"page-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>3<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"page-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Next<span className="nt">&lt;/a&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/ul&gt;</span>{"\n"}<span className="nt">&lt;/nav&gt;</span></code></pre></figure>
  <h2 id="sizing"><span className="bd-content-title">Sizing</span></h2>
  <p>Fancy larger or smaller pagination? Add <code className="highlighter-rouge">.pagination-lg</code> or <code className="highlighter-rouge">.pagination-sm</code> for additional sizes.</p>
  <div className="bd-example">
    <nav aria-label="...">
      <ul className="pagination pagination-lg">
        <li className="page-item active" aria-current="page">
          <span className="page-link">
            1
            <span className="sr-only">(current)</span>
          </span>
        </li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
      </ul>
    </nav>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;nav</span> <span className="na">aria-label=</span><span className="s">"..."</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;ul</span> <span className="na">class=</span><span className="s">"pagination pagination-lg"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item active"</span> <span className="na">aria-current=</span><span className="s">"page"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"page-link"</span><span className="nt">&gt;</span>{"\n"}{"        "}1{"\n"}{"        "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>(current)<span className="nt">&lt;/span&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/span&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span className="nt">&gt;&lt;a</span> <span className="na">class=</span><span className="s">"page-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>2<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span className="nt">&gt;&lt;a</span> <span className="na">class=</span><span className="s">"page-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>3<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/ul&gt;</span>{"\n"}<span className="nt">&lt;/nav&gt;</span></code></pre></figure>
  <div className="bd-example">
    <nav aria-label="...">
      <ul className="pagination pagination-sm">
        <li className="page-item active" aria-current="page">
          <span className="page-link">
            1
            <span className="sr-only">(current)</span>
          </span>
        </li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
      </ul>
    </nav>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;nav</span> <span className="na">aria-label=</span><span className="s">"..."</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;ul</span> <span className="na">class=</span><span className="s">"pagination pagination-sm"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item active"</span> <span className="na">aria-current=</span><span className="s">"page"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"page-link"</span><span className="nt">&gt;</span>{"\n"}{"        "}1{"\n"}{"        "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>(current)<span className="nt">&lt;/span&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/span&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span className="nt">&gt;&lt;a</span> <span className="na">class=</span><span className="s">"page-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>2<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span className="nt">&gt;&lt;a</span> <span className="na">class=</span><span className="s">"page-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>3<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/ul&gt;</span>{"\n"}<span className="nt">&lt;/nav&gt;</span></code></pre></figure>
  <h2 id="alignment"><span className="bd-content-title">Alignment</span></h2>
  <p>Change the alignment of pagination components with <a href="/docs/4.2/utilities/flex/">flexbox utilities</a>.</p>
  <div className="bd-example">
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item disabled">
          <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">Previous</a>
        </li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item">
          <a className="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;nav</span> <span className="na">aria-label=</span><span className="s">"Page navigation example"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;ul</span> <span className="na">class=</span><span className="s">"pagination justify-content-center"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item disabled"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"page-link"</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">tabindex=</span><span className="s">"-1"</span> <span className="na">aria-disabled=</span><span className="s">"true"</span><span className="nt">&gt;</span>Previous<span className="nt">&lt;/a&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span className="nt">&gt;&lt;a</span> <span className="na">class=</span><span className="s">"page-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>1<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span className="nt">&gt;&lt;a</span> <span className="na">class=</span><span className="s">"page-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>2<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span className="nt">&gt;&lt;a</span> <span className="na">class=</span><span className="s">"page-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>3<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"page-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Next<span className="nt">&lt;/a&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/ul&gt;</span>{"\n"}<span className="nt">&lt;/nav&gt;</span></code></pre></figure>
  <div className="bd-example">
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-end">
        <li className="page-item disabled">
          <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">Previous</a>
        </li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item">
          <a className="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;nav</span> <span className="na">aria-label=</span><span className="s">"Page navigation example"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;ul</span> <span className="na">class=</span><span className="s">"pagination justify-content-end"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item disabled"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"page-link"</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">tabindex=</span><span className="s">"-1"</span> <span className="na">aria-disabled=</span><span className="s">"true"</span><span className="nt">&gt;</span>Previous<span className="nt">&lt;/a&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span className="nt">&gt;&lt;a</span> <span className="na">class=</span><span className="s">"page-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>1<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span className="nt">&gt;&lt;a</span> <span className="na">class=</span><span className="s">"page-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>2<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span className="nt">&gt;&lt;a</span> <span className="na">class=</span><span className="s">"page-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>3<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"page-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Next<span className="nt">&lt;/a&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/ul&gt;</span>{"\n"}<span className="nt">&lt;/nav&gt;</span></code></pre></figure>
</main>

    );
  }
}