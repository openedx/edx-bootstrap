import React from 'react';

export default class Toasts extends React.Component {
  render() {
    return (
<main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
  <h1 className="bd-title" id="content">Toasts</h1>
  <p className="bd-lead">Push notifications to your visitors with a toast, a lightweight and easily customizable alert message.</p>
  
  <h2>To Do</h2>
  <ul>
    <li>Leave out. could add back in someday</li>
  </ul>

  <p>Toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and desktop operating systems. They’re built with flexbox, so they’re easy to align and position.</p>
  <h2 id="overview"><span className="bd-content-title">Overview</span></h2>
  <p>Things to know when using the toast plugin:</p>
  <ul>
    <li>If you’re building our JavaScript from source, it <a href="/docs/4.2/getting-started/javascript/#util">requires <code className="highlighter-rouge">util.js</code></a>.</li>
    <li>Toasts are opt-in for performance reasons, so <strong>you must initialize them yourself</strong>.</li>
    <li>Toasts will automatically hide if you do not specify <code className="highlighter-rouge">autohide: false</code>.</li>
  </ul>
  <h2 id="examples"><span className="bd-content-title">Examples</span></h2>
  <h3 id="basic"><span className="bd-content-title">Basic</span></h3>
  <p>To encourage extensible and predictable toasts, we recommend a header and body. Toast headers use <code className="highlighter-rouge">display: flex</code>, allowing easy alignment of content thanks to our margin and flexbox utilities.</p>
  <p>Toasts are as flexible as you need and have very little required markup. At a minimum, we require a single element to contain your “toasted” content and strongly encourage a dismiss button.</p>
  <div className="bg-light">
    <div className="bd-example">
      <div className="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          <svg className="bd-placeholder-img rounded mr-2" width={20} height={20} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect fill="#007aff" width="100%" height="100%" /></svg>
          <strong className="mr-auto">Bootstrap</strong>
          <small>11 mins ago</small>
          <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="toast-body">
          Hello, world! This is a toast message.
        </div>
      </div>
    </div>
    <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"toast"</span> <span className="na">role=</span><span className="s">"alert"</span> <span className="na">aria-live=</span><span className="s">"assertive"</span> <span className="na">aria-atomic=</span><span className="s">"true"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"toast-header"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;img</span> <span className="na">src=</span><span className="s">"..."</span> <span className="na">class=</span><span className="s">"rounded mr-2"</span> <span className="na">alt=</span><span className="s">"..."</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;strong</span> <span className="na">class=</span><span className="s">"mr-auto"</span><span className="nt">&gt;</span>Bootstrap<span className="nt">&lt;/strong&gt;</span>{"\n"}{"    "}<span className="nt">&lt;small&gt;</span>11 mins ago<span className="nt">&lt;/small&gt;</span>{"\n"}{"    "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"ml-2 mb-1 close"</span> <span className="na">data-dismiss=</span><span className="s">"toast"</span> <span className="na">aria-label=</span><span className="s">"Close"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;span</span> <span className="na">aria-hidden=</span><span className="s">"true"</span><span className="nt">&gt;</span><span className="ni">&amp;times;</span><span className="nt">&lt;/span&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"toast-body"</span><span className="nt">&gt;</span>{"\n"}{"    "}Hello, world! This is a toast message.{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  </div>
  <h3 id="translucent"><span className="bd-content-title">Translucent</span></h3>
  <p>Toasts are slightly translucent, too, so they blend over whatever they might appear over. For browsers that support the <code className="highlighter-rouge">backdrop-filter</code> CSS property, we’ll also attempt to blur the elements under a toast.</p>
  <div className="bg-dark">
    <div className="bd-example">
      <div className="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          <svg className="bd-placeholder-img rounded mr-2" width={20} height={20} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect fill="#007aff" width="100%" height="100%" /></svg>
          <strong className="mr-auto">Bootstrap</strong>
          <small className="text-muted">11 mins ago</small>
          <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="toast-body">
          Hello, world! This is a toast message.
        </div>
      </div>
    </div>
    <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"toast"</span> <span className="na">role=</span><span className="s">"alert"</span> <span className="na">aria-live=</span><span className="s">"assertive"</span> <span className="na">aria-atomic=</span><span className="s">"true"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"toast-header"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;img</span> <span className="na">src=</span><span className="s">"..."</span> <span className="na">class=</span><span className="s">"rounded mr-2"</span> <span className="na">alt=</span><span className="s">"..."</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;strong</span> <span className="na">class=</span><span className="s">"mr-auto"</span><span className="nt">&gt;</span>Bootstrap<span className="nt">&lt;/strong&gt;</span>{"\n"}{"    "}<span className="nt">&lt;small</span> <span className="na">class=</span><span className="s">"text-muted"</span><span className="nt">&gt;</span>11 mins ago<span className="nt">&lt;/small&gt;</span>{"\n"}{"    "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"ml-2 mb-1 close"</span> <span className="na">data-dismiss=</span><span className="s">"toast"</span> <span className="na">aria-label=</span><span className="s">"Close"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;span</span> <span className="na">aria-hidden=</span><span className="s">"true"</span><span className="nt">&gt;</span><span className="ni">&amp;times;</span><span className="nt">&lt;/span&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"toast-body"</span><span className="nt">&gt;</span>{"\n"}{"    "}Hello, world! This is a toast message.{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  </div>
  <h3 id="stacking"><span className="bd-content-title">Stacking</span></h3>
  <p>When you have multiple toasts, we default to vertiaclly stacking them in a readable manner.</p>
  <div className="bg-light">
    <div className="bd-example">
      <div className="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          <svg className="bd-placeholder-img rounded mr-2" width={20} height={20} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect fill="#007aff" width="100%" height="100%" /></svg>
          <strong className="mr-auto">Bootstrap</strong>
          <small className="text-muted">just now</small>
          <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="toast-body">
          See? Just like this.
        </div>
      </div>
      <div className="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          <svg className="bd-placeholder-img rounded mr-2" width={20} height={20} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect fill="#007aff" width="100%" height="100%" /></svg>
          <strong className="mr-auto">Bootstrap</strong>
          <small className="text-muted">2 seconds ago</small>
          <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="toast-body">
          Heads up, toasts will stack automatically
        </div>
      </div>
    </div>
    <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"toast"</span> <span className="na">role=</span><span className="s">"alert"</span> <span className="na">aria-live=</span><span className="s">"assertive"</span> <span className="na">aria-atomic=</span><span className="s">"true"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"toast-header"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;img</span> <span className="na">src=</span><span className="s">"..."</span> <span className="na">class=</span><span className="s">"rounded mr-2"</span> <span className="na">alt=</span><span className="s">"..."</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;strong</span> <span className="na">class=</span><span className="s">"mr-auto"</span><span className="nt">&gt;</span>Bootstrap<span className="nt">&lt;/strong&gt;</span>{"\n"}{"    "}<span className="nt">&lt;small</span> <span className="na">class=</span><span className="s">"text-muted"</span><span className="nt">&gt;</span>just now<span className="nt">&lt;/small&gt;</span>{"\n"}{"    "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"ml-2 mb-1 close"</span> <span className="na">data-dismiss=</span><span className="s">"toast"</span> <span className="na">aria-label=</span><span className="s">"Close"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;span</span> <span className="na">aria-hidden=</span><span className="s">"true"</span><span className="nt">&gt;</span><span className="ni">&amp;times;</span><span className="nt">&lt;/span&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"toast-body"</span><span className="nt">&gt;</span>{"\n"}{"    "}See? Just like this.{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span>{"\n"}{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"toast"</span> <span className="na">role=</span><span className="s">"alert"</span> <span className="na">aria-live=</span><span className="s">"assertive"</span> <span className="na">aria-atomic=</span><span className="s">"true"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"toast-header"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;img</span> <span className="na">src=</span><span className="s">"..."</span> <span className="na">class=</span><span className="s">"rounded mr-2"</span> <span className="na">alt=</span><span className="s">"..."</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;strong</span> <span className="na">class=</span><span className="s">"mr-auto"</span><span className="nt">&gt;</span>Bootstrap<span className="nt">&lt;/strong&gt;</span>{"\n"}{"    "}<span className="nt">&lt;small</span> <span className="na">class=</span><span className="s">"text-muted"</span><span className="nt">&gt;</span>2 seconds ago<span className="nt">&lt;/small&gt;</span>{"\n"}{"    "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"ml-2 mb-1 close"</span> <span className="na">data-dismiss=</span><span className="s">"toast"</span> <span className="na">aria-label=</span><span className="s">"Close"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;span</span> <span className="na">aria-hidden=</span><span className="s">"true"</span><span className="nt">&gt;</span><span className="ni">&amp;times;</span><span className="nt">&lt;/span&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"toast-body"</span><span className="nt">&gt;</span>{"\n"}{"    "}Heads up, toasts will stack automatically{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  </div>
  <h2 id="placement"><span className="bd-content-title">Placement</span></h2>
  <p>Place toasts with custom CSS as you need them. The top right is often used for notifications, as is the top middle. If you’re only ever going to show one toast at a time, put the positioning styles right on the <code className="highlighter-rouge">.toast</code>.</p>
  <div className="bg-dark">
    <div className="bd-example">
      <div aria-live="polite" aria-atomic="true" style={{position: 'relative', minHeight: 200}}>
        <div className="toast fade show" style={{position: 'absolute', top: 0, right: 0}}>
          <div className="toast-header">
            <svg className="bd-placeholder-img rounded mr-2" width={20} height={20} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect fill="#007aff" width="100%" height="100%" /></svg>
            <strong className="mr-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="toast-body">
            Hello, world! This is a toast message.
          </div>
        </div>
      </div>
    </div>
    <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">aria-live=</span><span className="s">"polite"</span> <span className="na">aria-atomic=</span><span className="s">"true"</span> <span className="na">style=</span><span className="s">"position: relative; min-height: 200px;"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"toast"</span> <span className="na">style=</span><span className="s">"position: absolute; top: 0; right: 0;"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"toast-header"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;img</span> <span className="na">src=</span><span className="s">"..."</span> <span className="na">class=</span><span className="s">"rounded mr-2"</span> <span className="na">alt=</span><span className="s">"..."</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;strong</span> <span className="na">class=</span><span className="s">"mr-auto"</span><span className="nt">&gt;</span>Bootstrap<span className="nt">&lt;/strong&gt;</span>{"\n"}{"      "}<span className="nt">&lt;small&gt;</span>11 mins ago<span className="nt">&lt;/small&gt;</span>{"\n"}{"      "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"ml-2 mb-1 close"</span> <span className="na">data-dismiss=</span><span className="s">"toast"</span> <span className="na">aria-label=</span><span className="s">"Close"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;span</span> <span className="na">aria-hidden=</span><span className="s">"true"</span><span className="nt">&gt;</span><span className="ni">&amp;times;</span><span className="nt">&lt;/span&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"toast-body"</span><span className="nt">&gt;</span>{"\n"}{"      "}Hello, world! This is a toast message.{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  </div>
  <p>For systems that generate more notifications, consider using a wrapping element so they can easily stack.</p>
  <div className="bg-dark">
    <div className="bd-example">
      <div aria-live="polite" aria-atomic="true" style={{position: 'relative', minHeight: 200}}>
        {/* Position it */}
        <div style={{position: 'absolute', top: 0, right: 0}}>
          {/* Then put toasts within */}
          <div className="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header">
              <svg className="bd-placeholder-img rounded mr-2" width={20} height={20} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect fill="#007aff" width="100%" height="100%" /></svg>
              <strong className="mr-auto">Bootstrap</strong>
              <small className="text-muted">just now</small>
              <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="toast-body">
              See? Just like this.
            </div>
          </div>
          <div className="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header">
              <svg className="bd-placeholder-img rounded mr-2" width={20} height={20} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect fill="#007aff" width="100%" height="100%" /></svg>
              <strong className="mr-auto">Bootstrap</strong>
              <small className="text-muted">2 seconds ago</small>
              <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="toast-body">
              Heads up, toasts will stack automatically
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">aria-live=</span><span className="s">"polite"</span> <span className="na">aria-atomic=</span><span className="s">"true"</span> <span className="na">style=</span><span className="s">"position: relative; min-height: 200px;"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="c">&lt;!-- Position it --&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">style=</span><span className="s">"position: absolute; top: 0; right: 0;"</span><span className="nt">&gt;</span>{"\n"}{"\n"}{"    "}<span className="c">&lt;!-- Then put toasts within --&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"toast"</span> <span className="na">role=</span><span className="s">"alert"</span> <span className="na">aria-live=</span><span className="s">"assertive"</span> <span className="na">aria-atomic=</span><span className="s">"true"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"toast-header"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;img</span> <span className="na">src=</span><span className="s">"..."</span> <span className="na">class=</span><span className="s">"rounded mr-2"</span> <span className="na">alt=</span><span className="s">"..."</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;strong</span> <span className="na">class=</span><span className="s">"mr-auto"</span><span className="nt">&gt;</span>Bootstrap<span className="nt">&lt;/strong&gt;</span>{"\n"}{"        "}<span className="nt">&lt;small</span> <span className="na">class=</span><span className="s">"text-muted"</span><span className="nt">&gt;</span>just now<span className="nt">&lt;/small&gt;</span>{"\n"}{"        "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"ml-2 mb-1 close"</span> <span className="na">data-dismiss=</span><span className="s">"toast"</span> <span className="na">aria-label=</span><span className="s">"Close"</span><span className="nt">&gt;</span>{"\n"}{"          "}<span className="nt">&lt;span</span> <span className="na">aria-hidden=</span><span className="s">"true"</span><span className="nt">&gt;</span><span className="ni">&amp;times;</span><span className="nt">&lt;/span&gt;</span>{"\n"}{"        "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"      "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"toast-body"</span><span className="nt">&gt;</span>{"\n"}{"        "}See? Just like this.{"\n"}{"      "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"toast"</span> <span className="na">role=</span><span className="s">"alert"</span> <span className="na">aria-live=</span><span className="s">"assertive"</span> <span className="na">aria-atomic=</span><span className="s">"true"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"toast-header"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;img</span> <span className="na">src=</span><span className="s">"..."</span> <span className="na">class=</span><span className="s">"rounded mr-2"</span> <span className="na">alt=</span><span className="s">"..."</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;strong</span> <span className="na">class=</span><span className="s">"mr-auto"</span><span className="nt">&gt;</span>Bootstrap<span className="nt">&lt;/strong&gt;</span>{"\n"}{"        "}<span className="nt">&lt;small</span> <span className="na">class=</span><span className="s">"text-muted"</span><span className="nt">&gt;</span>2 seconds ago<span className="nt">&lt;/small&gt;</span>{"\n"}{"        "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"ml-2 mb-1 close"</span> <span className="na">data-dismiss=</span><span className="s">"toast"</span> <span className="na">aria-label=</span><span className="s">"Close"</span><span className="nt">&gt;</span>{"\n"}{"          "}<span className="nt">&lt;span</span> <span className="na">aria-hidden=</span><span className="s">"true"</span><span className="nt">&gt;</span><span className="ni">&amp;times;</span><span className="nt">&lt;/span&gt;</span>{"\n"}{"        "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"      "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"toast-body"</span><span className="nt">&gt;</span>{"\n"}{"        "}Heads up, toasts will stack automatically{"\n"}{"      "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  </div>
  <p>You can also get fancy with flexbox utilities to align toasts horizontally and/or vertically.</p>
  <div className="bg-dark">
    <div className="bd-example">
      {/* Flexbox container for aligning the toasts */}
      <div aria-live="polite" aria-atomic="true" className="d-flex justify-content-center align-items-center" style={{minHeight: 200}}>
        {/* Then put toasts within */}
        <div className="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
          <div className="toast-header">
            <svg className="bd-placeholder-img rounded mr-2" width={20} height={20} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect fill="#007aff" width="100%" height="100%" /></svg>
            <strong className="mr-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="toast-body">
            Hello, world! This is a toast message.
          </div>
        </div>
      </div>
    </div>
    <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="c">&lt;!-- Flexbox container for aligning the toasts --&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">aria-live=</span><span className="s">"polite"</span> <span className="na">aria-atomic=</span><span className="s">"true"</span> <span className="na">class=</span><span className="s">"d-flex justify-content-center align-items-center"</span> <span className="na">style=</span><span className="s">"min-height: 200px;"</span><span className="nt">&gt;</span>{"\n"}{"\n"}{"  "}<span className="c">&lt;!-- Then put toasts within --&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"toast"</span> <span className="na">role=</span><span className="s">"alert"</span> <span className="na">aria-live=</span><span className="s">"assertive"</span> <span className="na">aria-atomic=</span><span className="s">"true"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"toast-header"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;img</span> <span className="na">src=</span><span className="s">"..."</span> <span className="na">class=</span><span className="s">"rounded mr-2"</span> <span className="na">alt=</span><span className="s">"..."</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;strong</span> <span className="na">class=</span><span className="s">"mr-auto"</span><span className="nt">&gt;</span>Bootstrap<span className="nt">&lt;/strong&gt;</span>{"\n"}{"      "}<span className="nt">&lt;small&gt;</span>11 mins ago<span className="nt">&lt;/small&gt;</span>{"\n"}{"      "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"ml-2 mb-1 close"</span> <span className="na">data-dismiss=</span><span className="s">"toast"</span> <span className="na">aria-label=</span><span className="s">"Close"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;span</span> <span className="na">aria-hidden=</span><span className="s">"true"</span><span className="nt">&gt;</span><span className="ni">&amp;times;</span><span className="nt">&lt;/span&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"toast-body"</span><span className="nt">&gt;</span>{"\n"}{"      "}Hello, world! This is a toast message.{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  </div>
  <h2 id="accessibility"><span className="bd-content-title">Accessibility</span></h2>
  <p>Toasts are intended to be small interruptions to your visitors or users, so to help those with screen readers and similar assistive technologies, you should wrap your toasts in an <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions"><code className="highlighter-rouge">aria-live</code> region</a>. Changes to live regions (such as injecting/updating a toast component) are automatically announced by screen readers without needing to move the user’s focus or otherwise interrupt the user. Additionally, include <code className="highlighter-rouge">aria-atomic="true"</code> to ensure that the entire toast is always announced as a single (atomic) unit, rather than announcing what was changed (which could lead to problems if you only update part of the toast’s content, or if displaying the same toast content at a later point in time). If the information needed is important for the process, e.g. for a list of errors in a form, then use the <a href="/docs/4.2/components/alerts/">alert component</a> instead of toast.</p>
  <p>Note that the live region needs to be present in the markup <em>before</em> the toast is generated or updated. If you dynamically generate both at the same time and inject them into the page, they will generally not be announced by assistive technologies.</p>
  <p>You also need to adapt the <code className="highlighter-rouge">role</code> and <code className="highlighter-rouge">aria-live</code> level depending on the content. If it’s an important message like an error, use <code className="highlighter-rouge">role="alert" aria-live="assertive"</code>, otherwise use <code className="highlighter-rouge">role="status" aria-live="polite"</code> attributes.</p>
  <p>As the content you’re displaying changes, be sure to update the <a href="#options"><code className="highlighter-rouge">delay</code> timeout</a> to ensure people have enough time to read the toast.</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"toast"</span> <span className="na">role=</span><span className="s">"alert"</span> <span className="na">aria-live=</span><span className="s">"polite"</span> <span className="na">aria-atomic=</span><span className="s">"true"</span> <span className="na">data-delay=</span><span className="s">"10000"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">role=</span><span className="s">"alert"</span> <span className="na">aria-live=</span><span className="s">"assertive"</span> <span className="na">aria-atomic=</span><span className="s">"true"</span><span className="nt">&gt;</span>...<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <p>When using <code className="highlighter-rouge">autohide: false</code>, you must add a close button to allow users to dismiss the toast.</p>
  <div className="bg-light">
    <div className="bd-example">
      <div role="alert" aria-live="assertive" aria-atomic="true" className="toast fade show" data-autohide="false">
        <div className="toast-header">
          <svg className="bd-placeholder-img rounded mr-2" width={20} height={20} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect fill="#007aff" width="100%" height="100%" /></svg>
          <strong className="mr-auto">Bootstrap</strong>
          <small>11 mins ago</small>
          <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="toast-body">
          Hello, world! This is a toast message.
        </div>
      </div>
    </div>
    <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">role=</span><span className="s">"alert"</span> <span className="na">aria-live=</span><span className="s">"assertive"</span> <span className="na">aria-atomic=</span><span className="s">"true"</span> <span className="na">class=</span><span className="s">"toast"</span> <span className="na">data-autohide=</span><span className="s">"false"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"toast-header"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;img</span> <span className="na">src=</span><span className="s">"..."</span> <span className="na">class=</span><span className="s">"rounded mr-2"</span> <span className="na">alt=</span><span className="s">"..."</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;strong</span> <span className="na">class=</span><span className="s">"mr-auto"</span><span className="nt">&gt;</span>Bootstrap<span className="nt">&lt;/strong&gt;</span>{"\n"}{"    "}<span className="nt">&lt;small&gt;</span>11 mins ago<span className="nt">&lt;/small&gt;</span>{"\n"}{"    "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"ml-2 mb-1 close"</span> <span className="na">data-dismiss=</span><span className="s">"toast"</span> <span className="na">aria-label=</span><span className="s">"Close"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;span</span> <span className="na">aria-hidden=</span><span className="s">"true"</span><span className="nt">&gt;</span><span className="ni">&amp;times;</span><span className="nt">&lt;/span&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"toast-body"</span><span className="nt">&gt;</span>{"\n"}{"    "}Hello, world! This is a toast message.{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  </div>
  <h2 id="javascript-behavior"><span className="bd-content-title">JavaScript behavior</span></h2>
  <h3 id="usage"><span className="bd-content-title">Usage</span></h3>
  <p>Initialize toasts via JavaScript:</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'.toast'</span><span className="p">).</span><span className="nx">toast</span><span className="p">(</span><span className="nx">option</span><span className="p">)</span></code></pre></figure>
  <h3 id="options"><span className="bd-content-title">Options</span></h3>
  <p>Options can be passed via data attributes or JavaScript. For data attributes, append the option name to <code className="highlighter-rouge">data-</code>, as in <code className="highlighter-rouge">data-animation=""</code>.</p>
  <table className="table table-bordered table-striped">
    <thead>
      <tr>
        <th style={{width: 100}}>Name</th>
        <th style={{width: 100}}>Type</th>
        <th style={{width: 50}}>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>animation</td>
        <td>boolean</td>
        <td>true</td>
        <td>Apply a CSS fade transition to the toast</td>
      </tr>
      <tr>
        <td>autohide</td>
        <td>boolean</td>
        <td>true</td>
        <td>Auto hide the toast</td>
      </tr>
      <tr>
        <td>delay</td>
        <td>number</td>
        <td>
          <code>500</code>
        </td>
        <td>Delay hiding the toast (ms)</td>
      </tr>
    </tbody>
  </table>
  <h3 id="methods"><span className="bd-content-title">Methods</span></h3>
  <div className="bd-callout bd-callout-danger">
    <h4 id="asynchronous-methods-and-transitions">Asynchronous methods and transitions</h4>
    <p>All API methods are <strong>asynchronous</strong> and start a <strong>transition</strong>. They return to the caller as soon as the transition is started but <strong>before it ends</strong>. In addition, a method call on a <strong>transitioning component will be ignored</strong>.</p>
    <p><a href="/docs/4.2/getting-started/javascript/">See our JavaScript documentation for more information</a>.</p>
  </div>
  <h4 id="toastoptions"><span className="bd-content-title"><code className="highlighter-rouge">$().toast(options)</code></span></h4>
  <p>Attaches a toast handler to an element collection.</p>
  <h4 id="toastshow"><span className="bd-content-title"><code className="highlighter-rouge">.toast('show')</code></span></h4>
  <p>Reveals an element’s toast. <strong>Returns to the caller before the toast has actually been shown</strong> (i.e. before the <code className="highlighter-rouge">shown.bs.toast</code> event occurs).
    You have to manually call this method, instead your toast won’t show.</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'#element'</span><span className="p">).</span><span className="nx">toast</span><span className="p">(</span><span className="s1">'show'</span><span className="p">)</span></code></pre></figure>
  <h4 id="toasthide"><span className="bd-content-title"><code className="highlighter-rouge">.toast('hide')</code></span></h4>
  <p>Hides an element’s toast. <strong>Returns to the caller before the toast has actually been hidden</strong> (i.e. before the <code className="highlighter-rouge">hidden.bs.toast</code> event occurs). You have to manually call this method if you made <code className="highlighter-rouge">autohide</code> to <code className="highlighter-rouge">false</code>.</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'#element'</span><span className="p">).</span><span className="nx">toast</span><span className="p">(</span><span className="s1">'hide'</span><span className="p">)</span></code></pre></figure>
  <h4 id="toastdispose"><span className="bd-content-title"><code className="highlighter-rouge">.toast('dispose')</code></span></h4>
  <p>Hides an element’s toast. Your toast will remain on the DOM but won’t show anymore.</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'#element'</span><span className="p">).</span><span className="nx">toast</span><span className="p">(</span><span className="s1">'dispose'</span><span className="p">)</span></code></pre></figure>
  <h3 id="events"><span className="bd-content-title">Events</span></h3>
  <table className="table table-bordered table-striped">
    <thead>
      <tr>
        <th style={{width: 150}}>Event Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>show.bs.toast</td>
        <td>This event fires immediately when the <code>show</code> instance method is called.</td>
      </tr>
      <tr>
        <td>shown.bs.toast</td>
        <td>This event is fired when the toast has been made visible to the user.</td>
      </tr>
      <tr>
        <td>hide.bs.toast</td>
        <td>This event is fired immediately when the <code>hide</code> instance method has been called.</td>
      </tr>
      <tr>
        <td>hidden.bs.toast</td>
        <td>This event is fired when the toast has finished being hidden from the user.</td>
      </tr>
    </tbody>
  </table>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'#myToast'</span><span className="p">).</span><span className="nx">on</span><span className="p">(</span><span className="s1">'hidden.bs.toast'</span><span className="p">,</span> <span className="kd">function</span> <span className="p">()</span> <span className="p">{"{"}</span>{"\n"}{"  "}<span className="c1">// do something…</span>{"\n"}<span className="p">{"}"})</span></code></pre></figure>
</main>

    );
  }
}