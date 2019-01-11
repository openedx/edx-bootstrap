import React from 'react';

export default class Badge extends React.Component {
  render() {
    return (
<main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
  <h1 className="bd-title" id="content">Badges</h1>
  <p className="bd-lead">Documentation and examples for badges, our small count and labeling component.</p>
  
  <h2 id="example"><span className="bd-content-title">Example</span></h2>
  <p>Badges scale to match the size of the immediate parent element by using relative font sizing and <code className="highlighter-rouge">em</code> units.</p>
  <div className="bd-example">
    <h1>Example heading <span className="badge badge-secondary">New</span></h1>
    <h2>Example heading <span className="badge badge-secondary">New</span></h2>
    <h3>Example heading <span className="badge badge-secondary">New</span></h3>
    <h4>Example heading <span className="badge badge-secondary">New</span></h4>
    <h5>Example heading <span className="badge badge-secondary">New</span></h5>
    <h6>Example heading <span className="badge badge-secondary">New</span></h6>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;h1&gt;</span>Example heading <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-secondary"</span><span className="nt">&gt;</span>New<span className="nt">&lt;/span&gt;&lt;/h1&gt;</span>{"\n"}<span className="nt">&lt;h2&gt;</span>Example heading <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-secondary"</span><span className="nt">&gt;</span>New<span className="nt">&lt;/span&gt;&lt;/h2&gt;</span>{"\n"}<span className="nt">&lt;h3&gt;</span>Example heading <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-secondary"</span><span className="nt">&gt;</span>New<span className="nt">&lt;/span&gt;&lt;/h3&gt;</span>{"\n"}<span className="nt">&lt;h4&gt;</span>Example heading <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-secondary"</span><span className="nt">&gt;</span>New<span className="nt">&lt;/span&gt;&lt;/h4&gt;</span>{"\n"}<span className="nt">&lt;h5&gt;</span>Example heading <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-secondary"</span><span className="nt">&gt;</span>New<span className="nt">&lt;/span&gt;&lt;/h5&gt;</span>{"\n"}<span className="nt">&lt;h6&gt;</span>Example heading <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-secondary"</span><span className="nt">&gt;</span>New<span className="nt">&lt;/span&gt;&lt;/h6&gt;</span></code></pre></figure>
  <p>Badges can be used as part of links or buttons to provide a counter.</p>
  <div className="bd-example">
    <button type="button" className="btn btn-primary">
      Notifications <span className="badge badge-light">4</span>
    </button>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span><span className="nt">&gt;</span>{"\n"}{"  "}Notifications <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-light"</span><span className="nt">&gt;</span>4<span className="nt">&lt;/span&gt;</span>{"\n"}<span className="nt">&lt;/button&gt;</span></code></pre></figure>
  <p>Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive technologies. While the styling of badges provides a visual cue as to their purpose, these users will simply be presented with the content of the badge. Depending on the specific situation, these badges may seem like random additional words or numbers at the end of a sentence, link, or button.</p>
  <p>Unless the context is clear (as with the “Notifications” example, where it is understood that the “4” is the number of notifications), consider including additional context with a visually hidden piece of additional text.</p>
  <div className="bd-example">
    <button type="button" className="btn btn-primary">
      Profile <span className="badge badge-light">9</span>
      <span className="sr-only">unread messages</span>
    </button>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span><span className="nt">&gt;</span>{"\n"}{"  "}Profile <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-light"</span><span className="nt">&gt;</span>9<span className="nt">&lt;/span&gt;</span>{"\n"}{"  "}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>unread messages<span className="nt">&lt;/span&gt;</span>{"\n"}<span className="nt">&lt;/button&gt;</span></code></pre></figure>
  <h2 id="contextual-variations"><span className="bd-content-title">Contextual variations</span></h2>
  <p>Add any of the below mentioned modifier classes to change the appearance of a badge.</p>
  <div className="bd-example">
    <span className="badge badge-primary">Primary</span>
    <span className="badge badge-secondary">Secondary</span>
    <span className="badge badge-success">Success</span>
    <span className="badge badge-danger">Danger</span>
    <span className="badge badge-warning">Warning</span>
    <span className="badge badge-info">Info</span>
    <span className="badge badge-light">Light</span>
    <span className="badge badge-dark">Dark</span>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-primary"</span><span className="nt">&gt;</span>Primary<span className="nt">&lt;/span&gt;</span>{"\n"}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-secondary"</span><span className="nt">&gt;</span>Secondary<span className="nt">&lt;/span&gt;</span>{"\n"}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-success"</span><span className="nt">&gt;</span>Success<span className="nt">&lt;/span&gt;</span>{"\n"}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-danger"</span><span className="nt">&gt;</span>Danger<span className="nt">&lt;/span&gt;</span>{"\n"}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-warning"</span><span className="nt">&gt;</span>Warning<span className="nt">&lt;/span&gt;</span>{"\n"}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-info"</span><span className="nt">&gt;</span>Info<span className="nt">&lt;/span&gt;</span>{"\n"}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-light"</span><span className="nt">&gt;</span>Light<span className="nt">&lt;/span&gt;</span>{"\n"}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-dark"</span><span className="nt">&gt;</span>Dark<span className="nt">&lt;/span&gt;</span></code></pre></figure>
  <div className="bd-callout bd-callout-warning">
    <h5 id="conveying-meaning-to-assistive-technologies">Conveying meaning to assistive technologies</h5>
    <p>Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the <code className="highlighter-rouge">.sr-only</code> class.</p>
  </div>
  <h2 id="pill-badges"><span className="bd-content-title">Pill badges</span></h2>
  <p>Use the <code className="highlighter-rouge">.badge-pill</code> modifier class to make badges more rounded (with a larger <code className="highlighter-rouge">border-radius</code> and additional horizontal <code className="highlighter-rouge">padding</code>). Useful if you miss the badges from v3.</p>
  <div className="bd-example">
    <span className="badge badge-pill badge-primary">Primary</span>
    <span className="badge badge-pill badge-secondary">Secondary</span>
    <span className="badge badge-pill badge-success">Success</span>
    <span className="badge badge-pill badge-danger">Danger</span>
    <span className="badge badge-pill badge-warning">Warning</span>
    <span className="badge badge-pill badge-info">Info</span>
    <span className="badge badge-pill badge-light">Light</span>
    <span className="badge badge-pill badge-dark">Dark</span>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-pill badge-primary"</span><span className="nt">&gt;</span>Primary<span className="nt">&lt;/span&gt;</span>{"\n"}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-pill badge-secondary"</span><span className="nt">&gt;</span>Secondary<span className="nt">&lt;/span&gt;</span>{"\n"}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-pill badge-success"</span><span className="nt">&gt;</span>Success<span className="nt">&lt;/span&gt;</span>{"\n"}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-pill badge-danger"</span><span className="nt">&gt;</span>Danger<span className="nt">&lt;/span&gt;</span>{"\n"}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-pill badge-warning"</span><span className="nt">&gt;</span>Warning<span className="nt">&lt;/span&gt;</span>{"\n"}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-pill badge-info"</span><span className="nt">&gt;</span>Info<span className="nt">&lt;/span&gt;</span>{"\n"}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-pill badge-light"</span><span className="nt">&gt;</span>Light<span className="nt">&lt;/span&gt;</span>{"\n"}<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-pill badge-dark"</span><span className="nt">&gt;</span>Dark<span className="nt">&lt;/span&gt;</span></code></pre></figure>
  <h2 id="links"><span className="bd-content-title">Links</span></h2>
  <p>Using the contextual <code className="highlighter-rouge">.badge-*</code> classes on an <code className="highlighter-rouge">&lt;a&gt;</code> element quickly provide <em>actionable</em> badges with hover and focus states.</p>
  <div className="bd-example">
    <a href="#" className="badge badge-primary">Primary</a>
    <a href="#" className="badge badge-secondary">Secondary</a>
    <a href="#" className="badge badge-success">Success</a>
    <a href="#" className="badge badge-danger">Danger</a>
    <a href="#" className="badge badge-warning">Warning</a>
    <a href="#" className="badge badge-info">Info</a>
    <a href="#" className="badge badge-light">Light</a>
    <a href="#" className="badge badge-dark">Dark</a>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"badge badge-primary"</span><span className="nt">&gt;</span>Primary<span className="nt">&lt;/a&gt;</span>{"\n"}<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"badge badge-secondary"</span><span className="nt">&gt;</span>Secondary<span className="nt">&lt;/a&gt;</span>{"\n"}<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"badge badge-success"</span><span className="nt">&gt;</span>Success<span className="nt">&lt;/a&gt;</span>{"\n"}<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"badge badge-danger"</span><span className="nt">&gt;</span>Danger<span className="nt">&lt;/a&gt;</span>{"\n"}<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"badge badge-warning"</span><span className="nt">&gt;</span>Warning<span className="nt">&lt;/a&gt;</span>{"\n"}<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"badge badge-info"</span><span className="nt">&gt;</span>Info<span className="nt">&lt;/a&gt;</span>{"\n"}<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"badge badge-light"</span><span className="nt">&gt;</span>Light<span className="nt">&lt;/a&gt;</span>{"\n"}<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"badge badge-dark"</span><span className="nt">&gt;</span>Dark<span className="nt">&lt;/a&gt;</span></code></pre></figure>
</main>

    );
  }
}