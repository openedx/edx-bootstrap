import React from 'react';

export default class Tooltips extends React.Component {
  render() {
    return (
<main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
  <h1 className="bd-title" id="content">Tooltips</h1>
  <p className="bd-lead">Documentation and examples for adding custom Bootstrap tooltips with CSS and JavaScript using CSS3 for animations and data-attributes for local title storage.</p>
  <h2>Remove this</h2>
  <h2 id="overview"><span className="bd-content-title">Overview</span></h2>
  <p>Things to know when using the tooltip plugin:</p>
  <ul>
    <li>Tooltips rely on the 3rd party library <a href="https://popper.js.org/">Popper.js</a> for positioning. You must include <a href="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js">popper.min.js</a> before bootstrap.js or use <code className="highlighter-rouge">bootstrap.bundle.min.js</code> / <code className="highlighter-rouge">bootstrap.bundle.js</code> which contains Popper.js in order for tooltips to work!</li>
    <li>If you’re building our JavaScript from source, it <a href="/docs/4.2/getting-started/javascript/#util">requires <code className="highlighter-rouge">util.js</code></a>.</li>
    <li>Tooltips are opt-in for performance reasons, so <strong>you must initialize them yourself</strong>.</li>
    <li>Tooltips with zero-length titles are never displayed.</li>
    <li>Specify <code className="highlighter-rouge">container: 'body'</code> to avoid rendering problems in more complex components (like our input groups, button groups, etc).</li>
    <li>Triggering tooltips on hidden elements will not work.</li>
    <li>Tooltips for <code className="highlighter-rouge">.disabled</code> or <code className="highlighter-rouge">disabled</code> elements must be triggered on a wrapper element.</li>
    <li>When triggered from hyperlinks that span multiple lines, tooltips will be centered. Use <code className="highlighter-rouge">white-space: nowrap;</code> on your <code className="highlighter-rouge">&lt;a&gt;</code>s to avoid this behavior.</li>
    <li>Tooltips must be hidden before their corresponding elements have been removed from the DOM.</li>
    <li>Tooltips can be triggered thanks to an element inside a shadow DOM.</li>
  </ul>
  <div className="bd-callout bd-callout-info">
    <p>The animation effect of this component is dependent on the <code className="highlighter-rouge">prefers-reduced-motion</code> media query. See the <a href="/docs/4.2/getting-started/accessibility/#reduced-motion">reduced motion section of our accessibility documentation</a>.</p>
  </div>
  <p>Got all that? Great, let’s see how they work with some examples.</p>
  <h2 id="example-enable-tooltips-everywhere"><span className="bd-content-title">Example: Enable tooltips everywhere</span></h2>
  <p>One way to initialize all tooltips on a page would be to select them by their <code className="highlighter-rouge">data-toggle</code> attribute:</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="kd">function</span> <span className="p">()</span> <span className="p">{"{"}</span>{"\n"}{"  "}<span className="nx">$</span><span className="p">(</span><span className="s1">'[data-toggle="tooltip"]'</span><span className="p">).</span><span className="nx">tooltip</span><span className="p">()</span>{"\n"}<span className="p">{"}"})</span></code></pre></figure>
  <h2 id="examples"><span className="bd-content-title">Examples</span></h2>
  <p>Hover over the links below to see tooltips:</p>
  <div className="bd-example tooltip-demo">
    <p className="muted">Tight pants next level keffiyeh <a href="#" data-toggle="tooltip" title="Default tooltip">you probably</a> haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. Farm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit american apparel <a href="#" data-toggle="tooltip" title="Another tooltip">have a</a> terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney's cleanse vegan chambray. A really ironic artisan <a href="#" data-toggle="tooltip" title="Another one here too">whatever keytar</a>, scenester farm-to-table banksy Austin <a href="#" data-toggle="tooltip" title="The last tip!">twitter handle</a> freegan cred raw denim single-origin coffee viral.
    </p>
  </div>
  <p>Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left.</p>
  <div className="bd-example tooltip-demo">
    <div className="bd-example-tooltips">
      <button type="button" className="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">Tooltip on top</button>
      <button type="button" className="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="Tooltip on right">Tooltip on right</button>
      <button type="button" className="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">Tooltip on bottom</button>
      <button type="button" className="btn btn-secondary" data-toggle="tooltip" data-placement="left" title="Tooltip on left">Tooltip on left</button>
      <button type="button" className="btn btn-secondary" data-toggle="tooltip" data-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">Tooltip with HTML</button>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span> <span className="na">data-toggle=</span><span className="s">"tooltip"</span> <span className="na">data-placement=</span><span className="s">"top"</span> <span className="na">title=</span><span className="s">"Tooltip on top"</span><span className="nt">&gt;</span>{"\n"}{"  "}Tooltip on top{"\n"}<span className="nt">&lt;/button&gt;</span>{"\n"}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span> <span className="na">data-toggle=</span><span className="s">"tooltip"</span> <span className="na">data-placement=</span><span className="s">"right"</span> <span className="na">title=</span><span className="s">"Tooltip on right"</span><span className="nt">&gt;</span>{"\n"}{"  "}Tooltip on right{"\n"}<span className="nt">&lt;/button&gt;</span>{"\n"}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span> <span className="na">data-toggle=</span><span className="s">"tooltip"</span> <span className="na">data-placement=</span><span className="s">"bottom"</span> <span className="na">title=</span><span className="s">"Tooltip on bottom"</span><span className="nt">&gt;</span>{"\n"}{"  "}Tooltip on bottom{"\n"}<span className="nt">&lt;/button&gt;</span>{"\n"}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span> <span className="na">data-toggle=</span><span className="s">"tooltip"</span> <span className="na">data-placement=</span><span className="s">"left"</span> <span className="na">title=</span><span className="s">"Tooltip on left"</span><span className="nt">&gt;</span>{"\n"}{"  "}Tooltip on left{"\n"}<span className="nt">&lt;/button&gt;</span></code></pre></figure>
  <p>And with custom HTML added:</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span> <span className="na">data-toggle=</span><span className="s">"tooltip"</span> <span className="na">data-html=</span><span className="s">"true"</span> <span className="na">title=</span><span className="s">"&lt;em&gt;Tooltip&lt;/em&gt; &lt;u&gt;with&lt;/u&gt; &lt;b&gt;HTML&lt;/b&gt;"</span><span className="nt">&gt;</span>{"\n"}{"  "}Tooltip with HTML{"\n"}<span className="nt">&lt;/button&gt;</span></code></pre></figure>
  <h2 id="usage"><span className="bd-content-title">Usage</span></h2>
  <p>The tooltip plugin generates content and markup on demand, and by default places tooltips after their trigger element.</p>
  <p>Trigger the tooltip via JavaScript:</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'#example'</span><span className="p">).</span><span className="nx">tooltip</span><span className="p">(</span><span className="nx">options</span><span className="p">)</span></code></pre></figure>
  <div className="bd-callout bd-callout-warning">
    <h5 id="overflow-auto-and-scroll">Overflow <code className="highlighter-rouge">auto</code> and <code className="highlighter-rouge">scroll</code></h5>
    <p>Tooltip position attempts to automatically change when a parent container has <code className="highlighter-rouge">overflow: auto</code> or <code className="highlighter-rouge">overflow: scroll</code> like our <code className="highlighter-rouge">.table-responsive</code>, but still keeps the original placement’s positioning. To resolve, set the <code className="highlighter-rouge">boundary</code> option to anything other than default value, <code className="highlighter-rouge">'scrollParent'</code>, such as <code className="highlighter-rouge">'window'</code>:</p>
    <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'#example'</span><span className="p">).</span><span className="nx">tooltip</span><span className="p">({"{"}</span> <span className="na">boundary</span><span className="p">:</span> <span className="s1">'window'</span> <span className="p">{"}"})</span></code></pre></figure>
  </div>
  <h3 id="markup"><span className="bd-content-title">Markup</span></h3>
  <p>The required markup for a tooltip is only a <code className="highlighter-rouge">data</code> attribute and <code className="highlighter-rouge">title</code> on the HTML element you wish to have a tooltip. The generated markup of a tooltip is rather simple, though it does require a position (by default, set to <code className="highlighter-rouge">top</code> by the plugin).</p>
  <div className="bd-callout bd-callout-warning">
    <h5 id="making-tooltips-work-for-keyboard-and-assistive-technology-users">Making tooltips work for keyboard and assistive technology users</h5>
    <p>You should only add tooltips to HTML elements that are traditionally keyboard-focusable and interactive (such as links or form controls). Although arbitrary HTML elements (such as <code className="highlighter-rouge">&lt;span&gt;</code>s) can be made focusable by adding the <code className="highlighter-rouge">tabindex="0"</code> attribute, this will add potentially annoying and confusing tab stops on non-interactive elements for keyboard users. In addition, most assistive technologies currently do not announce the tooltip in this situation.</p>
    <p>Additionally, do not rely solely on <code className="highlighter-rouge">hover</code> as the trigger for your tooltip, as this will make your tooltips impossible to trigger for keyboard users.</p>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="c">&lt;!-- HTML to write --&gt;</span>{"\n"}<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">data-toggle=</span><span className="s">"tooltip"</span> <span className="na">title=</span><span className="s">"Some tooltip text!"</span><span className="nt">&gt;</span>Hover over me<span className="nt">&lt;/a&gt;</span>{"\n"}{"\n"}<span className="c">&lt;!-- Generated markup by the plugin --&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"tooltip bs-tooltip-top"</span> <span className="na">role=</span><span className="s">"tooltip"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"arrow"</span><span className="nt">&gt;&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"tooltip-inner"</span><span className="nt">&gt;</span>{"\n"}{"    "}Some tooltip text!{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <h3 id="disabled-elements"><span className="bd-content-title">Disabled elements</span></h3>
  <p>Elements with the <code className="highlighter-rouge">disabled</code> attribute aren’t interactive, meaning users cannot focus, hover, or click them to trigger a tooltip (or popover). As a workaround, you’ll want to trigger the tooltip from a wrapper <code className="highlighter-rouge">&lt;div&gt;</code> or <code className="highlighter-rouge">&lt;span&gt;</code>, ideally made keyboard-focusable using <code className="highlighter-rouge">tabindex="0"</code>, and override the <code className="highlighter-rouge">pointer-events</code> on the disabled element.</p>
  <div className="tooltip-demo">
    <div className="bd-example">
      <span className="d-inline-block" tabIndex={0} data-toggle="tooltip" title="Disabled tooltip">
        <button className="btn btn-primary" style={{pointerEvents: 'none'}} type="button" disabled>Disabled button</button>
      </span>
    </div>
    <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"d-inline-block"</span> <span className="na">tabindex=</span><span className="s">"0"</span> <span className="na">data-toggle=</span><span className="s">"tooltip"</span> <span className="na">title=</span><span className="s">"Disabled tooltip"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span> <span className="na">style=</span><span className="s">"pointer-events: none;"</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">disabled</span><span className="nt">&gt;</span>Disabled button<span className="nt">&lt;/button&gt;</span>{"\n"}<span className="nt">&lt;/span&gt;</span></code></pre></figure>
  </div>
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
        <td>Apply a CSS fade transition to the tooltip</td>
      </tr>
      <tr>
        <td>container</td>
        <td>string | element | false</td>
        <td>false</td>
        <td>
          <p>Appends the tooltip to a specific element. Example: <code>container: 'body'</code>. This option is particularly useful in that it allows you to position the tooltip in the flow of the document near the triggering element -&nbsp;which will prevent the tooltip from floating away from the triggering element during a window resize.</p>
        </td>
      </tr>
      <tr>
        <td>delay</td>
        <td>number | object</td>
        <td>0</td>
        <td>
          <p>Delay showing and hiding the tooltip (ms) - does not apply to manual trigger type</p>
          <p>If a number is supplied, delay is applied to both hide/show</p>
          <p>Object structure is: <code>delay: {'{'} "show": 500, "hide": 100 {'}'}</code></p>
        </td>
      </tr>
      <tr>
        <td>html</td>
        <td>boolean</td>
        <td>false</td>
        <td>
          <p>Allow HTML in the tooltip.</p>
          <p>If true, HTML tags in the tooltip's <code>title</code> will be rendered in the tooltip. If false, jQuery's <code>text</code> method will be used to insert content into the DOM.</p>
          <p>Use text if you're worried about XSS attacks.</p>
        </td>
      </tr>
      <tr>
        <td>placement</td>
        <td>string | function</td>
        <td>'top'</td>
        <td>
          <p>How to position the tooltip - auto | top | bottom | left | right.<br />When <code>auto</code> is specified, it will dynamically reorient the tooltip.</p>
          <p>When a function is used to determine the placement, it is called with the tooltip DOM node as its first argument and the triggering element DOM node as its second. The <code>this</code> context is set to the tooltip instance.</p>
        </td>
      </tr>
      <tr>
        <td>selector</td>
        <td>string | false</td>
        <td>false</td>
        <td>If a selector is provided, tooltip objects will be delegated to the specified targets. In practice, this is used to also apply tooltips to dynamically added DOM elements (<code>jQuery.on</code> support). See <a href="https://github.com/twbs/bootstrap/issues/4215">this</a> and <a href="https://codepen.io/Johann-S/pen/djJYPb">an informative example</a>.</td>
      </tr>
      <tr>
        <td>template</td>
        <td>string</td>
        <td><code>'&lt;div class="tooltip" role="tooltip"&gt;&lt;div class="arrow"&gt;&lt;/div&gt;&lt;div class="tooltip-inner"&gt;&lt;/div&gt;&lt;/div&gt;'</code></td>
        <td>
          <p>Base HTML to use when creating the tooltip.</p>
          <p>The tooltip's <code>title</code> will be injected into the <code>.tooltip-inner</code>.</p>
          <p><code>.arrow</code> will become the tooltip's arrow.</p>
          <p>The outermost wrapper element should have the <code>.tooltip</code> class and <code>role="tooltip"</code>.</p>
        </td>
      </tr>
      <tr>
        <td>title</td>
        <td>string | element | function</td>
        <td>''</td>
        <td>
          <p>Default title value if <code>title</code> attribute isn't present.</p>
          <p>If a function is given, it will be called with its <code>this</code> reference set to the element that the tooltip is attached to.</p>
        </td>
      </tr>
      <tr>
        <td>trigger</td>
        <td>string</td>
        <td>'hover focus'</td>
        <td>
          <p>How tooltip is triggered - click | hover | focus | manual. You may pass multiple triggers; separate them with a space.</p>
          <p><code>'manual'</code> indicates that the tooltip will be triggered programmatically via the <code>.tooltip('show')</code>, <code>.tooltip('hide')</code> and <code>.tooltip('toggle')</code> methods; this value cannot be combined with any other trigger.</p>
          <p><code>'hover'</code> on its own will result in tooltips that cannot be triggered via the keyboard, and should only be used if alternative methods for conveying the same information for keyboard users is present.</p>
        </td>
      </tr>
      <tr>
        <td>offset</td>
        <td>number | string</td>
        <td>0</td>
        <td>Offset of the tooltip relative to its target. For more information refer to Popper.js's <a href="https://popper.js.org/popper-documentation.html#modifiers..offset.offset">offset docs</a>.</td>
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
        <td>Overflow constraint boundary of the tooltip. Accepts the values of <code>'viewport'</code>, <code>'window'</code>, <code>'scrollParent'</code>, or an HTMLElement reference (JavaScript only). For more information refer to Popper.js's <a href="https://popper.js.org/popper-documentation.html#modifiers..preventOverflow.boundariesElement">preventOverflow docs</a>.</td>
      </tr>
    </tbody>
  </table>
  <div className="bd-callout bd-callout-info">
    <h4 id="data-attributes-for-individual-tooltips">Data attributes for individual tooltips</h4>
    <p>Options for individual tooltips can alternatively be specified through the use of data attributes, as explained above.</p>
  </div>
  <h3 id="methods"><span className="bd-content-title">Methods</span></h3>
  <div className="bd-callout bd-callout-danger">
    <h4 id="asynchronous-methods-and-transitions">Asynchronous methods and transitions</h4>
    <p>All API methods are <strong>asynchronous</strong> and start a <strong>transition</strong>. They return to the caller as soon as the transition is started but <strong>before it ends</strong>. In addition, a method call on a <strong>transitioning component will be ignored</strong>.</p>
    <p><a href="/docs/4.2/getting-started/javascript/">See our JavaScript documentation for more information</a>.</p>
  </div>
  <h4 id="tooltipoptions"><span className="bd-content-title"><code className="highlighter-rouge">$().tooltip(options)</code></span></h4>
  <p>Attaches a tooltip handler to an element collection.</p>
  <h4 id="tooltipshow"><span className="bd-content-title"><code className="highlighter-rouge">.tooltip('show')</code></span></h4>
  <p>Reveals an element’s tooltip. <strong>Returns to the caller before the tooltip has actually been shown</strong> (i.e. before the <code className="highlighter-rouge">shown.bs.tooltip</code> event occurs). This is considered a “manual” triggering of the tooltip. Tooltips with zero-length titles are never displayed.</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'#element'</span><span className="p">).</span><span className="nx">tooltip</span><span className="p">(</span><span className="s1">'show'</span><span className="p">)</span></code></pre></figure>
  <h4 id="tooltiphide"><span className="bd-content-title"><code className="highlighter-rouge">.tooltip('hide')</code></span></h4>
  <p>Hides an element’s tooltip. <strong>Returns to the caller before the tooltip has actually been hidden</strong> (i.e. before the <code className="highlighter-rouge">hidden.bs.tooltip</code> event occurs). This is considered a “manual” triggering of the tooltip.</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'#element'</span><span className="p">).</span><span className="nx">tooltip</span><span className="p">(</span><span className="s1">'hide'</span><span className="p">)</span></code></pre></figure>
  <h4 id="tooltiptoggle"><span className="bd-content-title"><code className="highlighter-rouge">.tooltip('toggle')</code></span></h4>
  <p>Toggles an element’s tooltip. <strong>Returns to the caller before the tooltip has actually been shown or hidden</strong> (i.e. before the <code className="highlighter-rouge">shown.bs.tooltip</code> or <code className="highlighter-rouge">hidden.bs.tooltip</code> event occurs). This is considered a “manual” triggering of the tooltip.</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'#element'</span><span className="p">).</span><span className="nx">tooltip</span><span className="p">(</span><span className="s1">'toggle'</span><span className="p">)</span></code></pre></figure>
  <h4 id="tooltipdispose"><span className="bd-content-title"><code className="highlighter-rouge">.tooltip('dispose')</code></span></h4>
  <p>Hides and destroys an element’s tooltip. Tooltips that use delegation (which are created using <a href="#options">the <code className="highlighter-rouge">selector</code> option</a>) cannot be individually destroyed on descendant trigger elements.</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'#element'</span><span className="p">).</span><span className="nx">tooltip</span><span className="p">(</span><span className="s1">'dispose'</span><span className="p">)</span></code></pre></figure>
  <h4 id="tooltipenable"><span className="bd-content-title"><code className="highlighter-rouge">.tooltip('enable')</code></span></h4>
  <p>Gives an element’s tooltip the ability to be shown. <strong>Tooltips are enabled by default.</strong></p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'#element'</span><span className="p">).</span><span className="nx">tooltip</span><span className="p">(</span><span className="s1">'enable'</span><span className="p">)</span></code></pre></figure>
  <h4 id="tooltipdisable"><span className="bd-content-title"><code className="highlighter-rouge">.tooltip('disable')</code></span></h4>
  <p>Removes the ability for an element’s tooltip to be shown. The tooltip will only be able to be shown if it is re-enabled.</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'#element'</span><span className="p">).</span><span className="nx">tooltip</span><span className="p">(</span><span className="s1">'disable'</span><span className="p">)</span></code></pre></figure>
  <h4 id="tooltiptoggleenabled"><span className="bd-content-title"><code className="highlighter-rouge">.tooltip('toggleEnabled')</code></span></h4>
  <p>Toggles the ability for an element’s tooltip to be shown or hidden.</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'#element'</span><span className="p">).</span><span className="nx">tooltip</span><span className="p">(</span><span className="s1">'toggleEnabled'</span><span className="p">)</span></code></pre></figure>
  <h4 id="tooltipupdate"><span className="bd-content-title"><code className="highlighter-rouge">.tooltip('update')</code></span></h4>
  <p>Updates the position of an element’s tooltip.</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'#element'</span><span className="p">).</span><span className="nx">tooltip</span><span className="p">(</span><span className="s1">'update'</span><span className="p">)</span></code></pre></figure>
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
        <td>show.bs.tooltip</td>
        <td>This event fires immediately when the <code>show</code> instance method is called.</td>
      </tr>
      <tr>
        <td>shown.bs.tooltip</td>
        <td>This event is fired when the tooltip has been made visible to the user (will wait for CSS transitions to complete).</td>
      </tr>
      <tr>
        <td>hide.bs.tooltip</td>
        <td>This event is fired immediately when the <code>hide</code> instance method has been called.</td>
      </tr>
      <tr>
        <td>hidden.bs.tooltip</td>
        <td>This event is fired when the tooltip has finished being hidden from the user (will wait for CSS transitions to complete).</td>
      </tr>
      <tr>
        <td>inserted.bs.tooltip</td>
        <td>This event is fired after the <code>show.bs.tooltip</code> event when the tooltip template has been added to the DOM.</td>
      </tr>
    </tbody>
  </table>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'#myTooltip'</span><span className="p">).</span><span className="nx">on</span><span className="p">(</span><span className="s1">'hidden.bs.tooltip'</span><span className="p">,</span> <span className="kd">function</span> <span className="p">()</span> <span className="p">{"{"}</span>{"\n"}{"  "}<span className="c1">// do something…</span>{"\n"}<span className="p">{"}"})</span></code></pre></figure>
</main>

    );
  }
}