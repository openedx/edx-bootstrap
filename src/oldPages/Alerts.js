import React from 'react';

export default class Alerts extends React.Component {
  render() {
    return (
<main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
  <h1 className="bd-title" id="content">Alerts</h1>
  <p className="bd-lead">Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>
  
  <h2 id="examples"><span className="bd-content-title">Examples</span></h2>
  <p>Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight <strong>required</strong> contextual classes (e.g., <code className="highlighter-rouge">.alert-success</code>). For inline dismissal, use the <a href="#dismissing">alerts jQuery plugin</a>.</p>
  <div className="bd-example">
    <div className="alert alert-primary" role="alert">
      A simple primary alert—check it out!
    </div>
    <div className="alert alert-secondary" role="alert">
      A simple secondary alert—check it out!
    </div>
    <div className="alert alert-success" role="alert">
      A simple success alert—check it out!
    </div>
    <div className="alert alert-danger" role="alert">
      A simple danger alert—check it out!
    </div>
    <div className="alert alert-warning" role="alert">
      A simple warning alert—check it out!
    </div>
    <div className="alert alert-info" role="alert">
      A simple info alert—check it out!
    </div>
    <div className="alert alert-light" role="alert">
      A simple light alert—check it out!
    </div>
    <div className="alert alert-dark" role="alert">
      A simple dark alert—check it out!
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"alert alert-primary"</span> <span className="na">role=</span><span className="s">"alert"</span><span className="nt">&gt;</span>{"\n"}{"  "}A simple primary alert—check it out!{"\n"}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"alert alert-secondary"</span> <span className="na">role=</span><span className="s">"alert"</span><span className="nt">&gt;</span>{"\n"}{"  "}A simple secondary alert—check it out!{"\n"}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"alert alert-success"</span> <span className="na">role=</span><span className="s">"alert"</span><span className="nt">&gt;</span>{"\n"}{"  "}A simple success alert—check it out!{"\n"}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"alert alert-danger"</span> <span className="na">role=</span><span className="s">"alert"</span><span className="nt">&gt;</span>{"\n"}{"  "}A simple danger alert—check it out!{"\n"}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"alert alert-warning"</span> <span className="na">role=</span><span className="s">"alert"</span><span className="nt">&gt;</span>{"\n"}{"  "}A simple warning alert—check it out!{"\n"}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"alert alert-info"</span> <span className="na">role=</span><span className="s">"alert"</span><span className="nt">&gt;</span>{"\n"}{"  "}A simple info alert—check it out!{"\n"}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"alert alert-light"</span> <span className="na">role=</span><span className="s">"alert"</span><span className="nt">&gt;</span>{"\n"}{"  "}A simple light alert—check it out!{"\n"}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"alert alert-dark"</span> <span className="na">role=</span><span className="s">"alert"</span><span className="nt">&gt;</span>{"\n"}{"  "}A simple dark alert—check it out!{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <div className="bd-callout bd-callout-warning">
    <h5 id="conveying-meaning-to-assistive-technologies">Conveying meaning to assistive technologies</h5>
    <p>Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the <code className="highlighter-rouge">.sr-only</code> class.</p>
  </div>
  <h3 id="link-color"><span className="bd-content-title">Link color</span></h3>
  <p>Use the <code className="highlighter-rouge">.alert-link</code> utility class to quickly provide matching colored links within any alert.</p>
  <div className="bd-example">
    <div className="alert alert-primary" role="alert">
      A simple primary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
    </div>
    <div className="alert alert-secondary" role="alert">
      A simple secondary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
    </div>
    <div className="alert alert-success" role="alert">
      A simple success alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
    </div>
    <div className="alert alert-danger" role="alert">
      A simple danger alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
    </div>
    <div className="alert alert-warning" role="alert">
      A simple warning alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
    </div>
    <div className="alert alert-info" role="alert">
      A simple info alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
    </div>
    <div className="alert alert-light" role="alert">
      A simple light alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
    </div>
    <div className="alert alert-dark" role="alert">
      A simple dark alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"alert alert-primary"</span> <span className="na">role=</span><span className="s">"alert"</span><span className="nt">&gt;</span>{"\n"}{"  "}A simple primary alert with <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"alert-link"</span><span className="nt">&gt;</span>an example link<span className="nt">&lt;/a&gt;</span>. Give it a click if you like.{"\n"}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"alert alert-secondary"</span> <span className="na">role=</span><span className="s">"alert"</span><span className="nt">&gt;</span>{"\n"}{"  "}A simple secondary alert with <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"alert-link"</span><span className="nt">&gt;</span>an example link<span className="nt">&lt;/a&gt;</span>. Give it a click if you like.{"\n"}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"alert alert-success"</span> <span className="na">role=</span><span className="s">"alert"</span><span className="nt">&gt;</span>{"\n"}{"  "}A simple success alert with <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"alert-link"</span><span className="nt">&gt;</span>an example link<span className="nt">&lt;/a&gt;</span>. Give it a click if you like.{"\n"}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"alert alert-danger"</span> <span className="na">role=</span><span className="s">"alert"</span><span className="nt">&gt;</span>{"\n"}{"  "}A simple danger alert with <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"alert-link"</span><span className="nt">&gt;</span>an example link<span className="nt">&lt;/a&gt;</span>. Give it a click if you like.{"\n"}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"alert alert-warning"</span> <span className="na">role=</span><span className="s">"alert"</span><span className="nt">&gt;</span>{"\n"}{"  "}A simple warning alert with <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"alert-link"</span><span className="nt">&gt;</span>an example link<span className="nt">&lt;/a&gt;</span>. Give it a click if you like.{"\n"}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"alert alert-info"</span> <span className="na">role=</span><span className="s">"alert"</span><span className="nt">&gt;</span>{"\n"}{"  "}A simple info alert with <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"alert-link"</span><span className="nt">&gt;</span>an example link<span className="nt">&lt;/a&gt;</span>. Give it a click if you like.{"\n"}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"alert alert-light"</span> <span className="na">role=</span><span className="s">"alert"</span><span className="nt">&gt;</span>{"\n"}{"  "}A simple light alert with <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"alert-link"</span><span className="nt">&gt;</span>an example link<span className="nt">&lt;/a&gt;</span>. Give it a click if you like.{"\n"}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"alert alert-dark"</span> <span className="na">role=</span><span className="s">"alert"</span><span className="nt">&gt;</span>{"\n"}{"  "}A simple dark alert with <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"alert-link"</span><span className="nt">&gt;</span>an example link<span className="nt">&lt;/a&gt;</span>. Give it a click if you like.{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <h3 id="additional-content"><span className="bd-content-title">Additional content</span></h3>
  <p>Alerts can also contain additional HTML elements like headings, paragraphs and dividers.</p>
  <div className="bd-example">
    <div className="alert alert-success" role="alert">
      <h4 className="alert-heading">Well done!</h4>
      <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
      <hr />
      <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"alert alert-success"</span> <span className="na">role=</span><span className="s">"alert"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;h4</span> <span className="na">class=</span><span className="s">"alert-heading"</span><span className="nt">&gt;</span>Well done!<span className="nt">&lt;/h4&gt;</span>{"\n"}{"  "}<span className="nt">&lt;p&gt;</span>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.<span className="nt">&lt;/p&gt;</span>{"\n"}{"  "}<span className="nt">&lt;hr&gt;</span>{"\n"}{"  "}<span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"mb-0"</span><span className="nt">&gt;</span>Whenever you need to, be sure to use margin utilities to keep things nice and tidy.<span className="nt">&lt;/p&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <h3 id="dismissing"><span className="bd-content-title">Dismissing</span></h3>
  <p>Using the alert JavaScript plugin, it’s possible to dismiss any alert inline. Here’s how:</p>
  <ul>
    <li>Be sure you’ve loaded the alert plugin, or the compiled Bootstrap JavaScript.</li>
    <li>If you’re building our JavaScript from source, it <a href="/docs/4.2/getting-started/javascript/#util">requires <code className="highlighter-rouge">util.js</code></a>. The compiled version includes this.</li>
    <li>Add a dismiss button and the <code className="highlighter-rouge">.alert-dismissible</code> class, which adds extra padding to the right of the alert and positions the <code className="highlighter-rouge">.close</code> button.</li>
    <li>On the dismiss button, add the <code className="highlighter-rouge">data-dismiss="alert"</code> attribute, which triggers the JavaScript functionality. Be sure to use the <code className="highlighter-rouge">&lt;button&gt;</code> element with it for proper behavior across all devices.</li>
    <li>To animate alerts when dismissing them, be sure to add the <code className="highlighter-rouge">.fade</code> and <code className="highlighter-rouge">.show</code> classes.</li>
  </ul>
  <p>You can see this in action with a live demo:</p>
  <div className="bd-example">
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Holy guacamole!</strong> You should check in on some of those fields below.
      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">×</span>
      </button>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"alert alert-warning alert-dismissible fade show"</span> <span className="na">role=</span><span className="s">"alert"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;strong&gt;</span>Holy guacamole!<span className="nt">&lt;/strong&gt;</span> You should check in on some of those fields below.{"\n"}{"  "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"close"</span> <span className="na">data-dismiss=</span><span className="s">"alert"</span> <span className="na">aria-label=</span><span className="s">"Close"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;span</span> <span className="na">aria-hidden=</span><span className="s">"true"</span><span className="nt">&gt;</span><span className="ni">&amp;times;</span><span className="nt">&lt;/span&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/button&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <h2 id="javascript-behavior"><span className="bd-content-title">JavaScript behavior</span></h2>
  <h3 id="triggers"><span className="bd-content-title">Triggers</span></h3>
  <p>Enable dismissal of an alert via JavaScript:</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'.alert'</span><span className="p">).</span><span className="nx">alert</span><span className="p">()</span></code></pre></figure>
  <p>Or with <code className="highlighter-rouge">data</code> attributes on a button <strong>within the alert</strong>, as demonstrated above:</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"close"</span> <span className="na">data-dismiss=</span><span className="s">"alert"</span> <span className="na">aria-label=</span><span className="s">"Close"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;span</span> <span className="na">aria-hidden=</span><span className="s">"true"</span><span className="nt">&gt;</span><span className="ni">&amp;times;</span><span className="nt">&lt;/span&gt;</span>{"\n"}<span className="nt">&lt;/button&gt;</span></code></pre></figure>
  <p>Note that closing an alert will remove it from the DOM.</p>
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
        <td><code className="highlighter-rouge">$().alert()</code></td>
        <td>Makes an alert listen for click events on descendant elements which have the <code className="highlighter-rouge">data-dismiss="alert"</code> attribute. (Not necessary when using the data-api’s auto-initialization.)</td>
      </tr>
      <tr>
        <td><code className="highlighter-rouge">$().alert('close')</code></td>
        <td>Closes an alert by removing it from the DOM. If the <code className="highlighter-rouge">.fade</code> and <code className="highlighter-rouge">.show</code> classes are present on the element, the alert will fade out before it is removed.</td>
      </tr>
      <tr>
        <td><code className="highlighter-rouge">$().alert('dispose')</code></td>
        <td>Destroys an element’s alert.</td>
      </tr>
    </tbody>
  </table>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s2">".alert"</span><span className="p">).</span><span className="nx">alert</span><span className="p">(</span><span className="s1">'close'</span><span className="p">)</span></code></pre></figure>
  <h3 id="events"><span className="bd-content-title">Events</span></h3>
  <p>Bootstrap’s alert plugin exposes a few events for hooking into alert functionality.</p>
  <table>
    <thead>
      <tr>
        <th>Event</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code className="highlighter-rouge">close.bs.alert</code></td>
        <td>This event fires immediately when the <code>close</code> instance method is called.</td>
      </tr>
      <tr>
        <td><code className="highlighter-rouge">closed.bs.alert</code></td>
        <td>This event is fired when the alert has been closed (will wait for CSS transitions to complete).</td>
      </tr>
    </tbody>
  </table>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'#myAlert'</span><span className="p">).</span><span className="nx">on</span><span className="p">(</span><span className="s1">'closed.bs.alert'</span><span className="p">,</span> <span className="kd">function</span> <span className="p">()</span> <span className="p">{"{"}</span>{"\n"}{"  "}<span className="c1">// do something…</span>{"\n"}<span className="p">{"}"})</span></code></pre></figure>
</main>

    );
  }
}