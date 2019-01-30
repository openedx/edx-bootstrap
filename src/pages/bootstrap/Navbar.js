import React from 'react';

export default class Navbar extends React.Component {
  render() {
    return (
<main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
  <h1 className="bd-title" id="content">Navbar</h1>
  <p className="bd-lead">Documentation and examples for Bootstrap’s powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin.</p>
  
  <h2 id="how-it-works"><span className="bd-content-title">How it works</span></h2>
  <p>Here’s what you need to know before getting started with the navbar:</p>
  <ul>
    <li>Navbars require a wrapping <code className="highlighter-rouge">.navbar</code> with <code className="highlighter-rouge">.navbar-expand{'{'}-sm|-md|-lg|-xl{'}'}</code> for responsive collapsing and <a href="#color-schemes">color scheme</a> classes.</li>
    <li>Navbars and their contents are fluid by default. Use <a href="#containers">optional containers</a> to limit their horizontal width.</li>
    <li>Use our <a href="/docs/4.2/utilities/spacing/">spacing</a> and <a href="/docs/4.2/utilities/flex/">flex</a> utility classes for controlling spacing and alignment within navbars.</li>
    <li>Navbars are responsive by default, but you can easily modify them to change that. Responsive behavior depends on our Collapse JavaScript plugin.</li>
    <li>Navbars are hidden by default when printing. Force them to be printed by adding <code className="highlighter-rouge">.d-print</code> to the <code className="highlighter-rouge">.navbar</code>. See the <a href="/docs/4.2/utilities/display/">display</a> utility class.</li>
    <li>Ensure accessibility by using a <code className="highlighter-rouge">&lt;nav&gt;</code> element or, if using a more generic element such as a <code className="highlighter-rouge">&lt;div&gt;</code>, add a <code className="highlighter-rouge">role="navigation"</code> to every navbar to explicitly identify it as a landmark region for users of assistive technologies.</li>
  </ul>
  <div className="bd-callout bd-callout-info">
    <p>The animation effect of this component is dependent on the <code className="highlighter-rouge">prefers-reduced-motion</code> media query. See the <a href="/docs/4.2/getting-started/accessibility/#reduced-motion">reduced motion section of our accessibility documentation</a>.</p>
  </div>
  <p>Read on for an example and list of supported sub-components.</p>
  <h2 id="supported-content"><span className="bd-content-title">Supported content</span></h2>
  <p>Navbars come with built-in support for a handful of sub-components. Choose from the following as needed:</p>
  <ul>
    <li><code className="highlighter-rouge">.navbar-brand</code> for your company, product, or project name.</li>
    <li><code className="highlighter-rouge">.navbar-nav</code> for a full-height and lightweight navigation (including support for dropdowns).</li>
    <li><code className="highlighter-rouge">.navbar-toggler</code> for use with our collapse plugin and other <a href="#responsive-behaviors">navigation toggling</a> behaviors.</li>
    <li><code className="highlighter-rouge">.form-inline</code> for any form controls and actions.</li>
    <li><code className="highlighter-rouge">.navbar-text</code> for adding vertically centered strings of text.</li>
    <li><code className="highlighter-rouge">.collapse.navbar-collapse</code> for grouping and hiding navbar contents by a parent breakpoint.</li>
  </ul>
  <p>Here’s an example of all the sub-components included in a responsive light-themed navbar that automatically collapses at the <code className="highlighter-rouge">lg</code> (large) breakpoint.</p>
  <div className="bd-example">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;nav</span> <span className="na">class=</span><span className="s">"navbar navbar-expand-lg navbar-light bg-light"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"navbar-brand"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Navbar<span className="nt">&lt;/a&gt;</span>{"\n"}{"  "}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"navbar-toggler"</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">data-toggle=</span><span className="s">"collapse"</span> <span className="na">data-target=</span><span className="s">"#navbarSupportedContent"</span> <span className="na">aria-controls=</span><span className="s">"navbarSupportedContent"</span> <span className="na">aria-expanded=</span><span className="s">"false"</span> <span className="na">aria-label=</span><span className="s">"Toggle navigation"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"navbar-toggler-icon"</span><span className="nt">&gt;&lt;/span&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"collapse navbar-collapse"</span> <span className="na">id=</span><span className="s">"navbarSupportedContent"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;ul</span> <span className="na">class=</span><span className="s">"navbar-nav mr-auto"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item active"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Home <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>(current)<span className="nt">&lt;/span&gt;&lt;/a&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"      "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Link<span className="nt">&lt;/a&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"      "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item dropdown"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link dropdown-toggle"</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">id=</span><span className="s">"navbarDropdown"</span> <span className="na">role=</span><span className="s">"button"</span> <span className="na">data-toggle=</span><span className="s">"dropdown"</span> <span className="na">aria-haspopup=</span><span className="s">"true"</span> <span className="na">aria-expanded=</span><span className="s">"false"</span><span className="nt">&gt;</span>{"\n"}{"          "}Dropdown{"\n"}{"        "}<span className="nt">&lt;/a&gt;</span>{"\n"}{"        "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-menu"</span> <span className="na">aria-labelledby=</span><span className="s">"navbarDropdown"</span><span className="nt">&gt;</span>{"\n"}{"          "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Action<span className="nt">&lt;/a&gt;</span>{"\n"}{"          "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Another action<span className="nt">&lt;/a&gt;</span>{"\n"}{"          "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-divider"</span><span className="nt">&gt;&lt;/div&gt;</span>{"\n"}{"          "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Something else here<span className="nt">&lt;/a&gt;</span>{"\n"}{"        "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"      "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link disabled"</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">tabindex=</span><span className="s">"-1"</span> <span className="na">aria-disabled=</span><span className="s">"true"</span><span className="nt">&gt;</span>Disabled<span className="nt">&lt;/a&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/ul&gt;</span>{"\n"}{"    "}<span className="nt">&lt;form</span> <span className="na">class=</span><span className="s">"form-inline my-2 my-lg-0"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;input</span> <span className="na">class=</span><span className="s">"form-control mr-sm-2"</span> <span className="na">type=</span><span className="s">"search"</span> <span className="na">placeholder=</span><span className="s">"Search"</span> <span className="na">aria-label=</span><span className="s">"Search"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-outline-success my-2 my-sm-0"</span> <span className="na">type=</span><span className="s">"submit"</span><span className="nt">&gt;</span>Search<span className="nt">&lt;/button&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/form&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/nav&gt;</span></code></pre></figure>
  <p>This example uses <a href="/docs/4.2/utilities/colors/">color</a> (<code className="highlighter-rouge">bg-light</code>) and <a href="/docs/4.2/utilities/spacing/">spacing</a> (<code className="highlighter-rouge">my-2</code>, <code className="highlighter-rouge">my-lg-0</code>, <code className="highlighter-rouge">mr-sm-0</code>, <code className="highlighter-rouge">my-sm-0</code>) utility classes.</p>
  <h3 id="brand"><span className="bd-content-title">Brand</span></h3>
  <p>The <code className="highlighter-rouge">.navbar-brand</code> can be applied to most elements, but an anchor works best as some elements might require utility classes or custom styles.</p>
  <div className="bd-example">
    {/* As a link */}
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
    </nav>
    {/* As a heading */}
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">Navbar</span>
    </nav>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="c">&lt;!-- As a link --&gt;</span>{"\n"}<span className="nt">&lt;nav</span> <span className="na">class=</span><span className="s">"navbar navbar-light bg-light"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"navbar-brand"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Navbar<span className="nt">&lt;/a&gt;</span>{"\n"}<span className="nt">&lt;/nav&gt;</span>{"\n"}{"\n"}<span className="c">&lt;!-- As a heading --&gt;</span>{"\n"}<span className="nt">&lt;nav</span> <span className="na">class=</span><span className="s">"navbar navbar-light bg-light"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"navbar-brand mb-0 h1"</span><span className="nt">&gt;</span>Navbar<span className="nt">&lt;/span&gt;</span>{"\n"}<span className="nt">&lt;/nav&gt;</span></code></pre></figure>
  <p>Adding images to the <code className="highlighter-rouge">.navbar-brand</code> will likely always require custom styles or utilities to properly size. Here are some examples to demonstrate.</p>
  <div className="bd-example">
    {/* Just an image */}
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src="/docs/4.2/assets/brand/bootstrap-solid.svg" width={30} height={30} alt />
      </a>
    </nav>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="c">&lt;!-- Just an image --&gt;</span>{"\n"}<span className="nt">&lt;nav</span> <span className="na">class=</span><span className="s">"navbar navbar-light bg-light"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"navbar-brand"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;img</span> <span className="na">src=</span><span className="s">"/docs/4.2/assets/brand/bootstrap-solid.svg"</span> <span className="na">width=</span><span className="s">"30"</span> <span className="na">height=</span><span className="s">"30"</span> <span className="na">alt=</span><span className="s">""</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/a&gt;</span>{"\n"}<span className="nt">&lt;/nav&gt;</span></code></pre></figure>
  <div className="bd-example">
    {/* Image and text */}
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src="/docs/4.2/assets/brand/bootstrap-solid.svg" width={30} height={30} className="d-inline-block align-top" alt />
        Bootstrap
      </a>
    </nav>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="c">&lt;!-- Image and text --&gt;</span>{"\n"}<span className="nt">&lt;nav</span> <span className="na">class=</span><span className="s">"navbar navbar-light bg-light"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"navbar-brand"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;img</span> <span className="na">src=</span><span className="s">"/docs/4.2/assets/brand/bootstrap-solid.svg"</span> <span className="na">width=</span><span className="s">"30"</span> <span className="na">height=</span><span className="s">"30"</span> <span className="na">class=</span><span className="s">"d-inline-block align-top"</span> <span className="na">alt=</span><span className="s">""</span><span className="nt">&gt;</span>{"\n"}{"    "}Bootstrap{"\n"}{"  "}<span className="nt">&lt;/a&gt;</span>{"\n"}<span className="nt">&lt;/nav&gt;</span></code></pre></figure>
  <h3 id="nav"><span className="bd-content-title">Nav</span></h3>
  <p>Navbar navigation links build on our <code className="highlighter-rouge">.nav</code> options with their own modifier class and require the use of <a href="#toggler">toggler classes</a> for proper responsive styling. <strong>Navigation in navbars will also grow to occupy as much horizontal space as possible</strong> to keep your navbar contents securely aligned.</p>
  <p>Active states—with <code className="highlighter-rouge">.active</code>—to indicate the current page can be applied directly to <code className="highlighter-rouge">.nav-link</code>s or their immediate parent <code className="highlighter-rouge">.nav-item</code>s.</p>
  <div className="bd-example">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;nav</span> <span className="na">class=</span><span className="s">"navbar navbar-expand-lg navbar-light bg-light"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"navbar-brand"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Navbar<span className="nt">&lt;/a&gt;</span>{"\n"}{"  "}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"navbar-toggler"</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">data-toggle=</span><span className="s">"collapse"</span> <span className="na">data-target=</span><span className="s">"#navbarNav"</span> <span className="na">aria-controls=</span><span className="s">"navbarNav"</span> <span className="na">aria-expanded=</span><span className="s">"false"</span> <span className="na">aria-label=</span><span className="s">"Toggle navigation"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"navbar-toggler-icon"</span><span className="nt">&gt;&lt;/span&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"collapse navbar-collapse"</span> <span className="na">id=</span><span className="s">"navbarNav"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;ul</span> <span className="na">class=</span><span className="s">"navbar-nav"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item active"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Home <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>(current)<span className="nt">&lt;/span&gt;&lt;/a&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"      "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Features<span className="nt">&lt;/a&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"      "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Pricing<span className="nt">&lt;/a&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"      "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link disabled"</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">tabindex=</span><span className="s">"-1"</span> <span className="na">aria-disabled=</span><span className="s">"true"</span><span className="nt">&gt;</span>Disabled<span className="nt">&lt;/a&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/ul&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/nav&gt;</span></code></pre></figure>
  <p>And because we use classes for our navs, you can avoid the list-based approach entirely if you like.</p>
  <div className="bd-example">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
          <a className="nav-item nav-link" href="#">Features</a>
          <a className="nav-item nav-link" href="#">Pricing</a>
          <a className="nav-item nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
        </div>
      </div>
    </nav>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;nav</span> <span className="na">class=</span><span className="s">"navbar navbar-expand-lg navbar-light bg-light"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"navbar-brand"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Navbar<span className="nt">&lt;/a&gt;</span>{"\n"}{"  "}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"navbar-toggler"</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">data-toggle=</span><span className="s">"collapse"</span> <span className="na">data-target=</span><span className="s">"#navbarNavAltMarkup"</span> <span className="na">aria-controls=</span><span className="s">"navbarNavAltMarkup"</span> <span className="na">aria-expanded=</span><span className="s">"false"</span> <span className="na">aria-label=</span><span className="s">"Toggle navigation"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"navbar-toggler-icon"</span><span className="nt">&gt;&lt;/span&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"collapse navbar-collapse"</span> <span className="na">id=</span><span className="s">"navbarNavAltMarkup"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"navbar-nav"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-item nav-link active"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Home <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>(current)<span className="nt">&lt;/span&gt;&lt;/a&gt;</span>{"\n"}{"      "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-item nav-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Features<span className="nt">&lt;/a&gt;</span>{"\n"}{"      "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-item nav-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Pricing<span className="nt">&lt;/a&gt;</span>{"\n"}{"      "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-item nav-link disabled"</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">tabindex=</span><span className="s">"-1"</span> <span className="na">aria-disabled=</span><span className="s">"true"</span><span className="nt">&gt;</span>Disabled<span className="nt">&lt;/a&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/nav&gt;</span></code></pre></figure>
  <p>You may also utilize dropdowns in your navbar nav. Dropdown menus require a wrapping element for positioning, so be sure to use separate and nested elements for <code className="highlighter-rouge">.nav-item</code> and <code className="highlighter-rouge">.nav-link</code> as shown below.</p>
  <div className="bd-example">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown link
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;nav</span> <span className="na">class=</span><span className="s">"navbar navbar-expand-lg navbar-light bg-light"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"navbar-brand"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Navbar<span className="nt">&lt;/a&gt;</span>{"\n"}{"  "}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"navbar-toggler"</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">data-toggle=</span><span className="s">"collapse"</span> <span className="na">data-target=</span><span className="s">"#navbarNavDropdown"</span> <span className="na">aria-controls=</span><span className="s">"navbarNavDropdown"</span> <span className="na">aria-expanded=</span><span className="s">"false"</span> <span className="na">aria-label=</span><span className="s">"Toggle navigation"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"navbar-toggler-icon"</span><span className="nt">&gt;&lt;/span&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"collapse navbar-collapse"</span> <span className="na">id=</span><span className="s">"navbarNavDropdown"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;ul</span> <span className="na">class=</span><span className="s">"navbar-nav"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item active"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Home <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>(current)<span className="nt">&lt;/span&gt;&lt;/a&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"      "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Features<span className="nt">&lt;/a&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"      "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Pricing<span className="nt">&lt;/a&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"      "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item dropdown"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link dropdown-toggle"</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">id=</span><span className="s">"navbarDropdownMenuLink"</span> <span className="na">role=</span><span className="s">"button"</span> <span className="na">data-toggle=</span><span className="s">"dropdown"</span> <span className="na">aria-haspopup=</span><span className="s">"true"</span> <span className="na">aria-expanded=</span><span className="s">"false"</span><span className="nt">&gt;</span>{"\n"}{"          "}Dropdown link{"\n"}{"        "}<span className="nt">&lt;/a&gt;</span>{"\n"}{"        "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-menu"</span> <span className="na">aria-labelledby=</span><span className="s">"navbarDropdownMenuLink"</span><span className="nt">&gt;</span>{"\n"}{"          "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Action<span className="nt">&lt;/a&gt;</span>{"\n"}{"          "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Another action<span className="nt">&lt;/a&gt;</span>{"\n"}{"          "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Something else here<span className="nt">&lt;/a&gt;</span>{"\n"}{"        "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/ul&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/nav&gt;</span></code></pre></figure>
  <h3 id="forms"><span className="bd-content-title">Forms</span></h3>
  <p>Place various form controls and components within a navbar with <code className="highlighter-rouge">.form-inline</code>.</p>
  <div className="bd-example">
    <nav className="navbar navbar-light bg-light">
      <form className="form-inline">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </nav>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;nav</span> <span className="na">class=</span><span className="s">"navbar navbar-light bg-light"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;form</span> <span className="na">class=</span><span className="s">"form-inline"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;input</span> <span className="na">class=</span><span className="s">"form-control mr-sm-2"</span> <span className="na">type=</span><span className="s">"search"</span> <span className="na">placeholder=</span><span className="s">"Search"</span> <span className="na">aria-label=</span><span className="s">"Search"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-outline-success my-2 my-sm-0"</span> <span className="na">type=</span><span className="s">"submit"</span><span className="nt">&gt;</span>Search<span className="nt">&lt;/button&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/form&gt;</span>{"\n"}<span className="nt">&lt;/nav&gt;</span></code></pre></figure>
  <p>Immediate children elements in <code className="highlighter-rouge">.navbar</code> use flex layout and will default to <code className="highlighter-rouge">justify-content: between</code>. Use additional <a href="/docs/4.2/utilities/flex/">flex utilities</a> as needed to adjust this behavior.</p>
  <div className="bd-example">
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">Navbar</a>
      <form className="form-inline">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </nav>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;nav</span> <span className="na">class=</span><span className="s">"navbar navbar-light bg-light"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"navbar-brand"</span><span className="nt">&gt;</span>Navbar<span className="nt">&lt;/a&gt;</span>{"\n"}{"  "}<span className="nt">&lt;form</span> <span className="na">class=</span><span className="s">"form-inline"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;input</span> <span className="na">class=</span><span className="s">"form-control mr-sm-2"</span> <span className="na">type=</span><span className="s">"search"</span> <span className="na">placeholder=</span><span className="s">"Search"</span> <span className="na">aria-label=</span><span className="s">"Search"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-outline-success my-2 my-sm-0"</span> <span className="na">type=</span><span className="s">"submit"</span><span className="nt">&gt;</span>Search<span className="nt">&lt;/button&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/form&gt;</span>{"\n"}<span className="nt">&lt;/nav&gt;</span></code></pre></figure>
  <p>Input groups work, too:</p>
  <div className="bd-example">
    <nav className="navbar navbar-light bg-light">
      <form className="form-inline">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">@</span>
          </div>
          <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
      </form>
    </nav>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;nav</span> <span className="na">class=</span><span className="s">"navbar navbar-light bg-light"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;form</span> <span className="na">class=</span><span className="s">"form-inline"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"input-group"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"input-group-prepend"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"input-group-text"</span> <span className="na">id=</span><span className="s">"basic-addon1"</span><span className="nt">&gt;</span>@<span className="nt">&lt;/span&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"      "}<span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"text"</span> <span className="na">class=</span><span className="s">"form-control"</span> <span className="na">placeholder=</span><span className="s">"Username"</span> <span className="na">aria-label=</span><span className="s">"Username"</span> <span className="na">aria-describedby=</span><span className="s">"basic-addon1"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/form&gt;</span>{"\n"}<span className="nt">&lt;/nav&gt;</span></code></pre></figure>
  <p>Various buttons are supported as part of these navbar forms, too. This is also a great reminder that vertical alignment utilities can be used to align different sized elements.</p>
  <div className="bd-example">
    <nav className="navbar navbar-light bg-light">
      <form className="form-inline">
        <button className="btn btn-outline-success" type="button">Main button</button>
        <button className="btn btn-sm btn-outline-secondary" type="button">Smaller button</button>
      </form>
    </nav>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;nav</span> <span className="na">class=</span><span className="s">"navbar navbar-light bg-light"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;form</span> <span className="na">class=</span><span className="s">"form-inline"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-outline-success"</span> <span className="na">type=</span><span className="s">"button"</span><span className="nt">&gt;</span>Main button<span className="nt">&lt;/button&gt;</span>{"\n"}{"    "}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-sm btn-outline-secondary"</span> <span className="na">type=</span><span className="s">"button"</span><span className="nt">&gt;</span>Smaller button<span className="nt">&lt;/button&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/form&gt;</span>{"\n"}<span className="nt">&lt;/nav&gt;</span></code></pre></figure>
  <h3 id="text"><span className="bd-content-title">Text</span></h3>
  <p>Navbars may contain bits of text with the help of <code className="highlighter-rouge">.navbar-text</code>. This class adjusts vertical alignment and horizontal spacing for strings of text.</p>
  <div className="bd-example">
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-text">
        Navbar text with an inline element
      </span>
    </nav>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;nav</span> <span className="na">class=</span><span className="s">"navbar navbar-light bg-light"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"navbar-text"</span><span className="nt">&gt;</span>{"\n"}{"    "}Navbar text with an inline element{"\n"}{"  "}<span className="nt">&lt;/span&gt;</span>{"\n"}<span className="nt">&lt;/nav&gt;</span></code></pre></figure>
  <p>Mix and match with other components and utilities as needed.</p>
  <div className="bd-example">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar w/ text</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
          </li>
        </ul>
        <span className="navbar-text">
          Navbar text with an inline element
        </span>
      </div>
    </nav>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;nav</span> <span className="na">class=</span><span className="s">"navbar navbar-expand-lg navbar-light bg-light"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"navbar-brand"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Navbar w/ text<span className="nt">&lt;/a&gt;</span>{"\n"}{"  "}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"navbar-toggler"</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">data-toggle=</span><span className="s">"collapse"</span> <span className="na">data-target=</span><span className="s">"#navbarText"</span> <span className="na">aria-controls=</span><span className="s">"navbarText"</span> <span className="na">aria-expanded=</span><span className="s">"false"</span> <span className="na">aria-label=</span><span className="s">"Toggle navigation"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"navbar-toggler-icon"</span><span className="nt">&gt;&lt;/span&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"collapse navbar-collapse"</span> <span className="na">id=</span><span className="s">"navbarText"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;ul</span> <span className="na">class=</span><span className="s">"navbar-nav mr-auto"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item active"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Home <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>(current)<span className="nt">&lt;/span&gt;&lt;/a&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"      "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Features<span className="nt">&lt;/a&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"      "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Pricing<span className="nt">&lt;/a&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/ul&gt;</span>{"\n"}{"    "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"navbar-text"</span><span className="nt">&gt;</span>{"\n"}{"      "}Navbar text with an inline element{"\n"}{"    "}<span className="nt">&lt;/span&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/nav&gt;</span></code></pre></figure>
  <h2 id="color-schemes"><span className="bd-content-title">Color schemes</span></h2>
  <p>Theming the navbar has never been easier thanks to the combination of theming classes and <code className="highlighter-rouge">background-color</code> utilities. Choose from <code className="highlighter-rouge">.navbar-light</code> for use with light background colors, or <code className="highlighter-rouge">.navbar-dark</code> for dark background colors. Then, customize with <code className="highlighter-rouge">.bg-*</code> utilities.</p>
  <div className="bd-example">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
        </ul>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
        </ul>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#e3f2fd'}}>
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarColor03">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
        </ul>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;nav</span> <span className="na">class=</span><span className="s">"navbar navbar-dark bg-dark"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="c">&lt;!-- Navbar content --&gt;</span>{"\n"}<span className="nt">&lt;/nav&gt;</span>{"\n"}{"\n"}<span className="nt">&lt;nav</span> <span className="na">class=</span><span className="s">"navbar navbar-dark bg-primary"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="c">&lt;!-- Navbar content --&gt;</span>{"\n"}<span className="nt">&lt;/nav&gt;</span>{"\n"}{"\n"}<span className="nt">&lt;nav</span> <span className="na">class=</span><span className="s">"navbar navbar-light"</span> <span className="na">style=</span><span className="s">"background-color: #e3f2fd;"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="c">&lt;!-- Navbar content --&gt;</span>{"\n"}<span className="nt">&lt;/nav&gt;</span></code></pre></figure>
  <h2 id="containers"><span className="bd-content-title">Containers</span></h2>
  <p>Although it’s not required, you can wrap a navbar in a <code className="highlighter-rouge">.container</code> to center it on a page or add one within to only center the contents of a <a href="#placement">fixed or static top navbar</a>.</p>
  <div className="bd-example">
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
      </nav>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"container"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;nav</span> <span className="na">class=</span><span className="s">"navbar navbar-expand-lg navbar-light bg-light"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"navbar-brand"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Navbar<span className="nt">&lt;/a&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/nav&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <p>When the container is within your navbar, its horizontal padding is removed at breakpoints lower than your specified <code className="highlighter-rouge">.navbar-expand{'{'}-sm|-md|-lg|-xl{'}'}</code> class. This ensures we’re not doubling up on padding unnecessarily on lower viewports when your navbar is collapsed.</p>
  <div className="bd-example">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">Navbar</a>
      </div>
    </nav>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;nav</span> <span className="na">class=</span><span className="s">"navbar navbar-expand-lg navbar-light bg-light"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"container"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"navbar-brand"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Navbar<span className="nt">&lt;/a&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/nav&gt;</span></code></pre></figure>
  <h2 id="placement"><span className="bd-content-title">Placement</span></h2>
  <p>Use our <a href="/docs/4.2/utilities/position/">position utilities</a> to place navbars in non-static positions. Choose from fixed to the top, fixed to the bottom, or stickied to the top (scrolls with the page until it reaches the top, then stays there). Fixed navbars use <code className="highlighter-rouge">position: fixed</code>, meaning they’re pulled from the normal flow of the DOM and may require custom CSS (e.g., <code className="highlighter-rouge">padding-top</code> on the <code className="highlighter-rouge">&lt;body&gt;</code>) to prevent overlap with other elements.</p>
  <p>Also note that <strong><code className="highlighter-rouge">.sticky-top</code> uses <code className="highlighter-rouge">position: sticky</code>, which <a href="https://caniuse.com/#feat=css-sticky">isn’t fully supported in every browser</a></strong>.</p>
  <div className="bd-example">
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">Default</a>
    </nav>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;nav</span> <span className="na">class=</span><span className="s">"navbar navbar-light bg-light"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"navbar-brand"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Default<span className="nt">&lt;/a&gt;</span>{"\n"}<span className="nt">&lt;/nav&gt;</span></code></pre></figure>
  <div className="bd-example">
    <nav className="navbar fixed-top navbar-light bg-light">
      <a className="navbar-brand" href="#">Fixed top</a>
    </nav>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;nav</span> <span className="na">class=</span><span className="s">"navbar fixed-top navbar-light bg-light"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"navbar-brand"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Fixed top<span className="nt">&lt;/a&gt;</span>{"\n"}<span className="nt">&lt;/nav&gt;</span></code></pre></figure>
  <div className="bd-example">
    <nav className="navbar fixed-bottom navbar-light bg-light">
      <a className="navbar-brand" href="#">Fixed bottom</a>
    </nav>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;nav</span> <span className="na">class=</span><span className="s">"navbar fixed-bottom navbar-light bg-light"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"navbar-brand"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Fixed bottom<span className="nt">&lt;/a&gt;</span>{"\n"}<span className="nt">&lt;/nav&gt;</span></code></pre></figure>
  <div className="bd-example">
    <nav className="navbar sticky-top navbar-light bg-light">
      <a className="navbar-brand" href="#">Sticky top</a>
    </nav>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;nav</span> <span className="na">class=</span><span className="s">"navbar sticky-top navbar-light bg-light"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"navbar-brand"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Sticky top<span className="nt">&lt;/a&gt;</span>{"\n"}<span className="nt">&lt;/nav&gt;</span></code></pre></figure>
  <h2 id="responsive-behaviors"><span className="bd-content-title">Responsive behaviors</span></h2>
  <p>Navbars can utilize <code className="highlighter-rouge">.navbar-toggler</code>, <code className="highlighter-rouge">.navbar-collapse</code>, and <code className="highlighter-rouge">.navbar-expand{'{'}-sm|-md|-lg|-xl{'}'}</code> classes to change when their content collapses behind a button. In combination with other utilities, you can easily choose when to show or hide particular elements.</p>
  <p>For navbars that never collapse, add the <code className="highlighter-rouge">.navbar-expand</code> class on the navbar. For navbars that always collapse, don’t add any <code className="highlighter-rouge">.navbar-expand</code> class.</p>
  <h3 id="toggler"><span className="bd-content-title">Toggler</span></h3>
  <p>Navbar togglers are left-aligned by default, but should they follow a sibling element like a <code className="highlighter-rouge">.navbar-brand</code>, they’ll automatically be aligned to the far right. Reversing your markup will reverse the placement of the toggler. Below are examples of different toggle styles.</p>
  <p>With no <code className="highlighter-rouge">.navbar-brand</code> shown in lowest breakpoint:</p>
  <div className="bd-example">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a className="navbar-brand" href="#">Hidden brand</a>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;nav</span> <span className="na">class=</span><span className="s">"navbar navbar-expand-lg navbar-light bg-light"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"navbar-toggler"</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">data-toggle=</span><span className="s">"collapse"</span> <span className="na">data-target=</span><span className="s">"#navbarTogglerDemo01"</span> <span className="na">aria-controls=</span><span className="s">"navbarTogglerDemo01"</span> <span className="na">aria-expanded=</span><span className="s">"false"</span> <span className="na">aria-label=</span><span className="s">"Toggle navigation"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"navbar-toggler-icon"</span><span className="nt">&gt;&lt;/span&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"collapse navbar-collapse"</span> <span className="na">id=</span><span className="s">"navbarTogglerDemo01"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"navbar-brand"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Hidden brand<span className="nt">&lt;/a&gt;</span>{"\n"}{"    "}<span className="nt">&lt;ul</span> <span className="na">class=</span><span className="s">"navbar-nav mr-auto mt-2 mt-lg-0"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item active"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Home <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>(current)<span className="nt">&lt;/span&gt;&lt;/a&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"      "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Link<span className="nt">&lt;/a&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"      "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link disabled"</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">tabindex=</span><span className="s">"-1"</span> <span className="na">aria-disabled=</span><span className="s">"true"</span><span className="nt">&gt;</span>Disabled<span className="nt">&lt;/a&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/ul&gt;</span>{"\n"}{"    "}<span className="nt">&lt;form</span> <span className="na">class=</span><span className="s">"form-inline my-2 my-lg-0"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;input</span> <span className="na">class=</span><span className="s">"form-control mr-sm-2"</span> <span className="na">type=</span><span className="s">"search"</span> <span className="na">placeholder=</span><span className="s">"Search"</span> <span className="na">aria-label=</span><span className="s">"Search"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-outline-success my-2 my-sm-0"</span> <span className="na">type=</span><span className="s">"submit"</span><span className="nt">&gt;</span>Search<span className="nt">&lt;/button&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/form&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/nav&gt;</span></code></pre></figure>
  <p>With a brand name shown on the left and toggler on the right:</p>
  <div className="bd-example">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;nav</span> <span className="na">class=</span><span className="s">"navbar navbar-expand-lg navbar-light bg-light"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"navbar-brand"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Navbar<span className="nt">&lt;/a&gt;</span>{"\n"}{"  "}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"navbar-toggler"</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">data-toggle=</span><span className="s">"collapse"</span> <span className="na">data-target=</span><span className="s">"#navbarTogglerDemo02"</span> <span className="na">aria-controls=</span><span className="s">"navbarTogglerDemo02"</span> <span className="na">aria-expanded=</span><span className="s">"false"</span> <span className="na">aria-label=</span><span className="s">"Toggle navigation"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"navbar-toggler-icon"</span><span className="nt">&gt;&lt;/span&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"collapse navbar-collapse"</span> <span className="na">id=</span><span className="s">"navbarTogglerDemo02"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;ul</span> <span className="na">class=</span><span className="s">"navbar-nav mr-auto mt-2 mt-lg-0"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item active"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Home <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>(current)<span className="nt">&lt;/span&gt;&lt;/a&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"      "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Link<span className="nt">&lt;/a&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"      "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link disabled"</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">tabindex=</span><span className="s">"-1"</span> <span className="na">aria-disabled=</span><span className="s">"true"</span><span className="nt">&gt;</span>Disabled<span className="nt">&lt;/a&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/ul&gt;</span>{"\n"}{"    "}<span className="nt">&lt;form</span> <span className="na">class=</span><span className="s">"form-inline my-2 my-lg-0"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;input</span> <span className="na">class=</span><span className="s">"form-control mr-sm-2"</span> <span className="na">type=</span><span className="s">"search"</span> <span className="na">placeholder=</span><span className="s">"Search"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-outline-success my-2 my-sm-0"</span> <span className="na">type=</span><span className="s">"submit"</span><span className="nt">&gt;</span>Search<span className="nt">&lt;/button&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/form&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/nav&gt;</span></code></pre></figure>
  <p>With a toggler on the left and brand name on the right:</p>
  <div className="bd-example">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <a className="navbar-brand" href="#">Navbar</a>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;nav</span> <span className="na">class=</span><span className="s">"navbar navbar-expand-lg navbar-light bg-light"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"navbar-toggler"</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">data-toggle=</span><span className="s">"collapse"</span> <span className="na">data-target=</span><span className="s">"#navbarTogglerDemo03"</span> <span className="na">aria-controls=</span><span className="s">"navbarTogglerDemo03"</span> <span className="na">aria-expanded=</span><span className="s">"false"</span> <span className="na">aria-label=</span><span className="s">"Toggle navigation"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"navbar-toggler-icon"</span><span className="nt">&gt;&lt;/span&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"navbar-brand"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Navbar<span className="nt">&lt;/a&gt;</span>{"\n"}{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"collapse navbar-collapse"</span> <span className="na">id=</span><span className="s">"navbarTogglerDemo03"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;ul</span> <span className="na">class=</span><span className="s">"navbar-nav mr-auto mt-2 mt-lg-0"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item active"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Home <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>(current)<span className="nt">&lt;/span&gt;&lt;/a&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"      "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Link<span className="nt">&lt;/a&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"      "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link disabled"</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">tabindex=</span><span className="s">"-1"</span> <span className="na">aria-disabled=</span><span className="s">"true"</span><span className="nt">&gt;</span>Disabled<span className="nt">&lt;/a&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/ul&gt;</span>{"\n"}{"    "}<span className="nt">&lt;form</span> <span className="na">class=</span><span className="s">"form-inline my-2 my-lg-0"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;input</span> <span className="na">class=</span><span className="s">"form-control mr-sm-2"</span> <span className="na">type=</span><span className="s">"search"</span> <span className="na">placeholder=</span><span className="s">"Search"</span> <span className="na">aria-label=</span><span className="s">"Search"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-outline-success my-2 my-sm-0"</span> <span className="na">type=</span><span className="s">"submit"</span><span className="nt">&gt;</span>Search<span className="nt">&lt;/button&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/form&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/nav&gt;</span></code></pre></figure>
  <h3 id="external-content"><span className="bd-content-title">External content</span></h3>
  <p>Sometimes you want to use the collapse plugin to trigger hidden content elsewhere on the page. Because our plugin works on the <code className="highlighter-rouge">id</code> and <code className="highlighter-rouge">data-target</code> matching, that’s easily done!</p>
  <div className="bd-example">
    <div className="pos-f-t">
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-dark p-4">
          <h5 className="text-white h4">Collapsed content</h5>
          <span className="text-muted">Toggleable via the navbar brand.</span>
        </div>
      </div>
      <nav className="navbar navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
      </nav>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"pos-f-t"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"collapse"</span> <span className="na">id=</span><span className="s">"navbarToggleExternalContent"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"bg-dark p-4"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;h5</span> <span className="na">class=</span><span className="s">"text-white h4"</span><span className="nt">&gt;</span>Collapsed content<span className="nt">&lt;/h5&gt;</span>{"\n"}{"      "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"text-muted"</span><span className="nt">&gt;</span>Toggleable via the navbar brand.<span className="nt">&lt;/span&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;nav</span> <span className="na">class=</span><span className="s">"navbar navbar-dark bg-dark"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"navbar-toggler"</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">data-toggle=</span><span className="s">"collapse"</span> <span className="na">data-target=</span><span className="s">"#navbarToggleExternalContent"</span> <span className="na">aria-controls=</span><span className="s">"navbarToggleExternalContent"</span> <span className="na">aria-expanded=</span><span className="s">"false"</span> <span className="na">aria-label=</span><span className="s">"Toggle navigation"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"navbar-toggler-icon"</span><span className="nt">&gt;&lt;/span&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/nav&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
</main>

    );
  }
}