import React from 'react';

export default class Scrollspy extends React.Component {
  render() {
    return (
<main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
  <h1 className="bd-title" id="content">Scrollspy</h1>
  <p className="bd-lead">Automatically update Bootstrap navigation or list group components based on scroll position to indicate which link is currently active in the viewport.</p>
  
  <h2 id="how-it-works"><span className="bd-content-title">How it works</span></h2>
  <p>Scrollspy has a few requirements to function properly:</p>
  <ul>
    <li>If you’re building our JavaScript from source, it <a href="/docs/4.2/getting-started/javascript/#util">requires <code className="highlighter-rouge">util.js</code></a>.</li>
    <li>It must be used on a Bootstrap <a href="/docs/4.2/components/navs/">nav component</a> or <a href="/docs/4.2/components/list-group/">list group</a>.</li>
    <li>Scrollspy requires <code className="highlighter-rouge">position: relative;</code> on the element you’re spying on, usually the <code className="highlighter-rouge">&lt;body&gt;</code>.</li>
    <li>When spying on elements other than the <code className="highlighter-rouge">&lt;body&gt;</code>, be sure to have a <code className="highlighter-rouge">height</code> set and <code className="highlighter-rouge">overflow-y: scroll;</code> applied.</li>
    <li>Anchors (<code className="highlighter-rouge">&lt;a&gt;</code>) are required and must point to an element with that <code className="highlighter-rouge">id</code>.</li>
  </ul>
  <p>When successfully implemented, your nav or list group will update accordingly, moving the <code className="highlighter-rouge">.active</code> class from one item to the next based on their associated targets.</p>
  <h2 id="example-in-navbar"><span className="bd-content-title">Example in navbar</span></h2>
  <p>Scroll the area below the navbar and watch the active class change. The dropdown items will be highlighted as well.</p>
  <div className="bd-example">
    <nav id="navbar-example2" className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a className="nav-link active" href="#fat">@fat</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#mdo">@mdo</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#one">one</a>
            <a className="dropdown-item" href="#two">two</a>
            <div role="separator" className="dropdown-divider" />
            <a className="dropdown-item" href="#three">three</a>
          </div>
        </li>
      </ul>
    </nav>
    <div data-spy="scroll" data-target="#navbar-example2" data-offset={0} className="scrollspy-example">
      <h4 id="fat">@fat</h4>
      <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.</p>
      <h4 id="mdo">@mdo</h4>
      <p>Veniam marfa mustache skateboard, adipisicing fugiat velit pitchfork beard. Freegan beard aliqua cupidatat mcsweeney's vero. Cupidatat four loko nisi, ea helvetica nulla carles. Tattooed cosby sweater food truck, mcsweeney's quis non freegan vinyl. Lo-fi wes anderson +1 sartorial. Carles non aesthetic exercitation quis gentrify. Brooklyn adipisicing craft beer vice keytar deserunt.</p>
      <h4 id="one">one</h4>
      <p>Occaecat commodo aliqua delectus. Fap craft beer deserunt skateboard ea. Lomo bicycle rights adipisicing banh mi, velit ea sunt next level locavore single-origin coffee in magna veniam. High life id vinyl, echo park consequat quis aliquip banh mi pitchfork. Vero VHS est adipisicing. Consectetur nisi DIY minim messenger bag. Cred ex in, sustainable delectus consectetur fanny pack iphone.</p>
      <h4 id="two">two</h4>
      <p>In incididunt echo park, officia deserunt mcsweeney's proident master cleanse thundercats sapiente veniam. Excepteur VHS elit, proident shoreditch +1 biodiesel laborum craft beer. Single-origin coffee wayfarers irure four loko, cupidatat terry richardson master cleanse. Assumenda you probably haven't heard of them art party fanny pack, tattooed nulla cardigan tempor ad. Proident wolf nesciunt sartorial keffiyeh eu banh mi sustainable. Elit wolf voluptate, lo-fi ea portland before they sold out four loko. Locavore enim nostrud mlkshk brooklyn nesciunt.</p>
      <h4 id="three">three</h4>
      <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.</p>
      <p>Keytar twee blog, culpa messenger bag marfa whatever delectus food truck. Sapiente synth id assumenda. Locavore sed helvetica cliche irony, thundercats you probably haven't heard of them consequat hoodie gluten-free lo-fi fap aliquip. Labore elit placeat before they sold out, terry richardson proident brunch nesciunt quis cosby sweater pariatur keffiyeh ut helvetica artisan. Cardigan craft beer seitan readymade velit. VHS chambray laboris tempor veniam. Anim mollit minim commodo ullamco thundercats.
      </p>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;nav</span> <span className="na">id=</span><span className="s">"navbar-example2"</span> <span className="na">class=</span><span className="s">"navbar navbar-light bg-light"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"navbar-brand"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Navbar<span className="nt">&lt;/a&gt;</span>{"\n"}{"  "}<span className="nt">&lt;ul</span> <span className="na">class=</span><span className="s">"nav nav-pills"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span className="na">href=</span><span className="s">"#fat"</span><span className="nt">&gt;</span>@fat<span className="nt">&lt;/a&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span className="na">href=</span><span className="s">"#mdo"</span><span className="nt">&gt;</span>@mdo<span className="nt">&lt;/a&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"    "}<span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item dropdown"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link dropdown-toggle"</span> <span className="na">data-toggle=</span><span className="s">"dropdown"</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">role=</span><span className="s">"button"</span> <span className="na">aria-haspopup=</span><span className="s">"true"</span> <span className="na">aria-expanded=</span><span className="s">"false"</span><span className="nt">&gt;</span>Dropdown<span className="nt">&lt;/a&gt;</span>{"\n"}{"      "}<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-menu"</span><span className="nt">&gt;</span>{"\n"}{"        "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#one"</span><span className="nt">&gt;</span>one<span className="nt">&lt;/a&gt;</span>{"\n"}{"        "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#two"</span><span className="nt">&gt;</span>two<span className="nt">&lt;/a&gt;</span>{"\n"}{"        "}<span className="nt">&lt;div</span> <span className="na">role=</span><span className="s">"separator"</span> <span className="na">class=</span><span className="s">"dropdown-divider"</span><span className="nt">&gt;&lt;/div&gt;</span>{"\n"}{"        "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#three"</span><span className="nt">&gt;</span>three<span className="nt">&lt;/a&gt;</span>{"\n"}{"      "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/li&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/ul&gt;</span>{"\n"}<span className="nt">&lt;/nav&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">data-spy=</span><span className="s">"scroll"</span> <span className="na">data-target=</span><span className="s">"#navbar-example2"</span> <span className="na">data-offset=</span><span className="s">"0"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;h4</span> <span className="na">id=</span><span className="s">"fat"</span><span className="nt">&gt;</span>@fat<span className="nt">&lt;/h4&gt;</span>{"\n"}{"  "}<span className="nt">&lt;p&gt;</span>...<span className="nt">&lt;/p&gt;</span>{"\n"}{"  "}<span className="nt">&lt;h4</span> <span className="na">id=</span><span className="s">"mdo"</span><span className="nt">&gt;</span>@mdo<span className="nt">&lt;/h4&gt;</span>{"\n"}{"  "}<span className="nt">&lt;p&gt;</span>...<span className="nt">&lt;/p&gt;</span>{"\n"}{"  "}<span className="nt">&lt;h4</span> <span className="na">id=</span><span className="s">"one"</span><span className="nt">&gt;</span>one<span className="nt">&lt;/h4&gt;</span>{"\n"}{"  "}<span className="nt">&lt;p&gt;</span>...<span className="nt">&lt;/p&gt;</span>{"\n"}{"  "}<span className="nt">&lt;h4</span> <span className="na">id=</span><span className="s">"two"</span><span className="nt">&gt;</span>two<span className="nt">&lt;/h4&gt;</span>{"\n"}{"  "}<span className="nt">&lt;p&gt;</span>...<span className="nt">&lt;/p&gt;</span>{"\n"}{"  "}<span className="nt">&lt;h4</span> <span className="na">id=</span><span className="s">"three"</span><span className="nt">&gt;</span>three<span className="nt">&lt;/h4&gt;</span>{"\n"}{"  "}<span className="nt">&lt;p&gt;</span>...<span className="nt">&lt;/p&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <h2 id="example-with-nested-nav"><span className="bd-content-title">Example with nested nav</span></h2>
  <p>Scrollspy also works with nested <code className="highlighter-rouge">.nav</code>s. If a nested <code className="highlighter-rouge">.nav</code> is <code className="highlighter-rouge">.active</code>, its parents will also be <code className="highlighter-rouge">.active</code>. Scroll the area next to the navbar and watch the active class change.</p>
  <div className="bd-example">
    <div className="row">
      <div className="col-4">
        <nav id="navbar-example3" className="navbar navbar-light bg-light flex-column">
          <a className="navbar-brand" href="#">Navbar</a>
          <nav className="nav nav-pills flex-column">
            <a className="nav-link active" href="#item-1">Item 1</a>
            <nav className="nav nav-pills flex-column">
              <a className="nav-link ml-3 my-1" href="#item-1-1">Item 1-1</a>
              <a className="nav-link ml-3 my-1" href="#item-1-2">Item 1-2</a>
            </nav>
            <a className="nav-link" href="#item-2">Item 2</a>
            <a className="nav-link" href="#item-3">Item 3</a>
            <nav className="nav nav-pills flex-column">
              <a className="nav-link ml-3 my-1" href="#item-3-1">Item 3-1</a>
              <a className="nav-link ml-3 my-1" href="#item-3-2">Item 3-2</a>
            </nav>
          </nav>
        </nav>
      </div>
      <div className="col-8">
        <div data-spy="scroll" data-target="#navbar-example3" data-offset={0} className="scrollspy-example-2">
          <h4 id="item-1">Item 1</h4>
          <p>Ex consequat commodo adipisicing exercitation aute excepteur occaecat ullamco duis aliqua id magna ullamco eu. Do aute ipsum ipsum ullamco cillum consectetur ut et aute consectetur labore. Fugiat laborum incididunt tempor eu consequat enim dolore proident. Qui laborum do non excepteur nulla magna eiusmod consectetur in. Aliqua et aliqua officia quis et incididunt voluptate non anim reprehenderit adipisicing dolore ut consequat deserunt mollit dolore. Aliquip nulla enim veniam non fugiat id cupidatat nulla elit cupidatat commodo velit ut eiusmod cupidatat elit dolore.</p>
          <h5 id="item-1-1">Item 1-1</h5>
          <p>Amet tempor mollit aliquip pariatur excepteur commodo do ea cillum commodo Lorem et occaecat elit qui et. Aliquip labore ex ex esse voluptate occaecat Lorem ullamco deserunt. Aliqua cillum excepteur irure consequat id quis ea. Sit proident ullamco aute magna pariatur nostrud labore. Reprehenderit aliqua commodo eiusmod aliquip est do duis amet proident magna consectetur consequat eu commodo fugiat non quis. Enim aliquip exercitation ullamco adipisicing voluptate excepteur minim exercitation minim minim commodo adipisicing exercitation officia nisi adipisicing. Anim id duis qui consequat labore adipisicing sint dolor elit cillum anim et fugiat.</p>
          <h5 id="item-1-2">Item 1-2</h5>
          <p>Cillum nisi deserunt magna eiusmod qui eiusmod velit voluptate pariatur laborum sunt enim. Irure laboris mollit consequat incididunt sint et culpa culpa incididunt adipisicing magna magna occaecat. Nulla ipsum cillum eiusmod sint elit excepteur ea labore enim consectetur in labore anim. Proident ullamco ipsum esse elit ut Lorem eiusmod dolor et eiusmod. Anim occaecat nulla in non consequat eiusmod velit incididunt.</p>
          <h4 id="item-2">Item 2</h4>
          <p>Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex consectetur mollit voluptate est in duis laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum nisi sit est tempor laborum mollit labore officia laborum excepteur commodo non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur ipsum commodo tempor sunt in proident.</p>
          <h4 id="item-3">Item 3</h4>
          <p>Quis anim sit do amet fugiat dolor velit sit ea ea do reprehenderit culpa duis. Nostrud aliqua ipsum fugiat minim proident occaecat excepteur aliquip culpa aute tempor reprehenderit. Deserunt tempor mollit elit ex pariatur dolore velit fugiat mollit culpa irure ullamco est ex ullamco excepteur.</p>
          <h5 id="item-3-1">Item 3-1</h5>
          <p>Deserunt quis elit Lorem eiusmod amet enim enim amet minim Lorem proident nostrud. Ea id dolore anim exercitation aute fugiat labore voluptate cillum do laboris labore. Ex velit exercitation nisi enim labore reprehenderit labore nostrud ut ut. Esse officia sunt duis aliquip ullamco tempor eiusmod deserunt irure nostrud irure. Ullamco proident veniam laboris ea consectetur magna sunt ex exercitation aliquip minim enim culpa occaecat exercitation. Est tempor excepteur aliquip laborum consequat do deserunt laborum esse eiusmod irure proident ipsum esse qui.</p>
          <h5 id="item-3-2">Item 3-2</h5>
          <p>Labore sit culpa commodo elit adipisicing sit aliquip elit proident voluptate minim mollit nostrud aute reprehenderit do. Mollit excepteur eu Lorem ipsum anim commodo sint labore Lorem in exercitation velit incididunt. Occaecat consectetur nisi in occaecat proident minim enim sunt reprehenderit exercitation cupidatat et do officia. Aliquip consequat ad labore labore mollit ut amet. Sit pariatur tempor proident in veniam culpa aliqua excepteur elit magna fugiat eiusmod amet officia.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;nav</span> <span className="na">id=</span><span className="s">"navbar-example3"</span> <span className="na">class=</span><span className="s">"navbar navbar-light bg-light"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"navbar-brand"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Navbar<span className="nt">&lt;/a&gt;</span>{"\n"}{"  "}<span className="nt">&lt;nav</span> <span className="na">class=</span><span className="s">"nav nav-pills flex-column"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span className="na">href=</span><span className="s">"#item-1"</span><span className="nt">&gt;</span>Item 1<span className="nt">&lt;/a&gt;</span>{"\n"}{"    "}<span className="nt">&lt;nav</span> <span className="na">class=</span><span className="s">"nav nav-pills flex-column"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link ml-3 my-1"</span> <span className="na">href=</span><span className="s">"#item-1-1"</span><span className="nt">&gt;</span>Item 1-1<span className="nt">&lt;/a&gt;</span>{"\n"}{"      "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link ml-3 my-1"</span> <span className="na">href=</span><span className="s">"#item-1-2"</span><span className="nt">&gt;</span>Item 1-2<span className="nt">&lt;/a&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/nav&gt;</span>{"\n"}{"    "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span className="na">href=</span><span className="s">"#item-2"</span><span className="nt">&gt;</span>Item 2<span className="nt">&lt;/a&gt;</span>{"\n"}{"    "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span className="na">href=</span><span className="s">"#item-3"</span><span className="nt">&gt;</span>Item 3<span className="nt">&lt;/a&gt;</span>{"\n"}{"    "}<span className="nt">&lt;nav</span> <span className="na">class=</span><span className="s">"nav nav-pills flex-column"</span><span className="nt">&gt;</span>{"\n"}{"      "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link ml-3 my-1"</span> <span className="na">href=</span><span className="s">"#item-3-1"</span><span className="nt">&gt;</span>Item 3-1<span className="nt">&lt;/a&gt;</span>{"\n"}{"      "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link ml-3 my-1"</span> <span className="na">href=</span><span className="s">"#item-3-2"</span><span className="nt">&gt;</span>Item 3-2<span className="nt">&lt;/a&gt;</span>{"\n"}{"    "}<span className="nt">&lt;/nav&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/nav&gt;</span>{"\n"}<span className="nt">&lt;/nav&gt;</span>{"\n"}{"\n"}<span className="nt">&lt;div</span> <span className="na">data-spy=</span><span className="s">"scroll"</span> <span className="na">data-target=</span><span className="s">"#navbar-example3"</span> <span className="na">data-offset=</span><span className="s">"0"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;h4</span> <span className="na">id=</span><span className="s">"item-1"</span><span className="nt">&gt;</span>Item 1<span className="nt">&lt;/h4&gt;</span>{"\n"}{"  "}<span className="nt">&lt;p&gt;</span>...<span className="nt">&lt;/p&gt;</span>{"\n"}{"  "}<span className="nt">&lt;h5</span> <span className="na">id=</span><span className="s">"item-1-1"</span><span className="nt">&gt;</span>Item 1-1<span className="nt">&lt;/h5&gt;</span>{"\n"}{"  "}<span className="nt">&lt;p&gt;</span>...<span className="nt">&lt;/p&gt;</span>{"\n"}{"  "}<span className="nt">&lt;h5</span> <span className="na">id=</span><span className="s">"item-1-2"</span><span className="nt">&gt;</span>Item 1-2<span className="nt">&lt;/h5&gt;</span>{"\n"}{"  "}<span className="nt">&lt;p&gt;</span>...<span className="nt">&lt;/p&gt;</span>{"\n"}{"  "}<span className="nt">&lt;h4</span> <span className="na">id=</span><span className="s">"item-2"</span><span className="nt">&gt;</span>Item 2<span className="nt">&lt;/h4&gt;</span>{"\n"}{"  "}<span className="nt">&lt;p&gt;</span>...<span className="nt">&lt;/p&gt;</span>{"\n"}{"  "}<span className="nt">&lt;h4</span> <span className="na">id=</span><span className="s">"item-3"</span><span className="nt">&gt;</span>Item 3<span className="nt">&lt;/h4&gt;</span>{"\n"}{"  "}<span className="nt">&lt;p&gt;</span>...<span className="nt">&lt;/p&gt;</span>{"\n"}{"  "}<span className="nt">&lt;h5</span> <span className="na">id=</span><span className="s">"item-3-1"</span><span className="nt">&gt;</span>Item 3-1<span className="nt">&lt;/h5&gt;</span>{"\n"}{"  "}<span className="nt">&lt;p&gt;</span>...<span className="nt">&lt;/p&gt;</span>{"\n"}{"  "}<span className="nt">&lt;h5</span> <span className="na">id=</span><span className="s">"item-3-2"</span><span className="nt">&gt;</span>Item 3-2<span className="nt">&lt;/h5&gt;</span>{"\n"}{"  "}<span className="nt">&lt;p&gt;</span>...<span className="nt">&lt;/p&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <h2 id="example-with-list-group"><span className="bd-content-title">Example with list-group</span></h2>
  <p>Scrollspy also works with <code className="highlighter-rouge">.list-group</code>s. Scroll the area next to the list group and watch the active class change.</p>
  <div className="bd-example">
    <div className="row">
      <div className="col-4">
        <div id="list-example" className="list-group">
          <a className="list-group-item list-group-item-action active" href="#list-item-1">Item 1</a>
          <a className="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
          <a className="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
          <a className="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
        </div>
      </div>
      <div className="col-8">
        <div data-spy="scroll" data-target="#list-example" data-offset={0} className="scrollspy-example">
          <h4 id="list-item-1">Item 1</h4>
          <p>Ex consequat commodo adipisicing exercitation aute excepteur occaecat ullamco duis aliqua id magna ullamco eu. Do aute ipsum ipsum ullamco cillum consectetur ut et aute consectetur labore. Fugiat laborum incididunt tempor eu consequat enim dolore proident. Qui laborum do non excepteur nulla magna eiusmod consectetur in. Aliqua et aliqua officia quis et incididunt voluptate non anim reprehenderit adipisicing dolore ut consequat deserunt mollit dolore. Aliquip nulla enim veniam non fugiat id cupidatat nulla elit cupidatat commodo velit ut eiusmod cupidatat elit dolore.</p>
          <h4 id="list-item-2">Item 2</h4>
          <p>Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex consectetur mollit voluptate est in duis laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum nisi sit est tempor laborum mollit labore officia laborum excepteur commodo non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur ipsum commodo tempor sunt in proident.</p>
          <h4 id="list-item-3">Item 3</h4>
          <p>Quis anim sit do amet fugiat dolor velit sit ea ea do reprehenderit culpa duis. Nostrud aliqua ipsum fugiat minim proident occaecat excepteur aliquip culpa aute tempor reprehenderit. Deserunt tempor mollit elit ex pariatur dolore velit fugiat mollit culpa irure ullamco est ex ullamco excepteur.</p>
          <h4 id="list-item-4">Item 4</h4>
          <p>Quis anim sit do amet fugiat dolor velit sit ea ea do reprehenderit culpa duis. Nostrud aliqua ipsum fugiat minim proident occaecat excepteur aliquip culpa aute tempor reprehenderit. Deserunt tempor mollit elit ex pariatur dolore velit fugiat mollit culpa irure ullamco est ex ullamco excepteur.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">id=</span><span className="s">"list-example"</span> <span className="na">class=</span><span className="s">"list-group"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"list-group-item list-group-item-action"</span> <span className="na">href=</span><span className="s">"#list-item-1"</span><span className="nt">&gt;</span>Item 1<span className="nt">&lt;/a&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"list-group-item list-group-item-action"</span> <span className="na">href=</span><span className="s">"#list-item-2"</span><span className="nt">&gt;</span>Item 2<span className="nt">&lt;/a&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"list-group-item list-group-item-action"</span> <span className="na">href=</span><span className="s">"#list-item-3"</span><span className="nt">&gt;</span>Item 3<span className="nt">&lt;/a&gt;</span>{"\n"}{"  "}<span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"list-group-item list-group-item-action"</span> <span className="na">href=</span><span className="s">"#list-item-4"</span><span className="nt">&gt;</span>Item 4<span className="nt">&lt;/a&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span>{"\n"}<span className="nt">&lt;div</span> <span className="na">data-spy=</span><span className="s">"scroll"</span> <span className="na">data-target=</span><span className="s">"#list-example"</span> <span className="na">data-offset=</span><span className="s">"0"</span> <span className="na">class=</span><span className="s">"scrollspy-example"</span><span className="nt">&gt;</span>{"\n"}{"  "}<span className="nt">&lt;h4</span> <span className="na">id=</span><span className="s">"list-item-1"</span><span className="nt">&gt;</span>Item 1<span className="nt">&lt;/h4&gt;</span>{"\n"}{"  "}<span className="nt">&lt;p&gt;</span>...<span className="nt">&lt;/p&gt;</span>{"\n"}{"  "}<span className="nt">&lt;h4</span> <span className="na">id=</span><span className="s">"list-item-2"</span><span className="nt">&gt;</span>Item 2<span className="nt">&lt;/h4&gt;</span>{"\n"}{"  "}<span className="nt">&lt;p&gt;</span>...<span className="nt">&lt;/p&gt;</span>{"\n"}{"  "}<span className="nt">&lt;h4</span> <span className="na">id=</span><span className="s">"list-item-3"</span><span className="nt">&gt;</span>Item 3<span className="nt">&lt;/h4&gt;</span>{"\n"}{"  "}<span className="nt">&lt;p&gt;</span>...<span className="nt">&lt;/p&gt;</span>{"\n"}{"  "}<span className="nt">&lt;h4</span> <span className="na">id=</span><span className="s">"list-item-4"</span><span className="nt">&gt;</span>Item 4<span className="nt">&lt;/h4&gt;</span>{"\n"}{"  "}<span className="nt">&lt;p&gt;</span>...<span className="nt">&lt;/p&gt;</span>{"\n"}<span className="nt">&lt;/div&gt;</span></code></pre></figure>
  <h2 id="usage"><span className="bd-content-title">Usage</span></h2>
  <h3 id="via-data-attributes"><span className="bd-content-title">Via data attributes</span></h3>
  <p>To easily add scrollspy behavior to your topbar navigation, add <code className="highlighter-rouge">data-spy="scroll"</code> to the element you want to spy on (most typically this would be the <code className="highlighter-rouge">&lt;body&gt;</code>). Then add the <code className="highlighter-rouge">data-target</code> attribute with the ID or class of the parent element of any Bootstrap <code className="highlighter-rouge">.nav</code> component.</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-css" data-lang="css"><span className="nt">body</span> <span className="p">{"{"}</span>{"\n"}{"  "}<span className="nl">position</span><span className="p">:</span> <span className="nb">relative</span><span className="p">;</span>{"\n"}<span className="p">{"}"}</span></code></pre></figure>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;body</span> <span className="na">data-spy=</span><span className="s">"scroll"</span> <span className="na">data-target=</span><span className="s">"#navbar-example"</span><span className="nt">&gt;</span>{"\n"}{"  "}...{"\n"}{"  "}<span className="nt">&lt;div</span> <span className="na">id=</span><span className="s">"navbar-example"</span><span className="nt">&gt;</span>{"\n"}{"    "}<span className="nt">&lt;ul</span> <span className="na">class=</span><span className="s">"nav nav-tabs"</span> <span className="na">role=</span><span className="s">"tablist"</span><span className="nt">&gt;</span>{"\n"}{"      "}...{"\n"}{"    "}<span className="nt">&lt;/ul&gt;</span>{"\n"}{"  "}<span className="nt">&lt;/div&gt;</span>{"\n"}{"  "}...{"\n"}<span className="nt">&lt;/body&gt;</span></code></pre></figure>
  <h3 id="via-javascript"><span className="bd-content-title">Via JavaScript</span></h3>
  <p>After adding <code className="highlighter-rouge">position: relative;</code> in your CSS, call the scrollspy via JavaScript:</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'body'</span><span className="p">).</span><span className="nx">scrollspy</span><span className="p">({"{"}</span> <span className="na">target</span><span className="p">:</span> <span className="s1">'#navbar-example'</span> <span className="p">{"}"})</span></code></pre></figure>
  <div className="bd-callout bd-callout-danger">
    <h4 id="resolvable-id-targets-required">Resolvable ID targets required</h4>
    <p>Navbar links must have resolvable id targets. For example, a <code className="highlighter-rouge">&lt;a href="#home"&gt;home&lt;/a&gt;</code> must correspond to something in the DOM like <code className="highlighter-rouge">&lt;div id="home"&gt;&lt;/div&gt;</code>.</p>
  </div>
  <div className="bd-callout bd-callout-info">
    <h4 id="non-visible-target-elements-ignored">Non-<code className="highlighter-rouge">:visible</code> target elements ignored</h4>
    <p>Target elements that are not <a href="https://api.jquery.com/visible-selector/"><code className="highlighter-rouge">:visible</code> according to jQuery</a> will be ignored and their corresponding nav items will never be highlighted.</p>
  </div>
  <h3 id="methods"><span className="bd-content-title">Methods</span></h3>
  <h4 id="scrollspyrefresh"><span className="bd-content-title"><code className="highlighter-rouge">.scrollspy('refresh')</code></span></h4>
  <p>When using scrollspy in conjunction with adding or removing of elements from the DOM, you’ll need to call the refresh method like so:</p>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'[data-spy="scroll"]'</span><span className="p">).</span><span className="nx">each</span><span className="p">(</span><span className="kd">function</span> <span className="p">()</span> <span className="p">{"{"}</span>{"\n"}{"  "}<span className="kd">var</span> <span className="nx">$spy</span> <span className="o">=</span> <span className="nx">$</span><span className="p">(</span><span className="k">this</span><span className="p">).</span><span className="nx">scrollspy</span><span className="p">(</span><span className="s1">'refresh'</span><span className="p">)</span>{"\n"}<span className="p">{"}"})</span></code></pre></figure>
  <h4 id="scrollspydispose"><span className="bd-content-title"><code className="highlighter-rouge">.scrollspy('dispose')</code></span></h4>
  <p>Destroys an element’s scrollspy.</p>
  <h3 id="options"><span className="bd-content-title">Options</span></h3>
  <p>Options can be passed via data attributes or JavaScript. For data attributes, append the option name to <code className="highlighter-rouge">data-</code>, as in <code className="highlighter-rouge">data-offset=""</code>.</p>
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
        <td>offset</td>
        <td>number</td>
        <td>10</td>
        <td>Pixels to offset from top when calculating position of scroll.</td>
      </tr>
      <tr>
        <td>method</td>
        <td>string</td>
        <td>auto</td>
        <td>Finds which section the spied element is in. <code>auto</code> will choose the best method get scroll coordinates. <code>offset</code> will use jQuery offset method to get scroll coordinates. <code>position</code> will use jQuery position method to get scroll coordinates.</td>
      </tr>
      <tr>
        <td>target</td>
        <td>string</td>
        <td />
        <td>Specifies element to apply Scrollspy plugin.</td>
      </tr>
    </tbody>
  </table>
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
        <td>activate.bs.scrollspy</td>
        <td>This event fires on the scroll element whenever a new item becomes activated by the scrollspy.</td>
      </tr>
    </tbody>
  </table>
  <div className="bd-clipboard"><button type="button" className="btn-clipboard" title data-original-title="Copy to clipboard">Copy</button></div><figure className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">$</span><span className="p">(</span><span className="s1">'[data-spy="scroll"]'</span><span className="p">).</span><span className="nx">on</span><span className="p">(</span><span className="s1">'activate.bs.scrollspy'</span><span className="p">,</span> <span className="kd">function</span> <span className="p">()</span> <span className="p">{"{"}</span>{"\n"}{"  "}<span className="c1">// do something…</span>{"\n"}<span className="p">{"}"})</span></code></pre></figure>
</main>

    );
  }
}