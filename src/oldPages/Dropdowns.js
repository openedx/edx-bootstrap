import React from 'react';

export default class Dropdowns extends React.Component {
  render() {
    return (
<main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
  <h1 className="bd-title" id="content">Dropdowns</h1>
  <p className="bd-lead">Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.</p>
  
  <h2 id="overview"><span className="bd-content-title">Overview</span></h2>
  <p>Dropdowns are toggleable, contextual overlays for displaying lists of links and more. They’re made interactive with the included Bootstrap dropdown JavaScript plugin. They’re toggled by clicking, not by hovering; this is <a href="http://markdotto.com/2012/02/27/bootstrap-explained-dropdowns/">an intentional design decision</a>.</p>
  <p>Dropdowns are built on a third party library, <a href="https://popper.js.org/">Popper.js</a>, which provides dynamic positioning and viewport detection. Be sure to include <a href="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js">popper.min.js</a> before Bootstrap’s JavaScript or use <code className="highlighter-rouge">bootstrap.bundle.min.js</code> / <code className="highlighter-rouge">bootstrap.bundle.js</code> which contains Popper.js. Popper.js isn’t used to position dropdowns in navbars though as dynamic positioning isn’t required.</p>
  <p>If you’re building our JavaScript from source, it <a href="/docs/4.2/getting-started/javascript/#util">requires <code className="highlighter-rouge">util.js</code></a>.</p>
  <h2 id="accessibility"><span className="bd-content-title">Accessibility</span></h2>
  <p>The <a href="https://www.w3.org/TR/wai-aria/"><abbr title="Web Accessibility Initiative">WAI</abbr> <abbr title="Accessible Rich Internet Applications">ARIA</abbr></a> standard defines an actual <a href="https://www.w3.org/WAI/PF/aria/roles#menu"><code className="highlighter-rouge">role="menu"</code> widget</a>, but this is specific to application-like menus which trigger actions or functions. <abbr title="Accessible Rich Internet Applications">ARIA</abbr> menus can only contain menu items, checkbox menu items, radio button menu items, radio button groups, and sub-menus.</p>
  <p>Bootstrap’s dropdowns, on the other hand, are designed to be generic and applicable to a variety of situations and markup structures. For instance, it is possible to create dropdowns that contain additional inputs and form controls, such as search fields or login forms. For this reason, Bootstrap does not expect (nor automatically add) any of the <code className="highlighter-rouge">role</code> and <code className="highlighter-rouge">aria-</code> attributes required for true <abbr title="Accessible Rich Internet Applications">ARIA</abbr> menus. Authors will have to include these more specific attributes themselves.</p>
  <p>However, Bootstrap does add built-in support for most standard keyboard menu interactions, such as the ability to move through individual <code className="highlighter-rouge">.dropdown-item</code> elements using the cursor keys and close the menu with the <kbd>ESC</kbd> key.</p>
  <h2 id="examples"><span className="bd-content-title">Examples</span></h2>
  <p>Wrap the dropdown’s toggle (your button or link) and the dropdown menu within <code className="highlighter-rouge">.dropdown</code>, or another element that declares <code className="highlighter-rouge">position: relative;</code>. Dropdowns can be triggered from <code className="highlighter-rouge">&lt;a&gt;</code> or <code className="highlighter-rouge">&lt;button&gt;</code> elements to better fit your potential needs.</p>
  <h3 id="single-button"><span className="bd-content-title">Single button</span></h3>
  <p>Any single <code className="highlighter-rouge">.btn</code> can be turned into a dropdown toggle with some markup changes. Here’s how you can put them to work with either <code className="highlighter-rouge">&lt;button&gt;</code> elements:</p>
  <div className="bd-example">
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown button
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
      </div>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-secondary dropdown-toggle"</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">id=</span><span className="s">"dropdownMenuButton"</span> <span className="na">data-toggle=</span><span className="s">"dropdown"</span> <span className="na">aria-haspopup=</span><span className="s">"true"</span> <span className="na">aria-expanded=</span><span className="s">"false"</span><span className="nt">&gt;</span>{"\n"}{"    "}Dropdown button{"\n"}{"  "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-menu"</span> <span className="na">aria-labelledby=</span><span className="s">"dropdownMenuButton"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Action<span className="nt">&lt;/a&gt;</span>{"\n"}{"    "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Another action<span className="nt">&lt;/a&gt;</span>{"\n"}{"    "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Something else here<span className="nt">&lt;/a&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <p>And with <code className="highlighter-rouge">&lt;a&gt;</code> elements:</p>
  <div className="bd-example">
    <div className="dropdown">
      <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown link
      </a>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
      </div>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"btn btn-secondary dropdown-toggle"</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">role=</span><span className="s">"button"</span> <span className="na">id=</span><span className="s">"dropdownMenuLink"</span> <span className="na">data-toggle=</span><span className="s">"dropdown"</span> <span className="na">aria-haspopup=</span><span className="s">"true"</span> <span className="na">aria-expanded=</span><span className="s">"false"</span><span className="nt">&gt;</span>{"\n"}{"    "}Dropdown link{"\n"}{"  "}<span className="nt">&lt;/a&gt;</span>{"\n"}{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-menu"</span> <span className="na">aria-labelledby=</span><span className="s">"dropdownMenuLink"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Action<span className="nt">&lt;/a&gt;</span>{"\n"}{"    "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Another action<span className="nt">&lt;/a&gt;</span>{"\n"}{"    "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Something else here<span className="nt">&lt;/a&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <p>The best part is you can do this with any button variant, too:</p>
  <div className="bd-example">
    <div className="btn-group">
      <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Primary</button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </div>{/* /btn-group */}
    <div className="btn-group">
      <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Secondary</button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </div>{/* /btn-group */}
    <div className="btn-group">
      <button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Success</button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </div>{/* /btn-group */}
    <div className="btn-group">
      <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Info</button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </div>{/* /btn-group */}
    <div className="btn-group">
      <button type="button" className="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Warning</button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </div>{/* /btn-group */}
    <div className="btn-group">
      <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Danger</button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </div>{/* /btn-group */}
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="c">&lt;!-- Example single danger button --&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"btn-group"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-danger dropdown-toggle"</span> <span className="na">data-toggle=</span><span className="s">"dropdown"</span> <span className="na">aria-haspopup=</span><span className="s">"true"</span> <span className="na">aria-expanded=</span><span className="s">"false"</span><span className="nt">&gt;</span>{"\n"}{"    "}Action{"\n"}{"  "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-menu"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Action<span className="nt">&lt;/a&gt;</span>{"\n"}{"    "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Another action<span className="nt">&lt;/a&gt;</span>{"\n"}{"    "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Something else here<span className="nt">&lt;/a&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-divider"</span><span className="nt">&gt;&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Separated link<span className="nt">&lt;/a&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <h3 id="split-button"><span className="bd-content-title">Split button</span></h3>
  <p>Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of <code className="highlighter-rouge">.dropdown-toggle-split</code> for proper spacing around the dropdown caret.</p>
  <p>We use this extra class to reduce the horizontal <code className="highlighter-rouge">padding</code> on either side of the caret by 25% and remove the <code className="highlighter-rouge">margin-left</code> that’s added for regular button dropdowns. Those extra changes keep the caret centered in the split button and provide a more appropriately sized hit area next to the main button.</p>
  <div className="bd-example">
    <div className="btn-group">
      <button type="button" className="btn btn-primary">Primary</button>
      <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span className="sr-only">Toggle Dropdown</span>
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </div>{/* /btn-group */}
    <div className="btn-group">
      <button type="button" className="btn btn-secondary">Secondary</button>
      <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span className="sr-only">Toggle Dropdown</span>
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </div>{/* /btn-group */}
    <div className="btn-group">
      <button type="button" className="btn btn-success">Success</button>
      <button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span className="sr-only">Toggle Dropdown</span>
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </div>{/* /btn-group */}
    <div className="btn-group">
      <button type="button" className="btn btn-info">Info</button>
      <button type="button" className="btn btn-info dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span className="sr-only">Toggle Dropdown</span>
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </div>{/* /btn-group */}
    <div className="btn-group">
      <button type="button" className="btn btn-warning">Warning</button>
      <button type="button" className="btn btn-warning dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span className="sr-only">Toggle Dropdown</span>
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </div>{/* /btn-group */}
    <div className="btn-group">
      <button type="button" className="btn btn-danger">Danger</button>
      <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span className="sr-only">Toggle Dropdown</span>
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </div>{/* /btn-group */}
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="c">&lt;!-- Example split danger button --&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"btn-group"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-danger"</span><span className="nt">&gt;</span>Action<span className="nt">&lt;/button&gt;</span>{"\n"}{"  "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-danger dropdown-toggle dropdown-toggle-split"</span> <span className="na">data-toggle=</span><span className="s">"dropdown"</span> <span className="na">aria-haspopup=</span><span className="s">"true"</span> <span className="na">aria-expanded=</span><span className="s">"false"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>Toggle Dropdown<span className="nt">&lt;/span&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-menu"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Action<span className="nt">&lt;/a&gt;</span>{"\n"}{"    "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Another action<span className="nt">&lt;/a&gt;</span>{"\n"}{"    "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Something else here<span className="nt">&lt;/a&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-divider"</span><span className="nt">&gt;&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Separated link<span className="nt">&lt;/a&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <h2 id="sizing"><span className="bd-content-title">Sizing</span></h2>
  <p>Button dropdowns work with buttons of all sizes, including default and split dropdown buttons.</p>
  <div className="bd-example">
    <div className="btn-toolbar" role="toolbar">
      <div className="btn-group">
        <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Large button
        </button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#">Separated link</a>
        </div>
      </div>{/* /btn-group */}
      <div className="btn-group ml-2">
        <button type="button" className="btn btn-lg btn-secondary">Large split button</button>
        <button type="button" className="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="sr-only">Toggle Dropdown</span>
        </button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#">Separated link</a>
        </div>
      </div>{/* /btn-group */}
    </div>{/* /btn-toolbar */}
    <div className="btn-toolbar" role="toolbar">
      <div className="btn-group">
        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Small button
        </button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#">Separated link</a>
        </div>
      </div>{/* /btn-group */}
      <div className="btn-group ml-2">
        <button type="button" className="btn btn-sm btn-secondary">Small split button</button>
        <button type="button" className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="sr-only">Toggle Dropdown</span>
        </button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#">Separated link</a>
        </div>
      </div>{/* /btn-group */}
    </div>{/* /btn-toolbar */}
  </div>
  {/* /example */}
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="c">&lt;!-- Large button groups (default and split) --&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"btn-group"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-secondary btn-lg dropdown-toggle"</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">data-toggle=</span><span className="s">"dropdown"</span> <span className="na">aria-haspopup=</span><span className="s">"true"</span> <span className="na">aria-expanded=</span><span className="s">"false"</span><span className="nt">&gt;</span>{"\n"}{"    "}Large button{"\n"}{"  "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-menu"</span><span className="nt">&gt;</span>{"\n"}{"    "}...{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"btn-group"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-secondary btn-lg"</span> <span className="na">type=</span><span className="s">"button"</span><span className="nt">&gt;</span>{"\n"}{"    "}Large split button{"\n"}{"  "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"  "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split"</span> <span className="na">data-toggle=</span><span className="s">"dropdown"</span> <span className="na">aria-haspopup=</span><span className="s">"true"</span> <span className="na">aria-expanded=</span><span className="s">"false"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>Toggle Dropdown<span className="nt">&lt;/span&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-menu"</span><span className="nt">&gt;</span>{"\n"}{"    "}...{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span>{"\n"}{"\n"}<span className="c">&lt;!-- Small button groups (default and split) --&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"btn-group"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-secondary btn-sm dropdown-toggle"</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">data-toggle=</span><span className="s">"dropdown"</span> <span className="na">aria-haspopup=</span><span className="s">"true"</span> <span className="na">aria-expanded=</span><span className="s">"false"</span><span className="nt">&gt;</span>{"\n"}{"    "}Small button{"\n"}{"  "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-menu"</span><span className="nt">&gt;</span>{"\n"}{"    "}...{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"btn-group"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-secondary btn-sm"</span> <span className="na">type=</span><span className="s">"button"</span><span className="nt">&gt;</span>{"\n"}{"    "}Small split button{"\n"}{"  "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"  "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split"</span> <span className="na">data-toggle=</span><span className="s">"dropdown"</span> <span className="na">aria-haspopup=</span><span className="s">"true"</span> <span className="na">aria-expanded=</span><span className="s">"false"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>Toggle Dropdown<span className="nt">&lt;/span&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-menu"</span><span className="nt">&gt;</span>{"\n"}{"    "}...{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <h2 id="directions"><span className="bd-content-title">Directions</span></h2>
  <h3 id="dropup"><span className="bd-content-title">Dropup</span></h3>
  <p>Trigger dropdown menus above elements by adding <code className="highlighter-rouge">.dropup</code> to the parent element.</p>
  <div className="bd-example">
    <div className="btn-group dropup">
      <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropup
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </div>
    <div className="btn-group dropup">
      <button type="button" className="btn btn-secondary">
        Split dropup
      </button>
      <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span className="sr-only">Toggle Dropdown</span>
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="c">&lt;!-- Default dropup button --&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"btn-group dropup"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary dropdown-toggle"</span> <span className="na">data-toggle=</span><span className="s">"dropdown"</span> <span className="na">aria-haspopup=</span><span className="s">"true"</span> <span className="na">aria-expanded=</span><span className="s">"false"</span><span className="nt">&gt;</span>{"\n"}{"    "}Dropup{"\n"}{"  "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-menu"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="c">&lt;!-- Dropdown menu links --&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span>{"\n"}{"\n"}<span className="c">&lt;!-- Split dropup button --&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"btn-group dropup"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span><span className="nt">&gt;</span>{"\n"}{"    "}Split dropup{"\n"}{"  "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"  "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary dropdown-toggle dropdown-toggle-split"</span> <span className="na">data-toggle=</span><span className="s">"dropdown"</span> <span className="na">aria-haspopup=</span><span className="s">"true"</span> <span className="na">aria-expanded=</span><span className="s">"false"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>Toggle Dropdown<span className="nt">&lt;/span&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-menu"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="c">&lt;!-- Dropdown menu links --&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <h3 id="dropright"><span className="bd-content-title">Dropright</span></h3>
  <p>Trigger dropdown menus at the right of the elements by adding <code className="highlighter-rouge">.dropright</code> to the parent element.</p>
  <div className="bd-example">
    <div className="btn-group dropright">
      <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropright
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </div>
    <div className="btn-group dropright">
      <button type="button" className="btn btn-secondary">
        Split dropright
      </button>
      <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span className="sr-only">Toggle Dropright</span>
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="c">&lt;!-- Default dropright button --&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"btn-group dropright"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary dropdown-toggle"</span> <span className="na">data-toggle=</span><span className="s">"dropdown"</span> <span className="na">aria-haspopup=</span><span className="s">"true"</span> <span className="na">aria-expanded=</span><span className="s">"false"</span><span className="nt">&gt;</span>{"\n"}{"    "}Dropright{"\n"}{"  "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-menu"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="c">&lt;!-- Dropdown menu links --&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span>{"\n"}{"\n"}<span className="c">&lt;!-- Split dropright button --&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"btn-group dropright"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span><span className="nt">&gt;</span>{"\n"}{"    "}Split dropright{"\n"}{"  "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"  "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary dropdown-toggle dropdown-toggle-split"</span> <span className="na">data-toggle=</span><span className="s">"dropdown"</span> <span className="na">aria-haspopup=</span><span className="s">"true"</span> <span className="na">aria-expanded=</span><span className="s">"false"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>Toggle Dropright<span className="nt">&lt;/span&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-menu"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="c">&lt;!-- Dropdown menu links --&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <h3 id="dropleft"><span className="bd-content-title">Dropleft</span></h3>
  <p>Trigger dropdown menus at the left of the elements by adding <code className="highlighter-rouge">.dropleft</code> to the parent element.</p>
  <div className="bd-example">
    <div className="btn-group dropleft">
      <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropleft
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </div>
    <div className="btn-group">
      <div className="btn-group dropleft" role="group">
        <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="sr-only">Toggle Dropleft</span>
        </button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#">Separated link</a>
        </div>
      </div>
      <button type="button" className="btn btn-secondary">
        Split dropleft
      </button>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="c">&lt;!-- Default dropleft button --&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"btn-group dropleft"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary dropdown-toggle"</span> <span className="na">data-toggle=</span><span className="s">"dropdown"</span> <span className="na">aria-haspopup=</span><span className="s">"true"</span> <span className="na">aria-expanded=</span><span className="s">"false"</span><span className="nt">&gt;</span>{"\n"}{"    "}Dropleft{"\n"}{"  "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-menu"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="c">&lt;!-- Dropdown menu links --&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span>{"\n"}{"\n"}<span className="c">&lt;!-- Split dropleft button --&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"btn-group"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"btn-group dropleft"</span> <span className="na">role=</span><span className="s">"group"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary dropdown-toggle dropdown-toggle-split"</span> <span className="na">data-toggle=</span><span className="s">"dropdown"</span> <span className="na">aria-haspopup=</span><span className="s">"true"</span> <span className="na">aria-expanded=</span><span className="s">"false"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>Toggle Dropleft<span className="nt">&lt;/span&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-menu"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="c">&lt;!-- Dropdown menu links --&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span><span className="nt">&gt;</span>{"\n"}{"    "}Split dropleft{"\n"}{"  "}<span className="nt">&lt;/button&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <h2 id="menu-items"><span className="bd-content-title">Menu items</span></h2>
  <p>Historically dropdown menu contents <em>had</em> to be links, but that’s no longer the case with v4. Now you can optionally use <code className="highlighter-rouge">&lt;button&gt;</code> elements in your dropdowns instead of just <code className="highlighter-rouge">&lt;a&gt;</code>s.</p>
  <div className="bd-example">
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
        <button className="dropdown-item" type="button">Action</button>
        <button className="dropdown-item" type="button">Another action</button>
        <button className="dropdown-item" type="button">Something else here</button>
      </div>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-secondary dropdown-toggle"</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">id=</span><span className="s">"dropdownMenu2"</span> <span className="na">data-toggle=</span><span className="s">"dropdown"</span> <span className="na">aria-haspopup=</span><span className="s">"true"</span> <span className="na">aria-expanded=</span><span className="s">"false"</span><span className="nt">&gt;</span>{"\n"}{"    "}Dropdown{"\n"}{"  "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-menu"</span> <span className="na">aria-labelledby=</span><span className="s">"dropdownMenu2"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">type=</span><span className="s">"button"</span><span className="nt">&gt;</span>Action<span className="nt">&lt;/button&gt;</span>{"\n"}{"    "}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">type=</span><span className="s">"button"</span><span className="nt">&gt;</span>Another action<span className="nt">&lt;/button&gt;</span>{"\n"}{"    "}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">type=</span><span className="s">"button"</span><span className="nt">&gt;</span>Something else here<span className="nt">&lt;/button&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <p>You can also create non-interactive dropdown items with <code className="highlighter-rouge">.dropdown-item-text</code>. Feel free to style further with custom CSS or text utilities.</p>
  <div className="bd-example">
    <div className="dropdown-menu">
      <span className="dropdown-item-text">Dropdown item text</span>
      <a className="dropdown-item" href="#">Action</a>
      <a className="dropdown-item" href="#">Another action</a>
      <a className="dropdown-item" href="#">Something else here</a>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-menu"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"dropdown-item-text"</span><span className="nt">&gt;</span>Dropdown item text<span className="nt">&lt;/span&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Action<span className="nt">&lt;/a&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Another action<span className="nt">&lt;/a&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Something else here<span className="nt">&lt;/a&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <h3 id="active"><span className="bd-content-title">Active</span></h3>
  <p>Add <code className="highlighter-rouge">.active</code> to items in the dropdown to <strong>style them as active</strong>.</p>
  <div className="bd-example">
    <div className="dropdown-menu">
      <a className="dropdown-item" href="#">Regular link</a>
      <a className="dropdown-item active" href="#">Active link</a>
      <a className="dropdown-item" href="#">Another link</a>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-menu"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Regular link<span className="nt">&lt;/a&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item active"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Active link<span className="nt">&lt;/a&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Another link<span className="nt">&lt;/a&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <h3 id="disabled"><span className="bd-content-title">Disabled</span></h3>
  <p>Add <code className="highlighter-rouge">.disabled</code> to items in the dropdown to <strong>style them as disabled</strong>.</p>
  <div className="bd-example">
    <div className="dropdown-menu">
      <a className="dropdown-item" href="#">Regular link</a>
      <a className="dropdown-item disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled link</a>
      <a className="dropdown-item" href="#">Another link</a>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-menu"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Regular link<span className="nt">&lt;/a&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item disabled"</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">tabindex=</span><span className="s">"-1"</span> <span className="na">aria-disabled=</span><span className="s">"true"</span><span className="nt">&gt;</span>Disabled link<span className="nt">&lt;/a&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Another link<span className="nt">&lt;/a&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <h2 id="menu-alignment"><span className="bd-content-title">Menu alignment</span></h2>
  <p>By default, a dropdown menu is automatically positioned 100% from the top and along the left side of its parent. Add <code className="highlighter-rouge">.dropdown-menu-right</code> to a <code className="highlighter-rouge">.dropdown-menu</code> to right align the dropdown menu.</p>
  <div className="bd-callout bd-callout-info">
    <p><strong>Heads up!</strong> Dropdowns are positioned thanks to Popper.js (except when they are contained in a navbar).</p>
  </div>
  <div className="bd-example">
    <div className="btn-group">
      <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Right-aligned menu
      </button>
      <div className="dropdown-menu dropdown-menu-right">
        <button className="dropdown-item" type="button">Action</button>
        <button className="dropdown-item" type="button">Another action</button>
        <button className="dropdown-item" type="button">Something else here</button>
      </div>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"btn-group"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary dropdown-toggle"</span> <span className="na">data-toggle=</span><span className="s">"dropdown"</span> <span className="na">aria-haspopup=</span><span className="s">"true"</span> <span className="na">aria-expanded=</span><span className="s">"false"</span><span className="nt">&gt;</span>{"\n"}{"    "}Right-aligned menu{"\n"}{"  "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-menu dropdown-menu-right"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">type=</span><span className="s">"button"</span><span className="nt">&gt;</span>Action<span className="nt">&lt;/button&gt;</span>{"\n"}{"    "}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">type=</span><span className="s">"button"</span><span className="nt">&gt;</span>Another action<span className="nt">&lt;/button&gt;</span>{"\n"}{"    "}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">type=</span><span className="s">"button"</span><span className="nt">&gt;</span>Something else here<span className="nt">&lt;/button&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <h3 id="responsive-alignment"><span className="bd-content-title">Responsive alignment</span></h3>
  <p>If you want to use responsive alignment, disable dynamic positioning by adding the <code className="highlighter-rouge">data-display="static"</code> attribute and use the responsive variation classes.</p>
  <p>To align <strong>right</strong> the dropdown menu with the given breakpoint or larger, add <code className="highlighter-rouge">.dropdown-menu{'{'}-sm|-md|-lg|-xl{'}'}-right</code>.</p>
  <div className="bd-example">
    <div className="btn-group">
      <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
        Left-aligned but right aligned when large screen
      </button>
      <div className="dropdown-menu dropdown-menu-lg-right">
        <button className="dropdown-item" type="button">Action</button>
        <button className="dropdown-item" type="button">Another action</button>
        <button className="dropdown-item" type="button">Something else here</button>
      </div>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"btn-group"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary dropdown-toggle"</span> <span className="na">data-toggle=</span><span className="s">"dropdown"</span> <span className="na">data-display=</span><span className="s">"static"</span> <span className="na">aria-haspopup=</span><span className="s">"true"</span> <span className="na">aria-expanded=</span><span className="s">"false"</span><span className="nt">&gt;</span>{"\n"}{"    "}Left-aligned but right aligned when large screen{"\n"}{"  "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-menu dropdown-menu-lg-right"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">type=</span><span className="s">"button"</span><span className="nt">&gt;</span>Action<span className="nt">&lt;/button&gt;</span>{"\n"}{"    "}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">type=</span><span className="s">"button"</span><span className="nt">&gt;</span>Another action<span className="nt">&lt;/button&gt;</span>{"\n"}{"    "}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">type=</span><span className="s">"button"</span><span className="nt">&gt;</span>Something else here<span className="nt">&lt;/button&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <p>To align <strong>left</strong> the dropdown menu with the given breakpoint or larger, add <code className="highlighter-rouge">.dropdown-menu-right</code> and <code className="highlighter-rouge">.dropdown-menu{'{'}-sm|-md|-lg|-xl{'}'}-left</code>.</p>
  <div className="bd-example">
    <div className="btn-group">
      <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
        Right-aligned but left aligned when large screen
      </button>
      <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-left">
        <button className="dropdown-item" type="button">Action</button>
        <button className="dropdown-item" type="button">Another action</button>
        <button className="dropdown-item" type="button">Something else here</button>
      </div>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"btn-group"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary dropdown-toggle"</span> <span className="na">data-toggle=</span><span className="s">"dropdown"</span> <span className="na">data-display=</span><span className="s">"static"</span> <span className="na">aria-haspopup=</span><span className="s">"true"</span> <span className="na">aria-expanded=</span><span className="s">"false"</span><span className="nt">&gt;</span>{"\n"}{"    "}Right-aligned but left aligned when large screen{"\n"}{"  "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-menu dropdown-menu-right dropdown-menu-lg-left"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">type=</span><span className="s">"button"</span><span className="nt">&gt;</span>Action<span className="nt">&lt;/button&gt;</span>{"\n"}{"    "}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">type=</span><span className="s">"button"</span><span className="nt">&gt;</span>Another action<span className="nt">&lt;/button&gt;</span>{"\n"}{"    "}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">type=</span><span className="s">"button"</span><span className="nt">&gt;</span>Something else here<span className="nt">&lt;/button&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <p>Note that you don’t need to add a <code className="highlighter-rouge">data-display="static"</code> attribute to dropdown buttons in navbars, since Popper.js isn’t used in navbars.</p>
  <h2 id="menu-content"><span className="bd-content-title">Menu content</span></h2>
  <h3 id="headers"><span className="bd-content-title">Headers</span></h3>
  <p>Add a header to label sections of actions in any dropdown menu.</p>
  <div className="bd-example">
    <div className="dropdown-menu">
      <h6 className="dropdown-header">Dropdown header</h6>
      <a className="dropdown-item" href="#">Action</a>
      <a className="dropdown-item" href="#">Another action</a>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-menu"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;h6</span> <span className="na">class=</span><span className="s">"dropdown-header"</span><span className="nt">&gt;</span>Dropdown header<span className="nt">&lt;/h6&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Action<span className="nt">&lt;/a&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Another action<span className="nt">&lt;/a&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <h3 id="dividers"><span className="bd-content-title">Dividers</span></h3>
  <p>Separate groups of related menu items with a divider.</p>
  <div className="bd-example">
    <div className="dropdown-menu">
      <a className="dropdown-item" href="#">Action</a>
      <a className="dropdown-item" href="#">Another action</a>
      <a className="dropdown-item" href="#">Something else here</a>
      <div className="dropdown-divider" />
      <a className="dropdown-item" href="#">Separated link</a>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-menu"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Action<span className="nt">&lt;/a&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Another action<span className="nt">&lt;/a&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Something else here<span className="nt">&lt;/a&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-divider"</span><span className="nt">&gt;&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Separated link<span className="nt">&lt;/a&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <h3 id="text"><span className="bd-content-title">Text</span></h3>
  <p>Place any freeform text within a dropdown menu with text and use <a href="/docs/4.2/utilities/spacing/">spacing utilities</a>. Note that you’ll likely need additional sizing styles to constrain the menu width.</p>
  <div className="bd-example">
    <div className="dropdown-menu p-4 text-muted" style={{maxWidth: 200}}>
      <p>
        Some example text that's free-flowing within the dropdown menu.
      </p>
      <p className="mb-0">
        And this is more example text.
      </p>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-menu p-4 text-muted"</span> <span className="na">style=</span><span className="s">"max-width: 200px;"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;p&gt;</span>{"\n"}{"    "}Some example text that's free-flowing within the dropdown menu.{"\n"}{"  "}<span className="nt">&lt;/p&gt;</span>{"\n"}{"  "}<span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"mb-0"</span><span className="nt">&gt;</span>{"\n"}{"    "}And this is more example text.{"\n"}{"  "}<span className="nt">&lt;/p&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <h3 id="forms"><span className="bd-content-title">Forms</span></h3>
  <p>Put a form within a dropdown menu, or make it into a dropdown menu, and use <a href="/docs/4.2/utilities/spacing/">margin or padding utilities</a> to give it the negative space you require.</p>
  <div className="bd-example">
    <div className="dropdown-menu">
      <form className="px-4 py-3">
        <div className="form-group">
          <label htmlFor="exampleDropdownFormEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" autoComplete="off" style={{backgroundImage: 'url("data:image/png', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundSize: '16px 18px', backgroundPosition: '98% 50%'}} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleDropdownFormPassword1">Password</label>
          <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" autoComplete="off" style={{backgroundImage: 'url("data:image/png', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundSize: '16px 18px', backgroundPosition: '98% 50%'}} />
        </div>
        <div className="form-group">
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="dropdownCheck" />
            <label className="form-check-label" htmlFor="dropdownCheck">
              Remember me
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
      <div className="dropdown-divider" />
      <a className="dropdown-item" href="#">New around here? Sign up</a>
      <a className="dropdown-item" href="#">Forgot password?</a>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-menu"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;form</span> <span className="na">class=</span><span className="s">"px-4 py-3"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-group"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;label</span> <span className="na">for=</span><span className="s">"exampleDropdownFormEmail1"</span><span className="nt">&gt;</span>Email address<span className="nt">&lt;/label&gt;</span>{"\n"}{"      "}<span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"email"</span> <span className="na">class=</span><span className="s">"form-control"</span> <span className="na">id=</span><span className="s">"exampleDropdownFormEmail1"</span> <span className="na">placeholder=</span><span className="s">"email@example.com"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-group"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;label</span> <span className="na">for=</span><span className="s">"exampleDropdownFormPassword1"</span><span className="nt">&gt;</span>Password<span className="nt">&lt;/label&gt;</span>{"\n"}{"      "}<span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"password"</span> <span className="na">class=</span><span className="s">"form-control"</span> <span className="na">id=</span><span className="s">"exampleDropdownFormPassword1"</span> <span className="na">placeholder=</span><span className="s">"Password"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-group"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-check"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"checkbox"</span> <span className="na">class=</span><span className="s">"form-check-input"</span> <span className="na">id=</span><span className="s">"dropdownCheck"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;label</span> <span className="na">class=</span><span className="s">"form-check-label"</span> <span className="na">for=</span><span className="s">"dropdownCheck"</span><span className="nt">&gt;</span>{"\n"}{"          "}Remember me{"\n"}{"        "}<span className="nt">&lt;/label&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"submit"</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span><span className="nt">&gt;</span>Sign in<span className="nt">&lt;/button&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/form&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-divider"</span><span className="nt">&gt;&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>New around here? Sign up<span className="nt">&lt;/a&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Forgot password?<span className="nt">&lt;/a&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <div className="bd-example">
    <form className="dropdown-menu p-4">
      <div className="form-group">
        <label htmlFor="exampleDropdownFormEmail2">Email address</label>
        <input type="email" className="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com" autoComplete="off" style={{backgroundImage: 'url("data:image/png', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundSize: '16px 18px', backgroundPosition: '98% 50%'}} />
      </div>
      <div className="form-group">
        <label htmlFor="exampleDropdownFormPassword2">Password</label>
        <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="Password" autoComplete="off" style={{backgroundImage: 'url("data:image/png', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundSize: '16px 18px', backgroundPosition: '98% 50%'}} />
      </div>
      <div className="form-group">
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="dropdownCheck2" />
          <label className="form-check-label" htmlFor="dropdownCheck2">
            Remember me
          </label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Sign in</button>
    </form>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;form</span> <span className="na">class=</span><span className="s">"dropdown-menu p-4"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-group"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;label</span> <span className="na">for=</span><span className="s">"exampleDropdownFormEmail2"</span><span className="nt">&gt;</span>Email address<span className="nt">&lt;/label&gt;</span>{"\n"}{"    "}<span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"email"</span> <span className="na">class=</span><span className="s">"form-control"</span> <span className="na">id=</span><span className="s">"exampleDropdownFormEmail2"</span> <span className="na">placeholder=</span><span className="s">"email@example.com"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-group"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;label</span> <span className="na">for=</span><span className="s">"exampleDropdownFormPassword2"</span><span className="nt">&gt;</span>Password<span className="nt">&lt;/label&gt;</span>{"\n"}{"    "}<span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"password"</span> <span className="na">class=</span><span className="s">"form-control"</span> <span className="na">id=</span><span className="s">"exampleDropdownFormPassword2"</span> <span className="na">placeholder=</span><span className="s">"Password"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-group"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-check"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"checkbox"</span> <span className="na">class=</span><span className="s">"form-check-input"</span> <span className="na">id=</span><span className="s">"dropdownCheck2"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;label</span> <span className="na">class=</span><span className="s">"form-check-label"</span> <span className="na">for=</span><span className="s">"dropdownCheck2"</span><span className="nt">&gt;</span>{"\n"}{"        "}Remember me{"\n"}{"      "}<span className="nt">&lt;/label&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"submit"</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span><span className="nt">&gt;</span>Sign in<span className="nt">&lt;/button&gt;</span>{"\n"}<span className="nt">&lt;/form&gt;</span></code></pre></figure>
  <h2 id="dropdown-options"><span className="bd-content-title">Dropdown options</span></h2>
  <p>Use <code className="highlighter-rouge">data-offset</code> or <code className="highlighter-rouge">data-reference</code> to change the location of the dropdown.</p>
  <div className="bd-example">
    <div className="d-flex">
      <div className="dropdown mr-1">
        <button type="button" className="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
          Offset
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </div>
      <div className="btn-group">
        <button type="button" className="btn btn-secondary">Reference</button>
        <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-reference="parent">
          <span className="sr-only">Toggle Dropdown</span>
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuReference">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#">Separated link</a>
        </div>
      </div>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"d-flex"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown mr-1"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary dropdown-toggle"</span> <span className="na">id=</span><span className="s">"dropdownMenuOffset"</span> <span className="na">data-toggle=</span><span className="s">"dropdown"</span> <span className="na">aria-haspopup=</span><span className="s">"true"</span> <span className="na">aria-expanded=</span><span className="s">"false"</span> <span className="na">data-offset=</span><span className="s">"10,20"</span><span className="nt">&gt;</span>{"\n"}{"      "}Offset{"\n"}{"    "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-menu"</span> <span className="na">aria-labelledby=</span><span className="s">"dropdownMenuOffset"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Action<span className="nt">&lt;/a&gt;</span>{"\n"}{"      "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Another action<span className="nt">&lt;/a&gt;</span>{"\n"}{"      "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Something else here<span className="nt">&lt;/a&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"btn-group"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span><span className="nt">&gt;</span>Reference<span className="nt">&lt;/button&gt;</span>{"\n"}{"    "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary dropdown-toggle dropdown-toggle-split"</span> <span className="na">id=</span><span className="s">"dropdownMenuReference"</span> <span className="na">data-toggle=</span><span className="s">"dropdown"</span> <span className="na">aria-haspopup=</span><span className="s">"true"</span> <span className="na">aria-expanded=</span><span className="s">"false"</span> <span className="na">data-reference=</span><span className="s">"parent"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>Toggle Dropdown<span className="nt">&lt;/span&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-menu"</span> <span className="na">aria-labelledby=</span><span className="s">"dropdownMenuReference"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Action<span className="nt">&lt;/a&gt;</span>{"\n"}{"      "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Another action<span className="nt">&lt;/a&gt;</span>{"\n"}{"      "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Something else here<span className="nt">&lt;/a&gt;</span>{"\n"}{"      "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-divider"</span><span className="nt">&gt;&lt;/div&gt;</span>{"\n"}{"      "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Separated link<span className="nt">&lt;/a&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <h2 id="usage"><span className="bd-content-title">Usage</span></h2>
  <p>Via data attributes or JavaScript, the dropdown plugin toggles hidden content (dropdown menus) by toggling the <code className="highlighter-rouge">.show</code> class on the parent list item. The <code className="highlighter-rouge">data-toggle="dropdown"</code> attribute is relied on for closing dropdown menus at an application level, so it’s a good idea to always use it.</p>
  <div className="bd-callout bd-callout-info">
    <p>On touch-enabled devices, opening a dropdown adds empty (<code className="highlighter-rouge">$.noop</code>) <code className="highlighter-rouge">mouseover</code> handlers to the immediate children of the <code className="highlighter-rouge">&lt;body&gt;</code> element. This admittedly ugly hack is necessary to work around a <a href="https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html">quirk in iOS’ event delegation</a>, which would otherwise prevent a tap anywhere outside of the dropdown from triggering the code that closes the dropdown. Once the dropdown is closed, these additional empty <code className="highlighter-rouge">mouseover</code> handlers are removed.</p>
  </div>
  <h3 id="via-data-attributes"><span className="bd-content-title">Via data attributes</span></h3>
  <p>Add <code className="highlighter-rouge">data-toggle="dropdown"</code> to a link or button to toggle a dropdown.</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;button</span> <span className="na">id=</span><span className="s">"dLabel"</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">data-toggle=</span><span className="s">"dropdown"</span> <span className="na">aria-haspopup=</span><span className="s">"true"</span> <span className="na">aria-expanded=</span><span className="s">"false"</span><span className="nt">&gt;</span>{"\n"}{"    "}Dropdown trigger{"\n"}{"  "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-menu"</span> <span className="na">aria-labelledby=</span><span className="s">"dLabel"</span><span className="nt">&gt;</span>{"\n"}{"    "}...{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <h3 id="via-javascript"><span className="bd-content-title">Via JavaScript</span></h3>
  <p>Call the dropdowns via JavaScript:</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'.dropdown-toggle'</span><span className="p">).</span><span className="nx">dropdown</span><span className="p">()</span></code></pre></figure>
  <div className="bd-callout bd-callout-info">
    <h5 id="data-toggledropdown-still-required"><code className="highlighter-rouge">data-toggle="dropdown"</code> still required</h5>
    <p>Regardless of whether you call your dropdown via JavaScript or instead use the data-api, <code className="highlighter-rouge">data-toggle="dropdown"</code> is always required to be present on the dropdown’s trigger element.</p>
  </div>
  <h3 id="options"><span className="bd-content-title">Options</span></h3>
  <p>Options can be passed via data attributes or JavaScript. For data attributes, append the option name to <code className="highlighter-rouge">data-</code>, as in <code className="highlighter-rouge">data-offset=""</code>.</p>
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
        <td>offset</td>
        <td>number | string | function</td>
        <td>0</td>
        <td>Offset of the dropdown relative to its target. For more information refer to Popper.js's <a href="https://popper.js.org/popper-documentation.html#modifiers..offset.offset">offset docs</a>.</td>
      </tr>
      <tr>
        <td>flip</td>
        <td>boolean</td>
        <td>true</td>
        <td>Allow Dropdown to flip in case of an overlapping on the reference element. For more information refer to Popper.js's <a href="https://popper.js.org/popper-documentation.html#modifiers..flip.enabled">flip docs</a>.</td>
      </tr>
      <tr>
        <td>boundary</td>
        <td>string | element</td>
        <td>'scrollParent'</td>
        <td>Overflow constraint boundary of the dropdown menu. Accepts the values of <code>'viewport'</code>, <code>'window'</code>, <code>'scrollParent'</code>, or an HTMLElement reference (JavaScript only). For more information refer to Popper.js's <a href="https://popper.js.org/popper-documentation.html#modifiers..preventOverflow.boundariesElement">preventOverflow docs</a>.</td>
      </tr>
      <tr>
        <td>reference</td>
        <td>string | element</td>
        <td>'toggle'</td>
        <td>Reference element of the dropdown menu. Accepts the values of <code>'toggle'</code>, <code>'parent'</code>, or an HTMLElement reference. For more information refer to Popper.js's <a href="https://popper.js.org/popper-documentation.html#referenceObject">referenceObject docs</a>.</td>
      </tr>
      <tr>
        <td>display</td>
        <td>string</td>
        <td>'dynamic'</td>
        <td>By default, we use Popper.js for dynamic positioning. Disable this with <code>static</code>.</td>
      </tr>
    </tbody>
  </table>
  <p>Note when <code className="highlighter-rouge">boundary</code> is set to any value other than <code className="highlighter-rouge">'scrollParent'</code>, the style <code className="highlighter-rouge">position: static</code> is applied to the <code className="highlighter-rouge">.dropdown</code> container.</p>
  <h3 id="methods"><span className="bd-content-title">Methods</span></h3>
  <table>
    <thead>
      <tr>
        <th>Method</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code className="highlighter-rouge">$().dropdown('toggle')</code></td>
        <td>Toggles the dropdown menu of a given navbar or tabbed navigation.</td>
      </tr>
      <tr>
        <td><code className="highlighter-rouge">$().dropdown('show')</code></td>
        <td>Shows the dropdown menu of a given navbar or tabbed navigation.</td>
      </tr>
      <tr>
        <td><code className="highlighter-rouge">$().dropdown('hide')</code></td>
        <td>Hides the dropdown menu of a given navbar or tabbed navigation.</td>
      </tr>
      <tr>
        <td><code className="highlighter-rouge">$().dropdown('update')</code></td>
        <td>Updates the position of an element’s dropdown.</td>
      </tr>
      <tr>
        <td><code className="highlighter-rouge">$().dropdown('dispose')</code></td>
        <td>Destroys an element’s dropdown.</td>
      </tr>
    </tbody>
  </table>
  <h3 id="events"><span className="bd-content-title">Events</span></h3>
  <p>All dropdown events are fired at the <code className="highlighter-rouge">.dropdown-menu</code>’s parent element and have a <code className="highlighter-rouge">relatedTarget</code> property, whose value is the toggling anchor element.
    <code className="highlighter-rouge">hide.bs.dropdown</code> and <code className="highlighter-rouge">hidden.bs.dropdown</code> events have a <code className="highlighter-rouge">clickEvent</code> property (only when the original event type is <code className="highlighter-rouge">click</code>) that contains an Event Object for the click event.</p>
  <table>
    <thead>
      <tr>
        <th>Event</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code className="highlighter-rouge">show.bs.dropdown</code></td>
        <td>This event fires immediately when the show instance method is called.</td>
      </tr>
      <tr>
        <td><code className="highlighter-rouge">shown.bs.dropdown</code></td>
        <td>This event is fired when the dropdown has been made visible to the user (will wait for CSS transitions, to complete).</td>
      </tr>
      <tr>
        <td><code className="highlighter-rouge">hide.bs.dropdown</code></td>
        <td>This event is fired immediately when the hide instance method has been called.</td>
      </tr>
      <tr>
        <td><code className="highlighter-rouge">hidden.bs.dropdown</code></td>
        <td>This event is fired when the dropdown has finished being hidden from the user (will wait for CSS transitions, to complete).</td>
      </tr>
    </tbody>
  </table>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'#myDropdown'</span><span className="p">).</span><span className="nx">on</span><span className="p">(</span><span className="s1">'show.bs.dropdown'</span><span className="p">,</span> <span className="kd">function</span> <span className="p">()</span> <span className="p">{"{"}</span>{"\n"}{"  "}<span className="c1">// do something…</span>{"\n"}<span className="p">{"}"})</span></code></pre></figure>
</main>

    );
  }
}