import React from 'react';

export default class Popovers extends React.Component {
  render() {
    return (
<main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
  <h1 className="bd-title" id="content">Popovers</h1>
  <p className="bd-lead">Documentation and examples for adding Bootstrap popovers, like those found in iOS, to any element on your site.</p>
  
  <h2>To do</h2>
  <ul>
    <li>Style to match Prospectus card details</li>
    <li>Build in react.</li>
    <li>Add a black version.</li>
    <li>Add a blose button.</li>
    <li>UX to determine shadow depth. "The Shadow" becomes "The Shadows"</li>
  </ul>

  <h2 id="overview"><span className="bd-content-title">Overview</span></h2>
  <p>Things to know when using the popover plugin:</p>
  <ul>
    <li>Popovers rely on the 3rd party library <a href="https://popper.js.org/">Popper.js</a> for positioning. You must include <a href="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js">popper.min.js</a> before bootstrap.js or use <code className="highlighter-rouge">bootstrap.bundle.min.js</code> / <code className="highlighter-rouge">bootstrap.bundle.js</code> which contains Popper.js in order for popovers to work!</li>
    <li>Popovers require the <a href="/docs/4.2/components/tooltips/">tooltip plugin</a> as a dependency.</li>
    <li>If you’re building our JavaScript from source, it <a href="/docs/4.2/getting-started/javascript/#util">requires <code className="highlighter-rouge">util.js</code></a>.</li>
    <li>Popovers are opt-in for performance reasons, so <strong>you must initialize them yourself</strong>.</li>
    <li>Zero-length <code className="highlighter-rouge">title</code> and <code className="highlighter-rouge">content</code> values will never show a popover.</li>
    <li>Specify <code className="highlighter-rouge">container: 'body'</code> to avoid rendering problems in more complex components (like our input groups, button groups, etc).</li>
    <li>Triggering popovers on hidden elements will not work.</li>
    <li>Popovers for <code className="highlighter-rouge">.disabled</code> or <code className="highlighter-rouge">disabled</code> elements must be triggered on a wrapper element.</li>
    <li>When triggered from anchors that wrap across multiple lines, popovers will be centered between the anchors’ overall width. Use <code className="highlighter-rouge">.text-nowrap</code> on your <code className="highlighter-rouge">&lt;a&gt;</code>s to avoid this behavior.</li>
    <li>Popovers must be hidden before their corresponding elements have been removed from the DOM.</li>
    <li>Popovers can be triggered thanks to an element inside a shadow DOM.</li>
  </ul>
  <div className="bd-callout bd-callout-info">
    <p>The animation effect of this component is dependent on the <code className="highlighter-rouge">prefers-reduced-motion</code> media query. See the <a href="/docs/4.2/getting-started/accessibility/#reduced-motion">reduced motion section of our accessibility documentation</a>.</p>
  </div>
  <p>Keep reading to see how popovers work with some examples.</p>
  <h2 id="example-enable-popovers-everywhere"><span className="bd-content-title">Example: Enable popovers everywhere</span></h2>
  <p>One way to initialize all popovers on a page would be to select them by their <code className="highlighter-rouge">data-toggle</code> attribute:</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="kd">function</span> <span className="p">()</span> <span className="p">{"{"}</span>{"\n"}{"  "}<span className="nx">$</span><span className="p">(</span><span className="s1">'[data-toggle="popover"]'</span><span className="p">).</span><span className="nx">popover</span><span className="p">()</span>{"\n"}<span className="p">{"}"})</span></code></pre></figure>
  <h2 id="example-using-the-container-option"><span className="bd-content-title">Example: Using the <code className="highlighter-rouge">container</code> option</span></h2>
  <p>When you have some styles on a parent element that interfere with a popover, you’ll want to specify a custom <code className="highlighter-rouge">container</code> so that the popover’s HTML appears within that element instead.</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="kd">function</span> <span className="p">()</span> <span className="p">{"{"}</span>{"\n"}{"  "}<span className="nx">$</span><span className="p">(</span><span className="s1">'.example-popover'</span><span className="p">).</span><span className="nx">popover</span><span className="p">({"{"}</span>{"\n"}{"    "}<span className="na">container</span><span className="p">:</span> <span className="s1">'body'</span>{"\n"}{"  "}<span className="p">{"}"})</span>{"\n"}<span className="p">{"}"})</span></code></pre></figure>
  <h2 id="example"><span className="bd-content-title">Example</span></h2>
  <div className="bd-example">
    <button type="button" className="btn btn-lg btn-danger" data-toggle="popover" title data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="Popover title">Click to toggle popover</button>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-lg btn-danger"</span> <span className="na">data-toggle=</span><span className="s">"popover"</span> <span className="na">title=</span><span className="s">"Popover title"</span> <span className="na">data-content=</span><span className="s">"And here's some amazing content. It's very engaging. Right?"</span><span className="nt">&gt;</span>Click to toggle popover<span className="nt">&lt;/button&gt;</span></code></pre></figure>
  <h3 id="four-directions"><span className="bd-content-title">Four directions</span></h3>
  <p>Four options are available: top, right, bottom, and left aligned.</p>
  <div className="bd-example popover-demo">
    <div className="bd-example-popovers">
      <button type="button" className="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title title>
        Popover on top
      </button>
      <button type="button" className="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title title>
        Popover on right
      </button>
      <button type="button" className="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title title>
        Popover on bottom
      </button>
      <button type="button" className="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title title>
        Popover on left
      </button>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span> <span className="na">data-container=</span><span className="s">"body"</span> <span className="na">data-toggle=</span><span className="s">"popover"</span> <span className="na">data-placement=</span><span className="s">"top"</span> <span className="na">data-content=</span><span className="s">"Vivamus sagittis lacus vel augue laoreet rutrum faucibus."</span><span className="nt">&gt;</span>{"\n"}{"  "}Popover on top{"\n"}<span className="nt">&lt;/button&gt;</span>{"\n"}{"\n"}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span> <span className="na">data-container=</span><span className="s">"body"</span> <span className="na">data-toggle=</span><span className="s">"popover"</span> <span className="na">data-placement=</span><span className="s">"right"</span> <span className="na">data-content=</span><span className="s">"Vivamus sagittis lacus vel augue laoreet rutrum faucibus."</span><span className="nt">&gt;</span>{"\n"}{"  "}Popover on right{"\n"}<span className="nt">&lt;/button&gt;</span>{"\n"}{"\n"}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span> <span className="na">data-container=</span><span className="s">"body"</span> <span className="na">data-toggle=</span><span className="s">"popover"</span> <span className="na">data-placement=</span><span className="s">"bottom"</span> <span className="na">data-content=</span><span className="s">"Vivamus{"\n"}sagittis lacus vel augue laoreet rutrum faucibus."</span><span className="nt">&gt;</span>{"\n"}{"  "}Popover on bottom{"\n"}<span className="nt">&lt;/button&gt;</span>{"\n"}{"\n"}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span> <span className="na">data-container=</span><span className="s">"body"</span> <span className="na">data-toggle=</span><span className="s">"popover"</span> <span className="na">data-placement=</span><span className="s">"left"</span> <span className="na">data-content=</span><span className="s">"Vivamus sagittis lacus vel augue laoreet rutrum faucibus."</span><span className="nt">&gt;</span>{"\n"}{"  "}Popover on left{"\n"}<span className="nt">&lt;/button&gt;</span></code></pre></figure>
  <h3 id="dismiss-on-next-click"><span className="bd-content-title">Dismiss on next click</span></h3>
  <p>Use the <code className="highlighter-rouge">focus</code> trigger to dismiss popovers on the user’s next click of a different element than the toggle element.</p>
  <div className="bd-callout bd-callout-danger">
    <h4 id="specific-markup-required-for-dismiss-on-next-click">Specific markup required for dismiss-on-next-click</h4>
    <p>For proper cross-browser and cross-platform behavior, you must use the <code className="highlighter-rouge">&lt;a&gt;</code> tag, <em>not</em> the <code className="highlighter-rouge">&lt;button&gt;</code> tag, and you also must include a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex"><code className="highlighter-rouge">tabindex</code></a> attribute.</p>
  </div>
  <div className="bd-example">
    <a tabIndex={0} className="btn btn-lg btn-danger" role="button" data-toggle="popover" data-trigger="focus" title data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="Dismissible popover">Dismissible popover</a>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;a</span> <span className="na">tabindex=</span><span className="s">"0"</span> <span className="na">class=</span><span className="s">"btn btn-lg btn-danger"</span> <span className="na">role=</span><span className="s">"button"</span> <span className="na">data-toggle=</span><span className="s">"popover"</span> <span className="na">data-trigger=</span><span className="s">"focus"</span> <span className="na">title=</span><span className="s">"Dismissible popover"</span> <span className="na">data-content=</span><span className="s">"And here's some amazing content. It's very engaging. Right?"</span><span className="nt">&gt;</span>Dismissible popover<span className="nt">&lt;/a&gt;</span></code></pre></figure>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'.popover-dismiss'</span><span className="p">).</span><span className="nx">popover</span><span className="p">({"{"}</span>{"\n"}{"  "}<span className="na">trigger</span><span className="p">:</span> <span className="s1">'focus'</span>{"\n"}<span className="p">{"}"})</span></code></pre></figure>
  <h3 id="disabled-elements"><span className="bd-content-title">Disabled elements</span></h3>
  <p>Elements with the <code className="highlighter-rouge">disabled</code> attribute aren’t interactive, meaning users cannot hover or click them to trigger a popover (or tooltip). As a workaround, you’ll want to trigger the popover from a wrapper <code className="highlighter-rouge">&lt;div&gt;</code> or <code className="highlighter-rouge">&lt;span&gt;</code> and override the <code className="highlighter-rouge">pointer-events</code> on the disabled element.</p>
  <p>For disabled popover triggers, you may also prefer <code className="highlighter-rouge">data-trigger="hover"</code> so that the popover appears as immediate visual feedback to your users as they may not expect to <em>click</em> on a disabled element.</p>
  <div className="bd-example">
    <span className="d-inline-block" data-toggle="popover" data-content="Disabled popover" data-original-title title>
      <button className="btn btn-primary" style={{pointerEvents: 'none'}} type="button" disabled>Disabled button</button>
    </span>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"d-inline-block"</span> <span className="na">data-toggle=</span><span className="s">"popover"</span> <span className="na">data-content=</span><span className="s">"Disabled popover"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span> <span className="na">style=</span><span className="s">"pointer-events: none;"</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">disabled</span><span className="nt">&gt;</span>Disabled button<span className="nt">&lt;/button&gt;</span>{"\n"}<span className="nt">&lt;/span&gt;</span></code></pre></figure>
  <h2 id="usage"><span className="bd-content-title">Usage</span></h2>
  <p>Enable popovers via JavaScript:</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'#example'</span><span className="p">).</span><span className="nx">popover</span><span className="p">(</span><span className="nx">options</span><span className="p">)</span></code></pre></figure>
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
        <td>Apply a CSS fade transition to the popover</td>
      </tr>
      <tr>
        <td>container</td>
        <td>string | element | false</td>
        <td>false</td>
        <td>
          <p>Appends the popover to a specific element. Example: <code>container: 'body'</code>. This option is particularly useful in that it allows you to position the popover in the flow of the document near the triggering element -&nbsp;which will prevent the popover from floating away from the triggering element during a window resize.</p>
        </td>
      </tr>
      <tr>
        <td>content</td>
        <td>string | element | function</td>
        <td>''</td>
        <td>
          <p>Default content value if <code>data-content</code> attribute isn't present.</p>
          <p>If a function is given, it will be called with its <code>this</code> reference set to the element that the popover is attached to.</p>
        </td>
      </tr>
      <tr>
        <td>delay</td>
        <td>number | object</td>
        <td>0</td>
        <td>
          <p>Delay showing and hiding the popover (ms) - does not apply to manual trigger type</p>
          <p>If a number is supplied, delay is applied to both hide/show</p>
          <p>Object structure is: <code>delay: {'{'} "show": 500, "hide": 100 {'}'}</code></p>
        </td>
      </tr>
      <tr>
        <td>html</td>
        <td>boolean</td>
        <td>false</td>
        <td>Insert HTML into the popover. If false, jQuery's <code>text</code> method will be used to insert content into the DOM. Use text if you're worried about XSS attacks.</td>
      </tr>
      <tr>
        <td>placement</td>
        <td>string | function</td>
        <td>'right'</td>
        <td>
          <p>How to position the popover - auto | top | bottom | left | right.<br />When <code>auto</code> is specified, it will dynamically reorient the popover.</p>
          <p>When a function is used to determine the placement, it is called with the popover DOM node as its first argument and the triggering element DOM node as its second. The <code>this</code> context is set to the popover instance.</p>
        </td>
      </tr>
      <tr>
        <td>selector</td>
        <td>string | false</td>
        <td>false</td>
        <td>If a selector is provided, popover objects will be delegated to the specified targets. In practice, this is used to enable dynamic HTML content to have popovers added. See <a href="https://github.com/twbs/bootstrap/issues/4215">this</a> and <a href="https://codepen.io/Johann-S/pen/djJYPb">an informative example</a>.</td>
      </tr>
      <tr>
        <td>template</td>
        <td>string</td>
        <td><code>'&lt;div class="popover" role="tooltip"&gt;&lt;div class="arrow"&gt;&lt;/div&gt;&lt;h3 class="popover-header"&gt;&lt;/h3&gt;&lt;div class="popover-body"&gt;&lt;/div&gt;&lt;/div&gt;'</code></td>
        <td>
          <p>Base HTML to use when creating the popover.</p>
          <p>The popover's <code>title</code> will be injected into the <code>.popover-header</code>.</p>
          <p>The popover's <code>content</code> will be injected into the <code>.popover-body</code>.</p>
          <p><code>.arrow</code> will become the popover's arrow.</p>
          <p>The outermost wrapper element should have the <code>.popover</code> class.</p>
        </td>
      </tr>
      <tr>
        <td>title</td>
        <td>string | element | function</td>
        <td>''</td>
        <td>
          <p>Default title value if <code>title</code> attribute isn't present.</p>
          <p>If a function is given, it will be called with its <code>this</code> reference set to the element that the popover is attached to.</p>
        </td>
      </tr>
      <tr>
        <td>trigger</td>
        <td>string</td>
        <td>'click'</td>
        <td>How popover is triggered - click | hover | focus | manual. You may pass multiple triggers; separate them with a space. <code>manual</code> cannot be combined with any other trigger.</td>
      </tr>
      <tr>
        <td>offset</td>
        <td>number | string</td>
        <td>0</td>
        <td>Offset of the popover relative to its target. For more information refer to Popper.js's <a href="https://popper.js.org/popper-documentation.html#modifiers..offset.offset">offset docs</a>.</td>
      </tr>
      <tr>
        <td>fallbackPlacement</td>
        <td>string | array</td>
        <td>'flip'</td>
        <td>Allow to specify which position Popper will use on fallback. For more information refer to
          Popper.js's <a href="https://popper.js.org/popper-documentation.html#modifiers..flip.behavior">behavior docs</a></td>
      </tr>
      <tr>
        <td>boundary</td>
        <td>string | element</td>
        <td>'scrollParent'</td>
        <td>Overflow constraint boundary of the popover. Accepts the values of <code>'viewport'</code>, <code>'window'</code>, <code>'scrollParent'</code>, or an HTMLElement reference (JavaScript only). For more information refer to Popper.js's <a href="https://popper.js.org/popper-documentation.html#modifiers..preventOverflow.boundariesElement">preventOverflow docs</a>.</td>
      </tr>
    </tbody>
  </table>
  <div className="bd-callout bd-callout-info">
    <h4 id="data-attributes-for-individual-popovers">Data attributes for individual popovers</h4>
    <p>Options for individual popovers can alternatively be specified through the use of data attributes, as explained above.</p>
  </div>
  <h3 id="methods"><span className="bd-content-title">Methods</span></h3>
  <div className="bd-callout bd-callout-danger">
    <h4 id="asynchronous-methods-and-transitions">Asynchronous methods and transitions</h4>
    <p>All API methods are <strong>asynchronous</strong> and start a <strong>transition</strong>. They return to the caller as soon as the transition is started but <strong>before it ends</strong>. In addition, a method call on a <strong>transitioning component will be ignored</strong>.</p>
    <p><a href="/docs/4.2/getting-started/javascript/">See our JavaScript documentation for more information</a>.</p>
  </div>
  <h4 id="popoveroptions"><span className="bd-content-title"><code className="highlighter-rouge">$().popover(options)</code></span></h4>
  <p>Initializes popovers for an element collection.</p>
  <h4 id="popovershow"><span className="bd-content-title"><code className="highlighter-rouge">.popover('show')</code></span></h4>
  <p>Reveals an element’s popover. <strong>Returns to the caller before the popover has actually been shown</strong> (i.e. before the <code className="highlighter-rouge">shown.bs.popover</code> event occurs). This is considered a “manual” triggering of the popover. Popovers whose both title and content are zero-length are never displayed.</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'#element'</span><span className="p">).</span><span className="nx">popover</span><span className="p">(</span><span className="s1">'show'</span><span className="p">)</span></code></pre></figure>
  <h4 id="popoverhide"><span className="bd-content-title"><code className="highlighter-rouge">.popover('hide')</code></span></h4>
  <p>Hides an element’s popover. <strong>Returns to the caller before the popover has actually been hidden</strong> (i.e. before the <code className="highlighter-rouge">hidden.bs.popover</code> event occurs). This is considered a “manual” triggering of the popover.</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'#element'</span><span className="p">).</span><span className="nx">popover</span><span className="p">(</span><span className="s1">'hide'</span><span className="p">)</span></code></pre></figure>
  <h4 id="popovertoggle"><span className="bd-content-title"><code className="highlighter-rouge">.popover('toggle')</code></span></h4>
  <p>Toggles an element’s popover. <strong>Returns to the caller before the popover has actually been shown or hidden</strong> (i.e. before the <code className="highlighter-rouge">shown.bs.popover</code> or <code className="highlighter-rouge">hidden.bs.popover</code> event occurs). This is considered a “manual” triggering of the popover.</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'#element'</span><span className="p">).</span><span className="nx">popover</span><span className="p">(</span><span className="s1">'toggle'</span><span className="p">)</span></code></pre></figure>
  <h4 id="popoverdispose"><span className="bd-content-title"><code className="highlighter-rouge">.popover('dispose')</code></span></h4>
  <p>Hides and destroys an element’s popover. Popovers that use delegation (which are created using <a href="#options">the <code className="highlighter-rouge">selector</code> option</a>) cannot be individually destroyed on descendant trigger elements.</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'#element'</span><span className="p">).</span><span className="nx">popover</span><span className="p">(</span><span className="s1">'dispose'</span><span className="p">)</span></code></pre></figure>
  <h4 id="popoverenable"><span className="bd-content-title"><code className="highlighter-rouge">.popover('enable')</code></span></h4>
  <p>Gives an element’s popover the ability to be shown. <strong>Popovers are enabled by default.</strong></p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'#element'</span><span className="p">).</span><span className="nx">popover</span><span className="p">(</span><span className="s1">'enable'</span><span className="p">)</span></code></pre></figure>
  <h4 id="popoverdisable"><span className="bd-content-title"><code className="highlighter-rouge">.popover('disable')</code></span></h4>
  <p>Removes the ability for an element’s popover to be shown. The popover will only be able to be shown if it is re-enabled.</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'#element'</span><span className="p">).</span><span className="nx">popover</span><span className="p">(</span><span className="s1">'disable'</span><span className="p">)</span></code></pre></figure>
  <h4 id="popovertoggleenabled"><span className="bd-content-title"><code className="highlighter-rouge">.popover('toggleEnabled')</code></span></h4>
  <p>Toggles the ability for an element’s popover to be shown or hidden.</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'#element'</span><span className="p">).</span><span className="nx">popover</span><span className="p">(</span><span className="s1">'toggleEnabled'</span><span className="p">)</span></code></pre></figure>
  <h4 id="popoverupdate"><span className="bd-content-title"><code className="highlighter-rouge">.popover('update')</code></span></h4>
  <p>Updates the position of an element’s popover.</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'#element'</span><span className="p">).</span><span className="nx">popover</span><span className="p">(</span><span className="s1">'update'</span><span className="p">)</span></code></pre></figure>
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
        <td>show.bs.popover</td>
        <td>This event fires immediately when the <code>show</code> instance method is called.</td>
      </tr>
      <tr>
        <td>shown.bs.popover</td>
        <td>This event is fired when the popover has been made visible to the user (will wait for CSS transitions to complete).</td>
      </tr>
      <tr>
        <td>hide.bs.popover</td>
        <td>This event is fired immediately when the <code>hide</code> instance method has been called.</td>
      </tr>
      <tr>
        <td>hidden.bs.popover</td>
        <td>This event is fired when the popover has finished being hidden from the user (will wait for CSS transitions to complete).</td>
      </tr>
      <tr>
        <td>inserted.bs.popover</td>
        <td>This event is fired after the <code>show.bs.popover</code> event when the popover template has been added to the DOM.</td>
      </tr>
    </tbody>
  </table>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'#myPopover'</span><span className="p">).</span><span className="nx">on</span><span className="p">(</span><span className="s1">'hidden.bs.popover'</span><span className="p">,</span> <span className="kd">function</span> <span className="p">()</span> <span className="p">{"{"}</span>{"\n"}{"  "}<span className="c1">// do something…</span>{"\n"}<span className="p">{"}"})</span></code></pre></figure>
</main>

    );
  }
}