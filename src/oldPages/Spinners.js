import React from 'react';

export default class Spinners extends React.Component {
  render() {
    return (
<main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
  <h1 className="bd-title" id="content">Spinners</h1>
  <p className="bd-lead">Indicate the loading state of a component or page with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript.</p>
  
  <h2 id="about"><span className="bd-content-title">About</span></h2>
  <p>Bootstrap “spinners” can be used to show the loading state in your projects. They’re built only with HTML and CSS, meaning you don’t need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, alignment, and sizing can be easily customized with our amazing utility classes.</p>
  <p>For accessibility purposes, each loader here includes <code className="highlighter-rouge">role="status"</code> and a nested <code className="highlighter-rouge">&lt;span class="sr-only"&gt;Loading...&lt;/span&gt;</code>.</p>
  <h2 id="border-spinner"><span className="bd-content-title">Border spinner</span></h2>
  <p>Use the border spinners for a lightweight loading indicator.</p>
  <div className="bd-example">
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"spinner-border"</span> <span className="na">role=</span><span className="s">"status"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <h3 id="colors"><span className="bd-content-title">Colors</span></h3>
  <p>The border spinner uses <code className="highlighter-rouge">currentColor</code> for its <code className="highlighter-rouge">border-color</code>, meaning you can customize the color with <a href="/docs/4.2/utilities/colors/">text color utilities</a>. You can use any of our text color utilities on the standard spinner.</p>
  <div className="bd-example">
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-border text-secondary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-border text-success" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-border text-danger" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-border text-warning" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-border text-info" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-border text-light" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-border text-dark" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"spinner-border text-primary"</span> <span className="na">role=</span><span className="s">"status"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"spinner-border text-secondary"</span> <span className="na">role=</span><span className="s">"status"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"spinner-border text-success"</span> <span className="na">role=</span><span className="s">"status"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"spinner-border text-danger"</span> <span className="na">role=</span><span className="s">"status"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"spinner-border text-warning"</span> <span className="na">role=</span><span className="s">"status"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"spinner-border text-info"</span> <span className="na">role=</span><span className="s">"status"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"spinner-border text-light"</span> <span className="na">role=</span><span className="s">"status"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"spinner-border text-dark"</span> <span className="na">role=</span><span className="s">"status"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <div className="bd-callout bd-callout-info">
    <p><strong>Why not use <code className="highlighter-rouge">border-color</code> utilities?</strong> Each border spinner specifies a <code className="highlighter-rouge">transparent</code> border for at least one side, so <code className="highlighter-rouge">.border-{'{'}color{'}'}</code> utilities would override that.</p>
  </div>
  <h2 id="growing-spinner"><span className="bd-content-title">Growing spinner</span></h2>
  <p>If you don’t fancy a border spinner, switch to the grow spinner. While it doesn’t technically spin, it does repeatedly grow!</p>
  <div className="bd-example">
    <div className="spinner-grow" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"spinner-grow"</span> <span className="na">role=</span><span className="s">"status"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <p>Once again, this spinner is built with <code className="highlighter-rouge">currentColor</code>, so you can easily change its appearance with <a href="/docs/4.2/utilities/colors/">text color utilities</a>. Here it is in blue, along with the supported variants.</p>
  <div className="bd-example">
    <div className="spinner-grow text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-grow text-secondary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-grow text-success" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-grow text-danger" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-grow text-warning" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-grow text-info" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-grow text-light" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-grow text-dark" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"spinner-grow text-primary"</span> <span className="na">role=</span><span className="s">"status"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"spinner-grow text-secondary"</span> <span className="na">role=</span><span className="s">"status"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"spinner-grow text-success"</span> <span className="na">role=</span><span className="s">"status"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"spinner-grow text-danger"</span> <span className="na">role=</span><span className="s">"status"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"spinner-grow text-warning"</span> <span className="na">role=</span><span className="s">"status"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"spinner-grow text-info"</span> <span className="na">role=</span><span className="s">"status"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"spinner-grow text-light"</span> <span className="na">role=</span><span className="s">"status"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"spinner-grow text-dark"</span> <span className="na">role=</span><span className="s">"status"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <h2 id="alignment"><span className="bd-content-title">Alignment</span></h2>
  <p>Spinners in Bootstrap are built with <code className="highlighter-rouge">rem</code>s, <code className="highlighter-rouge">currentColor</code>, and <code className="highlighter-rouge">display: inline-flex</code>. This means they can easily be resized, recolored, and quickly aligned.</p>
  <h3 id="margin"><span className="bd-content-title">Margin</span></h3>
  <p>Use <a href="/docs/4.2/utilities/spacing/">margin utilities</a> like <code className="highlighter-rouge">.m-5</code> for easy spacing.</p>
  <div className="bd-example">
    <div className="spinner-border m-5" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"spinner-border m-5"</span> <span className="na">role=</span><span className="s">"status"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <h3 id="placement"><span className="bd-content-title">Placement</span></h3>
  <p>Use <a href="/docs/4.2/utilities/flex/">flexbox utilities</a>, <a href="/docs/4.2/utilities/float/">float utilities</a>, or <a href="/docs/4.2/content/typography/">text alignment</a> utilities to place spinners exactly where you need them in any situation.</p>
  <h4 id="flex"><span className="bd-content-title">Flex</span></h4>
  <div className="bd-example">
    <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"d-flex justify-content-center"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"spinner-border"</span> <span className="na">role=</span><span className="s">"status"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <div className="bd-example">
    <div className="d-flex align-items-center">
      <strong>Loading...</strong>
      <div className="spinner-border ml-auto" role="status" aria-hidden="true" />
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"d-flex align-items-center"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;strong&gt;</span>Loading...<span className="nt">&lt;/strong&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"spinner-border ml-auto"</span> <span className="na">role=</span><span className="s">"status"</span> <span className="na">aria-hidden=</span><span className="s">"true"</span><span className="nt">&gt;&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <h4 id="floats"><span className="bd-content-title">Floats</span></h4>
  <div className="bd-example">
    <div className="clearfix">
      <div className="spinner-border float-right" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"clearfix"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"spinner-border float-right"</span> <span className="na">role=</span><span className="s">"status"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <h4 id="text-align"><span className="bd-content-title">Text align</span></h4>
  <div className="bd-example">
    <div className="text-center">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"text-center"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"spinner-border"</span> <span className="na">role=</span><span className="s">"status"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <h2 id="size"><span className="bd-content-title">Size</span></h2>
  <p>Add <code className="highlighter-rouge">.spinner-border-sm</code> and <code className="highlighter-rouge">.spinner-grow-sm</code> to make a smaller spinner that can quickly be used within other components.</p>
  <div className="bd-example">
    <div className="spinner-border spinner-border-sm" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-grow spinner-grow-sm" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"spinner-border spinner-border-sm"</span> <span className="na">role=</span><span className="s">"status"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"spinner-grow spinner-grow-sm"</span> <span className="na">role=</span><span className="s">"status"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <p>Or, use custom CSS or inline styles to change the dimensions as needed.</p>
  <div className="bd-example">
    <div className="spinner-border" style={{width: '3rem', height: '3rem'}} role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-grow" style={{width: '3rem', height: '3rem'}} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"spinner-border"</span> <span className="na">style=</span><span className="s">"width: 3rem; height: 3rem;"</span> <span className="na">role=</span><span className="s">"status"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"spinner-grow"</span> <span className="na">style=</span><span className="s">"width: 3rem; height: 3rem;"</span> <span className="na">role=</span><span className="s">"status"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <h2 id="buttons"><span className="bd-content-title">Buttons</span></h2>
  <p>Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed.</p>
  <div className="bd-example">
    <button className="btn btn-primary" type="button" disabled>
      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
      <span className="sr-only">Loading...</span>
    </button>
    <button className="btn btn-primary" type="button" disabled>
      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
      Loading...
    </button>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">disabled</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"spinner-border spinner-border-sm"</span> <span className="na">role=</span><span className="s">"status"</span> <span className="na">aria-hidden=</span><span className="s">"true"</span><span className="nt">&gt;&lt;/span&gt;</span>{"\n"}{"  "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>{"\n"}<span className="nt">&lt;/button&gt;</span>{"\n"}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">disabled</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"spinner-border spinner-border-sm"</span> <span className="na">role=</span><span className="s">"status"</span> <span className="na">aria-hidden=</span><span className="s">"true"</span><span className="nt">&gt;&lt;/span&gt;</span>{"\n"}{"  "}Loading...{"\n"}<span className="nt">&lt;/button&gt;</span></code></pre></figure>
  <div className="bd-example">
    <button className="btn btn-primary" type="button" disabled>
      <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" />
      <span className="sr-only">Loading...</span>
    </button>
    <button className="btn btn-primary" type="button" disabled>
      <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" />
      Loading...
    </button>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">disabled</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"spinner-grow spinner-grow-sm"</span> <span className="na">role=</span><span className="s">"status"</span> <span className="na">aria-hidden=</span><span className="s">"true"</span><span className="nt">&gt;&lt;/span&gt;</span>{"\n"}{"  "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>{"\n"}<span className="nt">&lt;/button&gt;</span>{"\n"}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">disabled</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"spinner-grow spinner-grow-sm"</span> <span className="na">role=</span><span className="s">"status"</span> <span className="na">aria-hidden=</span><span className="s">"true"</span><span className="nt">&gt;&lt;/span&gt;</span>{"\n"}{"  "}Loading...{"\n"}<span className="nt">&lt;/button&gt;</span></code></pre></figure>
</main>

    );
  }
}