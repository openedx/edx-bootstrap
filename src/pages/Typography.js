import React from 'react';

export default class Typography extends React.Component {
  render() {
    return (
<main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
  <h1 className="bd-title" id="content">Typography</h1>
  <p className="bd-lead">Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more.</p>
  
  <h2 id="global-settings"><span className="bd-content-title">Global settings</span></h2>
  <p>Bootstrap sets basic global display, typography, and link styles. When more control is needed, check out the <a href="/docs/4.2/utilities/text/">textual utility classes</a>.</p>
  <ul>
    <li>Use a <a href="/docs/4.2/content/reboot/#native-font-stack">native font stack</a> that selects the best <code className="highlighter-rouge">font-family</code> for each OS and device.</li>
    <li>For a more inclusive and accessible type scale, we assume the browser default root <code className="highlighter-rouge">font-size</code> (typically 16px) so visitors can customize their browser defaults as needed.</li>
    <li>Use the <code className="highlighter-rouge">$font-family-base</code>, <code className="highlighter-rouge">$font-size-base</code>, and <code className="highlighter-rouge">$line-height-base</code> attributes as our typographic base applied to the <code className="highlighter-rouge">&lt;body&gt;</code>.</li>
    <li>Set the global link color via <code className="highlighter-rouge">$link-color</code> and apply link underlines only on <code className="highlighter-rouge">:hover</code>.</li>
    <li>Use <code className="highlighter-rouge">$body-bg</code> to set a <code className="highlighter-rouge">background-color</code> on the <code className="highlighter-rouge">&lt;body&gt;</code> (<code className="highlighter-rouge">#fff</code> by default).</li>
  </ul>
  <p>These styles can be found within <code className="highlighter-rouge">_reboot.scss</code>, and the global variables are defined in <code className="highlighter-rouge">_variables.scss</code>. Make sure to set <code className="highlighter-rouge">$font-size-base</code> in <code className="highlighter-rouge">rem</code>.</p>
  <h2 id="headings"><span className="bd-content-title">Headings</span></h2>
  <p>All HTML headings, <code className="highlighter-rouge">&lt;h1&gt;</code> through <code className="highlighter-rouge">&lt;h6&gt;</code>, are available.</p>
  <table>
    <thead>
      <tr>
        <th>Heading</th>
        <th>Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <p><code className="highlighter-rouge">&lt;h1&gt;&lt;/h1&gt;</code></p>
        </td>
        <td><span className="h1">h1. Bootstrap heading</span></td>
      </tr>
      <tr>
        <td>
          <p><code className="highlighter-rouge">&lt;h2&gt;&lt;/h2&gt;</code></p>
        </td>
        <td><span className="h2">h2. Bootstrap heading</span></td>
      </tr>
      <tr>
        <td>
          <p><code className="highlighter-rouge">&lt;h3&gt;&lt;/h3&gt;</code></p>
        </td>
        <td><span className="h3">h3. Bootstrap heading</span></td>
      </tr>
      <tr>
        <td>
          <p><code className="highlighter-rouge">&lt;h4&gt;&lt;/h4&gt;</code></p>
        </td>
        <td><span className="h4">h4. Bootstrap heading</span></td>
      </tr>
      <tr>
        <td>
          <p><code className="highlighter-rouge">&lt;h5&gt;&lt;/h5&gt;</code></p>
        </td>
        <td><span className="h5">h5. Bootstrap heading</span></td>
      </tr>
      <tr>
        <td>
          <p><code className="highlighter-rouge">&lt;h6&gt;&lt;/h6&gt;</code></p>
        </td>
        <td><span className="h6">h6. Bootstrap heading</span></td>
      </tr>
    </tbody>
  </table>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;h1&gt;</span>h1. Bootstrap heading<span className="nt">&lt;/h1&gt;</span>{"\n"}<span className="nt">&lt;h2&gt;</span>h2. Bootstrap heading<span className="nt">&lt;/h2&gt;</span>{"\n"}<span className="nt">&lt;h3&gt;</span>h3. Bootstrap heading<span className="nt">&lt;/h3&gt;</span>{"\n"}<span className="nt">&lt;h4&gt;</span>h4. Bootstrap heading<span className="nt">&lt;/h4&gt;</span>{"\n"}<span className="nt">&lt;h5&gt;</span>h5. Bootstrap heading<span className="nt">&lt;/h5&gt;</span>{"\n"}<span className="nt">&lt;h6&gt;</span>h6. Bootstrap heading<span className="nt">&lt;/h6&gt;</span></code></pre></figure>
  <p><code className="highlighter-rouge">.h1</code> through <code className="highlighter-rouge">.h6</code> classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element.</p>
  <div className="bd-example">
    <p className="h1">h1. Bootstrap heading</p>
    <p className="h2">h2. Bootstrap heading</p>
    <p className="h3">h3. Bootstrap heading</p>
    <p className="h4">h4. Bootstrap heading</p>
    <p className="h5">h5. Bootstrap heading</p>
    <p className="h6">h6. Bootstrap heading</p>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"h1"</span><span className="nt">&gt;</span>h1. Bootstrap heading<span className="nt">&lt;/p&gt;</span>{"\n"}<span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"h2"</span><span className="nt">&gt;</span>h2. Bootstrap heading<span className="nt">&lt;/p&gt;</span>{"\n"}<span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"h3"</span><span className="nt">&gt;</span>h3. Bootstrap heading<span className="nt">&lt;/p&gt;</span>{"\n"}<span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"h4"</span><span className="nt">&gt;</span>h4. Bootstrap heading<span className="nt">&lt;/p&gt;</span>{"\n"}<span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"h5"</span><span className="nt">&gt;</span>h5. Bootstrap heading<span className="nt">&lt;/p&gt;</span>{"\n"}<span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"h6"</span><span className="nt">&gt;</span>h6. Bootstrap heading<span className="nt">&lt;/p&gt;</span></code></pre></figure>
  <h3 id="customizing-headings"><span className="bd-content-title">Customizing headings</span></h3>
  <p>Use the included utility classes to recreate the small secondary heading text from Bootstrap 3.</p>
  <div className="bd-example">
    <h3>
      Fancy display heading
      <small className="text-muted">With faded secondary text</small>
    </h3>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;h3&gt;</span>{"\n"}{"  "}Fancy display heading{"\n"}{"  "}<span className="nt">&lt;small</span> <span className="na">class=</span><span className="s">"text-muted"</span><span className="nt">&gt;</span>With faded secondary text<span className="nt">&lt;/small&gt;</span>{"\n"}<span className="nt">&lt;/h3&gt;</span></code></pre></figure>
  <h2 id="display-headings"><span className="bd-content-title">Display headings</span></h2>
  <p>Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a <strong>display heading</strong>—a larger, slightly more opinionated heading style.</p>
  <div className="bd-example bd-example-type">
    <table className="table">
      <tbody>
        <tr>
          <td><span className="display-1">Display 1</span></td>
        </tr>
        <tr>
          <td><span className="display-2">Display 2</span></td>
        </tr>
        <tr>
          <td><span className="display-3">Display 3</span></td>
        </tr>
        <tr>
          <td><span className="display-4">Display 4</span></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;h1</span> <span className="na">class=</span><span className="s">"display-1"</span><span className="nt">&gt;</span>Display 1<span className="nt">&lt;/h1&gt;</span>{"\n"}<span className="nt">&lt;h1</span> <span className="na">class=</span><span className="s">"display-2"</span><span className="nt">&gt;</span>Display 2<span className="nt">&lt;/h1&gt;</span>{"\n"}<span className="nt">&lt;h1</span> <span className="na">class=</span><span className="s">"display-3"</span><span className="nt">&gt;</span>Display 3<span className="nt">&lt;/h1&gt;</span>{"\n"}<span className="nt">&lt;h1</span> <span className="na">class=</span><span className="s">"display-4"</span><span className="nt">&gt;</span>Display 4<span className="nt">&lt;/h1&gt;</span></code></pre></figure>
  <h2 id="lead"><span className="bd-content-title">Lead</span></h2>
  <p>Make a paragraph stand out by adding <code className="highlighter-rouge">.lead</code>.</p>
  <div className="bd-example">
    <p className="lead">
      Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
    </p>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"lead"</span><span className="nt">&gt;</span>{"\n"}{"  "}Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.{"\n"}<span className="nt">&lt;/p&gt;</span></code></pre></figure>
  <h2 id="inline-text-elements"><span className="bd-content-title">Inline text elements</span></h2>
  <p>Styling for common inline HTML5 elements.</p>
  <div className="bd-example">
    <p>You can use the mark tag to <mark>highlight</mark> text.</p>
    <p><del>This line of text is meant to be treated as deleted text.</del></p>
    <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
    <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
    <p><u>This line of text will render as underlined</u></p>
    <p><small>This line of text is meant to be treated as fine print.</small></p>
    <p><strong>This line rendered as bold text.</strong></p>
    <p><em>This line rendered as italicized text.</em></p>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;p&gt;</span>You can use the mark tag to <span className="nt">&lt;mark&gt;</span>highlight<span className="nt">&lt;/mark&gt;</span> text.<span className="nt">&lt;/p&gt;</span>{"\n"}<span className="nt">&lt;p&gt;&lt;del&gt;</span>This line of text is meant to be treated as deleted text.<span className="nt">&lt;/del&gt;&lt;/p&gt;</span>{"\n"}<span className="nt">&lt;p&gt;&lt;s&gt;</span>This line of text is meant to be treated as no longer accurate.<span className="nt">&lt;/s&gt;&lt;/p&gt;</span>{"\n"}<span className="nt">&lt;p&gt;&lt;ins&gt;</span>This line of text is meant to be treated as an addition to the document.<span className="nt">&lt;/ins&gt;&lt;/p&gt;</span>{"\n"}<span className="nt">&lt;p&gt;&lt;u&gt;</span>This line of text will render as underlined<span className="nt">&lt;/u&gt;&lt;/p&gt;</span>{"\n"}<span className="nt">&lt;p&gt;&lt;small&gt;</span>This line of text is meant to be treated as fine print.<span className="nt">&lt;/small&gt;&lt;/p&gt;</span>{"\n"}<span className="nt">&lt;p&gt;&lt;strong&gt;</span>This line rendered as bold text.<span className="nt">&lt;/strong&gt;&lt;/p&gt;</span>{"\n"}<span className="nt">&lt;p&gt;&lt;em&gt;</span>This line rendered as italicized text.<span className="nt">&lt;/em&gt;&lt;/p&gt;</span></code></pre></figure>
  <p><code className="highlighter-rouge">.mark</code> and <code className="highlighter-rouge">.small</code> classes are also available to apply the same styles as <code className="highlighter-rouge">&lt;mark&gt;</code> and <code className="highlighter-rouge">&lt;small&gt;</code> while avoiding any unwanted semantic implications that the tags would bring.</p>
  <p>While not shown above, feel free to use <code className="highlighter-rouge">&lt;b&gt;</code> and <code className="highlighter-rouge">&lt;i&gt;</code> in HTML5. <code className="highlighter-rouge">&lt;b&gt;</code> is meant to highlight words or phrases without conveying additional importance while <code className="highlighter-rouge">&lt;i&gt;</code> is mostly for voice, technical terms, etc.</p>
  <h2 id="text-utilities"><span className="bd-content-title">Text utilities</span></h2>
  <p>Change text alignment, transform, style, weight, and color with our <a href="/docs/4.2/utilities/text/">text utilities</a> and <a href="/docs/4.2/utilities/colors/">color utilities</a>.</p>
  <h2 id="abbreviations"><span className="bd-content-title">Abbreviations</span></h2>
  <p>Stylized implementation of HTML’s <code className="highlighter-rouge">&lt;abbr&gt;</code> element for abbreviations and acronyms to show the expanded version on hover. Abbreviations have a default underline and gain a help cursor to provide additional context on hover and to users of assistive technologies.</p>
  <p>Add <code className="highlighter-rouge">.initialism</code> to an abbreviation for a slightly smaller font-size.</p>
  <div className="bd-example">
    <p><abbr title="attribute">attr</abbr></p>
    <p><abbr title="HyperText Markup Language" className="initialism">HTML</abbr></p>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;p&gt;&lt;abbr</span> <span className="na">title=</span><span className="s">"attribute"</span><span className="nt">&gt;</span>attr<span className="nt">&lt;/abbr&gt;&lt;/p&gt;</span>{"\n"}<span className="nt">&lt;p&gt;&lt;abbr</span> <span className="na">title=</span><span className="s">"HyperText Markup Language"</span> <span className="na">class=</span><span className="s">"initialism"</span><span className="nt">&gt;</span>HTML<span className="nt">&lt;/abbr&gt;&lt;/p&gt;</span></code></pre></figure>
  <h2 id="blockquotes"><span className="bd-content-title">Blockquotes</span></h2>
  <p>For quoting blocks of content from another source within your document. Wrap <code className="highlighter-rouge">&lt;blockquote class="blockquote"&gt;</code> around any <abbr title="HyperText Markup Language">HTML</abbr> as the quote.</p>
  <div className="bd-example">
    <blockquote className="blockquote">
      <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    </blockquote>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;blockquote</span> <span className="na">class=</span><span className="s">"blockquote"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"mb-0"</span><span className="nt">&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.<span className="nt">&lt;/p&gt;</span>{"\n"}<span className="nt">&lt;/blockquote&gt;</span></code></pre></figure>
  <h3 id="naming-a-source"><span className="bd-content-title">Naming a source</span></h3>
  <p>Add a <code className="highlighter-rouge">&lt;footer class="blockquote-footer"&gt;</code> for identifying the source. Wrap the name of the source work in <code className="highlighter-rouge">&lt;cite&gt;</code>.</p>
  <div className="bd-example">
    <blockquote className="blockquote">
      <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;blockquote</span> <span className="na">class=</span><span className="s">"blockquote"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"mb-0"</span><span className="nt">&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.<span className="nt">&lt;/p&gt;</span>{"\n"}{"  "}<span className="nt">&lt;footer</span> <span className="na">class=</span><span className="s">"blockquote-footer"</span><span className="nt">&gt;</span>Someone famous in <span className="nt">&lt;cite</span> <span className="na">title=</span><span className="s">"Source Title"</span><span className="nt">&gt;</span>Source Title<span className="nt">&lt;/cite&gt;&lt;/footer&gt;</span>{"\n"}<span className="nt">&lt;/blockquote&gt;</span></code></pre></figure>
  <h3 id="alignment"><span className="bd-content-title">Alignment</span></h3>
  <p>Use text utilities as needed to change the alignment of your blockquote.</p>
  <div className="bd-example">
    <blockquote className="blockquote text-center">
      <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;blockquote</span> <span className="na">class=</span><span className="s">"blockquote text-center"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"mb-0"</span><span className="nt">&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.<span className="nt">&lt;/p&gt;</span>{"\n"}{"  "}<span className="nt">&lt;footer</span> <span className="na">class=</span><span className="s">"blockquote-footer"</span><span className="nt">&gt;</span>Someone famous in <span className="nt">&lt;cite</span> <span className="na">title=</span><span className="s">"Source Title"</span><span className="nt">&gt;</span>Source Title<span className="nt">&lt;/cite&gt;&lt;/footer&gt;</span>{"\n"}<span className="nt">&lt;/blockquote&gt;</span></code></pre></figure>
  <div className="bd-example">
    <blockquote className="blockquote text-right">
      <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;blockquote</span> <span className="na">class=</span><span className="s">"blockquote text-right"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"mb-0"</span><span className="nt">&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.<span className="nt">&lt;/p&gt;</span>{"\n"}{"  "}<span className="nt">&lt;footer</span> <span className="na">class=</span><span className="s">"blockquote-footer"</span><span className="nt">&gt;</span>Someone famous in <span className="nt">&lt;cite</span> <span className="na">title=</span><span className="s">"Source Title"</span><span className="nt">&gt;</span>Source Title<span className="nt">&lt;/cite&gt;&lt;/footer&gt;</span>{"\n"}<span className="nt">&lt;/blockquote&gt;</span></code></pre></figure>
  <h2 id="lists"><span className="bd-content-title">Lists</span></h2>
  <h3 id="unstyled"><span className="bd-content-title">Unstyled</span></h3>
  <p>Remove the default <code className="highlighter-rouge">list-style</code> and left margin on list items (immediate children only). <strong>This only applies to immediate children list items</strong>, meaning you will need to add the class for any nested lists as well.</p>
  <div className="bd-example">
    <ul className="list-unstyled">
      <li>Lorem ipsum dolor sit amet</li>
      <li>Consectetur adipiscing elit</li>
      <li>Integer molestie lorem at massa</li>
      <li>Facilisis in pretium nisl aliquet</li>
      <li>Nulla volutpat aliquam velit
        <ul>
          <li>Phasellus iaculis neque</li>
          <li>Purus sodales ultricies</li>
          <li>Vestibulum laoreet porttitor sem</li>
          <li>Ac tristique libero volutpat at</li>
        </ul>
      </li>
      <li>Faucibus porta lacus fringilla vel</li>
      <li>Aenean sit amet erat nunc</li>
      <li>Eget porttitor lorem</li>
    </ul>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;ul</span> <span className="na">class=</span><span className="s">"list-unstyled"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;li&gt;</span>Lorem ipsum dolor sit amet<span className="nt">&lt;/li&gt;</span>{"\n"}{"  "}<span className="nt">&lt;li&gt;</span>Consectetur adipiscing elit<span className="nt">&lt;/li&gt;</span>{"\n"}{"  "}<span className="nt">&lt;li&gt;</span>Integer molestie lorem at massa<span className="nt">&lt;/li&gt;</span>{"\n"}{"  "}<span className="nt">&lt;li&gt;</span>Facilisis in pretium nisl aliquet<span className="nt">&lt;/li&gt;</span>{"\n"}{"  "}<span className="nt">&lt;li&gt;</span>Nulla volutpat aliquam velit{"\n"}{"    "}<span className="nt">&lt;ul&gt;</span>{"\n"}{"      "}<span className="nt">&lt;li&gt;</span>Phasellus iaculis neque<span className="nt">&lt;/li&gt;</span>{"\n"}{"      "}<span className="nt">&lt;li&gt;</span>Purus sodales ultricies<span className="nt">&lt;/li&gt;</span>{"\n"}{"      "}<span className="nt">&lt;li&gt;</span>Vestibulum laoreet porttitor sem<span className="nt">&lt;/li&gt;</span>{"\n"}{"      "}<span className="nt">&lt;li&gt;</span>Ac tristique libero volutpat at<span className="nt">&lt;/li&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/ul&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"  "}<span className="nt">&lt;li&gt;</span>Faucibus porta lacus fringilla vel<span className="nt">&lt;/li&gt;</span>{"\n"}{"  "}<span className="nt">&lt;li&gt;</span>Aenean sit amet erat nunc<span className="nt">&lt;/li&gt;</span>{"\n"}{"  "}<span className="nt">&lt;li&gt;</span>Eget porttitor lorem<span className="nt">&lt;/li&gt;</span>{"\n"}<span className="nt">&lt;/ul&gt;</span></code></pre></figure>
  <h3 id="inline"><span className="bd-content-title">Inline</span></h3>
  <p>Remove a list’s bullets and apply some light <code className="highlighter-rouge">margin</code> with a combination of two classes, <code className="highlighter-rouge">.list-inline</code> and <code className="highlighter-rouge">.list-inline-item</code>.</p>
  <div className="bd-example">
    <ul className="list-inline">
      <li className="list-inline-item">Lorem ipsum</li>
      <li className="list-inline-item">Phasellus iaculis</li>
      <li className="list-inline-item">Nulla volutpat</li>
    </ul>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;ul</span> <span className="na">class=</span><span className="s">"list-inline"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"list-inline-item"</span><span className="nt">&gt;</span>Lorem ipsum<span className="nt">&lt;/li&gt;</span>{"\n"}{"  "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"list-inline-item"</span><span className="nt">&gt;</span>Phasellus iaculis<span className="nt">&lt;/li&gt;</span>{"\n"}{"  "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"list-inline-item"</span><span className="nt">&gt;</span>Nulla volutpat<span className="nt">&lt;/li&gt;</span>{"\n"}<span className="nt">&lt;/ul&gt;</span></code></pre></figure>
  <h3 id="description-list-alignment"><span className="bd-content-title">Description list alignment</span></h3>
  <p>Align terms and descriptions horizontally by using our grid system’s predefined classes (or semantic mixins). For longer terms, you can optionally add a <code className="highlighter-rouge">.text-truncate</code> class to truncate the text with an ellipsis.</p>
  <div className="bd-example">
    <dl className="row">
      <dt className="col-sm-3">Description lists</dt>
      <dd className="col-sm-9">A description list is perfect for defining terms.</dd>
      <dt className="col-sm-3">Euismod</dt>
      <dd className="col-sm-9">
        <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
        <p>Donec id elit non mi porta gravida at eget metus.</p>
      </dd>
      <dt className="col-sm-3">Malesuada porta</dt>
      <dd className="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>
      <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
      <dd className="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>
      <dt className="col-sm-3">Nesting</dt>
      <dd className="col-sm-9">
        <dl className="row">
          <dt className="col-sm-4">Nested definition list</dt>
          <dd className="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
        </dl>
      </dd>
    </dl>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;dl</span> <span className="na">class=</span><span className="s">"row"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;dt</span> <span className="na">class=</span><span className="s">"col-sm-3"</span><span className="nt">&gt;</span>Description lists<span className="nt">&lt;/dt&gt;</span>{"\n"}{"  "}<span className="nt">&lt;dd</span> <span className="na">class=</span><span className="s">"col-sm-9"</span><span className="nt">&gt;</span>A description list is perfect for defining terms.<span className="nt">&lt;/dd&gt;</span>{"\n"}{"\n"}{"  "}<span className="nt">&lt;dt</span> <span className="na">class=</span><span className="s">"col-sm-3"</span><span className="nt">&gt;</span>Euismod<span className="nt">&lt;/dt&gt;</span>{"\n"}{"  "}<span className="nt">&lt;dd</span> <span className="na">class=</span><span className="s">"col-sm-9"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;p&gt;</span>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.<span className="nt">&lt;/p&gt;</span>{"\n"}{"    "}<span className="nt">&lt;p&gt;</span>Donec id elit non mi porta gravida at eget metus.<span className="nt">&lt;/p&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/dd&gt;</span>{"\n"}{"\n"}{"  "}<span className="nt">&lt;dt</span> <span className="na">class=</span><span className="s">"col-sm-3"</span><span className="nt">&gt;</span>Malesuada porta<span className="nt">&lt;/dt&gt;</span>{"\n"}{"  "}<span className="nt">&lt;dd</span> <span className="na">class=</span><span className="s">"col-sm-9"</span><span className="nt">&gt;</span>Etiam porta sem malesuada magna mollis euismod.<span className="nt">&lt;/dd&gt;</span>{"\n"}{"\n"}{"  "}<span className="nt">&lt;dt</span> <span className="na">class=</span><span className="s">"col-sm-3 text-truncate"</span><span className="nt">&gt;</span>Truncated term is truncated<span className="nt">&lt;/dt&gt;</span>{"\n"}{"  "}<span className="nt">&lt;dd</span> <span className="na">class=</span><span className="s">"col-sm-9"</span><span className="nt">&gt;</span>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.<span className="nt">&lt;/dd&gt;</span>{"\n"}{"\n"}{"  "}<span className="nt">&lt;dt</span> <span className="na">class=</span><span className="s">"col-sm-3"</span><span className="nt">&gt;</span>Nesting<span className="nt">&lt;/dt&gt;</span>{"\n"}{"  "}<span className="nt">&lt;dd</span> <span className="na">class=</span><span className="s">"col-sm-9"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;dl</span> <span className="na">class=</span><span className="s">"row"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;dt</span> <span className="na">class=</span><span className="s">"col-sm-4"</span><span className="nt">&gt;</span>Nested definition list<span className="nt">&lt;/dt&gt;</span>{"\n"}{"      "}<span className="nt">&lt;dd</span> <span className="na">class=</span><span className="s">"col-sm-8"</span><span className="nt">&gt;</span>Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.<span className="nt">&lt;/dd&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/dl&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/dd&gt;</span>{"\n"}<span className="nt">&lt;/dl&gt;</span></code></pre></figure>
  <h2 id="responsive-typography"><span className="bd-content-title">Responsive typography</span></h2>
  <p><em>Responsive typography</em> refers to scaling text and components by simply adjusting the root element’s <code className="highlighter-rouge">font-size</code> within a series of media queries. Bootstrap doesn’t do this for you, but it’s fairly easy to add if you need it.</p>
  <p>Here’s an example of it in practice. Choose whatever <code className="highlighter-rouge">font-size</code>s and media queries you wish.</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-scss" data-lang="scss"><span className="nt">html</span> <span className="p">{"{"}</span>{"\n"}{"  "}<span className="nl">font-size</span><span className="p">:</span> <span className="m">1rem</span><span className="p">;</span>{"\n"}<span className="p">{"}"}</span>{"\n"}{"\n"}<span className="k">@include</span> <span className="nd">media-breakpoint-up</span><span className="p">(</span><span className="n">sm</span><span className="p">)</span> <span className="p">{"{"}</span>{"\n"}{"  "}<span className="nt">html</span> <span className="p">{"{"}</span>{"\n"}{"    "}<span className="nl">font-size</span><span className="p">:</span> <span className="m">1</span><span className="mi">.2rem</span><span className="p">;</span>{"\n"}{"  "}<span className="p">{"}"}</span>{"\n"}<span className="p">{"}"}</span>{"\n"}{"\n"}<span className="k">@include</span> <span className="nd">media-breakpoint-up</span><span className="p">(</span><span className="n">md</span><span className="p">)</span> <span className="p">{"{"}</span>{"\n"}{"  "}<span className="nt">html</span> <span className="p">{"{"}</span>{"\n"}{"    "}<span className="nl">font-size</span><span className="p">:</span> <span className="m">1</span><span className="mi">.4rem</span><span className="p">;</span>{"\n"}{"  "}<span className="p">{"}"}</span>{"\n"}<span className="p">{"}"}</span>{"\n"}{"\n"}<span className="k">@include</span> <span className="nd">media-breakpoint-up</span><span className="p">(</span><span className="n">lg</span><span className="p">)</span> <span className="p">{"{"}</span>{"\n"}{"  "}<span className="nt">html</span> <span className="p">{"{"}</span>{"\n"}{"    "}<span className="nl">font-size</span><span className="p">:</span> <span className="m">1</span><span className="mi">.6rem</span><span className="p">;</span>{"\n"}{"  "}<span className="p">{"}"}</span>{"\n"}<span className="p">{"}"}</span></code></pre></figure>
</main>

    );
  }
}