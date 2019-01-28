import React from 'react';

export default class Collapse extends React.Component {
  render() {
    return (
<main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
  <h1 className="bd-title" id="content">Collapse</h1>
  <p className="bd-lead">Toggle the visibility of content across your project with a few classes and our JavaScript plugins.</p>
  
  <h2 id="how-it-works"><span className="bd-content-title">How it works</span></h2>
  <p>The collapse JavaScript plugin is used to show and hide content. Buttons or anchors are used as triggers that are mapped to specific elements you toggle. Collapsing an element will animate the <code className="highlighter-rouge">height</code> from its current value to <code className="highlighter-rouge">0</code>. Given how CSS handles animations, you cannot use <code className="highlighter-rouge">padding</code> on a <code className="highlighter-rouge">.collapse</code> element. Instead, use the class as an independent wrapping element.</p>
  <div className="bd-callout bd-callout-info">
    <p>The animation effect of this component is dependent on the <code className="highlighter-rouge">prefers-reduced-motion</code> media query. See the <a href="/docs/4.2/getting-started/accessibility/#reduced-motion">reduced motion section of our accessibility documentation</a>.</p>
  </div>
  <h2 id="example"><span className="bd-content-title">Example</span></h2>
  <p>Click the buttons below to show and hide another element via class changes:</p>
  <ul>
    <li><code className="highlighter-rouge">.collapse</code> hides content</li>
    <li><code className="highlighter-rouge">.collapsing</code> is applied during transitions</li>
    <li><code className="highlighter-rouge">.collapse.show</code> shows content</li>
  </ul>
  <p>You can use a link with the <code className="highlighter-rouge">href</code> attribute, or a button with the <code className="highlighter-rouge">data-target</code> attribute. In both cases, the <code className="highlighter-rouge">data-toggle="collapse"</code> is required.</p>
  <div className="bd-example">
    <p>
      <a className="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        Link with href
      </a>
      <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
        Button with data-target
      </button>
    </p>
    <div className="collapse" id="collapseExample">
      <div className="card card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;p&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span> <span className="na">data-toggle=</span><span className="s">"collapse"</span> <span className="na">href=</span><span className="s">"#collapseExample"</span> <span className="na">role=</span><span className="s">"button"</span> <span className="na">aria-expanded=</span><span className="s">"false"</span> <span className="na">aria-controls=</span><span className="s">"collapseExample"</span><span className="nt">&gt;</span>{"\n"}{"    "}Link with href{"\n"}{"  "}<span className="nt">&lt;/a&gt;</span>{"\n"}{"  "}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">data-toggle=</span><span className="s">"collapse"</span> <span className="na">data-target=</span><span className="s">"#collapseExample"</span> <span className="na">aria-expanded=</span><span className="s">"false"</span> <span className="na">aria-controls=</span><span className="s">"collapseExample"</span><span className="nt">&gt;</span>{"\n"}{"    "}Button with data-target{"\n"}{"  "}<span className="nt">&lt;/button&gt;</span>{"\n"}<span className="nt">&lt;/p&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"collapse"</span> <span className="na">id=</span><span className="s">"collapseExample"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card card-body"</span><span className="nt">&gt;</span>{"\n"}{"    "}Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <h2 id="multiple-targets"><span className="bd-content-title">Multiple targets</span></h2>
  <p>A <code className="highlighter-rouge">&lt;button&gt;</code> or <code className="highlighter-rouge">&lt;a&gt;</code> can show and hide multiple elements by referencing them with a JQuery selector in its <code className="highlighter-rouge">href</code> or <code className="highlighter-rouge">data-target</code> attribute.
    Multiple <code className="highlighter-rouge">&lt;button&gt;</code> or <code className="highlighter-rouge">&lt;a&gt;</code> can show and hide an element if they each reference it with their <code className="highlighter-rouge">href</code> or <code className="highlighter-rouge">data-target</code> attribute</p>
  <div className="bd-example">
    <p>
      <a className="btn btn-primary" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
      <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
      <button className="btn btn-primary" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
    </p>
    <div className="row">
      <div className="col">
        <div className="collapse multi-collapse" id="multiCollapseExample1">
          <div className="card card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </div>
      </div>
      <div className="col">
        <div className="collapse multi-collapse" id="multiCollapseExample2">
          <div className="card card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;p&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span> <span className="na">data-toggle=</span><span className="s">"collapse"</span> <span className="na">href=</span><span className="s">"#multiCollapseExample1"</span> <span className="na">role=</span><span className="s">"button"</span> <span className="na">aria-expanded=</span><span className="s">"false"</span> <span className="na">aria-controls=</span><span className="s">"multiCollapseExample1"</span><span className="nt">&gt;</span>Toggle first element<span className="nt">&lt;/a&gt;</span>{"\n"}{"  "}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">data-toggle=</span><span className="s">"collapse"</span> <span className="na">data-target=</span><span className="s">"#multiCollapseExample2"</span> <span className="na">aria-expanded=</span><span className="s">"false"</span> <span className="na">aria-controls=</span><span className="s">"multiCollapseExample2"</span><span className="nt">&gt;</span>Toggle second element<span className="nt">&lt;/button&gt;</span>{"\n"}{"  "}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">data-toggle=</span><span className="s">"collapse"</span> <span className="na">data-target=</span><span className="s">".multi-collapse"</span> <span className="na">aria-expanded=</span><span className="s">"false"</span> <span className="na">aria-controls=</span><span className="s">"multiCollapseExample1 multiCollapseExample2"</span><span className="nt">&gt;</span>Toggle both elements<span className="nt">&lt;/button&gt;</span>{"\n"}<span className="nt">&lt;/p&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"collapse multi-collapse"</span> <span className="na">id=</span><span className="s">"multiCollapseExample1"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card card-body"</span><span className="nt">&gt;</span>{"\n"}{"        "}Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.{"\n"}{"      "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"collapse multi-collapse"</span> <span className="na">id=</span><span className="s">"multiCollapseExample2"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card card-body"</span><span className="nt">&gt;</span>{"\n"}{"        "}Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.{"\n"}{"      "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <h2 id="accordion-example"><span className="bd-content-title">Accordion example</span></h2>
  <p>Using the <a href="/docs/4.2/components/card/">card</a> component, you can extend the default collapse behavior to create an accordion. To properly achieve the accordion style, be sure to use <code className="highlighter-rouge">.accordion</code> as a wrapper.</p>
  <div className="bd-example">
    <div className="accordion" id="accordionExample">
      <div className="card">
        <div className="card-header" id="headingOne">
          <h2 className="mb-0">
            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Collapsible Group Item #1
            </button>
          </h2>
        </div>
        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
          <div className="card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingTwo">
          <h2 className="mb-0">
            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Collapsible Group Item #2
            </button>
          </h2>
        </div>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
          <div className="card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingThree">
          <h2 className="mb-0">
            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Collapsible Group Item #3
            </button>
          </h2>
        </div>
        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
          <div className="card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"accordion"</span> <span className="na">id=</span><span className="s">"accordionExample"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card-header"</span> <span className="na">id=</span><span className="s">"headingOne"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;h2</span> <span className="na">class=</span><span className="s">"mb-0"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-link"</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">data-toggle=</span><span className="s">"collapse"</span> <span className="na">data-target=</span><span className="s">"#collapseOne"</span> <span className="na">aria-expanded=</span><span className="s">"true"</span> <span className="na">aria-controls=</span><span className="s">"collapseOne"</span><span className="nt">&gt;</span>{"\n"}{"          "}Collapsible Group Item #1{"\n"}{"        "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/h2&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">id=</span><span className="s">"collapseOne"</span> <span className="na">class=</span><span className="s">"collapse show"</span> <span className="na">aria-labelledby=</span><span className="s">"headingOne"</span> <span className="na">data-parent=</span><span className="s">"#accordionExample"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card-body"</span><span className="nt">&gt;</span>{"\n"}{"        "}Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.{"\n"}{"      "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card-header"</span> <span className="na">id=</span><span className="s">"headingTwo"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;h2</span> <span className="na">class=</span><span className="s">"mb-0"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-link collapsed"</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">data-toggle=</span><span className="s">"collapse"</span> <span className="na">data-target=</span><span className="s">"#collapseTwo"</span> <span className="na">aria-expanded=</span><span className="s">"false"</span> <span className="na">aria-controls=</span><span className="s">"collapseTwo"</span><span className="nt">&gt;</span>{"\n"}{"          "}Collapsible Group Item #2{"\n"}{"        "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/h2&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">id=</span><span className="s">"collapseTwo"</span> <span className="na">class=</span><span className="s">"collapse"</span> <span className="na">aria-labelledby=</span><span className="s">"headingTwo"</span> <span className="na">data-parent=</span><span className="s">"#accordionExample"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card-body"</span><span className="nt">&gt;</span>{"\n"}{"        "}Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.{"\n"}{"      "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card-header"</span> <span className="na">id=</span><span className="s">"headingThree"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;h2</span> <span className="na">class=</span><span className="s">"mb-0"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-link collapsed"</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">data-toggle=</span><span className="s">"collapse"</span> <span className="na">data-target=</span><span className="s">"#collapseThree"</span> <span className="na">aria-expanded=</span><span className="s">"false"</span> <span className="na">aria-controls=</span><span className="s">"collapseThree"</span><span className="nt">&gt;</span>{"\n"}{"          "}Collapsible Group Item #3{"\n"}{"        "}<span className="nt">&lt;/button&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/h2&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">id=</span><span className="s">"collapseThree"</span> <span className="na">class=</span><span className="s">"collapse"</span> <span className="na">aria-labelledby=</span><span className="s">"headingThree"</span> <span className="na">data-parent=</span><span className="s">"#accordionExample"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card-body"</span><span className="nt">&gt;</span>{"\n"}{"        "}Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.{"\n"}{"      "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <h2 id="accessibility"><span className="bd-content-title">Accessibility</span></h2>
  <p>Be sure to add <code className="highlighter-rouge">aria-expanded</code> to the control element. This attribute explicitly conveys the current state of the collapsible element tied to the control to screen readers and similar assistive technologies. If the collapsible element is closed by default, the attribute on the control element should have a value of <code className="highlighter-rouge">aria-expanded="false"</code>. If you’ve set the collapsible element to be open by default using the <code className="highlighter-rouge">show</code> class, set <code className="highlighter-rouge">aria-expanded="true"</code> on the control instead. The plugin will automatically toggle this attribute on the control based on whether or not the collapsible element has been opened or closed (via JavaScript, or because the user triggered another control element also tied to the same collapsbile element). If the control element’s HTML element is not a button (e.g., an <code className="highlighter-rouge">&lt;a&gt;</code> or <code className="highlighter-rouge">&lt;div&gt;</code>), the attribute <code className="highlighter-rouge">role="button"</code> should be added to the element.</p>
  <p>If your control element is targeting a single collapsible element – i.e. the <code className="highlighter-rouge">data-target</code> attribute is pointing to an <code className="highlighter-rouge">id</code> selector – you should add the <code className="highlighter-rouge">aria-controls</code> attribute to the control element, containing the <code className="highlighter-rouge">id</code> of the collapsible element. Modern screen readers and similar assistive technologies make use of this attribute to provide users with additional shortcuts to navigate directly to the collapsible element itself.</p>
  <p>Note that Bootstrap’s current implementation does not cover the various keyboard interactions described in the <a href="https://www.w3.org/TR/wai-aria-practices-1.1/#accordion">WAI-ARIA Authoring Practices 1.1 accordion pattern</a> - you will need to include these yourself with custom JavaScript.</p>
  <h2 id="usage"><span className="bd-content-title">Usage</span></h2>
  <p>The collapse plugin utilizes a few classes to handle the heavy lifting:</p>
  <ul>
    <li><code className="highlighter-rouge">.collapse</code> hides the content</li>
    <li><code className="highlighter-rouge">.collapse.show</code> shows the content</li>
    <li><code className="highlighter-rouge">.collapsing</code> is added when the transition starts, and removed when it finishes</li>
  </ul>
  <p>These classes can be found in <code className="highlighter-rouge">_transitions.scss</code>.</p>
  <h3 id="via-data-attributes"><span className="bd-content-title">Via data attributes</span></h3>
  <p>Just add <code className="highlighter-rouge">data-toggle="collapse"</code> and a <code className="highlighter-rouge">data-target</code> to the element to automatically assign control of one or more collapsible elements. The <code className="highlighter-rouge">data-target</code> attribute accepts a CSS selector to apply the collapse to. Be sure to add the class <code className="highlighter-rouge">collapse</code> to the collapsible element. If you’d like it to default open, add the additional class <code className="highlighter-rouge">show</code>.</p>
  <p>To add accordion-like group management to a collapsible area, add the data attribute <code className="highlighter-rouge">data-parent="#selector"</code>. Refer to the demo to see this in action.</p>
  <h3 id="via-javascript"><span className="bd-content-title">Via JavaScript</span></h3>
  <p>Enable manually with:</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'.collapse'</span><span className="p">).</span><span className="nx">collapse</span><span className="p">()</span></code></pre></figure>
  <h3 id="options"><span className="bd-content-title">Options</span></h3>
  <p>Options can be passed via data attributes or JavaScript. For data attributes, append the option name to <code className="highlighter-rouge">data-</code>, as in <code className="highlighter-rouge">data-parent=""</code>.</p>
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
        <td>parent</td>
        <td>selector | jQuery object | DOM element </td>
        <td>false</td>
        <td>If parent is provided, then all collapsible elements under the specified parent will be closed when this collapsible item is shown. (similar to traditional accordion behavior - this is dependent on the <code>card</code> class). The attribute has to be set on the target collapsible area.</td>
      </tr>
      <tr>
        <td>toggle</td>
        <td>boolean</td>
        <td>true</td>
        <td>Toggles the collapsible element on invocation</td>
      </tr>
    </tbody>
  </table>
  <h3 id="methods"><span className="bd-content-title">Methods</span></h3>
  <div className="bd-callout bd-callout-danger">
    <h4 id="asynchronous-methods-and-transitions">Asynchronous methods and transitions</h4>
    <p>All API methods are <strong>asynchronous</strong> and start a <strong>transition</strong>. They return to the caller as soon as the transition is started but <strong>before it ends</strong>. In addition, a method call on a <strong>transitioning component will be ignored</strong>.</p>
    <p><a href="/docs/4.2/getting-started/javascript/">See our JavaScript documentation for more information</a>.</p>
  </div>
  <h4 id="collapseoptions"><span className="bd-content-title"><code className="highlighter-rouge">.collapse(options)</code></span></h4>
  <p>Activates your content as a collapsible element. Accepts an optional options <code className="highlighter-rouge">object</code>.</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'#myCollapsible'</span><span className="p">).</span><span className="nx">collapse</span><span className="p">({"{"}</span>{"\n"}{"  "}<span className="na">toggle</span><span className="p">:</span> <span className="kc">false</span>{"\n"}<span className="p">{"}"})</span></code></pre></figure>
  <h4 id="collapsetoggle"><span className="bd-content-title"><code className="highlighter-rouge">.collapse('toggle')</code></span></h4>
  <p>Toggles a collapsible element to shown or hidden. <strong>Returns to the caller before the collapsible element has actually been shown or hidden</strong> (i.e. before the <code className="highlighter-rouge">shown.bs.collapse</code> or <code className="highlighter-rouge">hidden.bs.collapse</code> event occurs).</p>
  <h4 id="collapseshow"><span className="bd-content-title"><code className="highlighter-rouge">.collapse('show')</code></span></h4>
  <p>Shows a collapsible element. <strong>Returns to the caller before the collapsible element has actually been shown</strong> (i.e. before the <code className="highlighter-rouge">shown.bs.collapse</code> event occurs).</p>
  <h4 id="collapsehide"><span className="bd-content-title"><code className="highlighter-rouge">.collapse('hide')</code></span></h4>
  <p>Hides a collapsible element. <strong>Returns to the caller before the collapsible element has actually been hidden</strong> (i.e. before the <code className="highlighter-rouge">hidden.bs.collapse</code> event occurs).</p>
  <h4 id="collapsedispose"><span className="bd-content-title"><code className="highlighter-rouge">.collapse('dispose')</code></span></h4>
  <p>Destroys an element’s collapse.</p>
  <h3 id="events"><span className="bd-content-title">Events</span></h3>
  <p>Bootstrap’s collapse class exposes a few events for hooking into collapse functionality.</p>
  <table className="table table-bordered table-striped">
    <thead>
      <tr>
        <th style={{width: 150}}>Event Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>show.bs.collapse</td>
        <td>This event fires immediately when the <code>show</code> instance method is called.</td>
      </tr>
      <tr>
        <td>shown.bs.collapse</td>
        <td>This event is fired when a collapse element has been made visible to the user (will wait for CSS transitions to complete).</td>
      </tr>
      <tr>
        <td>hide.bs.collapse</td>
        <td>This event is fired immediately when the <code>hide</code> method has been called.</td>
      </tr>
      <tr>
        <td>hidden.bs.collapse</td>
        <td>This event is fired when a collapse element has been hidden from the user (will wait for CSS transitions to complete).</td>
      </tr>
    </tbody>
  </table>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'#myCollapsible'</span><span className="p">).</span><span className="nx">on</span><span className="p">(</span><span className="s1">'hidden.bs.collapse'</span><span className="p">,</span> <span className="kd">function</span> <span className="p">()</span> <span className="p">{"{"}</span>{"\n"}{"  "}<span className="c1">// do something…</span>{"\n"}<span className="p">{"}"})</span></code></pre></figure>
</main>

    );
  }
}