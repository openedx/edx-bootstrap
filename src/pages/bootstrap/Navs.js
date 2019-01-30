import React from 'react';

export default class Navs extends React.Component {
  render() {
    return (
<main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
  <h1 className="bd-title" id="content">Navs</h1>
  <p className="bd-lead">Documentation and examples for how to use Bootstrap’s included navigation components.</p>

  <h2 id="base-nav"><span className="bd-content-title">Base nav</span></h2>
  <p>Navigation available in Bootstrap share general markup and styles, from the base <code className="highlighter-rouge">.nav</code> class to the active and disabled states. Swap modifier classes to switch between each style.</p>
  <p>The base <code className="highlighter-rouge">.nav</code> component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling.</p>
  <div className="bd-callout bd-callout-info">
    <p>The base <code className="highlighter-rouge">.nav</code> component does not include any <code className="highlighter-rouge">.active</code> state. The following examples include the class, mainly to demonstrate that this particular class does not trigger any special styling.</p>
  </div>
  <div className="bd-example">
    <ul className="nav">
      <li className="nav-item">
        <a className="nav-link active" href="#">Active</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;ul</span> <span className="na">class=</span><span className="s">"nav"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link active"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Active<span className="nt">&lt;/a&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"  "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Link<span className="nt">&lt;/a&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"  "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Link<span className="nt">&lt;/a&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"  "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link disabled"</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">tabindex=</span><span className="s">"-1"</span> <span className="na">aria-disabled=</span><span className="s">"true"</span><span className="nt">&gt;</span>Disabled<span className="nt">&lt;/a&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/li&gt;</span>{"\n"}<span className="nt">&lt;/ul&gt;</span></code></pre></figure>
  <p>Classes are used throughout, so your markup can be super flexible. Use <code className="highlighter-rouge">&lt;ul&gt;</code>s like above, <code className="highlighter-rouge">&lt;ol&gt;</code> if the order of your items is important, or roll your own with a <code className="highlighter-rouge">&lt;nav&gt;</code> element. Because the <code className="highlighter-rouge">.nav</code> uses <code className="highlighter-rouge">display: flex</code>, the nav links behave the same as nav items would, but without the extra markup.</p>
  <div className="bd-example">
    <nav className="nav">
      <a className="nav-link active" href="#">Active</a>
      <a className="nav-link" href="#">Link</a>
      <a className="nav-link" href="#">Link</a>
      <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
    </nav>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;nav</span> <span className="na">class=</span><span className="s">"nav"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link active"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Active<span className="nt">&lt;/a&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Link<span className="nt">&lt;/a&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Link<span className="nt">&lt;/a&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link disabled"</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">tabindex=</span><span className="s">"-1"</span> <span className="na">aria-disabled=</span><span className="s">"true"</span><span className="nt">&gt;</span>Disabled<span className="nt">&lt;/a&gt;</span>{"\n"}<span className="nt">&lt;/nav&gt;</span></code></pre></figure>
  <h2 id="available-styles"><span className="bd-content-title">Available styles</span></h2>
  <p>Change the style of <code className="highlighter-rouge">.nav</code>s component with modifiers and utilities. Mix and match as needed, or build your own.</p>
  
  <h3 id="tabs"><span className="bd-content-title">Tabs</span></h3>
  <p>Takes the basic nav from above and adds the <code className="highlighter-rouge">.nav-tabs</code> class to generate a tabbed interface. Use them to create tabbable regions with our <a href="#javascript-behavior">tab JavaScript plugin</a>.</p>
  <div className="bd-example">
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a className="nav-link active" href="#">Active</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
  
</main>

    );
  }
}