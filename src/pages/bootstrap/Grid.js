import React from 'react';

export default class Grid extends React.Component {
  render() {
    return (
<main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
  <h1 className="bd-title" id="content">Grid system</h1>
  <p className="bd-lead">Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, five default responsive tiers, Sass variables and mixins, and dozens of predefined classes.</p>
  
  <h2>To do</h2>
  <ul>
    <li>UX tbd. would be nice to have some common examples.</li>
    <li>Let's decide a max-width................ </li>
  </ul>

  <h2 id="how-it-works"><span className="bd-content-title">How it works</span></h2>
  <p>Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">flexbox</a> and is fully responsive. Below is an example and an in-depth look at how the grid comes together.</p>
  <p><strong>New to or unfamiliar with flexbox?</strong> <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background">Read this CSS Tricks flexbox guide</a> for background, terminology, guidelines, and code snippets.</p>
  <div className="bd-example-row">
    <div className="bd-example">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            One of three columns
          </div>
          <div className="col-sm">
            One of three columns
          </div>
          <div className="col-sm">
            One of three columns
          </div>
        </div>
      </div>
    </div>
    <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"container"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-sm"</span><span className="nt">&gt;</span>{"\n"}{"      "}One of three columns{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-sm"</span><span className="nt">&gt;</span>{"\n"}{"      "}One of three columns{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-sm"</span><span className="nt">&gt;</span>{"\n"}{"      "}One of three columns{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  </div>
  <p>The above example creates three equal-width columns on small, medium, large, and extra large devices using our predefined grid classes. Those columns are centered in the page with the parent <code className="highlighter-rouge">.container</code>.</p>
  <p>Breaking it down, here’s how it works:</p>
  <ul>
    <li>Containers provide a means to center and horizontally pad your site’s contents. Use <code className="highlighter-rouge">.container</code> for a responsive pixel width or <code className="highlighter-rouge">.container-fluid</code> for <code className="highlighter-rouge">width: 100%</code> across all viewport and device sizes.</li>
    <li>Rows are wrappers for columns. Each column has horizontal <code className="highlighter-rouge">padding</code> (called a gutter) for controlling the space between them. This <code className="highlighter-rouge">padding</code> is then counteracted on the rows with negative margins. This way, all the content in your columns is visually aligned down the left side.</li>
    <li>In a grid layout, content must be placed within columns and only columns may be immediate children of rows.</li>
    <li>Thanks to flexbox, grid columns without a specified <code className="highlighter-rouge">width</code> will automatically layout as equal width columns. For example, four instances of <code className="highlighter-rouge">.col-sm</code> will each automatically be 25% wide from the small breakpoint and up. See the <a href="#auto-layout-columns">auto-layout columns</a> section for more examples.</li>
    <li>Column classes indicate the number of columns you’d like to use out of the possible 12 per row. So, if you want three equal-width columns across, you can use <code className="highlighter-rouge">.col-4</code>.</li>
    <li>Column <code className="highlighter-rouge">width</code>s are set in percentages, so they’re always fluid and sized relative to their parent element.</li>
    <li>Columns have horizontal <code className="highlighter-rouge">padding</code> to create the gutters between individual columns, however, you can remove the <code className="highlighter-rouge">margin</code> from rows and <code className="highlighter-rouge">padding</code> from columns with <code className="highlighter-rouge">.no-gutters</code> on the <code className="highlighter-rouge">.row</code>.</li>
    <li>To make the grid responsive, there are five grid breakpoints, one for each <a href="/docs/4.2/layout/overview/#responsive-breakpoints">responsive breakpoint</a>: all breakpoints (extra small), small, medium, large, and extra large.</li>
    <li>Grid breakpoints are based on minimum width media queries, meaning <strong>they apply to that one breakpoint and all those above it</strong> (e.g., <code className="highlighter-rouge">.col-sm-4</code> applies to small, medium, large, and extra large devices, but not the first <code className="highlighter-rouge">xs</code> breakpoint).</li>
    <li>You can use predefined grid classes (like <code className="highlighter-rouge">.col-4</code>) or <a href="#sass-mixins">Sass mixins</a> for more semantic markup.</li>
  </ul>
  <p>Be aware of the limitations and <a href="https://github.com/philipwalton/flexbugs">bugs around flexbox</a>, like the <a href="https://github.com/philipwalton/flexbugs#flexbug-9">inability to use some HTML elements as flex containers</a>.</p>
  <h2 id="grid-options"><span className="bd-content-title">Grid options</span></h2>
  <p>While Bootstrap uses <code className="highlighter-rouge">em</code>s or <code className="highlighter-rouge">rem</code>s for defining most sizes, <code className="highlighter-rouge">px</code>s are used for grid breakpoints and container widths. This is because the viewport width is in pixels and does not change with the <a href="https://drafts.csswg.org/mediaqueries-3/#units">font size</a>.</p>
  <p>See how aspects of the Bootstrap grid system work across multiple devices with a handy table.</p>
  <table className="table table-bordered table-striped">
    <thead>
      <tr>
        <th />
        <th className="text-center">
          Extra small<br />
          <small>&lt;576px</small>
        </th>
        <th className="text-center">
          Small<br />
          <small>≥576px</small>
        </th>
        <th className="text-center">
          Medium<br />
          <small>≥768px</small>
        </th>
        <th className="text-center">
          Large<br />
          <small>≥992px</small>
        </th>
        <th className="text-center">
          Extra large<br />
          <small>≥1200px</small>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th className="text-nowrap" scope="row">Max container width</th>
        <td>None (auto)</td>
        <td>540px</td>
        <td>720px</td>
        <td>960px</td>
        <td>1140px</td>
      </tr>
      <tr>
        <th className="text-nowrap" scope="row">Class prefix</th>
        <td><code>.col-</code></td>
        <td><code>.col-sm-</code></td>
        <td><code>.col-md-</code></td>
        <td><code>.col-lg-</code></td>
        <td><code>.col-xl-</code></td>
      </tr>
      <tr>
        <th className="text-nowrap" scope="row"># of columns</th>
        <td colSpan={5}>12</td>
      </tr>
      <tr>
        <th className="text-nowrap" scope="row">Gutter width</th>
        <td colSpan={5}>30px (15px on each side of a column)</td>
      </tr>
      <tr>
        <th className="text-nowrap" scope="row">Nestable</th>
        <td colSpan={5}>Yes</td>
      </tr>
      <tr>
        <th className="text-nowrap" scope="row">Column ordering</th>
        <td colSpan={5}>Yes</td>
      </tr>
    </tbody>
  </table>
  <h2 id="auto-layout-columns"><span className="bd-content-title">Auto-layout columns</span></h2>
  <p>Utilize breakpoint-specific column classes for easy column sizing without an explicit numbered class like <code className="highlighter-rouge">.col-sm-6</code>.</p>
  <h3 id="equal-width"><span className="bd-content-title">Equal-width</span></h3>
  <p>For example, here are two grid layouts that apply to every device and viewport, from <code className="highlighter-rouge">xs</code> to <code className="highlighter-rouge">xl</code>. Add any number of unit-less classes for each breakpoint you need and every column will be the same width.</p>
  <div className="bd-example-row">
    <div className="bd-example">
      <div className="container">
        <div className="row">
          <div className="col">
            1 of 2
          </div>
          <div className="col">
            2 of 2
          </div>
        </div>
        <div className="row">
          <div className="col">
            1 of 3
          </div>
          <div className="col">
            2 of 3
          </div>
          <div className="col">
            3 of 3
          </div>
        </div>
      </div>
    </div>
    <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"container"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col"</span><span className="nt">&gt;</span>{"\n"}{"      "}1 of 2{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col"</span><span className="nt">&gt;</span>{"\n"}{"      "}2 of 2{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col"</span><span className="nt">&gt;</span>{"\n"}{"      "}1 of 3{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col"</span><span className="nt">&gt;</span>{"\n"}{"      "}2 of 3{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col"</span><span className="nt">&gt;</span>{"\n"}{"      "}3 of 3{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  </div>
  <p>Equal-width columns can be broken into multiple lines, but there was a <a href="https://github.com/philipwalton/flexbugs#flexbug-11">Safari flexbox bug</a> that prevented this from working without an explicit <code className="highlighter-rouge">flex-basis</code> or <code className="highlighter-rouge">border</code>. There are workarounds for older browser versions, but they shouldn’t be necessary if you’re up-to-date.</p>
  <div className="bd-example-row">
    <div className="bd-example">
      <div className="container">
        <div className="row">
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="w-100" />
          <div className="col">Column</div>
          <div className="col">Column</div>
        </div>
      </div>
    </div>
    <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"container"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col"</span><span className="nt">&gt;</span>Column<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col"</span><span className="nt">&gt;</span>Column<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"w-100"</span><span className="nt">&gt;&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col"</span><span className="nt">&gt;</span>Column<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col"</span><span className="nt">&gt;</span>Column<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  </div>
  <h3 id="setting-one-column-width"><span className="bd-content-title">Setting one column width</span></h3>
  <p>Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column.</p>
  <div className="bd-example-row">
    <div className="bd-example">
      <div className="container">
        <div className="row">
          <div className="col">
            1 of 3
          </div>
          <div className="col-6">
            2 of 3 (wider)
          </div>
          <div className="col">
            3 of 3
          </div>
        </div>
        <div className="row">
          <div className="col">
            1 of 3
          </div>
          <div className="col-5">
            2 of 3 (wider)
          </div>
          <div className="col">
            3 of 3
          </div>
        </div>
      </div>
    </div>
    <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"container"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col"</span><span className="nt">&gt;</span>{"\n"}{"      "}1 of 3{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-6"</span><span className="nt">&gt;</span>{"\n"}{"      "}2 of 3 (wider){"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col"</span><span className="nt">&gt;</span>{"\n"}{"      "}3 of 3{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col"</span><span className="nt">&gt;</span>{"\n"}{"      "}1 of 3{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-5"</span><span className="nt">&gt;</span>{"\n"}{"      "}2 of 3 (wider){"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col"</span><span className="nt">&gt;</span>{"\n"}{"      "}3 of 3{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  </div>
  <h3 id="variable-width-content"><span className="bd-content-title">Variable width content</span></h3>
  <p>Use <code className="highlighter-rouge">col-{'{'}breakpoint{'}'}-auto</code> classes to size columns based on the natural width of their content.</p>
  <div className="bd-example-row">
    <div className="bd-example">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-2">
            1 of 3
          </div>
          <div className="col-md-auto">
            Variable width content
          </div>
          <div className="col col-lg-2">
            3 of 3
          </div>
        </div>
        <div className="row">
          <div className="col">
            1 of 3
          </div>
          <div className="col-md-auto">
            Variable width content
          </div>
          <div className="col col-lg-2">
            3 of 3
          </div>
        </div>
      </div>
    </div>
    <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"container"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row justify-content-md-center"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col col-lg-2"</span><span className="nt">&gt;</span>{"\n"}{"      "}1 of 3{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-md-auto"</span><span className="nt">&gt;</span>{"\n"}{"      "}Variable width content{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col col-lg-2"</span><span className="nt">&gt;</span>{"\n"}{"      "}3 of 3{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col"</span><span className="nt">&gt;</span>{"\n"}{"      "}1 of 3{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-md-auto"</span><span className="nt">&gt;</span>{"\n"}{"      "}Variable width content{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col col-lg-2"</span><span className="nt">&gt;</span>{"\n"}{"      "}3 of 3{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  </div>
  <h3 id="equal-width-multi-row"><span className="bd-content-title">Equal-width multi-row</span></h3>
  <p>Create equal-width columns that span multiple rows by inserting a <code className="highlighter-rouge">.w-100</code> where you want the columns to break to a new line. Make the breaks responsive by mixing the <code className="highlighter-rouge">.w-100</code> with some <a href="/docs/4.2/utilities/display/">responsive display utilities</a>.</p>
  <div className="bd-example-row">
    <div className="bd-example">
      <div className="container">
        <div className="row">
          <div className="col">col</div>
          <div className="col">col</div>
          <div className="w-100" />
          <div className="col">col</div>
          <div className="col">col</div>
        </div>
      </div>
    </div>
    <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"container"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col"</span><span className="nt">&gt;</span>col<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col"</span><span className="nt">&gt;</span>col<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"w-100"</span><span className="nt">&gt;&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col"</span><span className="nt">&gt;</span>col<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col"</span><span className="nt">&gt;</span>col<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  </div>
  <h2 id="responsive-classes"><span className="bd-content-title">Responsive classes</span></h2>
  <p>Bootstrap’s grid includes five tiers of predefined classes for building complex responsive layouts. Customize the size of your columns on extra small, small, medium, large, or extra large devices however you see fit.</p>
  <h3 id="all-breakpoints"><span className="bd-content-title">All breakpoints</span></h3>
  <p>For grids that are the same from the smallest of devices to the largest, use the <code className="highlighter-rouge">.col</code> and <code className="highlighter-rouge">.col-*</code> classes. Specify a numbered class when you need a particularly sized column; otherwise, feel free to stick to <code className="highlighter-rouge">.col</code>.</p>
  <div className="bd-example-row">
    <div className="bd-example">
      <div className="container">
        <div className="row">
          <div className="col">col</div>
          <div className="col">col</div>
          <div className="col">col</div>
          <div className="col">col</div>
        </div>
        <div className="row">
          <div className="col-8">col-8</div>
          <div className="col-4">col-4</div>
        </div>
      </div>
    </div>
    <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"container"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col"</span><span className="nt">&gt;</span>col<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col"</span><span className="nt">&gt;</span>col<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col"</span><span className="nt">&gt;</span>col<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col"</span><span className="nt">&gt;</span>col<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-8"</span><span className="nt">&gt;</span>col-8<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-4"</span><span className="nt">&gt;</span>col-4<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  </div>
  <h3 id="stacked-to-horizontal"><span className="bd-content-title">Stacked to horizontal</span></h3>
  <p>Using a single set of <code className="highlighter-rouge">.col-sm-*</code> classes, you can create a basic grid system that starts out stacked and becomes horizontal at the small breakpoint (<code className="highlighter-rouge">sm</code>).</p>
  <div className="bd-example-row">
    <div className="bd-example">
      <div className="container">
        <div className="row">
          <div className="col-sm-8">col-sm-8</div>
          <div className="col-sm-4">col-sm-4</div>
        </div>
        <div className="row">
          <div className="col-sm">col-sm</div>
          <div className="col-sm">col-sm</div>
          <div className="col-sm">col-sm</div>
        </div>
      </div>
    </div>
    <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"container"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-sm-8"</span><span className="nt">&gt;</span>col-sm-8<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-sm-4"</span><span className="nt">&gt;</span>col-sm-4<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-sm"</span><span className="nt">&gt;</span>col-sm<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-sm"</span><span className="nt">&gt;</span>col-sm<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-sm"</span><span className="nt">&gt;</span>col-sm<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  </div>
  <h3 id="mix-and-match"><span className="bd-content-title">Mix and match</span></h3>
  <p>Don’t want your columns to simply stack in some grid tiers? Use a combination of different classes for each tier as needed. See the example below for a better idea of how it all works.</p>
  <div className="bd-example-row">
    <div className="bd-example">
      <div className="container">
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <div className="row">
          <div className="col-12 col-md-8">.col-12 .col-md-8</div>
          <div className="col-6 col-md-4">.col-6 .col-md-4</div>
        </div>
        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
        <div className="row">
          <div className="col-6 col-md-4">.col-6 .col-md-4</div>
          <div className="col-6 col-md-4">.col-6 .col-md-4</div>
          <div className="col-6 col-md-4">.col-6 .col-md-4</div>
        </div>
        {/* Columns are always 50% wide, on mobile and desktop */}
        <div className="row">
          <div className="col-6">.col-6</div>
          <div className="col-6">.col-6</div>
        </div>
      </div>
    </div>
    <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"container"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="c">&lt;!-- Stack the columns on mobile by making one full-width and the other half-width --&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-12 col-md-8"</span><span className="nt">&gt;</span>.col-12 .col-md-8<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-6 col-md-4"</span><span className="nt">&gt;</span>.col-6 .col-md-4<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"\n"}{"  "}<span className="c">&lt;!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop --&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-6 col-md-4"</span><span className="nt">&gt;</span>.col-6 .col-md-4<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-6 col-md-4"</span><span className="nt">&gt;</span>.col-6 .col-md-4<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-6 col-md-4"</span><span className="nt">&gt;</span>.col-6 .col-md-4<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"\n"}{"  "}<span className="c">&lt;!-- Columns are always 50% wide, on mobile and desktop --&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-6"</span><span className="nt">&gt;</span>.col-6<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-6"</span><span className="nt">&gt;</span>.col-6<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  </div>
  <h3 id="gutters"><span className="bd-content-title">Gutters</span></h3>
  <p>Gutters can be responsively adjusted by breakpoint-specific padding and negative margin utility classes. To change the gutters in a given row, pair a negative margin utility on the <code className="highlighter-rouge">.row</code> and matching padding utilities on the <code className="highlighter-rouge">.col</code>s. The <code className="highlighter-rouge">.container</code> or <code className="highlighter-rouge">.container-fluid</code> parent may need to be adjusted too to avoid unwanted overflow, using again matching padding utility.</p>
  <p>Here’s an example of customizing the Bootstrap grid at the large (<code className="highlighter-rouge">lg</code>) breakpoint and above. We’ve increased the <code className="highlighter-rouge">.col</code> padding with <code className="highlighter-rouge">.px-lg-5</code>, counteracted that with <code className="highlighter-rouge">.mx-lg-n5</code> on the parent <code className="highlighter-rouge">.row</code> and then adjusted the <code className="highlighter-rouge">.container</code> wrapper with <code className="highlighter-rouge">.px-lg-5</code>.</p>
  <div className="bd-example">
    <div className="container px-lg-5">
      <div className="row mx-lg-n5">
        <div className="col py-3 px-lg-5 border bg-light">Custom column padding</div>
        <div className="col py-3 px-lg-5 border bg-light">Custom column padding</div>
      </div>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"container px-lg-5"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row mx-lg-n5"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col py-3 px-lg-5 border bg-light"</span><span className="nt">&gt;</span>Custom column padding<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col py-3 px-lg-5 border bg-light"</span><span className="nt">&gt;</span>Custom column padding<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <h2 id="alignment"><span className="bd-content-title">Alignment</span></h2>
  <p>Use flexbox alignment utilities to vertically and horizontally align columns.</p>
  <h3 id="vertical-alignment"><span className="bd-content-title">Vertical alignment</span></h3>
  <div className="bd-example-row bd-example-row-flex-cols">
    <div className="bd-example">
      <div className="container">
        <div className="row align-items-start">
          <div className="col">
            One of three columns
          </div>
          <div className="col">
            One of three columns
          </div>
          <div className="col">
            One of three columns
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col">
            One of three columns
          </div>
          <div className="col">
            One of three columns
          </div>
          <div className="col">
            One of three columns
          </div>
        </div>
        <div className="row align-items-end">
          <div className="col">
            One of three columns
          </div>
          <div className="col">
            One of three columns
          </div>
          <div className="col">
            One of three columns
          </div>
        </div>
      </div>
    </div>
    <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"container"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row align-items-start"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col"</span><span className="nt">&gt;</span>{"\n"}{"      "}One of three columns{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col"</span><span className="nt">&gt;</span>{"\n"}{"      "}One of three columns{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col"</span><span className="nt">&gt;</span>{"\n"}{"      "}One of three columns{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row align-items-center"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col"</span><span className="nt">&gt;</span>{"\n"}{"      "}One of three columns{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col"</span><span className="nt">&gt;</span>{"\n"}{"      "}One of three columns{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col"</span><span className="nt">&gt;</span>{"\n"}{"      "}One of three columns{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row align-items-end"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col"</span><span className="nt">&gt;</span>{"\n"}{"      "}One of three columns{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col"</span><span className="nt">&gt;</span>{"\n"}{"      "}One of three columns{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col"</span><span className="nt">&gt;</span>{"\n"}{"      "}One of three columns{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  </div>
  <div className="bd-example-row bd-example-row-flex-cols">
    <div className="bd-example">
      <div className="container">
        <div className="row">
          <div className="col align-self-start">
            One of three columns
          </div>
          <div className="col align-self-center">
            One of three columns
          </div>
          <div className="col align-self-end">
            One of three columns
          </div>
        </div>
      </div>
    </div>
    <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"container"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col align-self-start"</span><span className="nt">&gt;</span>{"\n"}{"      "}One of three columns{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col align-self-center"</span><span className="nt">&gt;</span>{"\n"}{"      "}One of three columns{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col align-self-end"</span><span className="nt">&gt;</span>{"\n"}{"      "}One of three columns{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  </div>
  <h3 id="horizontal-alignment"><span className="bd-content-title">Horizontal alignment</span></h3>
  <div className="bd-example-row">
    <div className="bd-example">
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-4">
            One of two columns
          </div>
          <div className="col-4">
            One of two columns
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-4">
            One of two columns
          </div>
          <div className="col-4">
            One of two columns
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-4">
            One of two columns
          </div>
          <div className="col-4">
            One of two columns
          </div>
        </div>
        <div className="row justify-content-around">
          <div className="col-4">
            One of two columns
          </div>
          <div className="col-4">
            One of two columns
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-4">
            One of two columns
          </div>
          <div className="col-4">
            One of two columns
          </div>
        </div>
      </div>
    </div>
    <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"container"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row justify-content-start"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-4"</span><span className="nt">&gt;</span>{"\n"}{"      "}One of two columns{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-4"</span><span className="nt">&gt;</span>{"\n"}{"      "}One of two columns{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row justify-content-center"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-4"</span><span className="nt">&gt;</span>{"\n"}{"      "}One of two columns{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-4"</span><span className="nt">&gt;</span>{"\n"}{"      "}One of two columns{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row justify-content-end"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-4"</span><span className="nt">&gt;</span>{"\n"}{"      "}One of two columns{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-4"</span><span className="nt">&gt;</span>{"\n"}{"      "}One of two columns{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row justify-content-around"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-4"</span><span className="nt">&gt;</span>{"\n"}{"      "}One of two columns{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-4"</span><span className="nt">&gt;</span>{"\n"}{"      "}One of two columns{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row justify-content-between"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-4"</span><span className="nt">&gt;</span>{"\n"}{"      "}One of two columns{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-4"</span><span className="nt">&gt;</span>{"\n"}{"      "}One of two columns{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  </div>
  <h3 id="no-gutters"><span className="bd-content-title">No gutters</span></h3>
  <p>The gutters between columns in our predefined grid classes can be removed with <code className="highlighter-rouge">.no-gutters</code>. This removes the negative <code className="highlighter-rouge">margin</code>s from <code className="highlighter-rouge">.row</code> and the horizontal <code className="highlighter-rouge">padding</code> from all immediate children columns.</p>
  <p>Here’s the source code for creating these styles. Note that column overrides are scoped to only the first children columns and are targeted via <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors">attribute selector</a>. While this generates a more specific selector, column padding can still be further customized with <a href="/docs/4.2/utilities/spacing/">spacing utilities</a>.</p>
  <p><strong>Need an edge-to-edge design?</strong> Drop the parent <code className="highlighter-rouge">.container</code> or <code className="highlighter-rouge">.container-fluid</code>.</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-sass" data-lang="sass"><span className="nc">.no-gutters</span> <span className="err">{"{"}</span>{"\n"}{"  "}<span className="nl">margin-right</span><span className="p">:</span> <span className="m">0</span><span className="err">;</span>{"\n"}{"  "}<span className="nl">margin-left</span><span className="p">:</span> <span className="m">0</span><span className="err">;</span>{"\n"}{"\n"}{"  "}<span className="o">&gt;</span> <span className="nc">.col</span><span className="o">,</span>{"\n"}{"  "}<span className="o">&gt;</span> <span className="o">[</span><span className="nt">class</span><span className="o">*=</span><span className="s2">"col-"</span><span className="o">]</span> <span className="err">{"{"}</span>{"\n"}{"    "}<span className="nl">padding-right</span><span className="p">:</span> <span className="m">0</span><span className="err">;</span>{"\n"}{"    "}<span className="nl">padding-left</span><span className="p">:</span> <span className="m">0</span><span className="err">;</span>{"\n"}{"  "}<span className="err">{"}"}</span>{"\n"}<span className="err">{"}"}</span></code></pre></figure>
  <p>In practice, here’s how it looks. Note you can continue to use this with all other predefined grid classes (including column widths, responsive tiers, reorders, and more).</p>
  <div className="bd-example-row">
    <div className="bd-example">
      <div className="row no-gutters">
        <div className="col-12 col-sm-6 col-md-8">.col-12 .col-sm-6 .col-md-8</div>
        <div className="col-6 col-md-4">.col-6 .col-md-4</div>
      </div>
    </div>
    <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row no-gutters"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-12 col-sm-6 col-md-8"</span><span className="nt">&gt;</span>.col-12 .col-sm-6 .col-md-8<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-6 col-md-4"</span><span className="nt">&gt;</span>.col-6 .col-md-4<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  </div>
  <h3 id="column-wrapping"><span className="bd-content-title">Column wrapping</span></h3>
  <p>If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line.</p>
  <div className="bd-example-row">
    <div className="bd-example">
      <div className="container">
        <div className="row">
          <div className="col-9">.col-9</div>
          <div className="col-4">.col-4<br />Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>
          <div className="col-6">.col-6<br />Subsequent columns continue along the new line.</div>
        </div>
      </div>
    </div>
    <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"container"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-9"</span><span className="nt">&gt;</span>.col-9<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-4"</span><span className="nt">&gt;</span>.col-4<span className="nt">&lt;br&gt;</span>Since 9 + 4 = 13 <span className="ni">&amp;gt;</span> 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-6"</span><span className="nt">&gt;</span>.col-6<span className="nt">&lt;br&gt;</span>Subsequent columns continue along the new line.<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  </div>
  <h3 id="column-breaks"><span className="bd-content-title">Column breaks</span></h3>
  <p>Breaking columns to a new line in flexbox requires a small hack: add an element with <code className="highlighter-rouge">width: 100%</code> wherever you want to wrap your columns to a new line. Normally this is accomplished with multiple <code className="highlighter-rouge">.row</code>s, but not every implementation method can account for this.</p>
  <div className="bd-example-row">
    <div className="bd-example">
      <div className="container">
        <div className="row">
          <div className="col-6 col-sm-3">.col-6 .col-sm-3</div>
          <div className="col-6 col-sm-3">.col-6 .col-sm-3</div>
          {/* Force next columns to break to new line */}
          <div className="w-100" />
          <div className="col-6 col-sm-3">.col-6 .col-sm-3</div>
          <div className="col-6 col-sm-3">.col-6 .col-sm-3</div>
        </div>
      </div>
    </div>
    <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"container"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-6 col-sm-3"</span><span className="nt">&gt;</span>.col-6 .col-sm-3<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-6 col-sm-3"</span><span className="nt">&gt;</span>.col-6 .col-sm-3<span className="nt">&lt;/div&gt;</span>{"\n"}{"\n"}{"    "}<span className="c">&lt;!-- Force next columns to break to new line --&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"w-100"</span><span className="nt">&gt;&lt;/div&gt;</span>{"\n"}{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-6 col-sm-3"</span><span className="nt">&gt;</span>.col-6 .col-sm-3<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-6 col-sm-3"</span><span className="nt">&gt;</span>.col-6 .col-sm-3<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  </div>
  <p>You may also apply this break at specific breakpoints with our <a href="/docs/4.2/utilities/display/">responsive display utilities</a>.</p>
  <div className="bd-example-row">
    <div className="bd-example">
      <div className="container">
        <div className="row">
          <div className="col-6 col-sm-4">.col-6 .col-sm-4</div>
          <div className="col-6 col-sm-4">.col-6 .col-sm-4</div>
          {/* Force next columns to break to new line at md breakpoint and up */}
          <div className="w-100 d-none d-md-block" />
          <div className="col-6 col-sm-4">.col-6 .col-sm-4</div>
          <div className="col-6 col-sm-4">.col-6 .col-sm-4</div>
        </div>
      </div>
    </div>
    <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"container"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-6 col-sm-4"</span><span className="nt">&gt;</span>.col-6 .col-sm-4<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-6 col-sm-4"</span><span className="nt">&gt;</span>.col-6 .col-sm-4<span className="nt">&lt;/div&gt;</span>{"\n"}{"\n"}{"    "}<span className="c">&lt;!-- Force next columns to break to new line at md breakpoint and up --&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"w-100 d-none d-md-block"</span><span className="nt">&gt;&lt;/div&gt;</span>{"\n"}{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-6 col-sm-4"</span><span className="nt">&gt;</span>.col-6 .col-sm-4<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-6 col-sm-4"</span><span className="nt">&gt;</span>.col-6 .col-sm-4<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  </div>
  <h2 id="reordering"><span className="bd-content-title">Reordering</span></h2>
  <h3 id="order-classes"><span className="bd-content-title">Order classes</span></h3>
  <p>Use <code className="highlighter-rouge">.order-</code> classes for controlling the <strong>visual order</strong> of your content. These classes are responsive, so you can set the <code className="highlighter-rouge">order</code> by breakpoint (e.g., <code className="highlighter-rouge">.order-1.order-md-2</code>). Includes support for <code className="highlighter-rouge">1</code> through <code className="highlighter-rouge">12</code> across all five grid tiers.</p>
  <div className="bd-example-row">
    <div className="bd-example">
      <div className="container">
        <div className="row">
          <div className="col">
            First, but unordered
          </div>
          <div className="col order-12">
            Second, but last
          </div>
          <div className="col order-1">
            Third, but first
          </div>
        </div>
      </div>
    </div>
    <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"container"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col"</span><span className="nt">&gt;</span>{"\n"}{"      "}First, but unordered{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col order-12"</span><span className="nt">&gt;</span>{"\n"}{"      "}Second, but last{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col order-1"</span><span className="nt">&gt;</span>{"\n"}{"      "}Third, but first{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  </div>
  <p>There are also responsive <code className="highlighter-rouge">.order-first</code> and <code className="highlighter-rouge">.order-last</code> classes that change the <code className="highlighter-rouge">order</code> of an element by applying <code className="highlighter-rouge">order: -1</code> and <code className="highlighter-rouge">order: 13</code> (<code className="highlighter-rouge">order: $columns + 1</code>), respectively. These classes can also be intermixed with the numbered <code className="highlighter-rouge">.order-*</code> classes as needed.</p>
  <div className="bd-example-row">
    <div className="bd-example">
      <div className="container">
        <div className="row">
          <div className="col order-last">
            First, but last
          </div>
          <div className="col">
            Second, but unordered
          </div>
          <div className="col order-first">
            Third, but first
          </div>
        </div>
      </div>
    </div>
    <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"container"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col order-last"</span><span className="nt">&gt;</span>{"\n"}{"      "}First, but last{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col"</span><span className="nt">&gt;</span>{"\n"}{"      "}Second, but unordered{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col order-first"</span><span className="nt">&gt;</span>{"\n"}{"      "}Third, but first{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  </div>
  <h3 id="offsetting-columns"><span className="bd-content-title">Offsetting columns</span></h3>
  <p>You can offset grid columns in two ways: our responsive <code className="highlighter-rouge">.offset-</code> grid classes and our <a href="/docs/4.2/utilities/spacing/">margin utilities</a>. Grid classes are sized to match columns while margins are more useful for quick layouts where the width of the offset is variable.</p>
  <h4 id="offset-classes"><span className="bd-content-title">Offset classes</span></h4>
  <p>Move columns to the right using <code className="highlighter-rouge">.offset-md-*</code> classes. These classes increase the left margin of a column by <code className="highlighter-rouge">*</code> columns. For example, <code className="highlighter-rouge">.offset-md-4</code> moves <code className="highlighter-rouge">.col-md-4</code> over four columns.</p>
  <div className="bd-example-row">
    <div className="bd-example">
      <div className="container">
        <div className="row">
          <div className="col-md-4">.col-md-4</div>
          <div className="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div>
        </div>
        <div className="row">
          <div className="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
          <div className="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
        </div>
        <div className="row">
          <div className="col-md-6 offset-md-3">.col-md-6 .offset-md-3</div>
        </div>
      </div>
    </div>
    <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"container"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-md-4"</span><span className="nt">&gt;</span>.col-md-4<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-md-4 offset-md-4"</span><span className="nt">&gt;</span>.col-md-4 .offset-md-4<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-md-3 offset-md-3"</span><span className="nt">&gt;</span>.col-md-3 .offset-md-3<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-md-3 offset-md-3"</span><span className="nt">&gt;</span>.col-md-3 .offset-md-3<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-md-6 offset-md-3"</span><span className="nt">&gt;</span>.col-md-6 .offset-md-3<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  </div>
  <p>In addition to column clearing at responsive breakpoints, you may need to reset offsets. See this in action in <a href="/docs/4.2/examples/grid/">the grid example</a>.</p>
  <div className="bd-example-row">
    <div className="bd-example">
      <div className="container">
        <div className="row">
          <div className="col-sm-5 col-md-6">.col-sm-5 .col-md-6</div>
          <div className="col-sm-5 offset-sm-2 col-md-6 offset-md-0">.col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0</div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-5 col-lg-6">.col-sm-6 .col-md-5 .col-lg-6</div>
          <div className="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">.col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0</div>
        </div>
      </div>
    </div>
    <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"container"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-sm-5 col-md-6"</span><span className="nt">&gt;</span>.col-sm-5 .col-md-6<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-sm-5 offset-sm-2 col-md-6 offset-md-0"</span><span className="nt">&gt;</span>.col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-sm-6 col-md-5 col-lg-6"</span><span className="nt">&gt;</span>.col-sm-6 .col-md-5 .col-lg-6<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0"</span><span className="nt">&gt;</span>.col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  </div>
  <h4 id="margin-utilities"><span className="bd-content-title">Margin utilities</span></h4>
  <p>With the move to flexbox in v4, you can use margin utilities like <code className="highlighter-rouge">.mr-auto</code> to force sibling columns away from one another.</p>
  <div className="bd-example-row">
    <div className="bd-example">
      <div className="container">
        <div className="row">
          <div className="col-md-4">.col-md-4</div>
          <div className="col-md-4 ml-auto">.col-md-4 .ml-auto</div>
        </div>
        <div className="row">
          <div className="col-md-3 ml-md-auto">.col-md-3 .ml-md-auto</div>
          <div className="col-md-3 ml-md-auto">.col-md-3 .ml-md-auto</div>
        </div>
        <div className="row">
          <div className="col-auto mr-auto">.col-auto .mr-auto</div>
          <div className="col-auto">.col-auto</div>
        </div>
      </div>
    </div>
    <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"container"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-md-4"</span><span className="nt">&gt;</span>.col-md-4<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-md-4 ml-auto"</span><span className="nt">&gt;</span>.col-md-4 .ml-auto<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-md-3 ml-md-auto"</span><span className="nt">&gt;</span>.col-md-3 .ml-md-auto<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-md-3 ml-md-auto"</span><span className="nt">&gt;</span>.col-md-3 .ml-md-auto<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-auto mr-auto"</span><span className="nt">&gt;</span>.col-auto .mr-auto<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-auto"</span><span className="nt">&gt;</span>.col-auto<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  </div>
  <h2 id="nesting"><span className="bd-content-title">Nesting</span></h2>
  <p>To nest your content with the default grid, add a new <code className="highlighter-rouge">.row</code> and set of <code className="highlighter-rouge">.col-sm-*</code> columns within an existing <code className="highlighter-rouge">.col-sm-*</code> column. Nested rows should include a set of columns that add up to 12 or fewer (it is not required that you use all 12 available columns).</p>
  <div className="bd-example-row">
    <div className="bd-example">
      <div className="container">
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
    <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"container"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-sm-9"</span><span className="nt">&gt;</span>{"\n"}{"      "}Level 1: .col-sm-9{"\n"}{"      "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-8 col-sm-6"</span><span className="nt">&gt;</span>{"\n"}{"          "}Level 2: .col-8 .col-sm-6{"\n"}{"        "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"        "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-4 col-sm-6"</span><span className="nt">&gt;</span>{"\n"}{"          "}Level 2: .col-4 .col-sm-6{"\n"}{"        "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  </div>
  <h2 id="sass-mixins"><span className="bd-content-title">Sass mixins</span></h2>
  <p>When using Bootstrap’s source Sass files, you have the option of using Sass variables and mixins to create custom, semantic, and responsive page layouts. Our predefined grid classes use these same variables and mixins to provide a whole suite of ready-to-use classes for fast responsive layouts.</p>
  <h3 id="variables"><span className="bd-content-title">Variables</span></h3>
  <p>Variables and maps determine the number of columns, the gutter width, and the media query point at which to begin floating columns. We use these to generate the predefined grid classes documented above, as well as for the custom mixins listed below.</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-scss" data-lang="scss"><span className="nv">$grid-columns</span><span className="p">:</span>{"      "}<span className="m">12</span><span className="p">;</span>{"\n"}<span className="nv">$grid-gutter-width</span><span className="p">:</span> <span className="m">30px</span><span className="p">;</span>{"\n"}{"\n"}<span className="nv">$grid-breakpoints</span><span className="p">:</span> <span className="p">(</span>{"\n"}{"  "}<span className="o">//</span> <span className="n">Extra</span> <span className="n">small</span> <span className="n">screen</span> <span className="o">/</span> <span className="n">phone</span>{"\n"}{"  "}<span className="n">xs</span><span className="o">:</span> <span className="m">0</span><span className="o">,</span>{"\n"}{"  "}<span className="o">//</span> <span className="n">Small</span> <span className="n">screen</span> <span className="o">/</span> <span className="n">phone</span>{"\n"}{"  "}<span className="n">sm</span><span className="o">:</span> <span className="m">576px</span><span className="o">,</span>{"\n"}{"  "}<span className="o">//</span> <span className="n">Medium</span> <span className="n">screen</span> <span className="o">/</span> <span className="n">tablet</span>{"\n"}{"  "}<span className="n">md</span><span className="o">:</span> <span className="m">768px</span><span className="o">,</span>{"\n"}{"  "}<span className="o">//</span> <span className="n">Large</span> <span className="n">screen</span> <span className="o">/</span> <span className="n">desktop</span>{"\n"}{"  "}<span className="n">lg</span><span className="o">:</span> <span className="m">992px</span><span className="o">,</span>{"\n"}{"  "}<span className="o">//</span> <span className="n">Extra</span> <span className="nb">large</span> <span className="n">screen</span> <span className="o">/</span> <span className="n">wide</span> <span className="n">desktop</span>{"\n"}{"  "}<span className="n">xl</span><span className="o">:</span> <span className="m">1200px</span>{"\n"}<span className="p">);</span>{"\n"}{"\n"}<span className="nv">$container-max-widths</span><span className="p">:</span> <span className="p">(</span>{"\n"}{"  "}<span className="n">sm</span><span className="o">:</span> <span className="m">540px</span><span className="o">,</span>{"\n"}{"  "}<span className="n">md</span><span className="o">:</span> <span className="m">720px</span><span className="o">,</span>{"\n"}{"  "}<span className="n">lg</span><span className="o">:</span> <span className="m">960px</span><span className="o">,</span>{"\n"}{"  "}<span className="n">xl</span><span className="o">:</span> <span className="m">1140px</span>{"\n"}<span className="p">);</span></code></pre></figure>
  <h3 id="mixins"><span className="bd-content-title">Mixins</span></h3>
  <p>Mixins are used in conjunction with the grid variables to generate semantic CSS for individual grid columns.</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-scss" data-lang="scss"><span className="c1">// Creates a wrapper for a series of columns</span>{"\n"}<span className="k">@include</span> <span className="nd">make-row</span><span className="p">();</span>{"\n"}{"\n"}<span className="c1">// Make the element grid-ready (applying everything but the width)</span>{"\n"}<span className="k">@include</span> <span className="nd">make-col-ready</span><span className="p">();</span>{"\n"}<span className="k">@include</span> <span className="nd">make-col</span><span className="p">(</span><span className="nv">$size</span><span className="o">,</span> <span className="nv">$columns</span><span className="o">:</span> <span className="nv">$grid-columns</span><span className="p">);</span>{"\n"}{"\n"}<span className="c1">// Get fancy by offsetting, or changing the sort order</span>{"\n"}<span className="k">@include</span> <span className="nd">make-col-offset</span><span className="p">(</span><span className="nv">$size</span><span className="o">,</span> <span className="nv">$columns</span><span className="o">:</span> <span className="nv">$grid-columns</span><span className="p">);</span></code></pre></figure>
  <h3 id="example-usage"><span className="bd-content-title">Example usage</span></h3>
  <p>You can modify the variables to your own custom values, or just use the mixins with their default values. Here’s an example of using the default settings to create a two-column layout with a gap between.</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-scss" data-lang="scss"><span className="nc">.example-container</span> <span className="p">{"{"}</span>{"\n"}{"  "}<span className="nl">width</span><span className="p">:</span> <span className="m">800px</span><span className="p">;</span>{"\n"}{"  "}<span className="k">@include</span> <span className="nd">make-container</span><span className="p">();</span>{"\n"}<span className="p">{"}"}</span>{"\n"}{"\n"}<span className="nc">.example-row</span> <span className="p">{"{"}</span>{"\n"}{"  "}<span className="k">@include</span> <span className="nd">make-row</span><span className="p">();</span>{"\n"}<span className="p">{"}"}</span>{"\n"}{"\n"}<span className="nc">.example-content-main</span> <span className="p">{"{"}</span>{"\n"}{"  "}<span className="k">@include</span> <span className="nd">make-col-ready</span><span className="p">();</span>{"\n"}{"\n"}{"  "}<span className="k">@include</span> <span className="nd">media-breakpoint-up</span><span className="p">(</span><span className="n">sm</span><span className="p">)</span> <span className="p">{"{"}</span>{"\n"}{"    "}<span className="k">@include</span> <span className="nd">make-col</span><span className="p">(</span><span className="m">6</span><span className="p">);</span>{"\n"}{"  "}<span className="p">{"}"}</span>{"\n"}{"  "}<span className="k">@include</span> <span className="nd">media-breakpoint-up</span><span className="p">(</span><span className="n">lg</span><span className="p">)</span> <span className="p">{"{"}</span>{"\n"}{"    "}<span className="k">@include</span> <span className="nd">make-col</span><span className="p">(</span><span className="m">8</span><span className="p">);</span>{"\n"}{"  "}<span className="p">{"}"}</span>{"\n"}<span className="p">{"}"}</span>{"\n"}{"\n"}<span className="nc">.example-content-secondary</span> <span className="p">{"{"}</span>{"\n"}{"  "}<span className="k">@include</span> <span className="nd">make-col-ready</span><span className="p">();</span>{"\n"}{"\n"}{"  "}<span className="k">@include</span> <span className="nd">media-breakpoint-up</span><span className="p">(</span><span className="n">sm</span><span className="p">)</span> <span className="p">{"{"}</span>{"\n"}{"    "}<span className="k">@include</span> <span className="nd">make-col</span><span className="p">(</span><span className="m">6</span><span className="p">);</span>{"\n"}{"  "}<span className="p">{"}"}</span>{"\n"}{"  "}<span className="k">@include</span> <span className="nd">media-breakpoint-up</span><span className="p">(</span><span className="n">lg</span><span className="p">)</span> <span className="p">{"{"}</span>{"\n"}{"    "}<span className="k">@include</span> <span className="nd">make-col</span><span className="p">(</span><span className="m">4</span><span className="p">);</span>{"\n"}{"  "}<span className="p">{"}"}</span>{"\n"}<span className="p">{"}"}</span></code></pre></figure>
  <div className="bd-example">
    <div className="example-container">
      <div className="example-row">
        <div className="example-content-main">Main content</div>
        <div className="example-content-secondary">Secondary content</div>
      </div>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"example-container"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"example-row"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"example-content-main"</span><span className="nt">&gt;</span>Main content<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"example-content-secondary"</span><span className="nt">&gt;</span>Secondary content<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <h2 id="customizing-the-grid"><span className="bd-content-title">Customizing the grid</span></h2>
  <p>Using our built-in grid Sass variables and maps, it’s possible to completely customize the predefined grid classes. Change the number of tiers, the media query dimensions, and the container widths—then recompile.</p>
  <h3 id="columns-and-gutters"><span className="bd-content-title">Columns and gutters</span></h3>
  <p>The number of grid columns can be modified via Sass variables. <code className="highlighter-rouge">$grid-columns</code> is used to generate the widths (in percent) of each individual column while <code className="highlighter-rouge">$grid-gutter-width</code> sets the width for the column gutters.</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-scss" data-lang="scss"><span className="nv">$grid-columns</span><span className="p">:</span> <span className="m">12</span> <span className="o">!</span><span className="nb">default</span><span className="p">;</span>{"\n"}<span className="nv">$grid-gutter-width</span><span className="p">:</span> <span className="m">30px</span> <span className="o">!</span><span className="nb">default</span><span className="p">;</span></code></pre></figure>
  <h3 id="grid-tiers"><span className="bd-content-title">Grid tiers</span></h3>
  <p>Moving beyond the columns themselves, you may also customize the number of grid tiers. If you wanted just four grid tiers, you’d update the <code className="highlighter-rouge">$grid-breakpoints</code> and <code className="highlighter-rouge">$container-max-widths</code> to something like this:</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-scss" data-lang="scss"><span className="nv">$grid-breakpoints</span><span className="p">:</span> <span className="p">(</span>{"\n"}{"  "}<span className="n">xs</span><span className="o">:</span> <span className="m">0</span><span className="o">,</span>{"\n"}{"  "}<span className="n">sm</span><span className="o">:</span> <span className="m">480px</span><span className="o">,</span>{"\n"}{"  "}<span className="n">md</span><span className="o">:</span> <span className="m">768px</span><span className="o">,</span>{"\n"}{"  "}<span className="n">lg</span><span className="o">:</span> <span className="m">1024px</span>{"\n"}<span className="p">);</span>{"\n"}{"\n"}<span className="nv">$container-max-widths</span><span className="p">:</span> <span className="p">(</span>{"\n"}{"  "}<span className="n">sm</span><span className="o">:</span> <span className="m">420px</span><span className="o">,</span>{"\n"}{"  "}<span className="n">md</span><span className="o">:</span> <span className="m">720px</span><span className="o">,</span>{"\n"}{"  "}<span className="n">lg</span><span className="o">:</span> <span className="m">960px</span>{"\n"}<span className="p">);</span></code></pre></figure>
  <p>When making any changes to the Sass variables or maps, you’ll need to save your changes and recompile. Doing so will output a brand new set of predefined grid classes for column widths, offsets, and ordering. Responsive visibility utilities will also be updated to use the custom breakpoints. Make sure to set grid values in <code className="highlighter-rouge">px</code> (not <code className="highlighter-rouge">rem</code>, <code className="highlighter-rouge">em</code>, or <code className="highlighter-rouge">%</code>).</p>
</main>

    );
  }
}