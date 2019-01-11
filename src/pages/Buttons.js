import React from 'react';

export default class Buttons extends React.Component {
  render() {
    return (
<main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
  <h1 className="bd-title" id="content">Buttons</h1>
  <p className="bd-lead">Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>
  
  <h2 id="examples"><span className="bd-content-title">Examples</span></h2>
  <p>Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.</p>
  <div className="bd-example">
    <button type="button" className="btn btn-primary">Primary</button>
    <button type="button" className="btn btn-secondary">Secondary</button>
    <button type="button" className="btn btn-success">Success</button>
    <button type="button" className="btn btn-danger">Danger</button>
    <button type="button" className="btn btn-warning">Warning</button>
    <button type="button" className="btn btn-info">Info</button>
    <button type="button" className="btn btn-light">Light</button>
    <button type="button" className="btn btn-dark">Dark</button>
    <button type="button" className="btn btn-link">Link</button>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span><span className="nt">&gt;</span>Primary<span className="nt">&lt;/button&gt;</span>{"\n"}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span><span className="nt">&gt;</span>Secondary<span className="nt">&lt;/button&gt;</span>{"\n"}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-success"</span><span className="nt">&gt;</span>Success<span className="nt">&lt;/button&gt;</span>{"\n"}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-danger"</span><span className="nt">&gt;</span>Danger<span className="nt">&lt;/button&gt;</span>{"\n"}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-warning"</span><span className="nt">&gt;</span>Warning<span className="nt">&lt;/button&gt;</span>{"\n"}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-info"</span><span className="nt">&gt;</span>Info<span className="nt">&lt;/button&gt;</span>{"\n"}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-light"</span><span className="nt">&gt;</span>Light<span className="nt">&lt;/button&gt;</span>{"\n"}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-dark"</span><span className="nt">&gt;</span>Dark<span className="nt">&lt;/button&gt;</span>{"\n"}{"\n"}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-link"</span><span className="nt">&gt;</span>Link<span className="nt">&lt;/button&gt;</span></code></pre></figure>
  <div className="bd-callout bd-callout-warning">
    <h5 id="conveying-meaning-to-assistive-technologies">Conveying meaning to assistive technologies</h5>
    <p>Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the <code className="highlighter-rouge">.sr-only</code> class.</p>
  </div>
  <h2 id="button-tags"><span className="bd-content-title">Button tags</span></h2>
  <p>The <code className="highlighter-rouge">.btn</code> classes are designed to be used with the <code className="highlighter-rouge">&lt;button&gt;</code> element. However, you can also use these classes on <code className="highlighter-rouge">&lt;a&gt;</code> or <code className="highlighter-rouge">&lt;input&gt;</code> elements (though some browsers may apply a slightly different rendering).</p>
  <p>When using button classes on <code className="highlighter-rouge">&lt;a&gt;</code> elements that are used to trigger in-page functionality (like collapsing content), rather than linking to new pages or sections within the current page, these links should be given a <code className="highlighter-rouge">role="button"</code> to appropriately convey their purpose to assistive technologies such as screen readers.</p>
  <div className="bd-example">
    <a className="btn btn-primary" href="#" role="button">Link</a>
    <button className="btn btn-primary" type="submit">Button</button>
    <input className="btn btn-primary" type="button" defaultValue="Input" />
    <input className="btn btn-primary" type="submit" defaultValue="Submit" />
    <input className="btn btn-primary" type="reset" defaultValue="Reset" />
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">role=</span><span className="s">"button"</span><span className="nt">&gt;</span>Link<span className="nt">&lt;/a&gt;</span>{"\n"}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span> <span className="na">type=</span><span className="s">"submit"</span><span className="nt">&gt;</span>Button<span className="nt">&lt;/button&gt;</span>{"\n"}<span className="nt">&lt;input</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">value=</span><span className="s">"Input"</span><span className="nt">&gt;</span>{"\n"}<span className="nt">&lt;input</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span> <span className="na">type=</span><span className="s">"submit"</span> <span className="na">value=</span><span className="s">"Submit"</span><span className="nt">&gt;</span>{"\n"}<span className="nt">&lt;input</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span> <span className="na">type=</span><span className="s">"reset"</span> <span className="na">value=</span><span className="s">"Reset"</span><span className="nt">&gt;</span></code></pre></figure>
  <h2 id="outline-buttons"><span className="bd-content-title">Outline buttons</span></h2>
  <p>In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the <code className="highlighter-rouge">.btn-outline-*</code> ones to remove all background images and colors on any button.</p>
  <div className="bd-example">
    <button type="button" className="btn btn-outline-primary">Primary</button>
    <button type="button" className="btn btn-outline-secondary">Secondary</button>
    <button type="button" className="btn btn-outline-success">Success</button>
    <button type="button" className="btn btn-outline-danger">Danger</button>
    <button type="button" className="btn btn-outline-warning">Warning</button>
    <button type="button" className="btn btn-outline-info">Info</button>
    <button type="button" className="btn btn-outline-light">Light</button>
    <button type="button" className="btn btn-outline-dark">Dark</button>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-outline-primary"</span><span className="nt">&gt;</span>Primary<span className="nt">&lt;/button&gt;</span>{"\n"}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-outline-secondary"</span><span className="nt">&gt;</span>Secondary<span className="nt">&lt;/button&gt;</span>{"\n"}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-outline-success"</span><span className="nt">&gt;</span>Success<span className="nt">&lt;/button&gt;</span>{"\n"}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-outline-danger"</span><span className="nt">&gt;</span>Danger<span className="nt">&lt;/button&gt;</span>{"\n"}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-outline-warning"</span><span className="nt">&gt;</span>Warning<span className="nt">&lt;/button&gt;</span>{"\n"}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-outline-info"</span><span className="nt">&gt;</span>Info<span className="nt">&lt;/button&gt;</span>{"\n"}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-outline-light"</span><span className="nt">&gt;</span>Light<span className="nt">&lt;/button&gt;</span>{"\n"}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-outline-dark"</span><span className="nt">&gt;</span>Dark<span className="nt">&lt;/button&gt;</span></code></pre></figure>
  <h2 id="sizes"><span className="bd-content-title">Sizes</span></h2>
  <p>Fancy larger or smaller buttons? Add <code className="highlighter-rouge">.btn-lg</code> or <code className="highlighter-rouge">.btn-sm</code> for additional sizes.</p>
  <div className="bd-example">
    <button type="button" className="btn btn-primary btn-lg">Large button</button>
    <button type="button" className="btn btn-secondary btn-lg">Large button</button>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-primary btn-lg"</span><span className="nt">&gt;</span>Large button<span className="nt">&lt;/button&gt;</span>{"\n"}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary btn-lg"</span><span className="nt">&gt;</span>Large button<span className="nt">&lt;/button&gt;</span></code></pre></figure>
  <div className="bd-example">
    <button type="button" className="btn btn-primary btn-sm">Small button</button>
    <button type="button" className="btn btn-secondary btn-sm">Small button</button>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-primary btn-sm"</span><span className="nt">&gt;</span>Small button<span className="nt">&lt;/button&gt;</span>{"\n"}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary btn-sm"</span><span className="nt">&gt;</span>Small button<span className="nt">&lt;/button&gt;</span></code></pre></figure>
  <p>Create block level buttons—those that span the full width of a parent—by adding <code className="highlighter-rouge">.btn-block</code>.</p>
  <div className="bd-example">
    <button type="button" className="btn btn-primary btn-lg btn-block">Block level button</button>
    <button type="button" className="btn btn-secondary btn-lg btn-block">Block level button</button>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-primary btn-lg btn-block"</span><span className="nt">&gt;</span>Block level button<span className="nt">&lt;/button&gt;</span>{"\n"}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary btn-lg btn-block"</span><span className="nt">&gt;</span>Block level button<span className="nt">&lt;/button&gt;</span></code></pre></figure>
  <h2 id="active-state"><span className="bd-content-title">Active state</span></h2>
  <p>Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active. <strong>There’s no need to add a class to <code className="highlighter-rouge">&lt;button&gt;</code>s as they use a pseudo-class</strong>. However, you can still force the same active appearance with <code className="highlighter-rouge">.active</code> (and include the <code>aria-pressed="true"</code> attribute) should you need to replicate the state programmatically.</p>
  <div className="bd-example">
    <a href="#" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Primary link</a>
    <a href="#" className="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Link</a>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-primary btn-lg active"</span> <span className="na">role=</span><span className="s">"button"</span> <span className="na">aria-pressed=</span><span className="s">"true"</span><span className="nt">&gt;</span>Primary link<span className="nt">&lt;/a&gt;</span>{"\n"}<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-secondary btn-lg active"</span> <span className="na">role=</span><span className="s">"button"</span> <span className="na">aria-pressed=</span><span className="s">"true"</span><span className="nt">&gt;</span>Link<span className="nt">&lt;/a&gt;</span></code></pre></figure>
  <h2 id="disabled-state"><span className="bd-content-title">Disabled state</span></h2>
  <p>Make buttons look inactive by adding the <code className="highlighter-rouge">disabled</code> boolean attribute to any <code className="highlighter-rouge">&lt;button&gt;</code> element.</p>
  <div className="bd-example">
    <button type="button" className="btn btn-lg btn-primary" disabled>Primary button</button>
    <button type="button" className="btn btn-secondary btn-lg" disabled>Button</button>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-lg btn-primary"</span> <span className="na">disabled</span><span className="nt">&gt;</span>Primary button<span className="nt">&lt;/button&gt;</span>{"\n"}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary btn-lg"</span> <span className="na">disabled</span><span className="nt">&gt;</span>Button<span className="nt">&lt;/button&gt;</span></code></pre></figure>
  <p>Disabled buttons using the <code className="highlighter-rouge">&lt;a&gt;</code> element behave a bit different:</p>
  <ul>
    <li><code className="highlighter-rouge">&lt;a&gt;</code>s don’t support the <code className="highlighter-rouge">disabled</code> attribute, so you must add the <code className="highlighter-rouge">.disabled</code> class to make it visually appear disabled.</li>
    <li>Some future-friendly styles are included to disable all <code className="highlighter-rouge">pointer-events</code> on anchor buttons. In browsers which support that property, you won’t see the disabled cursor at all.</li>
    <li>Disabled buttons should include the <code className="highlighter-rouge">aria-disabled="true"</code> attribute to indicate the state of the element to assistive technologies.</li>
  </ul>
  <div className="bd-example">
    <a href="#" className="btn btn-primary btn-lg disabled" tabIndex={-1} role="button" aria-disabled="true">Primary link</a>
    <a href="#" className="btn btn-secondary btn-lg disabled" tabIndex={-1} role="button" aria-disabled="true">Link</a>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-primary btn-lg disabled"</span> <span className="na">tabindex=</span><span className="s">"-1"</span> <span className="na">role=</span><span className="s">"button"</span> <span className="na">aria-disabled=</span><span className="s">"true"</span><span className="nt">&gt;</span>Primary link<span className="nt">&lt;/a&gt;</span>{"\n"}<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-secondary btn-lg disabled"</span> <span className="na">tabindex=</span><span className="s">"-1"</span> <span className="na">role=</span><span className="s">"button"</span> <span className="na">aria-disabled=</span><span className="s">"true"</span><span className="nt">&gt;</span>Link<span className="nt">&lt;/a&gt;</span></code></pre></figure>
  <div className="bd-callout bd-callout-warning">
    <h5 id="link-functionality-caveat">Link functionality caveat</h5>
    <p>The <code className="highlighter-rouge">.disabled</code> class uses <code className="highlighter-rouge">pointer-events: none</code> to try to disable the link functionality of <code className="highlighter-rouge">&lt;a&gt;</code>s, but that CSS property is not yet standardized. In addition, even in browsers that do support <code className="highlighter-rouge">pointer-events: none</code>, keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, add a <code className="highlighter-rouge">tabindex="-1"</code> attribute on these links (to prevent them from receiving keyboard focus) and use custom JavaScript to disable their functionality.</p>
  </div>
  <h2 id="button-plugin"><span className="bd-content-title">Button plugin</span></h2>
  <p>Do more with buttons. Control button states or create groups of buttons for more components like toolbars.</p>
  <h3 id="toggle-states"><span className="bd-content-title">Toggle states</span></h3>
  <p>Add <code className="highlighter-rouge">data-toggle="button"</code> to toggle a button’s <code className="highlighter-rouge">active</code> state. If you’re pre-toggling a button, you must manually add the <code className="highlighter-rouge">.active</code> class <strong>and</strong> <code className="highlighter-rouge">aria-pressed="true"</code> to the <code className="highlighter-rouge">&lt;button&gt;</code>.</p>
  <div className="bd-example">
    <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autoComplete="off">
      Single toggle
    </button>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span> <span className="na">data-toggle=</span><span className="s">"button"</span> <span className="na">aria-pressed=</span><span className="s">"false"</span> <span className="na">autocomplete=</span><span className="s">"off"</span><span className="nt">&gt;</span>{"\n"}{"  "}Single toggle{"\n"}<span className="nt">&lt;/button&gt;</span></code></pre></figure>
  <h3 id="checkbox-and-radio-buttons"><span className="bd-content-title">Checkbox and radio buttons</span></h3>
  <p>Bootstrap’s <code className="highlighter-rouge">.button</code> styles can be applied to other elements, such as <code className="highlighter-rouge">&lt;label&gt;</code>s, to provide checkbox or radio style button toggling. Add <code className="highlighter-rouge">data-toggle="buttons"</code> to a <code className="highlighter-rouge">.btn-group</code> containing those modified buttons to enable their toggling behavior via JavaScript and add <code className="highlighter-rouge">.btn-group-toggle</code> to style the <code className="highlighter-rouge">&lt;input&gt;</code>s within your buttons. <strong>Note that you can create single input-powered buttons or groups of them.</strong></p>
  <p>The checked state for these buttons is <strong>only updated via <code className="highlighter-rouge">click</code> event</strong> on the button. If you use another method to update the input—e.g., with <code className="highlighter-rouge">&lt;input type="reset"&gt;</code> or by manually applying the input’s <code className="highlighter-rouge">checked</code> property—you’ll need to toggle <code className="highlighter-rouge">.active</code> on the <code className="highlighter-rouge">&lt;label&gt;</code> manually.</p>
  <p>Note that pre-checked buttons require you to manually add the <code className="highlighter-rouge">.active</code> class to the input’s <code className="highlighter-rouge">&lt;label&gt;</code>.</p>
  <div className="bd-example">
    <div className="btn-group-toggle" data-toggle="buttons">
      <label className="btn btn-secondary active">
        <input type="checkbox" defaultChecked autoComplete="off" /> Checked
      </label>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"btn-group-toggle"</span> <span className="na">data-toggle=</span><span className="s">"buttons"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;label</span> <span className="na">class=</span><span className="s">"btn btn-secondary active"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"checkbox"</span> <span className="na">checked</span> <span className="na">autocomplete=</span><span className="s">"off"</span><span className="nt">&gt;</span> Checked{"\n"}{"  "}<span className="nt">&lt;/label&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <div className="bd-example">
    <div className="btn-group btn-group-toggle" data-toggle="buttons">
      <label className="btn btn-secondary active">
        <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked /> Active
      </label>
      <label className="btn btn-secondary">
        <input type="radio" name="options" id="option2" autoComplete="off" /> Radio
      </label>
      <label className="btn btn-secondary">
        <input type="radio" name="options" id="option3" autoComplete="off" /> Radio
      </label>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"btn-group btn-group-toggle"</span> <span className="na">data-toggle=</span><span className="s">"buttons"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;label</span> <span className="na">class=</span><span className="s">"btn btn-secondary active"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"radio"</span> <span className="na">name=</span><span className="s">"options"</span> <span className="na">id=</span><span className="s">"option1"</span> <span className="na">autocomplete=</span><span className="s">"off"</span> <span className="na">checked</span><span className="nt">&gt;</span> Active{"\n"}{"  "}<span className="nt">&lt;/label&gt;</span>{"\n"}{"  "}<span className="nt">&lt;label</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"radio"</span> <span className="na">name=</span><span className="s">"options"</span> <span className="na">id=</span><span className="s">"option2"</span> <span className="na">autocomplete=</span><span className="s">"off"</span><span className="nt">&gt;</span> Radio{"\n"}{"  "}<span className="nt">&lt;/label&gt;</span>{"\n"}{"  "}<span className="nt">&lt;label</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"radio"</span> <span className="na">name=</span><span className="s">"options"</span> <span className="na">id=</span><span className="s">"option3"</span> <span className="na">autocomplete=</span><span className="s">"off"</span><span className="nt">&gt;</span> Radio{"\n"}{"  "}<span className="nt">&lt;/label&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
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
        <td><code className="highlighter-rouge">$().button('toggle')</code></td>
        <td>Toggles push state. Gives the button the appearance that it has been activated.</td>
      </tr>
      <tr>
        <td><code className="highlighter-rouge">$().button('dispose')</code></td>
        <td>Destroys an element’s button.</td>
      </tr>
    </tbody>
  </table>
</main>

    );
  }
}