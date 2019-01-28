import React from 'react';

export default class Breadcrumb extends React.Component {
  render() {
    return (
<main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
  <h1 className="bd-title" id="content">Breadcrumb</h1>
  <p className="bd-lead">Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.</p>
  
  <h2 id="example"><span className="bd-content-title">Example</span></h2>
  <div className="bd-example">
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item active" aria-current="page">Home</li>
      </ol>
    </nav>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="#">Home</a></li>
        <li className="breadcrumb-item active" aria-current="page">Library</li>
      </ol>
    </nav>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="#">Home</a></li>
        <li className="breadcrumb-item"><a href="#">Library</a></li>
        <li className="breadcrumb-item active" aria-current="page">Data</li>
      </ol>
    </nav>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;nav</span> <span className="na">aria-label=</span><span className="s">"breadcrumb"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;ol</span> <span className="na">class=</span><span className="s">"breadcrumb"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"breadcrumb-item active"</span> <span className="na">aria-current=</span><span className="s">"page"</span><span className="nt">&gt;</span>Home<span className="nt">&lt;/li&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/ol&gt;</span>{"\n"}<span className="nt">&lt;/nav&gt;</span>{"\n"}{"\n"}<span className="nt">&lt;nav</span> <span className="na">aria-label=</span><span className="s">"breadcrumb"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;ol</span> <span className="na">class=</span><span className="s">"breadcrumb"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"breadcrumb-item"</span><span className="nt">&gt;&lt;a</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Home<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"breadcrumb-item active"</span> <span className="na">aria-current=</span><span className="s">"page"</span><span className="nt">&gt;</span>Library<span className="nt">&lt;/li&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/ol&gt;</span>{"\n"}<span className="nt">&lt;/nav&gt;</span>{"\n"}{"\n"}<span className="nt">&lt;nav</span> <span className="na">aria-label=</span><span className="s">"breadcrumb"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;ol</span> <span className="na">class=</span><span className="s">"breadcrumb"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"breadcrumb-item"</span><span className="nt">&gt;&lt;a</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Home<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"breadcrumb-item"</span><span className="nt">&gt;&lt;a</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Library<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"breadcrumb-item active"</span> <span className="na">aria-current=</span><span className="s">"page"</span><span className="nt">&gt;</span>Data<span className="nt">&lt;/li&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/ol&gt;</span>{"\n"}<span className="nt">&lt;/nav&gt;</span></code></pre></figure>
  <h2 id="changing-the-separator"><span className="bd-content-title">Changing the separator</span></h2>
  <p>Separators are automatically added in CSS through <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::before"><code className="highlighter-rouge">::before</code></a> and <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/content"><code className="highlighter-rouge">content</code></a>. They can be changed by changing <code className="highlighter-rouge">$breadcrumb-divider</code>. The <a href="https://sass-lang.com/documentation/Sass/Script/Functions.html#quote-instance_method">quote</a> function is needed to generate the quotes around a string, so if you want <code className="highlighter-rouge">&gt;</code> as separator, you can use this:</p>
  <div className="language-scss highlighter-rouge"><div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><div className="highlight"><pre className="highlight"><code><span className="nv">$breadcrumb-divider</span><span className="p">:</span> <span className="nf">quote</span><span className="p">(</span><span className="s2">"&gt;"</span><span className="p">);</span>{"\n"}</code></pre></div></div>
  <p>It’s also possible to use a <strong>base64 embedded SVG icon</strong>:</p>
  <div className="language-scss highlighter-rouge"><div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><div className="highlight"><pre className="highlight"><code><span className="nv">$breadcrumb-divider</span><span className="p">:</span> <span className="sx">url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxwYXRoIGQ9Ik0yLjUgMEwxIDEuNSAzLjUgNCAxIDYuNSAyLjUgOGw0LTQtNC00eiIgZmlsbD0iY3VycmVudENvbG9yIi8+PC9zdmc+)</span><span className="p">;</span>{"\n"}</code></pre></div></div>
  <p>The separator can be removed by setting <code className="highlighter-rouge">$breadcrumb-divider</code> to <code className="highlighter-rouge">none</code>:</p>
  <div className="language-scss highlighter-rouge"><div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><div className="highlight"><pre className="highlight"><code><span className="nv">$breadcrumb-divider</span><span className="p">:</span> <span className="nb">none</span><span className="p">;</span>{"\n"}</code></pre></div></div>
  <h2 id="accessibility"><span className="bd-content-title">Accessibility</span></h2>
  <p>Since breadcrumbs provide a navigation, it’s a good idea to add a meaningful label such as <code className="highlighter-rouge">aria-label="breadcrumb"</code> to describe the type of navigation provided in the <code className="highlighter-rouge">&lt;nav&gt;</code> element, as well as applying an <code className="highlighter-rouge">aria-current="page"</code> to the last item of the set to indicate that it represents the current page.</p>
  <p>For more information, see the <a href="https://www.w3.org/TR/wai-aria-practices/#breadcrumb">WAI-ARIA Authoring Practices for the breadcrumb pattern</a>.</p>
</main>

    );
  }
}