import React from 'react';

export default class LayoutUtils extends React.Component {
  render() {
    return (
<main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
  <h1 className="bd-title" id="content">Utilities for layout</h1>
  <p className="bd-lead">For faster mobile-friendly and responsive development, Bootstrap includes dozens of utility classes for showing, hiding, aligning, and spacing content.</p>
  <div id="carbonads"><span><span className="carbon-wrap"><a href="//srv.carbonads.net/ads/click/x/GTND42QWCA7D623MFT74YKQMCESICK3JCESDLZ3JCWBD5K7ICESDK23KC6BIV27LCV7DVK3EHJNCLSIZ?segment=placement:getbootstrapcom;" className="carbon-img" target="_blank" rel="noopener"><img src="https://cdn4.buysellads.net/uu/1/41312/1547166736-na-thinkerman-260x200.jpg" alt border={0} height={100} width={130} style={{maxWidth: 130}} /></a><a href="//srv.carbonads.net/ads/click/x/GTND42QWCA7D623MFT74YKQMCESICK3JCESDLZ3JCWBD5K7ICESDK23KC6BIV27LCV7DVK3EHJNCLSIZ?segment=placement:getbootstrapcom;" className="carbon-text" target="_blank" rel="noopener">Transferring Your Balance To an 21-Month 0% APR is Ingenious</a></span><a href="http://carbonads.net/?utm_source=getbootstrapcom&utm_medium=ad_via_link&utm_campaign=in_unit&utm_term=carbon" className="carbon-poweredby" target="_blank" rel="noopener">ads via Carbon</a></span></div>
  <h2 id="changing-display"><span className="bd-content-title">Changing <code className="highlighter-rouge">display</code></span></h2>
  <p>Use our <a href="/docs/4.2/utilities/display/">display utilities</a> for responsively toggling common values of the <code className="highlighter-rouge">display</code> property. Mix it with our grid system, content, or components to show or hide them across specific viewports.</p>
  <h2 id="flexbox-options"><span className="bd-content-title">Flexbox options</span></h2>
  <p>Bootstrap 4 is built with flexbox, but not every element’s <code className="highlighter-rouge">display</code> has been changed to <code className="highlighter-rouge">display: flex</code> as this would add many unnecessary overrides and unexpectedly change key browser behaviors. Most of <a href="/docs/4.2/components/alerts/">our components</a> are built with flexbox enabled.</p>
  <p>Should you need to add <code className="highlighter-rouge">display: flex</code> to an element, do so with <code className="highlighter-rouge">.d-flex</code> or one of the responsive variants (e.g., <code className="highlighter-rouge">.d-sm-flex</code>). You’ll need this class or <code className="highlighter-rouge">display</code> value to allow the use of our extra <a href="/docs/4.2/utilities/flex/">flexbox utilities</a> for sizing, alignment, spacing, and more.</p>
  <h2 id="margin-and-padding"><span className="bd-content-title">Margin and padding</span></h2>
  <p>Use the <code className="highlighter-rouge">margin</code> and <code className="highlighter-rouge">padding</code> <a href="/docs/4.2/utilities/spacing/">spacing utilities</a> to control how elements and components are spaced and sized. Bootstrap 4 includes a five-level scale for spacing utilities, based on a <code className="highlighter-rouge">1rem</code> value default <code className="highlighter-rouge">$spacer</code> variable. Choose values for all viewports (e.g., <code className="highlighter-rouge">.mr-3</code> for <code className="highlighter-rouge">margin-right: 1rem</code>), or pick responsive variants to target specific viewports (e.g., <code className="highlighter-rouge">.mr-md-3</code> for <code className="highlighter-rouge">margin-right: 1rem</code> starting at the <code className="highlighter-rouge">md</code> breakpoint).</p>
  <h2 id="toggle-visibility"><span className="bd-content-title">Toggle <code className="highlighter-rouge">visibility</code></span></h2>
  <p>When toggling <code className="highlighter-rouge">display</code> isn’t needed, you can toggle the <code className="highlighter-rouge">visibility</code> of an element with our <a href="/docs/4.2/utilities/visibility/">visibility utilities</a>. Invisible elements will still affect the layout of the page, but are visually hidden from visitors.</p>
</main>

    );
  }
}