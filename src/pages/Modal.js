import React from 'react';

export default class Modal extends React.Component {
  render() {
    return (
<main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
  <h1 className="bd-title" id="content">Modal</h1>
  <p className="bd-lead">Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content.</p>
  
  <h2 id="how-it-works"><span className="bd-content-title">How it works</span></h2>
  <p>Before getting started with Bootstrap’s modal component, be sure to read the following as our menu options have recently changed.</p>
  <ul>
    <li>Modals are built with HTML, CSS, and JavaScript. They’re positioned over everything else in the document and remove scroll from the <code className="highlighter-rouge">&lt;body&gt;</code> so that modal content scrolls instead.</li>
    <li>Clicking on the modal “backdrop” will automatically close the modal.</li>
    <li>Bootstrap only supports one modal window at a time. Nested modals aren’t supported as we believe them to be poor user experiences.</li>
    <li>Modals use <code className="highlighter-rouge">position: fixed</code>, which can sometimes be a bit particular about its rendering. Whenever possible, place your modal HTML in a top-level position to avoid potential interference from other elements. You’ll likely run into issues when nesting a <code className="highlighter-rouge">.modal</code> within another fixed element.</li>
    <li>Once again, due to <code className="highlighter-rouge">position: fixed</code>, there are some caveats with using modals on mobile devices. <a href="/docs/4.2/getting-started/browsers-devices/#modals-and-dropdowns-on-mobile">See our browser support docs</a> for details.</li>
    <li>Due to how HTML5 defines its semantics, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autofocus">the <code className="highlighter-rouge">autofocus</code> HTML attribute</a> has no effect in Bootstrap modals. To achieve the same effect, use some custom JavaScript:</li>
  </ul>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'#myModal'</span><span className="p">).</span><span className="nx">on</span><span className="p">(</span><span className="s1">'shown.bs.modal'</span><span className="p">,</span> <span className="kd">function</span> <span className="p">()</span> <span className="p">{"{"}</span>{"\n"}{"  "}<span className="nx">$</span><span className="p">(</span><span className="s1">'#myInput'</span><span className="p">).</span><span className="nx">trigger</span><span className="p">(</span><span className="s1">'focus'</span><span className="p">)</span>{"\n"}<span className="p">{"}"})</span></code></pre></figure>
  <div className="bd-callout bd-callout-info">
    <p>The animation effect of this component is dependent on the <code className="highlighter-rouge">prefers-reduced-motion</code> media query. See the <a href="/docs/4.2/getting-started/accessibility/#reduced-motion">reduced motion section of our accessibility documentation</a>.</p>
  </div>
  <p>Keep reading for demos and usage guidelines.</p>
  <h2 id="examples"><span className="bd-content-title">Examples</span></h2>
  <h3 id="modal-components"><span className="bd-content-title">Modal components</span></h3>
  <p>Below is a <em>static</em> modal example (meaning its <code className="highlighter-rouge">position</code> and <code className="highlighter-rouge">display</code> have been overridden). Included are the modal header, modal body (required for <code className="highlighter-rouge">padding</code>), and modal footer (optional). We ask that you include modal headers with dismiss actions whenever possible, or provide another explicit dismiss action.</p>
  <div className="bd-example bd-example-modal">
    <div className="modal" tabIndex={-1} role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal"</span> <span className="na">tabindex=</span><span className="s">"-1"</span> <span className="na">role=</span><span className="s">"dialog"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal-dialog"</span> <span className="na">role=</span><span className="s">"document"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal-content"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal-header"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;h5</span> <span className="na">class=</span><span className="s">"modal-title"</span><span className="nt">&gt;</span>Modal title<span className="nt">&lt;/h5&gt;</span>{"\n"}{"        "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"close"</span> <span className="na">data-dismiss=</span><span className="s">"modal"</span> <span className="na">aria-label=</span><span className="s">"Close"</span><span className="nt">&gt;</span>{"\n"}{"          "}<span className="nt">&lt;span</span> <span className="na">aria-hidden=</span><span className="s">"true"</span><span className="nt">&gt;</span><span className="ni">&amp;times;</span><span className="nt">&lt;/span&gt;</span>{"\n"}{"        "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"      "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal-body"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;p&gt;</span>Modal body text goes here.<span className="nt">&lt;/p&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"      "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal-footer"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span> <span className="na">data-dismiss=</span><span className="s">"modal"</span><span className="nt">&gt;</span>Close<span className="nt">&lt;/button&gt;</span>{"\n"}{"        "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span><span className="nt">&gt;</span>Save changes<span className="nt">&lt;/button&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <h3 id="live-demo"><span className="bd-content-title">Live demo</span></h3>
  <p>Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page.</p>
  <div id="exampleModalLive" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLiveLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLiveLabel">Modal title</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <p>Woohoo, you're reading this text in a modal!</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  <div className="bd-example">
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLive">
      Launch demo modal
    </button>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="c">&lt;!-- Button trigger modal --&gt;</span>{"\n"}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span> <span className="na">data-toggle=</span><span className="s">"modal"</span> <span className="na">data-target=</span><span className="s">"#exampleModal"</span><span className="nt">&gt;</span>{"\n"}{"  "}Launch demo modal{"\n"}<span className="nt">&lt;/button&gt;</span>{"\n"}{"\n"}<span className="c">&lt;!-- Modal --&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal fade"</span> <span className="na">id=</span><span className="s">"exampleModal"</span> <span className="na">tabindex=</span><span className="s">"-1"</span> <span className="na">role=</span><span className="s">"dialog"</span> <span className="na">aria-labelledby=</span><span className="s">"exampleModalLabel"</span> <span className="na">aria-hidden=</span><span className="s">"true"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal-dialog"</span> <span className="na">role=</span><span className="s">"document"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal-content"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal-header"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;h5</span> <span className="na">class=</span><span className="s">"modal-title"</span> <span className="na">id=</span><span className="s">"exampleModalLabel"</span><span className="nt">&gt;</span>Modal title<span className="nt">&lt;/h5&gt;</span>{"\n"}{"        "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"close"</span> <span className="na">data-dismiss=</span><span className="s">"modal"</span> <span className="na">aria-label=</span><span className="s">"Close"</span><span className="nt">&gt;</span>{"\n"}{"          "}<span className="nt">&lt;span</span> <span className="na">aria-hidden=</span><span className="s">"true"</span><span className="nt">&gt;</span><span className="ni">&amp;times;</span><span className="nt">&lt;/span&gt;</span>{"\n"}{"        "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"      "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal-body"</span><span className="nt">&gt;</span>{"\n"}{"        "}...{"\n"}{"      "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"      "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal-footer"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span> <span className="na">data-dismiss=</span><span className="s">"modal"</span><span className="nt">&gt;</span>Close<span className="nt">&lt;/button&gt;</span>{"\n"}{"        "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span><span className="nt">&gt;</span>Save changes<span className="nt">&lt;/button&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <h3 id="scrolling-long-content"><span className="bd-content-title">Scrolling long content</span></h3>
  <p>When modals become too long for the user’s viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean.</p>
  <div id="exampleModalLong" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  <div className="bd-example">
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
      Launch demo modal
    </button>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="c">&lt;!-- Button trigger modal --&gt;</span>{"\n"}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span> <span className="na">data-toggle=</span><span className="s">"modal"</span> <span className="na">data-target=</span><span className="s">"#exampleModalLong"</span><span className="nt">&gt;</span>{"\n"}{"  "}Launch demo modal{"\n"}<span className="nt">&lt;/button&gt;</span>{"\n"}{"\n"}<span className="c">&lt;!-- Modal --&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal fade"</span> <span className="na">id=</span><span className="s">"exampleModalLong"</span> <span className="na">tabindex=</span><span className="s">"-1"</span> <span className="na">role=</span><span className="s">"dialog"</span> <span className="na">aria-labelledby=</span><span className="s">"exampleModalLongTitle"</span> <span className="na">aria-hidden=</span><span className="s">"true"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal-dialog"</span> <span className="na">role=</span><span className="s">"document"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal-content"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal-header"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;h5</span> <span className="na">class=</span><span className="s">"modal-title"</span> <span className="na">id=</span><span className="s">"exampleModalLongTitle"</span><span className="nt">&gt;</span>Modal title<span className="nt">&lt;/h5&gt;</span>{"\n"}{"        "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"close"</span> <span className="na">data-dismiss=</span><span className="s">"modal"</span> <span className="na">aria-label=</span><span className="s">"Close"</span><span className="nt">&gt;</span>{"\n"}{"          "}<span className="nt">&lt;span</span> <span className="na">aria-hidden=</span><span className="s">"true"</span><span className="nt">&gt;</span><span className="ni">&amp;times;</span><span className="nt">&lt;/span&gt;</span>{"\n"}{"        "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"      "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal-body"</span><span className="nt">&gt;</span>{"\n"}{"        "}...{"\n"}{"      "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"      "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal-footer"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span> <span className="na">data-dismiss=</span><span className="s">"modal"</span><span className="nt">&gt;</span>Close<span className="nt">&lt;/button&gt;</span>{"\n"}{"        "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span><span className="nt">&gt;</span>Save changes<span className="nt">&lt;/button&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <h3 id="vertically-centered"><span className="bd-content-title">Vertically centered</span></h3>
  <p>Add <code className="highlighter-rouge">.modal-dialog-centered</code> to <code className="highlighter-rouge">.modal-dialog</code> to vertically center the modal.</p>
  <div id="exampleModalCenter" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalCenterTitle">Modal title</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  <div className="bd-example">
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
      Launch demo modal
    </button>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="c">&lt;!-- Button trigger modal --&gt;</span>{"\n"}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span> <span className="na">data-toggle=</span><span className="s">"modal"</span> <span className="na">data-target=</span><span className="s">"#exampleModalCenter"</span><span className="nt">&gt;</span>{"\n"}{"  "}Launch demo modal{"\n"}<span className="nt">&lt;/button&gt;</span>{"\n"}{"\n"}<span className="c">&lt;!-- Modal --&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal fade"</span> <span className="na">id=</span><span className="s">"exampleModalCenter"</span> <span className="na">tabindex=</span><span className="s">"-1"</span> <span className="na">role=</span><span className="s">"dialog"</span> <span className="na">aria-labelledby=</span><span className="s">"exampleModalCenterTitle"</span> <span className="na">aria-hidden=</span><span className="s">"true"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal-dialog modal-dialog-centered"</span> <span className="na">role=</span><span className="s">"document"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal-content"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal-header"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;h5</span> <span className="na">class=</span><span className="s">"modal-title"</span> <span className="na">id=</span><span className="s">"exampleModalCenterTitle"</span><span className="nt">&gt;</span>Modal title<span className="nt">&lt;/h5&gt;</span>{"\n"}{"        "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"close"</span> <span className="na">data-dismiss=</span><span className="s">"modal"</span> <span className="na">aria-label=</span><span className="s">"Close"</span><span className="nt">&gt;</span>{"\n"}{"          "}<span className="nt">&lt;span</span> <span className="na">aria-hidden=</span><span className="s">"true"</span><span className="nt">&gt;</span><span className="ni">&amp;times;</span><span className="nt">&lt;/span&gt;</span>{"\n"}{"        "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"      "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal-body"</span><span className="nt">&gt;</span>{"\n"}{"        "}...{"\n"}{"      "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"      "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal-footer"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span> <span className="na">data-dismiss=</span><span className="s">"modal"</span><span className="nt">&gt;</span>Close<span className="nt">&lt;/button&gt;</span>{"\n"}{"        "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span><span className="nt">&gt;</span>Save changes<span className="nt">&lt;/button&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <h3 id="tooltips-and-popovers"><span className="bd-content-title">Tooltips and popovers</span></h3>
  <p><a href="/docs/4.2/components/tooltips/">Tooltips</a> and <a href="/docs/4.2/components/popovers/">popovers</a> can be placed within modals as needed. When modals are closed, any tooltips and popovers within are also automatically dismissed.</p>
  <div id="exampleModalPopovers" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="exampleModalPopoversLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalPopoversLabel">Modal title</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <h5>Popover in a modal</h5>
          <p>This <a href="#" role="button" className="btn btn-secondary popover-test" title data-content="Popover body content is set in this attribute." data-container="#exampleModalPopovers" data-original-title="Popover title">button</a> triggers a popover on click.</p>
          <hr />
          <h5>Tooltips in a modal</h5>
          <p><a href="#" className="tooltip-test" title data-container="#exampleModalPopovers" data-original-title="Tooltip">This link</a> and <a href="#" className="tooltip-test" title data-container="#exampleModalPopovers" data-original-title="Tooltip">that link</a> have tooltips on hover.</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  <div className="bd-example">
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalPopovers">
      Launch demo modal
    </button>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal-body"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;h5&gt;</span>Popover in a modal<span className="nt">&lt;/h5&gt;</span>{"\n"}{"  "}<span className="nt">&lt;p&gt;</span>This <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">role=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary popover-test"</span> <span className="na">title=</span><span className="s">"Popover title"</span> <span className="na">data-content=</span><span className="s">"Popover body content is set in this attribute."</span><span className="nt">&gt;</span>button<span className="nt">&lt;/a&gt;</span> triggers a popover on click.<span className="nt">&lt;/p&gt;</span>{"\n"}{"  "}<span className="nt">&lt;hr&gt;</span>{"\n"}{"  "}<span className="nt">&lt;h5&gt;</span>Tooltips in a modal<span className="nt">&lt;/h5&gt;</span>{"\n"}{"  "}<span className="nt">&lt;p&gt;&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"tooltip-test"</span> <span className="na">title=</span><span className="s">"Tooltip"</span><span className="nt">&gt;</span>This link<span className="nt">&lt;/a&gt;</span> and <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"tooltip-test"</span> <span className="na">title=</span><span className="s">"Tooltip"</span><span className="nt">&gt;</span>that link<span className="nt">&lt;/a&gt;</span> have tooltips on hover.<span className="nt">&lt;/p&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <h3 id="using-the-grid"><span className="bd-content-title">Using the grid</span></h3>
  <p>Utilize the Bootstrap grid system within a modal by nesting <code className="highlighter-rouge">.container-fluid</code> within the <code className="highlighter-rouge">.modal-body</code>. Then, use the normal grid system classes as you would anywhere else.</p>
  <div id="gridSystemModal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="gridModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="gridModalLabel">Grids in modals</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
        </div>
        <div className="modal-body">
          <div className="container-fluid bd-example-row">
            <div className="row">
              <div className="col-md-4">.col-md-4</div>
              <div className="col-md-4 ml-auto">.col-md-4 .ml-auto</div>
            </div>
            <div className="row">
              <div className="col-md-3 ml-auto">.col-md-3 .ml-auto</div>
              <div className="col-md-2 ml-auto">.col-md-2 .ml-auto</div>
            </div>
            <div className="row">
              <div className="col-md-6 ml-auto">.col-md-6 .ml-auto</div>
            </div>
            <div className="row">
              <div className="col-sm-9">
                Level 1: .col-sm-9
                <div className="row">
                  <div className="col-8 col-sm-6">
                    Level 2: .col-8 .col-sm-6
                  </div>
                  <div className="col-4 col-sm-6">
                    Level 2: .col-4 .col-sm-6
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  <div className="bd-example">
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#gridSystemModal">
      Launch demo modal
    </button>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal-body"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"container-fluid"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-md-4"</span><span className="nt">&gt;</span>.col-md-4<span className="nt">&lt;/div&gt;</span>{"\n"}{"      "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-md-4 ml-auto"</span><span className="nt">&gt;</span>.col-md-4 .ml-auto<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-md-3 ml-auto"</span><span className="nt">&gt;</span>.col-md-3 .ml-auto<span className="nt">&lt;/div&gt;</span>{"\n"}{"      "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-md-2 ml-auto"</span><span className="nt">&gt;</span>.col-md-2 .ml-auto<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-md-6 ml-auto"</span><span className="nt">&gt;</span>.col-md-6 .ml-auto<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-sm-9"</span><span className="nt">&gt;</span>{"\n"}{"        "}Level 1: .col-sm-9{"\n"}{"        "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row"</span><span className="nt">&gt;</span>{"\n"}{"          "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-8 col-sm-6"</span><span className="nt">&gt;</span>{"\n"}{"            "}Level 2: .col-8 .col-sm-6{"\n"}{"          "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"          "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-4 col-sm-6"</span><span className="nt">&gt;</span>{"\n"}{"            "}Level 2: .col-4 .col-sm-6{"\n"}{"          "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"        "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <h3 id="varying-modal-content"><span className="bd-content-title">Varying modal content</span></h3>
  <p>Have a bunch of buttons that all trigger the same modal with slightly different contents? Use <code className="highlighter-rouge">event.relatedTarget</code> and <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes">HTML <code className="highlighter-rouge">data-*</code> attributes</a> (possibly <a href="https://api.jquery.com/data/">via jQuery</a>) to vary the contents of the modal depending on which button was clicked.</p>
  <p>Below is a live demo followed by example HTML and JavaScript. For more information, <a href="#events">read the modal events docs</a> for details on <code className="highlighter-rouge">relatedTarget</code>.</p>
  <div className="bd-example">
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Open modal for @mdo</button>
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@fat">Open modal for @fat</button>
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">Open modal for @getbootstrap</button>
    <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">New message</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
                <input type="text" className="form-control" id="recipient-name" />
              </div>
              <div className="form-group">
                <label htmlFor="message-text" className="col-form-label">Message:</label>
                <textarea className="form-control" id="message-text" defaultValue={""} />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Send message</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span> <span className="na">data-toggle=</span><span className="s">"modal"</span> <span className="na">data-target=</span><span className="s">"#exampleModal"</span> <span className="na">data-whatever=</span><span className="s">"@mdo"</span><span className="nt">&gt;</span>Open modal for @mdo<span className="nt">&lt;/button&gt;</span>{"\n"}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span> <span className="na">data-toggle=</span><span className="s">"modal"</span> <span className="na">data-target=</span><span className="s">"#exampleModal"</span> <span className="na">data-whatever=</span><span className="s">"@fat"</span><span className="nt">&gt;</span>Open modal for @fat<span className="nt">&lt;/button&gt;</span>{"\n"}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span> <span className="na">data-toggle=</span><span className="s">"modal"</span> <span className="na">data-target=</span><span className="s">"#exampleModal"</span> <span className="na">data-whatever=</span><span className="s">"@getbootstrap"</span><span className="nt">&gt;</span>Open modal for @getbootstrap<span className="nt">&lt;/button&gt;</span>{"\n"}{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal fade"</span> <span className="na">id=</span><span className="s">"exampleModal"</span> <span className="na">tabindex=</span><span className="s">"-1"</span> <span className="na">role=</span><span className="s">"dialog"</span> <span className="na">aria-labelledby=</span><span className="s">"exampleModalLabel"</span> <span className="na">aria-hidden=</span><span className="s">"true"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal-dialog"</span> <span className="na">role=</span><span className="s">"document"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal-content"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal-header"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;h5</span> <span className="na">class=</span><span className="s">"modal-title"</span> <span className="na">id=</span><span className="s">"exampleModalLabel"</span><span className="nt">&gt;</span>New message<span className="nt">&lt;/h5&gt;</span>{"\n"}{"        "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"close"</span> <span className="na">data-dismiss=</span><span className="s">"modal"</span> <span className="na">aria-label=</span><span className="s">"Close"</span><span className="nt">&gt;</span>{"\n"}{"          "}<span className="nt">&lt;span</span> <span className="na">aria-hidden=</span><span className="s">"true"</span><span className="nt">&gt;</span><span className="ni">&amp;times;</span><span className="nt">&lt;/span&gt;</span>{"\n"}{"        "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"      "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal-body"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;form&gt;</span>{"\n"}{"          "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-group"</span><span className="nt">&gt;</span>{"\n"}{"            "}<span className="nt">&lt;label</span> <span className="na">for=</span><span className="s">"recipient-name"</span> <span className="na">class=</span><span className="s">"col-form-label"</span><span className="nt">&gt;</span>Recipient:<span className="nt">&lt;/label&gt;</span>{"\n"}{"            "}<span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"text"</span> <span className="na">class=</span><span className="s">"form-control"</span> <span className="na">id=</span><span className="s">"recipient-name"</span><span className="nt">&gt;</span>{"\n"}{"          "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"          "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-group"</span><span className="nt">&gt;</span>{"\n"}{"            "}<span className="nt">&lt;label</span> <span className="na">for=</span><span className="s">"message-text"</span> <span className="na">class=</span><span className="s">"col-form-label"</span><span className="nt">&gt;</span>Message:<span className="nt">&lt;/label&gt;</span>{"\n"}{"            "}<span className="nt">&lt;textarea</span> <span className="na">class=</span><span className="s">"form-control"</span> <span className="na">id=</span><span className="s">"message-text"</span><span className="nt">&gt;&lt;/textarea&gt;</span>{"\n"}{"          "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"        "}<span className="nt">&lt;/form&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"      "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal-footer"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span> <span className="na">data-dismiss=</span><span className="s">"modal"</span><span className="nt">&gt;</span>Close<span className="nt">&lt;/button&gt;</span>{"\n"}{"        "}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span><span className="nt">&gt;</span>Send message<span className="nt">&lt;/button&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'#exampleModal'</span><span className="p">).</span><span className="nx">on</span><span className="p">(</span><span className="s1">'show.bs.modal'</span><span className="p">,</span> <span className="kd">function</span> <span className="p">(</span><span className="nx">event</span><span className="p">)</span> <span className="p">{"{"}</span>{"\n"}{"  "}<span className="kd">var</span> <span className="nx">button</span> <span className="o">=</span> <span className="nx">$</span><span className="p">(</span><span className="nx">event</span><span className="p">.</span><span className="nx">relatedTarget</span><span className="p">)</span> <span className="c1">// Button that triggered the modal</span>{"\n"}{"  "}<span className="kd">var</span> <span className="nx">recipient</span> <span className="o">=</span> <span className="nx">button</span><span className="p">.</span><span className="nx">data</span><span className="p">(</span><span className="s1">'whatever'</span><span className="p">)</span> <span className="c1">// Extract info from data-* attributes</span>{"\n"}{"  "}<span className="c1">// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).</span>{"\n"}{"  "}<span className="c1">// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.</span>{"\n"}{"  "}<span className="kd">var</span> <span className="nx">modal</span> <span className="o">=</span> <span className="nx">$</span><span className="p">(</span><span className="k">this</span><span className="p">)</span>{"\n"}{"  "}<span className="nx">modal</span><span className="p">.</span><span className="nx">find</span><span className="p">(</span><span className="s1">'.modal-title'</span><span className="p">).</span><span className="nx">text</span><span className="p">(</span><span className="s1">'New message to '</span> <span className="o">+</span> <span className="nx">recipient</span><span className="p">)</span>{"\n"}{"  "}<span className="nx">modal</span><span className="p">.</span><span className="nx">find</span><span className="p">(</span><span className="s1">'.modal-body input'</span><span className="p">).</span><span className="nx">val</span><span className="p">(</span><span className="nx">recipient</span><span className="p">)</span>{"\n"}<span className="p">{"}"})</span></code></pre></figure>
  <h3 id="change-animation"><span className="bd-content-title">Change animation</span></h3>
  <p>The <code className="highlighter-rouge">$modal-fade-transform</code> variable determines the transform state of <code className="highlighter-rouge">.modal-dialog</code> before the modal fade-in animation, the <code className="highlighter-rouge">$modal-show-transform</code> variable determines the transform of <code className="highlighter-rouge">.modal-dialog</code> at the end of the modal fade-in animation.</p>
  <p>If you want for example a zoom-in animation, you can set <code className="highlighter-rouge">$modal-fade-transform: scale(.8)</code>.</p>
  <h3 id="remove-animation"><span className="bd-content-title">Remove animation</span></h3>
  <p>For modals that simply appear rather than fade in to view, remove the <code className="highlighter-rouge">.fade</code> class from your modal markup.</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal"</span> <span className="na">tabindex=</span><span className="s">"-1"</span> <span className="na">role=</span><span className="s">"dialog"</span> <span className="na">aria-labelledby=</span><span className="s">"..."</span> <span className="na">aria-hidden=</span><span className="s">"true"</span><span className="nt">&gt;</span>{"\n"}{"  "}...{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <h3 id="dynamic-heights"><span className="bd-content-title">Dynamic heights</span></h3>
  <p>If the height of a modal changes while it is open, you should call <code className="highlighter-rouge">$('#myModal').modal('handleUpdate')</code> to readjust the modal’s position in case a scrollbar appears.</p>
  <h3 id="accessibility"><span className="bd-content-title">Accessibility</span></h3>
  <p>Be sure to add <code className="highlighter-rouge">role="dialog"</code> and <code className="highlighter-rouge">aria-labelledby="..."</code>, referencing the modal title, to <code className="highlighter-rouge">.modal</code>, and <code className="highlighter-rouge">role="document"</code> to the <code className="highlighter-rouge">.modal-dialog</code> itself. Additionally, you may give a description of your modal dialog with <code className="highlighter-rouge">aria-describedby</code> on <code className="highlighter-rouge">.modal</code>.</p>
  <h3 id="embedding-youtube-videos"><span className="bd-content-title">Embedding YouTube videos</span></h3>
  <p>Embedding YouTube videos in modals requires additional JavaScript not in Bootstrap to automatically stop playback and more. <a href="https://stackoverflow.com/questions/18622508/bootstrap-3-and-youtube-in-modal">See this helpful Stack Overflow post</a> for more information.</p>
  <h2 id="optional-sizes"><span className="bd-content-title">Optional sizes</span></h2>
  <p>Modals have three optional sizes, available via modifier classes to be placed on a <code className="highlighter-rouge">.modal-dialog</code>. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.</p>
  <table className="table table-bordered table-striped">
    <thead>
      <tr>
        <th>Size</th>
        <th>Class</th>
        <th>Modal max-width</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Small</td>
        <td><code>.modal-sm</code></td>
        <td><code>300px</code></td>
      </tr>
      <tr>
        <td>Default</td>
        <td className="text-muted">None</td>
        <td><code>500px</code></td>
      </tr>
      <tr>
        <td>Large</td>
        <td><code>.modal-lg</code></td>
        <td><code>800px</code></td>
      </tr>
      <tr>
        <td>Extra large</td>
        <td><code>.modal-xl</code></td>
        <td><code>1140px</code></td>
      </tr>
    </tbody>
  </table>
  <p>Our default modal without modifier class constitutes the “medium” size modal.</p>
  <div className="bd-example">
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-xl">Extra large modal</button>
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm">Small modal</button>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="c">&lt;!-- Extra large modal --&gt;</span>{"\n"}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span> <span className="na">data-toggle=</span><span className="s">"modal"</span> <span className="na">data-target=</span><span className="s">".bd-example-modal-xl"</span><span className="nt">&gt;</span>Extra large modal<span className="nt">&lt;/button&gt;</span>{"\n"}{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal fade bd-example-modal-xl"</span> <span className="na">tabindex=</span><span className="s">"-1"</span> <span className="na">role=</span><span className="s">"dialog"</span> <span className="na">aria-labelledby=</span><span className="s">"myExtraLargeModalLabel"</span> <span className="na">aria-hidden=</span><span className="s">"true"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal-dialog modal-xl"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal-content"</span><span className="nt">&gt;</span>{"\n"}{"      "}...{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span>{"\n"}{"\n"}<span className="c">&lt;!-- Large modal --&gt;</span>{"\n"}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span> <span className="na">data-toggle=</span><span className="s">"modal"</span> <span className="na">data-target=</span><span className="s">".bd-example-modal-lg"</span><span className="nt">&gt;</span>Large modal<span className="nt">&lt;/button&gt;</span>{"\n"}{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal fade bd-example-modal-lg"</span> <span className="na">tabindex=</span><span className="s">"-1"</span> <span className="na">role=</span><span className="s">"dialog"</span> <span className="na">aria-labelledby=</span><span className="s">"myLargeModalLabel"</span> <span className="na">aria-hidden=</span><span className="s">"true"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal-dialog modal-lg"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal-content"</span><span className="nt">&gt;</span>{"\n"}{"      "}...{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span>{"\n"}{"\n"}<span className="c">&lt;!-- Small modal --&gt;</span>{"\n"}<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span> <span className="na">data-toggle=</span><span className="s">"modal"</span> <span className="na">data-target=</span><span className="s">".bd-example-modal-sm"</span><span className="nt">&gt;</span>Small modal<span className="nt">&lt;/button&gt;</span>{"\n"}{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal fade bd-example-modal-sm"</span> <span className="na">tabindex=</span><span className="s">"-1"</span> <span className="na">role=</span><span className="s">"dialog"</span> <span className="na">aria-labelledby=</span><span className="s">"mySmallModalLabel"</span> <span className="na">aria-hidden=</span><span className="s">"true"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal-dialog modal-sm"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal-content"</span><span className="nt">&gt;</span>{"\n"}{"      "}...{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <div className="modal fade bd-example-modal-xl" tabIndex={-1} role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title h4" id="myExtraLargeModalLabel">Extra large modal</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          ...
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade bd-example-modal-lg" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title h4" id="myLargeModalLabel">Large modal</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          ...
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade bd-example-modal-sm" tabIndex={-1} role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-sm">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title h4" id="mySmallModalLabel">Small modal</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          ...
        </div>
      </div>
    </div>
  </div>
  <h2 id="usage"><span className="bd-content-title">Usage</span></h2>
  <p>The modal plugin toggles your hidden content on demand, via data attributes or JavaScript. It also adds <code className="highlighter-rouge">.modal-open</code> to the <code className="highlighter-rouge">&lt;body&gt;</code> to override default scrolling behavior and generates a <code className="highlighter-rouge">.modal-backdrop</code> to provide a click area for dismissing shown modals when clicking outside the modal.</p>
  <h3 id="via-data-attributes"><span className="bd-content-title">Via data attributes</span></h3>
  <p>Activate a modal without writing JavaScript. Set <code className="highlighter-rouge">data-toggle="modal"</code> on a controller element, like a button, along with a <code className="highlighter-rouge">data-target="#foo"</code> or <code className="highlighter-rouge">href="#foo"</code> to target a specific modal to toggle.</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">data-toggle=</span><span className="s">"modal"</span> <span className="na">data-target=</span><span className="s">"#myModal"</span><span className="nt">&gt;</span>Launch modal<span className="nt">&lt;/button&gt;</span></code></pre></figure>
  <h3 id="via-javascript"><span className="bd-content-title">Via JavaScript</span></h3>
  <p>Call a modal with id <code className="highlighter-rouge">myModal</code> with a single line of JavaScript:</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'#myModal'</span><span className="p">).</span><span className="nx">modal</span><span className="p">(</span><span className="nx">options</span><span className="p">)</span></code></pre></figure>
  <h3 id="options"><span className="bd-content-title">Options</span></h3>
  <p>Options can be passed via data attributes or JavaScript. For data attributes, append the option name to <code className="highlighter-rouge">data-</code>, as in <code className="highlighter-rouge">data-backdrop=""</code>.</p>
  <table className="table table-bordered table-striped">
    <thead>
      <tr>
        <th style={{width: 100}}>Name</th>
        <th style={{width: 50}}>Type</th>
        <th style={{width: 50}}>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>backdrop</td>
        <td>boolean or the string <code>'static'</code></td>
        <td>true</td>
        <td>Includes a modal-backdrop element. Alternatively, specify <code>static</code> for a backdrop which doesn't close the modal on click.</td>
      </tr>
      <tr>
        <td>keyboard</td>
        <td>boolean</td>
        <td>true</td>
        <td>Closes the modal when escape key is pressed</td>
      </tr>
      <tr>
        <td>focus</td>
        <td>boolean</td>
        <td>true</td>
        <td>Puts the focus on the modal when initialized.</td>
      </tr>
      <tr>
        <td>show</td>
        <td>boolean</td>
        <td>true</td>
        <td>Shows the modal when initialized.</td>
      </tr>
    </tbody>
  </table>
  <h3 id="methods"><span className="bd-content-title">Methods</span></h3>
  <div className="bd-callout bd-callout-danger">
    <h4 id="asynchronous-methods-and-transitions">Asynchronous methods and transitions</h4>
    <p>All API methods are <strong>asynchronous</strong> and start a <strong>transition</strong>. They return to the caller as soon as the transition is started but <strong>before it ends</strong>. In addition, a method call on a <strong>transitioning component will be ignored</strong>.</p>
    <p><a href="/docs/4.2/getting-started/javascript/">See our JavaScript documentation for more information</a>.</p>
  </div>
  <h4 id="modaloptions"><span className="bd-content-title"><code className="highlighter-rouge">.modal(options)</code></span></h4>
  <p>Activates your content as a modal. Accepts an optional options <code className="highlighter-rouge">object</code>.</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'#myModal'</span><span className="p">).</span><span className="nx">modal</span><span className="p">({"{"}</span>{"\n"}{"  "}<span className="na">keyboard</span><span className="p">:</span> <span className="kc">false</span>{"\n"}<span className="p">{"}"})</span></code></pre></figure>
  <h4 id="modaltoggle"><span className="bd-content-title"><code className="highlighter-rouge">.modal('toggle')</code></span></h4>
  <p>Manually toggles a modal. <strong>Returns to the caller before the modal has actually been shown or hidden</strong> (i.e. before the <code className="highlighter-rouge">shown.bs.modal</code> or <code className="highlighter-rouge">hidden.bs.modal</code> event occurs).</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'#myModal'</span><span className="p">).</span><span className="nx">modal</span><span className="p">(</span><span className="s1">'toggle'</span><span className="p">)</span></code></pre></figure>
  <h4 id="modalshow"><span className="bd-content-title"><code className="highlighter-rouge">.modal('show')</code></span></h4>
  <p>Manually opens a modal. <strong>Returns to the caller before the modal has actually been shown</strong> (i.e. before the <code className="highlighter-rouge">shown.bs.modal</code> event occurs).</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'#myModal'</span><span className="p">).</span><span className="nx">modal</span><span className="p">(</span><span className="s1">'show'</span><span className="p">)</span></code></pre></figure>
  <h4 id="modalhide"><span className="bd-content-title"><code className="highlighter-rouge">.modal('hide')</code></span></h4>
  <p>Manually hides a modal. <strong>Returns to the caller before the modal has actually been hidden</strong> (i.e. before the <code className="highlighter-rouge">hidden.bs.modal</code> event occurs).</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'#myModal'</span><span className="p">).</span><span className="nx">modal</span><span className="p">(</span><span className="s1">'hide'</span><span className="p">)</span></code></pre></figure>
  <h4 id="modalhandleupdate"><span className="bd-content-title"><code className="highlighter-rouge">.modal('handleUpdate')</code></span></h4>
  <p>Manually readjust the modal’s position if the height of a modal changes while it is open (i.e. in case a scrollbar appears).</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'#myModal'</span><span className="p">).</span><span className="nx">modal</span><span className="p">(</span><span className="s1">'handleUpdate'</span><span className="p">)</span></code></pre></figure>
  <h4 id="modaldispose"><span className="bd-content-title"><code className="highlighter-rouge">.modal('dispose')</code></span></h4>
  <p>Destroys an element’s modal.</p>
  <h3 id="events"><span className="bd-content-title">Events</span></h3>
  <p>Bootstrap’s modal class exposes a few events for hooking into modal functionality. All modal events are fired at the modal itself (i.e. at the <code className="highlighter-rouge">&lt;div class="modal"&gt;</code>).</p>
  <table className="table table-bordered table-striped">
    <thead>
      <tr>
        <th style={{width: 150}}>Event Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>show.bs.modal</td>
        <td>This event fires immediately when the <code>show</code> instance method is called. If caused by a click, the clicked element is available as the <code>relatedTarget</code> property of the event.</td>
      </tr>
      <tr>
        <td>shown.bs.modal</td>
        <td>This event is fired when the modal has been made visible to the user (will wait for CSS transitions to complete). If caused by a click, the clicked element is available as the <code>relatedTarget</code> property of the event.</td>
      </tr>
      <tr>
        <td>hide.bs.modal</td>
        <td>This event is fired immediately when the <code>hide</code> instance method has been called.</td>
      </tr>
      <tr>
        <td>hidden.bs.modal</td>
        <td>This event is fired when the modal has finished being hidden from the user (will wait for CSS transitions to complete).</td>
      </tr>
    </tbody>
  </table>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'#myModal'</span><span className="p">).</span><span className="nx">on</span><span className="p">(</span><span className="s1">'hidden.bs.modal'</span><span className="p">,</span> <span className="kd">function</span> <span className="p">(</span><span className="nx">e</span><span className="p">)</span> <span className="p">{"{"}</span>{"\n"}{"  "}<span className="c1">// do something...</span>{"\n"}<span className="p">{"}"})</span></code></pre></figure>
</main>

    );
  }
}