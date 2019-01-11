import React from 'react';

export default class Forms extends React.Component {
  render() {
    return (
<main
  className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content"
  role="main"
>
  <h1 className="bd-title" id="content">
    Forms
  </h1>
  <p className="bd-lead">
    Examples and usage guidelines for form control styles, layout
    options, and custom components for creating a wide variety of
    forms.
  </p>
  
  <h2 id="overview">
    <span className="bd-content-title">
      Overview<a
        className="anchorjs-link "
        href="#overview"
        aria-label="Anchor"
        data-anchorjs-icon="#"
        style={{ paddingLeft: "0.375em" }}
      />
    </span>
  </h2>
  <p>
    Bootstrap’s form controls expand on{" "}
    <a href="/docs/4.2/content/reboot/#forms">
      our Rebooted form styles
    </a>{" "}
    with classes. Use these classes to opt into their customized
    displays for a more consistent rendering across browsers and
    devices.
  </p>
  <p>
    Be sure to use an appropriate{" "}
    <code className="highlighter-rouge">type</code> attribute on all
    inputs (e.g., <code className="highlighter-rouge">email</code> for
    email address or <code className="highlighter-rouge">
      number
    </code>{" "}
    for numerical information) to take advantage of newer input
    controls like email verification, number selection, and more.
  </p>
  <p>
    Here’s a quick example to demonstrate Bootstrap’s form styles.
    Keep reading for documentation on required classes, form layout,
    and more.
  </p>
  <div className="bd-example">
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          autoComplete="off"
          style={{
            backgroundImage: 'url("data:image/png',
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "scroll",
            backgroundSize: "16px 18px",
            backgroundPosition: "98% 50%"
          }}
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          autoComplete="off"
          style={{
            backgroundImage: 'url("data:image/png',
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "scroll",
            backgroundSize: "16px 18px",
            backgroundPosition: "98% 50%"
          }}
        />
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;form&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-group"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"exampleInputEmail1"</span>
        <span className="nt">&gt;</span>Email address<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"email"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"exampleInputEmail1"</span>{" "}
        <span className="na">aria-describedby=</span>
        <span className="s">"emailHelp"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"Enter email"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;small</span>{" "}
        <span className="na">id=</span>
        <span className="s">"emailHelp"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-text text-muted"</span>
        <span className="nt">&gt;</span>We'll never share your email
        with anyone else.<span className="nt">&lt;/small&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-group"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"exampleInputPassword1"</span>
        <span className="nt">
          &gt;
        </span>Password<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"password"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"exampleInputPassword1"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"Password"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-group form-check"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"checkbox"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-input"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"exampleCheck1"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-label"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"exampleCheck1"</span>
        <span className="nt">&gt;</span>Check me out<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;button</span>{" "}
        <span className="na">type=</span>
        <span className="s">"submit"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"btn btn-primary"</span>
        <span className="nt">
          &gt;
        </span>Submit<span className="nt">&lt;/button&gt;</span>
        {"\n"}
        <span className="nt">&lt;/form&gt;</span>
      </code>
    </pre>
  </figure>
  <h2 id="form-controls">
    <span className="bd-content-title">
      Form controls<a
        className="anchorjs-link "
        href="#form-controls"
        aria-label="Anchor"
        data-anchorjs-icon="#"
        style={{ paddingLeft: "0.375em" }}
      />
    </span>
  </h2>
  <p>
    Textual form controls—like{" "}
    <code className="highlighter-rouge">&lt;input&gt;</code>s,{" "}
    <code className="highlighter-rouge">&lt;select&gt;</code>s, and{" "}
    <code className="highlighter-rouge">&lt;textarea&gt;</code>s—are
    styled with the{" "}
    <code className="highlighter-rouge">.form-control</code> class.
    Included are styles for general appearance, focus state, sizing,
    and more.
  </p>
  <p>
    Be sure to explore our <a href="#custom-forms">custom forms</a> to
    further style{" "}
    <code className="highlighter-rouge">&lt;select&gt;</code>s.
  </p>
  <div className="bd-example">
    <form>
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">
          Example select
        </label>
        <select
          className="form-control"
          id="exampleFormControlSelect1"
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect2">
          Example multiple select
        </label>
        <select
          multiple
          className="form-control"
          id="exampleFormControlSelect2"
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={3}
          defaultValue={""}
        />
      </div>
    </form>
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;form&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-group"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"exampleFormControlInput1"</span>
        <span className="nt">&gt;</span>Email address<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"email"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"exampleFormControlInput1"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"name@example.com"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-group"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"exampleFormControlSelect1"</span>
        <span className="nt">&gt;</span>Example select<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;select</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"exampleFormControlSelect1"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">
          &lt;option&gt;
        </span>1<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">
          &lt;option&gt;
        </span>2<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">
          &lt;option&gt;
        </span>3<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">
          &lt;option&gt;
        </span>4<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">
          &lt;option&gt;
        </span>5<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/select&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-group"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"exampleFormControlSelect2"</span>
        <span className="nt">&gt;</span>Example multiple select<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;select</span>{" "}
        <span className="na">multiple</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"exampleFormControlSelect2"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">
          &lt;option&gt;
        </span>1<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">
          &lt;option&gt;
        </span>2<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">
          &lt;option&gt;
        </span>3<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">
          &lt;option&gt;
        </span>4<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">
          &lt;option&gt;
        </span>5<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/select&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-group"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"exampleFormControlTextarea1"</span>
        <span className="nt">&gt;</span>Example textarea<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;textarea</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"exampleFormControlTextarea1"</span>{" "}
        <span className="na">rows=</span>
        <span className="s">"3"</span>
        <span className="nt">&gt;&lt;/textarea&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        <span className="nt">&lt;/form&gt;</span>
      </code>
    </pre>
  </figure>
  <p>
    For file inputs, swap the{" "}
    <code className="highlighter-rouge">.form-control</code> for{" "}
    <code className="highlighter-rouge">.form-control-file</code>.
  </p>
  <div className="bd-example">
    <form>
      <div className="form-group">
        <label htmlFor="exampleFormControlFile1">
          Example file input
        </label>
        <input
          type="file"
          className="form-control-file"
          id="exampleFormControlFile1"
        />
      </div>
    </form>
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;form&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-group"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"exampleFormControlFile1"</span>
        <span className="nt">&gt;</span>Example file input<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"file"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control-file"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"exampleFormControlFile1"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        <span className="nt">&lt;/form&gt;</span>
      </code>
    </pre>
  </figure>
  <h3 id="sizing">
    <span className="bd-content-title">
      Sizing<a
        className="anchorjs-link "
        href="#sizing"
        aria-label="Anchor"
        data-anchorjs-icon="#"
        style={{ paddingLeft: "0.375em" }}
      />
    </span>
  </h3>
  <p>
    Set heights using classes like{" "}
    <code className="highlighter-rouge">.form-control-lg</code> and{" "}
    <code className="highlighter-rouge">.form-control-sm</code>.
  </p>
  <div className="bd-example">
    <input
      className="form-control form-control-lg"
      type="text"
      placeholder=".form-control-lg"
    />
    <input
      className="form-control"
      type="text"
      placeholder="Default input"
    />
    <input
      className="form-control form-control-sm"
      type="text"
      placeholder=".form-control-sm"
    />
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;input</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control form-control-lg"</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">".form-control-lg"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"Default input"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control form-control-sm"</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">".form-control-sm"</span>
        <span className="nt">&gt;</span>
      </code>
    </pre>
  </figure>
  <div className="bd-example">
    <select className="form-control form-control-lg">
      <option>Large select</option>
    </select>
    <select className="form-control">
      <option>Default select</option>
    </select>
    <select className="form-control form-control-sm">
      <option>Small select</option>
    </select>
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;select</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control form-control-lg"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;option&gt;</span>Large select<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        <span className="nt">&lt;/select&gt;</span>
        {"\n"}
        <span className="nt">&lt;select</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;option&gt;</span>Default select<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        <span className="nt">&lt;/select&gt;</span>
        {"\n"}
        <span className="nt">&lt;select</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control form-control-sm"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;option&gt;</span>Small select<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        <span className="nt">&lt;/select&gt;</span>
      </code>
    </pre>
  </figure>
  <h3 id="readonly">
    <span className="bd-content-title">
      Readonly<a
        className="anchorjs-link "
        href="#readonly"
        aria-label="Anchor"
        data-anchorjs-icon="#"
        style={{ paddingLeft: "0.375em" }}
      />
    </span>
  </h3>
  <p>
    Add the <code className="highlighter-rouge">readonly</code>{" "}
    boolean attribute on an input to prevent modification of the
    input’s value. Read-only inputs appear lighter (just like disabled
    inputs), but retain the standard cursor.
  </p>
  <div className="bd-example">
    <input
      className="form-control"
      type="text"
      placeholder="Readonly input here…"
      readOnly
    />
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;input</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"Readonly input here…"</span>{" "}
        <span className="na">readonly</span>
        <span className="nt">&gt;</span>
      </code>
    </pre>
  </figure>
  <h3 id="readonly-plain-text">
    <span className="bd-content-title">
      Readonly plain text<a
        className="anchorjs-link "
        href="#readonly-plain-text"
        aria-label="Anchor"
        data-anchorjs-icon="#"
        style={{ paddingLeft: "0.375em" }}
      />
    </span>
  </h3>
  <p>
    If you want to have{" "}
    <code className="highlighter-rouge">
      &lt;input readonly&gt;
    </code>{" "}
    elements in your form styled as plain text, use the{" "}
    <code className="highlighter-rouge">
      .form-control-plaintext
    </code>{" "}
    class to remove the default form field styling and preserve the
    correct margin and padding.
  </p>
  <div className="bd-example">
    <form>
      <div className="form-group row">
        <label
          htmlFor="staticEmail"
          className="col-sm-2 col-form-label"
        >
          Email
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            readOnly
            className="form-control-plaintext"
            id="staticEmail"
            defaultValue="email@example.com"
          />
        </div>
      </div>
      <div className="form-group row">
        <label
          htmlFor="inputPassword"
          className="col-sm-2 col-form-label"
        >
          Password
        </label>
        <div className="col-sm-10">
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            placeholder="Password"
            autoComplete="off"
            style={{
              backgroundImage: 'url("data:image/png',
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "scroll",
              backgroundSize: "16px 18px",
              backgroundPosition: "98% 50%"
            }}
          />
        </div>
      </div>
    </form>
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;form&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-group row"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"staticEmail"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-sm-2 col-form-label"</span>
        <span className="nt">
          &gt;
        </span>Email<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-sm-10"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">readonly</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control-plaintext"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"staticEmail"</span>{" "}
        <span className="na">value=</span>
        <span className="s">"email@example.com"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-group row"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"inputPassword"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-sm-2 col-form-label"</span>
        <span className="nt">
          &gt;
        </span>Password<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-sm-10"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"password"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"inputPassword"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"Password"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        <span className="nt">&lt;/form&gt;</span>
      </code>
    </pre>
  </figure>
  <div className="bd-example">
    <form className="form-inline">
      <div className="form-group mb-2">
        <label htmlFor="staticEmail2" className="sr-only">
          Email
        </label>
        <input
          type="text"
          readOnly
          className="form-control-plaintext"
          id="staticEmail2"
          defaultValue="email@example.com"
          style={{ backgroundImage: 'url("data:image/png' }}
        />
      </div>
      <div className="form-group mx-sm-3 mb-2">
        <label htmlFor="inputPassword2" className="sr-only">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="inputPassword2"
          placeholder="Password"
          autoComplete="off"
          style={{
            backgroundImage: 'url("data:image/png',
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "scroll",
            backgroundSize: "16px 18px",
            backgroundPosition: "98% 50%"
          }}
        />
      </div>
      <button type="submit" className="btn btn-primary mb-2">
        Confirm identity
      </button>
    </form>
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;form</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-inline"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-group mb-2"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"staticEmail2"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"sr-only"</span>
        <span className="nt">
          &gt;
        </span>Email<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">readonly</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control-plaintext"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"staticEmail2"</span>{" "}
        <span className="na">value=</span>
        <span className="s">"email@example.com"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-group mx-sm-3 mb-2"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"inputPassword2"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"sr-only"</span>
        <span className="nt">
          &gt;
        </span>Password<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"password"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"inputPassword2"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"Password"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;button</span>{" "}
        <span className="na">type=</span>
        <span className="s">"submit"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"btn btn-primary mb-2"</span>
        <span className="nt">&gt;</span>Confirm identity<span className="nt">&lt;/button&gt;</span>
        {"\n"}
        <span className="nt">&lt;/form&gt;</span>
      </code>
    </pre>
  </figure>
  <h2 id="range-inputs">
    <span className="bd-content-title">
      Range Inputs<a
        className="anchorjs-link "
        href="#range-inputs"
        aria-label="Anchor"
        data-anchorjs-icon="#"
        style={{ paddingLeft: "0.375em" }}
      />
    </span>
  </h2>
  <p>
    Set horizontally scrollable range inputs using{" "}
    <code className="highlighter-rouge">.form-control-range</code>.
  </p>
  <div className="bd-example">
    <form>
      <div className="form-group">
        <label htmlFor="formControlRange">Example Range input</label>
        <input
          type="range"
          className="form-control-range"
          id="formControlRange"
        />
      </div>
    </form>
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;form&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-group"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"formControlRange"</span>
        <span className="nt">&gt;</span>Example Range input<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"range"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control-range"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"formControlRange"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        <span className="nt">&lt;/form&gt;</span>
      </code>
    </pre>
  </figure>
  <h2 id="checkboxes-and-radios">
    <span className="bd-content-title">
      Checkboxes and radios<a
        className="anchorjs-link "
        href="#checkboxes-and-radios"
        aria-label="Anchor"
        data-anchorjs-icon="#"
        style={{ paddingLeft: "0.375em" }}
      />
    </span>
  </h2>
  <p>
    Default checkboxes and radios are improved upon with the help of{" "}
    <code className="highlighter-rouge">.form-check</code>,{" "}
    <strong>
      a single class for both input types that improves the layout and
      behavior of their HTML elements
    </strong>. Checkboxes are for selecting one or several options in
    a list, while radios are for selecting one option from many.
  </p>
  <p>
    Disabled checkboxes and radios are supported, but to provide a{" "}
    <code className="highlighter-rouge">not-allowed</code> cursor on
    hover of the parent{" "}
    <code className="highlighter-rouge">&lt;label&gt;</code>, you’ll
    need to add the{" "}
    <code className="highlighter-rouge">disabled</code> attribute to
    the <code className="highlighter-rouge">.form-check-input</code>.
    The disabled attribute will apply a lighter color to help indicate
    the input’s state.
  </p>
  <p>
    Checkboxes and radios use are built to support HTML-based form
    validation and provide concise, accessible labels. As such, our{" "}
    <code className="highlighter-rouge">&lt;input&gt;</code>s and{" "}
    <code className="highlighter-rouge">&lt;label&gt;</code>s are
    sibling elements as opposed to an{" "}
    <code className="highlighter-rouge">&lt;input&gt;</code> within a{" "}
    <code className="highlighter-rouge">&lt;label&gt;</code>. This is
    slightly more verbose as you must specify{" "}
    <code className="highlighter-rouge">id</code> and{" "}
    <code className="highlighter-rouge">for</code> attributes to
    relate the{" "}
    <code className="highlighter-rouge">&lt;input&gt;</code> and{" "}
    <code className="highlighter-rouge">&lt;label&gt;</code>.
  </p>
  <h3 id="default-stacked">
    <span className="bd-content-title">
      Default (stacked)<a
        className="anchorjs-link "
        href="#default-stacked"
        aria-label="Anchor"
        data-anchorjs-icon="#"
        style={{ paddingLeft: "0.375em" }}
      />
    </span>
  </h3>
  <p>
    By default, any number of checkboxes and radios that are immediate
    sibling will be vertically stacked and appropriately spaced with{" "}
    <code className="highlighter-rouge">.form-check</code>.
  </p>
  <div className="bd-example">
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        defaultValue
        id="defaultCheck1"
      />
      <label className="form-check-label" htmlFor="defaultCheck1">
        Default checkbox
      </label>
    </div>
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        defaultValue
        id="defaultCheck2"
        disabled
      />
      <label className="form-check-label" htmlFor="defaultCheck2">
        Disabled checkbox
      </label>
    </div>
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-input"</span>{" "}
        <span className="na">type=</span>
        <span className="s">"checkbox"</span>{" "}
        <span className="na">value=</span>
        <span className="s">""</span> <span className="na">id=</span>
        <span className="s">"defaultCheck1"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-label"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"defaultCheck1"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}Default checkbox{"\n"}
        {"  "}
        <span className="nt">&lt;/label&gt;</span>
        {"\n"}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-input"</span>{" "}
        <span className="na">type=</span>
        <span className="s">"checkbox"</span>{" "}
        <span className="na">value=</span>
        <span className="s">""</span> <span className="na">id=</span>
        <span className="s">"defaultCheck2"</span>{" "}
        <span className="na">disabled</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-label"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"defaultCheck2"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}Disabled checkbox{"\n"}
        {"  "}
        <span className="nt">&lt;/label&gt;</span>
        {"\n"}
        <span className="nt">&lt;/div&gt;</span>
      </code>
    </pre>
  </figure>
  <div className="bd-example">
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="exampleRadios"
        id="exampleRadios1"
        defaultValue="option1"
        defaultChecked
      />
      <label className="form-check-label" htmlFor="exampleRadios1">
        Default radio
      </label>
    </div>
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="exampleRadios"
        id="exampleRadios2"
        defaultValue="option2"
      />
      <label className="form-check-label" htmlFor="exampleRadios2">
        Second default radio
      </label>
    </div>
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="exampleRadios"
        id="exampleRadios3"
        defaultValue="option3"
        disabled
      />
      <label className="form-check-label" htmlFor="exampleRadios3">
        Disabled radio
      </label>
    </div>
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-input"</span>{" "}
        <span className="na">type=</span>
        <span className="s">"radio"</span>{" "}
        <span className="na">name=</span>
        <span className="s">"exampleRadios"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"exampleRadios1"</span>{" "}
        <span className="na">value=</span>
        <span className="s">"option1"</span>{" "}
        <span className="na">checked</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-label"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"exampleRadios1"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}Default radio{"\n"}
        {"  "}
        <span className="nt">&lt;/label&gt;</span>
        {"\n"}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-input"</span>{" "}
        <span className="na">type=</span>
        <span className="s">"radio"</span>{" "}
        <span className="na">name=</span>
        <span className="s">"exampleRadios"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"exampleRadios2"</span>{" "}
        <span className="na">value=</span>
        <span className="s">"option2"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-label"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"exampleRadios2"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}Second default radio{"\n"}
        {"  "}
        <span className="nt">&lt;/label&gt;</span>
        {"\n"}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-input"</span>{" "}
        <span className="na">type=</span>
        <span className="s">"radio"</span>{" "}
        <span className="na">name=</span>
        <span className="s">"exampleRadios"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"exampleRadios3"</span>{" "}
        <span className="na">value=</span>
        <span className="s">"option3"</span>{" "}
        <span className="na">disabled</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-label"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"exampleRadios3"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}Disabled radio{"\n"}
        {"  "}
        <span className="nt">&lt;/label&gt;</span>
        {"\n"}
        <span className="nt">&lt;/div&gt;</span>
      </code>
    </pre>
  </figure>
  <h3 id="inline">
    <span className="bd-content-title">
      Inline<a
        className="anchorjs-link "
        href="#inline"
        aria-label="Anchor"
        data-anchorjs-icon="#"
        style={{ paddingLeft: "0.375em" }}
      />
    </span>
  </h3>
  <p>
    Group checkboxes or radios on the same horizontal row by adding{" "}
    <code className="highlighter-rouge">.form-check-inline</code> to
    any <code className="highlighter-rouge">.form-check</code>.
  </p>
  <div className="bd-example">
    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type="checkbox"
        id="inlineCheckbox1"
        defaultValue="option1"
      />
      <label className="form-check-label" htmlFor="inlineCheckbox1">
        1
      </label>
    </div>
    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type="checkbox"
        id="inlineCheckbox2"
        defaultValue="option2"
      />
      <label className="form-check-label" htmlFor="inlineCheckbox2">
        2
      </label>
    </div>
    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type="checkbox"
        id="inlineCheckbox3"
        defaultValue="option3"
        disabled
      />
      <label className="form-check-label" htmlFor="inlineCheckbox3">
        3 (disabled)
      </label>
    </div>
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check form-check-inline"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-input"</span>{" "}
        <span className="na">type=</span>
        <span className="s">"checkbox"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"inlineCheckbox1"</span>{" "}
        <span className="na">value=</span>
        <span className="s">"option1"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-label"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"inlineCheckbox1"</span>
        <span className="nt">
          &gt;
        </span>1<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check form-check-inline"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-input"</span>{" "}
        <span className="na">type=</span>
        <span className="s">"checkbox"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"inlineCheckbox2"</span>{" "}
        <span className="na">value=</span>
        <span className="s">"option2"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-label"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"inlineCheckbox2"</span>
        <span className="nt">
          &gt;
        </span>2<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check form-check-inline"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-input"</span>{" "}
        <span className="na">type=</span>
        <span className="s">"checkbox"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"inlineCheckbox3"</span>{" "}
        <span className="na">value=</span>
        <span className="s">"option3"</span>{" "}
        <span className="na">disabled</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-label"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"inlineCheckbox3"</span>
        <span className="nt">&gt;</span>3 (disabled)<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        <span className="nt">&lt;/div&gt;</span>
      </code>
    </pre>
  </figure>
  <div className="bd-example">
    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id="inlineRadio1"
        defaultValue="option1"
      />
      <label className="form-check-label" htmlFor="inlineRadio1">
        1
      </label>
    </div>
    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id="inlineRadio2"
        defaultValue="option2"
      />
      <label className="form-check-label" htmlFor="inlineRadio2">
        2
      </label>
    </div>
    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id="inlineRadio3"
        defaultValue="option3"
        disabled
      />
      <label className="form-check-label" htmlFor="inlineRadio3">
        3 (disabled)
      </label>
    </div>
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check form-check-inline"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-input"</span>{" "}
        <span className="na">type=</span>
        <span className="s">"radio"</span>{" "}
        <span className="na">name=</span>
        <span className="s">"inlineRadioOptions"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"inlineRadio1"</span>{" "}
        <span className="na">value=</span>
        <span className="s">"option1"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-label"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"inlineRadio1"</span>
        <span className="nt">
          &gt;
        </span>1<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check form-check-inline"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-input"</span>{" "}
        <span className="na">type=</span>
        <span className="s">"radio"</span>{" "}
        <span className="na">name=</span>
        <span className="s">"inlineRadioOptions"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"inlineRadio2"</span>{" "}
        <span className="na">value=</span>
        <span className="s">"option2"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-label"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"inlineRadio2"</span>
        <span className="nt">
          &gt;
        </span>2<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check form-check-inline"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-input"</span>{" "}
        <span className="na">type=</span>
        <span className="s">"radio"</span>{" "}
        <span className="na">name=</span>
        <span className="s">"inlineRadioOptions"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"inlineRadio3"</span>{" "}
        <span className="na">value=</span>
        <span className="s">"option3"</span>{" "}
        <span className="na">disabled</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-label"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"inlineRadio3"</span>
        <span className="nt">&gt;</span>3 (disabled)<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        <span className="nt">&lt;/div&gt;</span>
      </code>
    </pre>
  </figure>
  <h3 id="without-labels">
    <span className="bd-content-title">
      Without labels<a
        className="anchorjs-link "
        href="#without-labels"
        aria-label="Anchor"
        data-anchorjs-icon="#"
        style={{ paddingLeft: "0.375em" }}
      />
    </span>
  </h3>
  <p>
    Add <code className="highlighter-rouge">.position-static</code> to
    inputs within{" "}
    <code className="highlighter-rouge">.form-check</code> that don’t
    have any label text. Remember to still provide some form of label
    for assistive technologies (for instance, using{" "}
    <code className="highlighter-rouge">aria-label</code>).
  </p>
  <div className="bd-example">
    <div className="form-check">
      <input
        className="form-check-input position-static"
        type="checkbox"
        id="blankCheckbox"
        defaultValue="option1"
        aria-label="..."
      />
    </div>
    <div className="form-check">
      <input
        className="form-check-input position-static"
        type="radio"
        name="blankRadio"
        id="blankRadio1"
        defaultValue="option1"
        aria-label="..."
      />
    </div>
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">class=</span>
        <span className="s">
          "form-check-input position-static"
        </span>{" "}
        <span className="na">type=</span>
        <span className="s">"checkbox"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"blankCheckbox"</span>{" "}
        <span className="na">value=</span>
        <span className="s">"option1"</span>{" "}
        <span className="na">aria-label=</span>
        <span className="s">"..."</span>
        <span className="nt">&gt;</span>
        {"\n"}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">class=</span>
        <span className="s">
          "form-check-input position-static"
        </span>{" "}
        <span className="na">type=</span>
        <span className="s">"radio"</span>{" "}
        <span className="na">name=</span>
        <span className="s">"blankRadio"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"blankRadio1"</span>{" "}
        <span className="na">value=</span>
        <span className="s">"option1"</span>{" "}
        <span className="na">aria-label=</span>
        <span className="s">"..."</span>
        <span className="nt">&gt;</span>
        {"\n"}
        <span className="nt">&lt;/div&gt;</span>
      </code>
    </pre>
  </figure>
  <h2 id="layout">
    <span className="bd-content-title">
      Layout<a
        className="anchorjs-link "
        href="#layout"
        aria-label="Anchor"
        data-anchorjs-icon="#"
        style={{ paddingLeft: "0.375em" }}
      />
    </span>
  </h2>
  <p>
    Since Bootstrap applies{" "}
    <code className="highlighter-rouge">display: block</code> and{" "}
    <code className="highlighter-rouge">width: 100%</code> to almost
    all our form controls, forms will by default stack vertically.
    Additional classes can be used to vary this layout on a per-form
    basis.
  </p>
  <h3 id="form-groups">
    <span className="bd-content-title">
      Form groups<a
        className="anchorjs-link "
        href="#form-groups"
        aria-label="Anchor"
        data-anchorjs-icon="#"
        style={{ paddingLeft: "0.375em" }}
      />
    </span>
  </h3>
  <p>
    The <code className="highlighter-rouge">.form-group</code> class
    is the easiest way to add some structure to forms. It provides a
    flexible class that encourages proper grouping of labels,
    controls, optional help text, and form validation messaging. By
    default it only applies{" "}
    <code className="highlighter-rouge">margin-bottom</code>, but it
    picks up additional styles in{" "}
    <code className="highlighter-rouge">.form-inline</code> as needed.
    Use it with{" "}
    <code className="highlighter-rouge">&lt;fieldset&gt;</code>s,{" "}
    <code className="highlighter-rouge">&lt;div&gt;</code>s, or nearly
    any other element.
  </p>
  <div className="bd-example">
    <form>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput">Example label</label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Example input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput2">Another label</label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Another input"
        />
      </div>
    </form>
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;form&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-group"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"formGroupExampleInput"</span>
        <span className="nt">&gt;</span>Example label<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"formGroupExampleInput"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"Example input"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-group"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"formGroupExampleInput2"</span>
        <span className="nt">&gt;</span>Another label<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"formGroupExampleInput2"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"Another input"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        <span className="nt">&lt;/form&gt;</span>
      </code>
    </pre>
  </figure>
  <h3 id="form-grid">
    <span className="bd-content-title">
      Form grid<a
        className="anchorjs-link "
        href="#form-grid"
        aria-label="Anchor"
        data-anchorjs-icon="#"
        style={{ paddingLeft: "0.375em" }}
      />
    </span>
  </h3>
  <p>
    More complex forms can be built using our grid classes. Use these
    for form layouts that require multiple columns, varied widths, and
    additional alignment options.
  </p>
  <div className="bd-example">
    <form>
      <div className="row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
          />
        </div>
      </div>
    </form>
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;form&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"row"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"First name"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"Last name"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        <span className="nt">&lt;/form&gt;</span>
      </code>
    </pre>
  </figure>
  <h4 id="form-row">
    <span className="bd-content-title">
      Form row<a
        className="anchorjs-link "
        href="#form-row"
        aria-label="Anchor"
        data-anchorjs-icon="#"
        style={{ paddingLeft: "0.375em" }}
      />
    </span>
  </h4>
  <p>
    You may also swap <code className="highlighter-rouge">
      .row
    </code>{" "}
    for <code className="highlighter-rouge">.form-row</code>, a
    variation of our standard grid row that overrides the default
    column gutters for tighter and more compact layouts.
  </p>
  <div className="bd-example">
    <form>
      <div className="form-row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
          />
        </div>
      </div>
    </form>
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;form&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-row"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"First name"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"Last name"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        <span className="nt">&lt;/form&gt;</span>
      </code>
    </pre>
  </figure>
  <p>
    More complex layouts can also be created with the grid system.
  </p>
  <div className="bd-example">
    <form>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputEmail4">Email</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            placeholder="Email"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputPassword4">Password</label>
          <input
            type="password"
            className="form-control"
            id="inputPassword4"
            placeholder="Password"
            autoComplete="off"
            style={{
              backgroundImage: 'url("data:image/png',
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "scroll",
              backgroundSize: "16px 18px",
              backgroundPosition: "98% 50%"
            }}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="inputAddress">Address</label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="1234 Main St"
        />
      </div>
      <div className="form-group">
        <label htmlFor="inputAddress2">Address 2</label>
        <input
          type="text"
          className="form-control"
          id="inputAddress2"
          placeholder="Apartment, studio, or floor"
        />
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputCity">City</label>
          <input
            type="text"
            className="form-control"
            id="inputCity"
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="inputState">State</label>
          <select id="inputState" className="form-control">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className="form-group col-md-2">
          <label htmlFor="inputZip">Zip</label>
          <input type="text" className="form-control" id="inputZip" />
        </div>
      </div>
      <div className="form-group">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="gridCheck"
          />
          <label className="form-check-label" htmlFor="gridCheck">
            Check me out
          </label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Sign in
      </button>
    </form>
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;form&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-row"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-group col-md-6"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"inputEmail4"</span>
        <span className="nt">
          &gt;
        </span>Email<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"email"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"inputEmail4"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"Email"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-group col-md-6"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"inputPassword4"</span>
        <span className="nt">
          &gt;
        </span>Password<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"password"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"inputPassword4"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"Password"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-group"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"inputAddress"</span>
        <span className="nt">
          &gt;
        </span>Address<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"inputAddress"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"1234 Main St"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-group"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"inputAddress2"</span>
        <span className="nt">&gt;</span>Address 2<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"inputAddress2"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"Apartment, studio, or floor"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-row"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-group col-md-6"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"inputCity"</span>
        <span className="nt">
          &gt;
        </span>City<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"inputCity"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-group col-md-4"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"inputState"</span>
        <span className="nt">
          &gt;
        </span>State<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;select</span>{" "}
        <span className="na">id=</span>
        <span className="s">"inputState"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"        "}
        <span className="nt">&lt;option</span>{" "}
        <span className="na">selected</span>
        <span className="nt">
          &gt;
        </span>Choose...<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        {"        "}
        <span className="nt">
          &lt;option&gt;
        </span>...<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;/select&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-group col-md-2"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"inputZip"</span>
        <span className="nt">
          &gt;
        </span>Zip<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"inputZip"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-group"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-input"</span>{" "}
        <span className="na">type=</span>
        <span className="s">"checkbox"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"gridCheck"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-label"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"gridCheck"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"        "}Check me out{"\n"}
        {"      "}
        <span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;button</span>{" "}
        <span className="na">type=</span>
        <span className="s">"submit"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"btn btn-primary"</span>
        <span className="nt">&gt;</span>Sign in<span className="nt">&lt;/button&gt;</span>
        {"\n"}
        <span className="nt">&lt;/form&gt;</span>
      </code>
    </pre>
  </figure>
  <h4 id="horizontal-form">
    <span className="bd-content-title">
      Horizontal form<a
        className="anchorjs-link "
        href="#horizontal-form"
        aria-label="Anchor"
        data-anchorjs-icon="#"
        style={{ paddingLeft: "0.375em" }}
      />
    </span>
  </h4>
  <p>
    Create horizontal forms with the grid by adding the{" "}
    <code className="highlighter-rouge">.row</code> class to form
    groups and using the{" "}
    <code className="highlighter-rouge">.col-*-*</code> classes to
    specify the width of your labels and controls. Be sure to add{" "}
    <code className="highlighter-rouge">.col-form-label</code> to your{" "}
    <code className="highlighter-rouge">&lt;label&gt;</code>s as well
    so they’re vertically centered with their associated form
    controls.
  </p>
  <p>
    At times, you maybe need to use margin or padding utilities to
    create that perfect alignment you need. For example, we’ve removed
    the <code className="highlighter-rouge">padding-top</code> on our
    stacked radio inputs label to better align the text baseline.
  </p>
  <div className="bd-example">
    <form>
      <div className="form-group row">
        <label
          htmlFor="inputEmail3"
          className="col-sm-2 col-form-label"
        >
          Email
        </label>
        <div className="col-sm-10">
          <input
            type="email"
            className="form-control"
            id="inputEmail3"
            placeholder="Email"
          />
        </div>
      </div>
      <div className="form-group row">
        <label
          htmlFor="inputPassword3"
          className="col-sm-2 col-form-label"
        >
          Password
        </label>
        <div className="col-sm-10">
          <input
            type="password"
            className="form-control"
            id="inputPassword3"
            placeholder="Password"
            autoComplete="off"
            style={{
              backgroundImage: 'url("data:image/png',
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "scroll",
              backgroundSize: "16px 18px",
              backgroundPosition: "98% 50%"
            }}
          />
        </div>
      </div>
      <fieldset className="form-group">
        <div className="row">
          <legend className="col-form-label col-sm-2 pt-0">
            Radios
          </legend>
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios1"
                defaultValue="option1"
                defaultChecked
              />
              <label
                className="form-check-label"
                htmlFor="gridRadios1"
              >
                First radio
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios2"
                defaultValue="option2"
              />
              <label
                className="form-check-label"
                htmlFor="gridRadios2"
              >
                Second radio
              </label>
            </div>
            <div className="form-check disabled">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios3"
                defaultValue="option3"
                disabled
              />
              <label
                className="form-check-label"
                htmlFor="gridRadios3"
              >
                Third disabled radio
              </label>
            </div>
          </div>
        </div>
      </fieldset>
      <div className="form-group row">
        <div className="col-sm-2">Checkbox</div>
        <div className="col-sm-10">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck1"
            />
            <label className="form-check-label" htmlFor="gridCheck1">
              Example checkbox
            </label>
          </div>
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-10">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </div>
    </form>
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;form&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-group row"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"inputEmail3"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-sm-2 col-form-label"</span>
        <span className="nt">
          &gt;
        </span>Email<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-sm-10"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"email"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"inputEmail3"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"Email"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-group row"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"inputPassword3"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-sm-2 col-form-label"</span>
        <span className="nt">
          &gt;
        </span>Password<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-sm-10"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"password"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"inputPassword3"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"Password"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;fieldset</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-group"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"row"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;legend</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-form-label col-sm-2 pt-0"</span>
        <span className="nt">
          &gt;
        </span>Radios<span className="nt">&lt;/legend&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-sm-10"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"        "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"          "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-input"</span>{" "}
        <span className="na">type=</span>
        <span className="s">"radio"</span>{" "}
        <span className="na">name=</span>
        <span className="s">"gridRadios"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"gridRadios1"</span>{" "}
        <span className="na">value=</span>
        <span className="s">"option1"</span>{" "}
        <span className="na">checked</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"          "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-label"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"gridRadios1"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"            "}First radio{"\n"}
        {"          "}
        <span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"        "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"        "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"          "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-input"</span>{" "}
        <span className="na">type=</span>
        <span className="s">"radio"</span>{" "}
        <span className="na">name=</span>
        <span className="s">"gridRadios"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"gridRadios2"</span>{" "}
        <span className="na">value=</span>
        <span className="s">"option2"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"          "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-label"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"gridRadios2"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"            "}Second radio{"\n"}
        {"          "}
        <span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"        "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"        "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check disabled"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"          "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-input"</span>{" "}
        <span className="na">type=</span>
        <span className="s">"radio"</span>{" "}
        <span className="na">name=</span>
        <span className="s">"gridRadios"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"gridRadios3"</span>{" "}
        <span className="na">value=</span>
        <span className="s">"option3"</span>{" "}
        <span className="na">disabled</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"          "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-label"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"gridRadios3"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"            "}Third disabled radio{"\n"}
        {"          "}
        <span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"        "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/fieldset&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-group row"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-sm-2"</span>
        <span className="nt">
          &gt;
        </span>Checkbox<span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-sm-10"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"        "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-input"</span>{" "}
        <span className="na">type=</span>
        <span className="s">"checkbox"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"gridCheck1"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"        "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-label"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"gridCheck1"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"          "}Example checkbox{"\n"}
        {"        "}
        <span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-group row"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-sm-10"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;button</span>{" "}
        <span className="na">type=</span>
        <span className="s">"submit"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"btn btn-primary"</span>
        <span className="nt">&gt;</span>Sign in<span className="nt">&lt;/button&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        <span className="nt">&lt;/form&gt;</span>
      </code>
    </pre>
  </figure>
  <h5 id="horizontal-form-label-sizing">
    <span className="bd-content-title">
      Horizontal form label sizing<a
        className="anchorjs-link "
        href="#horizontal-form-label-sizing"
        aria-label="Anchor"
        data-anchorjs-icon="#"
        style={{ paddingLeft: "0.375em" }}
      />
    </span>
  </h5>
  <p>
    Be sure to use{" "}
    <code className="highlighter-rouge">.col-form-label-sm</code> or{" "}
    <code className="highlighter-rouge">.col-form-label-lg</code> to
    your <code className="highlighter-rouge">&lt;label&gt;</code>s or{" "}
    <code className="highlighter-rouge">&lt;legend&gt;</code>s to
    correctly follow the size of{" "}
    <code className="highlighter-rouge">.form-control-lg</code> and{" "}
    <code className="highlighter-rouge">.form-control-sm</code>.
  </p>
  <div className="bd-example">
    <form>
      <div className="form-group row">
        <label
          htmlFor="colFormLabelSm"
          className="col-sm-2 col-form-label col-form-label-sm"
        >
          Email
        </label>
        <div className="col-sm-10">
          <input
            type="email"
            className="form-control form-control-sm"
            id="colFormLabelSm"
            placeholder="col-form-label-sm"
          />
        </div>
      </div>
      <div className="form-group row">
        <label
          htmlFor="colFormLabel"
          className="col-sm-2 col-form-label"
        >
          Email
        </label>
        <div className="col-sm-10">
          <input
            type="email"
            className="form-control"
            id="colFormLabel"
            placeholder="col-form-label"
          />
        </div>
      </div>
      <div className="form-group row">
        <label
          htmlFor="colFormLabelLg"
          className="col-sm-2 col-form-label col-form-label-lg"
        >
          Email
        </label>
        <div className="col-sm-10">
          <input
            type="email"
            className="form-control form-control-lg"
            id="colFormLabelLg"
            placeholder="col-form-label-lg"
          />
        </div>
      </div>
    </form>
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;form&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-group row"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"colFormLabelSm"</span>{" "}
        <span className="na">class=</span>
        <span className="s">
          "col-sm-2 col-form-label col-form-label-sm"
        </span>
        <span className="nt">&gt;</span>Email<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-sm-10"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"email"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control form-control-sm"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"colFormLabelSm"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"col-form-label-sm"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-group row"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"colFormLabel"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-sm-2 col-form-label"</span>
        <span className="nt">
          &gt;
        </span>Email<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-sm-10"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"email"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"colFormLabel"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"col-form-label"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-group row"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"colFormLabelLg"</span>{" "}
        <span className="na">class=</span>
        <span className="s">
          "col-sm-2 col-form-label col-form-label-lg"
        </span>
        <span className="nt">&gt;</span>Email<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-sm-10"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"email"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control form-control-lg"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"colFormLabelLg"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"col-form-label-lg"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        <span className="nt">&lt;/form&gt;</span>
      </code>
    </pre>
  </figure>
  <h4 id="column-sizing">
    <span className="bd-content-title">
      Column sizing<a
        className="anchorjs-link "
        href="#column-sizing"
        aria-label="Anchor"
        data-anchorjs-icon="#"
        style={{ paddingLeft: "0.375em" }}
      />
    </span>
  </h4>
  <p>
    As shown in the previous examples, our grid system allows you to
    place any number of{" "}
    <code className="highlighter-rouge">.col</code>s within a{" "}
    <code className="highlighter-rouge">.row</code> or{" "}
    <code className="highlighter-rouge">.form-row</code>. They’ll
    split the available width equally between them. You may also pick
    a subset of your columns to take up more or less space, while the
    remaining <code className="highlighter-rouge">.col</code>s equally
    split the rest, with specific column classes like{" "}
    <code className="highlighter-rouge">.col-7</code>.
  </p>
  <div className="bd-example">
    <form>
      <div className="form-row">
        <div className="col-7">
          <input
            type="text"
            className="form-control"
            placeholder="City"
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="State"
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Zip"
          />
        </div>
      </div>
    </form>
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;form&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-row"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-7"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"City"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"State"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"Zip"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        <span className="nt">&lt;/form&gt;</span>
      </code>
    </pre>
  </figure>
  <h4 id="auto-sizing">
    <span className="bd-content-title">
      Auto-sizing<a
        className="anchorjs-link "
        href="#auto-sizing"
        aria-label="Anchor"
        data-anchorjs-icon="#"
        style={{ paddingLeft: "0.375em" }}
      />
    </span>
  </h4>
  <p>
    The example below uses a flexbox utility to vertically center the
    contents and changes{" "}
    <code className="highlighter-rouge">.col</code> to{" "}
    <code className="highlighter-rouge">.col-auto</code> so that your
    columns only take up as much space as needed. Put another way, the
    column sizes itself based on the contents.
  </p>
  <div className="bd-example">
    <form>
      <div className="form-row align-items-center">
        <div className="col-auto">
          <label className="sr-only" htmlFor="inlineFormInput">
            Name
          </label>
          <input
            type="text"
            className="form-control mb-2"
            id="inlineFormInput"
            placeholder="Jane Doe"
          />
        </div>
        <div className="col-auto">
          <label className="sr-only" htmlFor="inlineFormInputGroup">
            Username
          </label>
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <div className="input-group-text">@</div>
            </div>
            <input
              type="text"
              className="form-control"
              id="inlineFormInputGroup"
              placeholder="Username"
            />
          </div>
        </div>
        <div className="col-auto">
          <div className="form-check mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="autoSizingCheck"
            />
            <label
              className="form-check-label"
              htmlFor="autoSizingCheck"
            >
              Remember me
            </label>
          </div>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-2">
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;form&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-row align-items-center"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-auto"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"sr-only"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"inlineFormInput"</span>
        <span className="nt">
          &gt;
        </span>Name<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control mb-2"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"inlineFormInput"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"Jane Doe"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-auto"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"sr-only"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"inlineFormInputGroup"</span>
        <span className="nt">
          &gt;
        </span>Username<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"input-group mb-2"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"        "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"input-group-prepend"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"          "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"input-group-text"</span>
        <span className="nt">
          &gt;
        </span>@<span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"        "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"        "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"inlineFormInputGroup"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"Username"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-auto"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check mb-2"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"        "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-input"</span>{" "}
        <span className="na">type=</span>
        <span className="s">"checkbox"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"autoSizingCheck"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"        "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-label"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"autoSizingCheck"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"          "}Remember me{"\n"}
        {"        "}
        <span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-auto"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;button</span>{" "}
        <span className="na">type=</span>
        <span className="s">"submit"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"btn btn-primary mb-2"</span>
        <span className="nt">
          &gt;
        </span>Submit<span className="nt">&lt;/button&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        <span className="nt">&lt;/form&gt;</span>
      </code>
    </pre>
  </figure>
  <p>
    You can then remix that once again with size-specific column
    classes.
  </p>
  <div className="bd-example">
    <form>
      <div className="form-row align-items-center">
        <div className="col-sm-3 my-1">
          <label className="sr-only" htmlFor="inlineFormInputName">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inlineFormInputName"
            placeholder="Jane Doe"
          />
        </div>
        <div className="col-sm-3 my-1">
          <label
            className="sr-only"
            htmlFor="inlineFormInputGroupUsername"
          >
            Username
          </label>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">@</div>
            </div>
            <input
              type="text"
              className="form-control"
              id="inlineFormInputGroupUsername"
              placeholder="Username"
              autoComplete="off"
              style={{
                backgroundImage: 'url("data:image/png',
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "scroll",
                backgroundSize: "16px 18px",
                backgroundPosition: "98% 50%"
              }}
            />
          </div>
        </div>
        <div className="col-auto my-1">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="autoSizingCheck2"
            />
            <label
              className="form-check-label"
              htmlFor="autoSizingCheck2"
            >
              Remember me
            </label>
          </div>
        </div>
        <div className="col-auto my-1">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;form&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-row align-items-center"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-sm-3 my-1"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"sr-only"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"inlineFormInputName"</span>
        <span className="nt">
          &gt;
        </span>Name<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"inlineFormInputName"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"Jane Doe"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-sm-3 my-1"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"sr-only"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"inlineFormInputGroupUsername"</span>
        <span className="nt">
          &gt;
        </span>Username<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"input-group"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"        "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"input-group-prepend"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"          "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"input-group-text"</span>
        <span className="nt">
          &gt;
        </span>@<span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"        "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"        "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"inlineFormInputGroupUsername"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"Username"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-auto my-1"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"        "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-input"</span>{" "}
        <span className="na">type=</span>
        <span className="s">"checkbox"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"autoSizingCheck2"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"        "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-label"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"autoSizingCheck2"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"          "}Remember me{"\n"}
        {"        "}
        <span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-auto my-1"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;button</span>{" "}
        <span className="na">type=</span>
        <span className="s">"submit"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"btn btn-primary"</span>
        <span className="nt">
          &gt;
        </span>Submit<span className="nt">&lt;/button&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        <span className="nt">&lt;/form&gt;</span>
      </code>
    </pre>
  </figure>
  <p>
    And of course <a href="#custom-forms">custom form controls</a> are
    supported.
  </p>
  <div className="bd-example">
    <form>
      <div className="form-row align-items-center">
        <div className="col-auto my-1">
          <label
            className="mr-sm-2 sr-only"
            htmlFor="inlineFormCustomSelect"
          >
            Preference
          </label>
          <select
            className="custom-select mr-sm-2"
            id="inlineFormCustomSelect"
          >
            <option selected>Choose...</option>
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
          </select>
        </div>
        <div className="col-auto my-1">
          <div className="custom-control custom-checkbox mr-sm-2">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customControlAutosizing"
            />
            <label
              className="custom-control-label"
              htmlFor="customControlAutosizing"
            >
              Remember my preference
            </label>
          </div>
        </div>
        <div className="col-auto my-1">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;form&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-row align-items-center"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-auto my-1"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"mr-sm-2 sr-only"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"inlineFormCustomSelect"</span>
        <span className="nt">
          &gt;
        </span>Preference<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;select</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-select mr-sm-2"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"inlineFormCustomSelect"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"        "}
        <span className="nt">&lt;option</span>{" "}
        <span className="na">selected</span>
        <span className="nt">
          &gt;
        </span>Choose...<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        {"        "}
        <span className="nt">&lt;option</span>{" "}
        <span className="na">value=</span>
        <span className="s">"1"</span>
        <span className="nt">
          &gt;
        </span>One<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        {"        "}
        <span className="nt">&lt;option</span>{" "}
        <span className="na">value=</span>
        <span className="s">"2"</span>
        <span className="nt">
          &gt;
        </span>Two<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        {"        "}
        <span className="nt">&lt;option</span>{" "}
        <span className="na">value=</span>
        <span className="s">"3"</span>
        <span className="nt">
          &gt;
        </span>Three<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;/select&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-auto my-1"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">
          "custom-control custom-checkbox mr-sm-2"
        </span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"        "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"checkbox"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-control-input"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"customControlAutosizing"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"        "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-control-label"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"customControlAutosizing"</span>
        <span className="nt">&gt;</span>Remember my preference<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-auto my-1"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;button</span>{" "}
        <span className="na">type=</span>
        <span className="s">"submit"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"btn btn-primary"</span>
        <span className="nt">
          &gt;
        </span>Submit<span className="nt">&lt;/button&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        <span className="nt">&lt;/form&gt;</span>
      </code>
    </pre>
  </figure>
  <h3 id="inline-forms">
    <span className="bd-content-title">
      Inline forms<a
        className="anchorjs-link "
        href="#inline-forms"
        aria-label="Anchor"
        data-anchorjs-icon="#"
        style={{ paddingLeft: "0.375em" }}
      />
    </span>
  </h3>
  <p>
    Use the <code className="highlighter-rouge">
      .form-inline
    </code>{" "}
    class to display a series of labels, form controls, and buttons on
    a single horizontal row. Form controls within inline forms vary
    slightly from their default states.
  </p>
  <ul>
    <li>
      Controls are{" "}
      <code className="highlighter-rouge">display: flex</code>,
      collapsing any HTML white space and allowing you to provide
      alignment control with{" "}
      <a href="/docs/4.2/utilities/spacing/">spacing</a> and{" "}
      <a href="/docs/4.2/utilities/flex/">flexbox</a> utilities.
    </li>
    <li>
      Controls and input groups receive{" "}
      <code className="highlighter-rouge">width: auto</code> to
      override the Bootstrap default{" "}
      <code className="highlighter-rouge">width: 100%</code>.
    </li>
    <li>
      Controls{" "}
      <strong>
        only appear inline in viewports that are at least 576px wide
      </strong>{" "}
      to account for narrow viewports on mobile devices.
    </li>
  </ul>
  <p>
    You may need to manually address the width and alignment of
    individual form controls with{" "}
    <a href="/docs/4.2/utilities/spacing/">spacing utilities</a> (as
    shown below). Lastly, be sure to always include a{" "}
    <code className="highlighter-rouge">&lt;label&gt;</code> with each
    form control, even if you need to hide it from non-screenreader
    visitors with <code className="highlighter-rouge">.sr-only</code>.
  </p>
  <div className="bd-example">
    <form className="form-inline">
      <label className="sr-only" htmlFor="inlineFormInputName2">
        Name
      </label>
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        id="inlineFormInputName2"
        placeholder="Jane Doe"
      />
      <label
        className="sr-only"
        htmlFor="inlineFormInputGroupUsername2"
      >
        Username
      </label>
      <div className="input-group mb-2 mr-sm-2">
        <div className="input-group-prepend">
          <div className="input-group-text">@</div>
        </div>
        <input
          type="text"
          className="form-control"
          id="inlineFormInputGroupUsername2"
          placeholder="Username"
          autoComplete="off"
          style={{
            backgroundImage: 'url("data:image/png',
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "scroll",
            backgroundSize: "16px 18px",
            backgroundPosition: "98% 50%"
          }}
        />
      </div>
      <div className="form-check mb-2 mr-sm-2">
        <input
          className="form-check-input"
          type="checkbox"
          id="inlineFormCheck"
        />
        <label className="form-check-label" htmlFor="inlineFormCheck">
          Remember me
        </label>
      </div>
      <button type="submit" className="btn btn-primary mb-2">
        Submit
      </button>
    </form>
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;form</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-inline"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"sr-only"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"inlineFormInputName2"</span>
        <span className="nt">
          &gt;
        </span>Name<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control mb-2 mr-sm-2"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"inlineFormInputName2"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"Jane Doe"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"\n"}
        {"  "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"sr-only"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"inlineFormInputGroupUsername2"</span>
        <span className="nt">
          &gt;
        </span>Username<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"input-group mb-2 mr-sm-2"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"input-group-prepend"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"input-group-text"</span>
        <span className="nt">
          &gt;
        </span>@<span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">id=</span>
        <span className="s">
          "inlineFormInputGroupUsername2"
        </span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"Username"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check mb-2 mr-sm-2"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-input"</span>{" "}
        <span className="na">type=</span>
        <span className="s">"checkbox"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"inlineFormCheck"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-label"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"inlineFormCheck"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}Remember me{"\n"}
        {"    "}
        <span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"\n"}
        {"  "}
        <span className="nt">&lt;button</span>{" "}
        <span className="na">type=</span>
        <span className="s">"submit"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"btn btn-primary mb-2"</span>
        <span className="nt">
          &gt;
        </span>Submit<span className="nt">&lt;/button&gt;</span>
        {"\n"}
        <span className="nt">&lt;/form&gt;</span>
      </code>
    </pre>
  </figure>
  <p>Custom form controls and selects are also supported.</p>
  <div className="bd-example">
    <form className="form-inline">
      <label
        className="my-1 mr-2"
        htmlFor="inlineFormCustomSelectPref"
      >
        Preference
      </label>
      <select
        className="custom-select my-1 mr-sm-2"
        id="inlineFormCustomSelectPref"
      >
        <option selected>Choose...</option>
        <option value={1}>One</option>
        <option value={2}>Two</option>
        <option value={3}>Three</option>
      </select>
      <div className="custom-control custom-checkbox my-1 mr-sm-2">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customControlInline"
        />
        <label
          className="custom-control-label"
          htmlFor="customControlInline"
        >
          Remember my preference
        </label>
      </div>
      <button type="submit" className="btn btn-primary my-1">
        Submit
      </button>
    </form>
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;form</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-inline"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"my-1 mr-2"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"inlineFormCustomSelectPref"</span>
        <span className="nt">
          &gt;
        </span>Preference<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;select</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-select my-1 mr-sm-2"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"inlineFormCustomSelectPref"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;option</span>{" "}
        <span className="na">selected</span>
        <span className="nt">
          &gt;
        </span>Choose...<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;option</span>{" "}
        <span className="na">value=</span>
        <span className="s">"1"</span>
        <span className="nt">
          &gt;
        </span>One<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;option</span>{" "}
        <span className="na">value=</span>
        <span className="s">"2"</span>
        <span className="nt">
          &gt;
        </span>Two<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;option</span>{" "}
        <span className="na">value=</span>
        <span className="s">"3"</span>
        <span className="nt">
          &gt;
        </span>Three<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/select&gt;</span>
        {"\n"}
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">
          "custom-control custom-checkbox my-1 mr-sm-2"
        </span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"checkbox"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-control-input"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"customControlInline"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-control-label"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"customControlInline"</span>
        <span className="nt">&gt;</span>Remember my preference<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"\n"}
        {"  "}
        <span className="nt">&lt;button</span>{" "}
        <span className="na">type=</span>
        <span className="s">"submit"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"btn btn-primary my-1"</span>
        <span className="nt">
          &gt;
        </span>Submit<span className="nt">&lt;/button&gt;</span>
        {"\n"}
        <span className="nt">&lt;/form&gt;</span>
      </code>
    </pre>
  </figure>
  <div className="bd-callout bd-callout-warning">
    <h5 id="alternatives-to-hidden-labels">
      Alternatives to hidden labels
    </h5>
    <p>
      Assistive technologies such as screen readers will have trouble
      with your forms if you don’t include a label for every input.
      For these inline forms, you can hide the labels using the{" "}
      <code className="highlighter-rouge">.sr-only</code> class. There
      are further alternative methods of providing a label for
      assistive technologies, such as the{" "}
      <code className="highlighter-rouge">aria-label</code>,{" "}
      <code className="highlighter-rouge">aria-labelledby</code> or{" "}
      <code className="highlighter-rouge">title</code> attribute. If
      none of these are present, assistive technologies may resort to
      using the <code className="highlighter-rouge">
        placeholder
      </code>{" "}
      attribute, if present, but note that use of{" "}
      <code className="highlighter-rouge">placeholder</code> as a
      replacement for other labelling methods is not advised.
    </p>
  </div>
  <h2 id="help-text">
    <span className="bd-content-title">
      Help text<a
        className="anchorjs-link "
        href="#help-text"
        aria-label="Anchor"
        data-anchorjs-icon="#"
        style={{ paddingLeft: "0.375em" }}
      />
    </span>
  </h2>
  <p>
    Block-level help text in forms can be created using{" "}
    <code className="highlighter-rouge">.form-text</code> (previously
    known as <code className="highlighter-rouge">.help-block</code> in
    v3). Inline help text can be flexibly implemented using any inline
    HTML element and utility classes like{" "}
    <code className="highlighter-rouge">.text-muted</code>.
  </p>
  <div className="bd-callout bd-callout-warning">
    <h5 id="associating-help-text-with-form-controls">
      Associating help text with form controls
    </h5>
    <p>
      Help text should be explicitly associated with the form control
      it relates to using the{" "}
      <code className="highlighter-rouge">aria-describedby</code>{" "}
      attribute. This will ensure that assistive technologies—such as
      screen readers—will announce this help text when the user
      focuses or enters the control.
    </p>
  </div>
  <p>
    Help text below inputs can be styled with{" "}
    <code className="highlighter-rouge">.form-text</code>. This class
    includes <code className="highlighter-rouge">
      display: block
    </code>{" "}
    and adds some top margin for easy spacing from the inputs above.
  </p>
  <div className="bd-example">
    <label htmlFor="inputPassword5">Password</label>
    <input
      type="password"
      id="inputPassword5"
      className="form-control"
      aria-describedby="passwordHelpBlock"
      style={{
        backgroundImage: 'url("data:image/png',
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
        backgroundSize: "16px 18px",
        backgroundPosition: "98% 50%"
      }}
    />
    <small id="passwordHelpBlock" className="form-text text-muted">
      Your password must be 8-20 characters long, contain letters and
      numbers, and must not contain spaces, special characters, or
      emoji.
    </small>
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"inputPassword5"</span>
        <span className="nt">
          &gt;
        </span>Password<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"password"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"inputPassword5"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">aria-describedby=</span>
        <span className="s">"passwordHelpBlock"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        <span className="nt">&lt;small</span>{" "}
        <span className="na">id=</span>
        <span className="s">"passwordHelpBlock"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-text text-muted"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}Your password must be 8-20 characters long, contain
        letters and numbers, and must not contain spaces, special
        characters, or emoji.{"\n"}
        <span className="nt">&lt;/small&gt;</span>
      </code>
    </pre>
  </figure>
  <p>
    Inline text can use any typical inline HTML element (be it a{" "}
    <code className="highlighter-rouge">&lt;small&gt;</code>,{" "}
    <code className="highlighter-rouge">&lt;span&gt;</code>, or
    something else) with nothing more than a utility class.
  </p>
  <div className="bd-example">
    <form className="form-inline">
      <div className="form-group">
        <label htmlFor="inputPassword6">Password</label>
        <input
          type="password"
          id="inputPassword6"
          className="form-control mx-sm-3"
          aria-describedby="passwordHelpInline"
          autoComplete="off"
          style={{
            backgroundImage: 'url("data:image/png',
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "scroll",
            backgroundSize: "16px 18px",
            backgroundPosition: "98% 50%"
          }}
        />
        <small id="passwordHelpInline" className="text-muted">
          Must be 8-20 characters long.
        </small>
      </div>
    </form>
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;form</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-inline"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-group"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"inputPassword6"</span>
        <span className="nt">
          &gt;
        </span>Password<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"password"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"inputPassword6"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control mx-sm-3"</span>{" "}
        <span className="na">aria-describedby=</span>
        <span className="s">"passwordHelpInline"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;small</span>{" "}
        <span className="na">id=</span>
        <span className="s">"passwordHelpInline"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"text-muted"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}Must be 8-20 characters long.{"\n"}
        {"    "}
        <span className="nt">&lt;/small&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        <span className="nt">&lt;/form&gt;</span>
      </code>
    </pre>
  </figure>
  <h2 id="disabled-forms">
    <span className="bd-content-title">
      Disabled forms<a
        className="anchorjs-link "
        href="#disabled-forms"
        aria-label="Anchor"
        data-anchorjs-icon="#"
        style={{ paddingLeft: "0.375em" }}
      />
    </span>
  </h2>
  <p>
    Add the <code className="highlighter-rouge">disabled</code>{" "}
    boolean attribute on an input to prevent user interactions and
    make it appear lighter.
  </p>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;input</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"disabledInput"</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"Disabled input here..."</span>{" "}
        <span className="na">disabled</span>
        <span className="nt">&gt;</span>
      </code>
    </pre>
  </figure>
  <p>
    Add the <code className="highlighter-rouge">disabled</code>{" "}
    attribute to a{" "}
    <code className="highlighter-rouge">&lt;fieldset&gt;</code> to
    disable all the controls within.
  </p>
  <div className="bd-example">
    <form>
      <fieldset disabled>
        <div className="form-group">
          <label htmlFor="disabledTextInput">Disabled input</label>
          <input
            type="text"
            id="disabledTextInput"
            className="form-control"
            placeholder="Disabled input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="disabledSelect">Disabled select menu</label>
          <select id="disabledSelect" className="form-control">
            <option>Disabled select</option>
          </select>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="disabledFieldsetCheck"
              disabled
            />
            <label
              className="form-check-label"
              htmlFor="disabledFieldsetCheck"
            >
              Can't check this
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </fieldset>
    </form>
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;form&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;fieldset</span>{" "}
        <span className="na">disabled</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-group"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"disabledTextInput"</span>
        <span className="nt">&gt;</span>Disabled input<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"disabledTextInput"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"Disabled input"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-group"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"disabledSelect"</span>
        <span className="nt">&gt;</span>Disabled select menu<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;select</span>{" "}
        <span className="na">id=</span>
        <span className="s">"disabledSelect"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"        "}
        <span className="nt">&lt;option&gt;</span>Disabled select<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;/select&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-group"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"        "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-input"</span>{" "}
        <span className="na">type=</span>
        <span className="s">"checkbox"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"disabledFieldsetCheck"</span>{" "}
        <span className="na">disabled</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"        "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-label"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"disabledFieldsetCheck"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"          "}Can't check this{"\n"}
        {"        "}
        <span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;button</span>{" "}
        <span className="na">type=</span>
        <span className="s">"submit"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"btn btn-primary"</span>
        <span className="nt">
          &gt;
        </span>Submit<span className="nt">&lt;/button&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/fieldset&gt;</span>
        {"\n"}
        <span className="nt">&lt;/form&gt;</span>
      </code>
    </pre>
  </figure>
  <div className="bd-callout bd-callout-warning">
    <h5 id="caveat-with-anchors">Caveat with anchors</h5>
    <p>
      By default, browsers will treat all native form controls (<code className="highlighter-rouge">&lt;input&gt;</code>,{" "}
      <code className="highlighter-rouge">&lt;select&gt;</code> and{" "}
      <code className="highlighter-rouge">&lt;button&gt;</code>{" "}
      elements) inside a{" "}
      <code className="highlighter-rouge">
        &lt;fieldset disabled&gt;
      </code>{" "}
      as disabled, preventing both keyboard and mouse interactions on
      them. However, if your form also includes{" "}
      <code className="highlighter-rouge">
        &lt;a ... class="btn btn-*"&gt;
      </code>{" "}
      elements, these will only be given a style of{" "}
      <code className="highlighter-rouge">pointer-events: none</code>.
      As noted in the section about{" "}
      <a href="/docs/4.2/components/buttons/#disabled-state">
        disabled state for buttons
      </a>{" "}
      (and specifically in the sub-section for anchor elements), this
      CSS property is not yet standardized and isn’t fully supported
      in Internet Explorer 10, and won’t prevent keyboard users from
      being able to focus or activate these links. So to be safe, use
      custom JavaScript to disable such links.
    </p>
  </div>
  <div className="bd-callout bd-callout-danger">
    <h4 id="cross-browser-compatibility">
      Cross-browser compatibility
    </h4>
    <p>
      While Bootstrap will apply these styles in all browsers,
      Internet Explorer 11 and below don’t fully support the{" "}
      <code className="highlighter-rouge">disabled</code> attribute on
      a <code className="highlighter-rouge">&lt;fieldset&gt;</code>.
      Use custom JavaScript to disable the fieldset in these browsers.
    </p>
  </div>
  <h2 id="validation">
    <span className="bd-content-title">
      Validation<a
        className="anchorjs-link "
        href="#validation"
        aria-label="Anchor"
        data-anchorjs-icon="#"
        style={{ paddingLeft: "0.375em" }}
      />
    </span>
  </h2>
  <p>
    Provide valuable, actionable feedback to your users with HTML5
    form validation–<a href="https://caniuse.com/#feat=form-validation">
      available in all our supported browsers
    </a>. Choose from the browser default validation feedback, or
    implement custom messages with our built-in classes and starter
    JavaScript.
  </p>
  <div className="bd-callout bd-callout-warning">
    <p>
      We currently recommend using custom validation styles, as native
      browser default validation messages are not consistently exposed
      to assistive technologies in all browsers (most notably, Chrome
      on desktop and mobile).
    </p>
  </div>
  <h3 id="how-it-works">
    <span className="bd-content-title">
      How it works<a
        className="anchorjs-link "
        href="#how-it-works"
        aria-label="Anchor"
        data-anchorjs-icon="#"
        style={{ paddingLeft: "0.375em" }}
      />
    </span>
  </h3>
  <p>Here’s how form validation works with Bootstrap:</p>
  <ul>
    <li>
      HTML form validation is applied via CSS’s two pseudo-classes,{" "}
      <code className="highlighter-rouge">:invalid</code> and{" "}
      <code className="highlighter-rouge">:valid</code>. It applies to{" "}
      <code className="highlighter-rouge">&lt;input&gt;</code>,{" "}
      <code className="highlighter-rouge">&lt;select&gt;</code>, and{" "}
      <code className="highlighter-rouge">&lt;textarea&gt;</code>{" "}
      elements.
    </li>
    <li>
      Bootstrap scopes the{" "}
      <code className="highlighter-rouge">:invalid</code> and{" "}
      <code className="highlighter-rouge">:valid</code> styles to
      parent <code className="highlighter-rouge">
        .was-validated
      </code>{" "}
      class, usually applied to the{" "}
      <code className="highlighter-rouge">&lt;form&gt;</code>.
      Otherwise, any required field without a value shows up as
      invalid on page load. This way, you may choose when to activate
      them (typically after form submission is attempted).
    </li>
    <li>
      To reset the appearance of the form (for instance, in the case
      of dynamic form submissions using AJAX), remove the{" "}
      <code className="highlighter-rouge">.was-validated</code> class
      from the <code className="highlighter-rouge">
        &lt;form&gt;
      </code>{" "}
      again after submission.
    </li>
    <li>
      As a fallback,{" "}
      <code className="highlighter-rouge">.is-invalid</code> and{" "}
      <code className="highlighter-rouge">.is-valid</code> classes may
      be used instead of the pseudo-classes for{" "}
      <a href="#server-side">server side validation</a>. They do not
      require a{" "}
      <code className="highlighter-rouge">.was-validated</code> parent
      class.
    </li>
    <li>
      Due to constraints in how CSS works, we cannot (at present)
      apply styles to a{" "}
      <code className="highlighter-rouge">&lt;label&gt;</code> that
      comes before a form control in the DOM without the help of
      custom JavaScript.
    </li>
    <li>
      All modern browsers support the{" "}
      <a href="https://www.w3.org/TR/html5/sec-forms.html#the-constraint-validation-api">
        constraint validation API
      </a>, a series of JavaScript methods for validating form
      controls.
    </li>
    <li>
      Feedback messages may utilize the{" "}
      <a href="#browser-defaults">browser defaults</a> (different for
      each browser, and unstylable via CSS) or our custom feedback
      styles with additional HTML and CSS.
    </li>
    <li>
      You may provide custom validity messages with{" "}
      <code className="highlighter-rouge">setCustomValidity</code> in
      JavaScript.
    </li>
  </ul>
  <p>
    With that in mind, consider the following demos for our custom
    form validation styles, optional server side classes, and browser
    defaults.
  </p>
  <h3 id="custom-styles">
    <span className="bd-content-title">
      Custom styles<a
        className="anchorjs-link "
        href="#custom-styles"
        aria-label="Anchor"
        data-anchorjs-icon="#"
        style={{ paddingLeft: "0.375em" }}
      />
    </span>
  </h3>
  <p>
    For custom Bootstrap form validation messages, you’ll need to add
    the <code className="highlighter-rouge">novalidate</code> boolean
    attribute to your{" "}
    <code className="highlighter-rouge">&lt;form&gt;</code>. This
    disables the browser default feedback tooltips, but still provides
    access to the form validation APIs in JavaScript. Try to submit
    the form below; our JavaScript will intercept the submit button
    and relay feedback to you. When attempting to submit, you’ll see
    the <code className="highlighter-rouge">:invalid</code> and{" "}
    <code className="highlighter-rouge">:valid</code> styles applied
    to your form controls.
  </p>
  <p>
    Custom feedback styles apply custom colors, borders, focus styles,
    and background icons to better communicate feedback. Background
    icons for{" "}
    <code className="highlighter-rouge">&lt;select&gt;</code>s are
    only available with{" "}
    <code className="highlighter-rouge">.custom-select</code>, and not{" "}
    <code className="highlighter-rouge">.form-control</code>.
  </p>
  <div className="bd-example">
    <form className="needs-validation" noValidate>
      <div className="form-row">
        <div className="col-md-4 mb-3">
          <label htmlFor="validationCustom01">First name</label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            placeholder="First name"
            defaultValue="Mark"
            required
            autoComplete="off"
            style={{
              backgroundImage: 'url("data:image/png',
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "scroll",
              backgroundSize: "16px 18px",
              backgroundPosition: "98% 50%"
            }}
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="validationCustom02">Last name</label>
          <input
            type="text"
            className="form-control"
            id="validationCustom02"
            placeholder="Last name"
            defaultValue="Otto"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="validationCustomUsername">Username</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span
                className="input-group-text"
                id="inputGroupPrepend"
              >
                @
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              id="validationCustomUsername"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
              autoComplete="off"
              style={{
                backgroundImage: 'url("data:image/png',
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "scroll",
                backgroundSize: "16px 18px",
                backgroundPosition: "98% 50%"
              }}
            />
            <div className="invalid-feedback">
              Please choose a username.
            </div>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="col-md-6 mb-3">
          <label htmlFor="validationCustom03">City</label>
          <input
            type="text"
            className="form-control"
            id="validationCustom03"
            placeholder="City"
            required
          />
          <div className="invalid-feedback">
            Please provide a valid city.
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <label htmlFor="validationCustom04">State</label>
          <input
            type="text"
            className="form-control"
            id="validationCustom04"
            placeholder="State"
            required
          />
          <div className="invalid-feedback">
            Please provide a valid state.
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <label htmlFor="validationCustom05">Zip</label>
          <input
            type="text"
            className="form-control"
            id="validationCustom05"
            placeholder="Zip"
            required
          />
          <div className="invalid-feedback">
            Please provide a valid zip.
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue
            id="invalidCheck"
            required
          />
          <label className="form-check-label" htmlFor="invalidCheck">
            Agree to terms and conditions
          </label>
          <div className="invalid-feedback">
            You must agree before submitting.
          </div>
        </div>
      </div>
      <button className="btn btn-primary" type="submit">
        Submit form
      </button>
    </form>
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;form</span>{" "}
        <span className="na">class=</span>
        <span className="s">"needs-validation"</span>{" "}
        <span className="na">novalidate</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-row"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-md-4 mb-3"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"validationCustom01"</span>
        <span className="nt">&gt;</span>First name<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"validationCustom01"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"First name"</span>{" "}
        <span className="na">value=</span>
        <span className="s">"Mark"</span>{" "}
        <span className="na">required</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"valid-feedback"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"        "}Looks good!{"\n"}
        {"      "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-md-4 mb-3"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"validationCustom02"</span>
        <span className="nt">&gt;</span>Last name<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"validationCustom02"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"Last name"</span>{" "}
        <span className="na">value=</span>
        <span className="s">"Otto"</span>{" "}
        <span className="na">required</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"valid-feedback"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"        "}Looks good!{"\n"}
        {"      "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-md-4 mb-3"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"validationCustomUsername"</span>
        <span className="nt">
          &gt;
        </span>Username<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"input-group"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"        "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"input-group-prepend"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"          "}
        <span className="nt">&lt;span</span>{" "}
        <span className="na">class=</span>
        <span className="s">"input-group-text"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"inputGroupPrepend"</span>
        <span className="nt">
          &gt;
        </span>@<span className="nt">&lt;/span&gt;</span>
        {"\n"}
        {"        "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"        "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"validationCustomUsername"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"Username"</span>{" "}
        <span className="na">aria-describedby=</span>
        <span className="s">"inputGroupPrepend"</span>{" "}
        <span className="na">required</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"        "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"invalid-feedback"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"          "}Please choose a username.{"\n"}
        {"        "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-row"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-md-6 mb-3"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"validationCustom03"</span>
        <span className="nt">
          &gt;
        </span>City<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"validationCustom03"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"City"</span>{" "}
        <span className="na">required</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"invalid-feedback"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"        "}Please provide a valid city.{"\n"}
        {"      "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-md-3 mb-3"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"validationCustom04"</span>
        <span className="nt">
          &gt;
        </span>State<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"validationCustom04"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"State"</span>{" "}
        <span className="na">required</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"invalid-feedback"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"        "}Please provide a valid state.{"\n"}
        {"      "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-md-3 mb-3"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"validationCustom05"</span>
        <span className="nt">
          &gt;
        </span>Zip<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"validationCustom05"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"Zip"</span>{" "}
        <span className="na">required</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"invalid-feedback"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"        "}Please provide a valid zip.{"\n"}
        {"      "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-group"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-input"</span>{" "}
        <span className="na">type=</span>
        <span className="s">"checkbox"</span>{" "}
        <span className="na">value=</span>
        <span className="s">""</span> <span className="na">id=</span>
        <span className="s">"invalidCheck"</span>{" "}
        <span className="na">required</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-label"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"invalidCheck"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"        "}Agree to terms and conditions{"\n"}
        {"      "}
        <span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"invalid-feedback"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"        "}You must agree before submitting.{"\n"}
        {"      "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;button</span>{" "}
        <span className="na">class=</span>
        <span className="s">"btn btn-primary"</span>{" "}
        <span className="na">type=</span>
        <span className="s">"submit"</span>
        <span className="nt">&gt;</span>Submit form<span className="nt">&lt;/button&gt;</span>
        {"\n"}
        <span className="nt">&lt;/form&gt;</span>
        {"\n"}
        {"\n"}
        <span className="nt">&lt;script&gt;</span>
        {"\n"}
        <span className="c1">
          // Example starter JavaScript for disabling form submissions
          if there are invalid fields
        </span>
        {"\n"}
        <span className="p">(</span>
        <span className="kd">function</span>
        <span className="p">()</span> <span className="p">{"{"}</span>
        {"\n"}
        {"  "}
        <span className="s1">'use strict'</span>
        <span className="p">;</span>
        {"\n"}
        {"  "}
        <span className="nb">window</span>
        <span className="p">.</span>
        <span className="nx">addEventListener</span>
        <span className="p">(</span>
        <span className="s1">'load'</span>
        <span className="p">,</span>{" "}
        <span className="kd">function</span>
        <span className="p">()</span> <span className="p">{"{"}</span>
        {"\n"}
        {"    "}
        <span className="c1">
          // Fetch all the forms we want to apply custom Bootstrap
          validation styles to
        </span>
        {"\n"}
        {"    "}
        <span className="kd">var</span>{" "}
        <span className="nx">forms</span> <span className="o">=</span>{" "}
        <span className="nb">document</span>
        <span className="p">.</span>
        <span className="nx">getElementsByClassName</span>
        <span className="p">(</span>
        <span className="s1">'needs-validation'</span>
        <span className="p">);</span>
        {"\n"}
        {"    "}
        <span className="c1">
          // Loop over them and prevent submission
        </span>
        {"\n"}
        {"    "}
        <span className="kd">var</span>{" "}
        <span className="nx">validation</span>{" "}
        <span className="o">=</span> <span className="nb">Array</span>
        <span className="p">.</span>
        <span className="nx">prototype</span>
        <span className="p">.</span>
        <span className="nx">filter</span>
        <span className="p">.</span>
        <span className="nx">call</span>
        <span className="p">(</span>
        <span className="nx">forms</span>
        <span className="p">,</span>{" "}
        <span className="kd">function</span>
        <span className="p">(</span>
        <span className="nx">form</span>
        <span className="p">)</span> <span className="p">{"{"}</span>
        {"\n"}
        {"      "}
        <span className="nx">form</span>
        <span className="p">.</span>
        <span className="nx">addEventListener</span>
        <span className="p">(</span>
        <span className="s1">'submit'</span>
        <span className="p">,</span>{" "}
        <span className="kd">function</span>
        <span className="p">(</span>
        <span className="nx">event</span>
        <span className="p">)</span> <span className="p">{"{"}</span>
        {"\n"}
        {"        "}
        <span className="k">if</span> <span className="p">(</span>
        <span className="nx">form</span>
        <span className="p">.</span>
        <span className="nx">checkValidity</span>
        <span className="p">
          ()
        </span> <span className="o">===</span>{" "}
        <span className="kc">false</span>
        <span className="p">)</span> <span className="p">{"{"}</span>
        {"\n"}
        {"          "}
        <span className="nx">event</span>
        <span className="p">.</span>
        <span className="nx">preventDefault</span>
        <span className="p">();</span>
        {"\n"}
        {"          "}
        <span className="nx">event</span>
        <span className="p">.</span>
        <span className="nx">stopPropagation</span>
        <span className="p">();</span>
        {"\n"}
        {"        "}
        <span className="p">{"}"}</span>
        {"\n"}
        {"        "}
        <span className="nx">form</span>
        <span className="p">.</span>
        <span className="nx">classList</span>
        <span className="p">.</span>
        <span className="nx">add</span>
        <span className="p">(</span>
        <span className="s1">'was-validated'</span>
        <span className="p">);</span>
        {"\n"}
        {"      "}
        <span className="p">{"}"},</span>{" "}
        <span className="kc">false</span>
        <span className="p">);</span>
        {"\n"}
        {"    "}
        <span className="p">{"}"});</span>
        {"\n"}
        {"  "}
        <span className="p">{"}"},</span>{" "}
        <span className="kc">false</span>
        <span className="p">);</span>
        {"\n"}
        <span className="p">{"}"})();</span>
        {"\n"}
        <span className="nt">&lt;/script&gt;</span>
      </code>
    </pre>
  </figure>
  <h3 id="browser-defaults">
    <span className="bd-content-title">
      Browser defaults<a
        className="anchorjs-link "
        href="#browser-defaults"
        aria-label="Anchor"
        data-anchorjs-icon="#"
        style={{ paddingLeft: "0.375em" }}
      />
    </span>
  </h3>
  <p>
    Not interested in custom validation feedback messages or writing
    JavaScript to change form behaviors? All good, you can use the
    browser defaults. Try submitting the form below. Depending on your
    browser and OS, you’ll see a slightly different style of feedback.
  </p>
  <p>
    While these feedback styles cannot be styled with CSS, you can
    still customize the feedback text through JavaScript.
  </p>
  <div className="bd-example">
    <form>
      <div className="form-row">
        <div className="col-md-4 mb-3">
          <label htmlFor="validationDefault01">First name</label>
          <input
            type="text"
            className="form-control"
            id="validationDefault01"
            placeholder="First name"
            defaultValue="Mark"
            required
          />
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="validationDefault02">Last name</label>
          <input
            type="text"
            className="form-control"
            id="validationDefault02"
            placeholder="Last name"
            defaultValue="Otto"
            required
          />
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="validationDefaultUsername">Username</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span
                className="input-group-text"
                id="inputGroupPrepend2"
              >
                @
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              id="validationDefaultUsername"
              placeholder="Username"
              aria-describedby="inputGroupPrepend2"
              required
              autoComplete="off"
              style={{
                backgroundImage: 'url("data:image/png',
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "scroll",
                backgroundSize: "16px 18px",
                backgroundPosition: "98% 50%"
              }}
            />
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="col-md-6 mb-3">
          <label htmlFor="validationDefault03">City</label>
          <input
            type="text"
            className="form-control"
            id="validationDefault03"
            placeholder="City"
            required
          />
        </div>
        <div className="col-md-3 mb-3">
          <label htmlFor="validationDefault04">State</label>
          <input
            type="text"
            className="form-control"
            id="validationDefault04"
            placeholder="State"
            required
          />
        </div>
        <div className="col-md-3 mb-3">
          <label htmlFor="validationDefault05">Zip</label>
          <input
            type="text"
            className="form-control"
            id="validationDefault05"
            placeholder="Zip"
            required
          />
        </div>
      </div>
      <div className="form-group">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue
            id="invalidCheck2"
            required
          />
          <label className="form-check-label" htmlFor="invalidCheck2">
            Agree to terms and conditions
          </label>
        </div>
      </div>
      <button className="btn btn-primary" type="submit">
        Submit form
      </button>
    </form>
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;form&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-row"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-md-4 mb-3"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"validationDefault01"</span>
        <span className="nt">&gt;</span>First name<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"validationDefault01"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"First name"</span>{" "}
        <span className="na">value=</span>
        <span className="s">"Mark"</span>{" "}
        <span className="na">required</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-md-4 mb-3"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"validationDefault02"</span>
        <span className="nt">&gt;</span>Last name<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"validationDefault02"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"Last name"</span>{" "}
        <span className="na">value=</span>
        <span className="s">"Otto"</span>{" "}
        <span className="na">required</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-md-4 mb-3"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"validationDefaultUsername"</span>
        <span className="nt">
          &gt;
        </span>Username<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"input-group"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"        "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"input-group-prepend"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"          "}
        <span className="nt">&lt;span</span>{" "}
        <span className="na">class=</span>
        <span className="s">"input-group-text"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"inputGroupPrepend2"</span>
        <span className="nt">
          &gt;
        </span>@<span className="nt">&lt;/span&gt;</span>
        {"\n"}
        {"        "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"        "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"validationDefaultUsername"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"Username"</span>{" "}
        <span className="na">aria-describedby=</span>
        <span className="s">"inputGroupPrepend2"</span>{" "}
        <span className="na">required</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-row"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-md-6 mb-3"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"validationDefault03"</span>
        <span className="nt">
          &gt;
        </span>City<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"validationDefault03"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"City"</span>{" "}
        <span className="na">required</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-md-3 mb-3"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"validationDefault04"</span>
        <span className="nt">
          &gt;
        </span>State<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"validationDefault04"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"State"</span>{" "}
        <span className="na">required</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-md-3 mb-3"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"validationDefault05"</span>
        <span className="nt">
          &gt;
        </span>Zip<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"validationDefault05"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"Zip"</span>{" "}
        <span className="na">required</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-group"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-input"</span>{" "}
        <span className="na">type=</span>
        <span className="s">"checkbox"</span>{" "}
        <span className="na">value=</span>
        <span className="s">""</span> <span className="na">id=</span>
        <span className="s">"invalidCheck2"</span>{" "}
        <span className="na">required</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-label"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"invalidCheck2"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"        "}Agree to terms and conditions{"\n"}
        {"      "}
        <span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;button</span>{" "}
        <span className="na">class=</span>
        <span className="s">"btn btn-primary"</span>{" "}
        <span className="na">type=</span>
        <span className="s">"submit"</span>
        <span className="nt">&gt;</span>Submit form<span className="nt">&lt;/button&gt;</span>
        {"\n"}
        <span className="nt">&lt;/form&gt;</span>
      </code>
    </pre>
  </figure>
  <h3 id="server-side">
    <span className="bd-content-title">
      Server side<a
        className="anchorjs-link "
        href="#server-side"
        aria-label="Anchor"
        data-anchorjs-icon="#"
        style={{ paddingLeft: "0.375em" }}
      />
    </span>
  </h3>
  <p>
    We recommend using client-side validation, but in case you require
    server-side validation, you can indicate invalid and valid form
    fields with <code className="highlighter-rouge">
      .is-invalid
    </code>{" "}
    and <code className="highlighter-rouge">.is-valid</code>. Note
    that <code className="highlighter-rouge">
      .invalid-feedback
    </code>{" "}
    is also supported with these classes.
  </p>
  <div className="bd-example">
    <form>
      <div className="form-row">
        <div className="col-md-4 mb-3">
          <label htmlFor="validationServer01">First name</label>
          <input
            type="text"
            className="form-control is-valid"
            id="validationServer01"
            placeholder="First name"
            defaultValue="Mark"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="validationServer02">Last name</label>
          <input
            type="text"
            className="form-control is-valid"
            id="validationServer02"
            placeholder="Last name"
            defaultValue="Otto"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="validationServerUsername">Username</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span
                className="input-group-text"
                id="inputGroupPrepend3"
              >
                @
              </span>
            </div>
            <input
              type="text"
              className="form-control is-invalid"
              id="validationServerUsername"
              placeholder="Username"
              aria-describedby="inputGroupPrepend3"
              required
              autoComplete="off"
            />
            <div className="invalid-feedback">
              Please choose a username.
            </div>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="col-md-6 mb-3">
          <label htmlFor="validationServer03">City</label>
          <input
            type="text"
            className="form-control is-invalid"
            id="validationServer03"
            placeholder="City"
            required
          />
          <div className="invalid-feedback">
            Please provide a valid city.
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <label htmlFor="validationServer04">State</label>
          <input
            type="text"
            className="form-control is-invalid"
            id="validationServer04"
            placeholder="State"
            required
          />
          <div className="invalid-feedback">
            Please provide a valid state.
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <label htmlFor="validationServer05">Zip</label>
          <input
            type="text"
            className="form-control is-invalid"
            id="validationServer05"
            placeholder="Zip"
            required
          />
          <div className="invalid-feedback">
            Please provide a valid zip.
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="form-check">
          <input
            className="form-check-input is-invalid"
            type="checkbox"
            defaultValue
            id="invalidCheck3"
            required
          />
          <label className="form-check-label" htmlFor="invalidCheck3">
            Agree to terms and conditions
          </label>
          <div className="invalid-feedback">
            You must agree before submitting.
          </div>
        </div>
      </div>
      <button className="btn btn-primary" type="submit">
        Submit form
      </button>
    </form>
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;form&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-row"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-md-4 mb-3"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"validationServer01"</span>
        <span className="nt">&gt;</span>First name<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control is-valid"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"validationServer01"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"First name"</span>{" "}
        <span className="na">value=</span>
        <span className="s">"Mark"</span>{" "}
        <span className="na">required</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"valid-feedback"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"        "}Looks good!{"\n"}
        {"      "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-md-4 mb-3"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"validationServer02"</span>
        <span className="nt">&gt;</span>Last name<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control is-valid"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"validationServer02"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"Last name"</span>{" "}
        <span className="na">value=</span>
        <span className="s">"Otto"</span>{" "}
        <span className="na">required</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"valid-feedback"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"        "}Looks good!{"\n"}
        {"      "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-md-4 mb-3"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"validationServerUsername"</span>
        <span className="nt">
          &gt;
        </span>Username<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"input-group"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"        "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"input-group-prepend"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"          "}
        <span className="nt">&lt;span</span>{" "}
        <span className="na">class=</span>
        <span className="s">"input-group-text"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"inputGroupPrepend3"</span>
        <span className="nt">
          &gt;
        </span>@<span className="nt">&lt;/span&gt;</span>
        {"\n"}
        {"        "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"        "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control is-invalid"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"validationServerUsername"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"Username"</span>{" "}
        <span className="na">aria-describedby=</span>
        <span className="s">"inputGroupPrepend3"</span>{" "}
        <span className="na">required</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"        "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"invalid-feedback"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"          "}Please choose a username.{"\n"}
        {"        "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-row"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-md-6 mb-3"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"validationServer03"</span>
        <span className="nt">
          &gt;
        </span>City<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control is-invalid"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"validationServer03"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"City"</span>{" "}
        <span className="na">required</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"invalid-feedback"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"        "}Please provide a valid city.{"\n"}
        {"      "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-md-3 mb-3"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"validationServer04"</span>
        <span className="nt">
          &gt;
        </span>State<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control is-invalid"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"validationServer04"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"State"</span>{" "}
        <span className="na">required</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"invalid-feedback"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"        "}Please provide a valid state.{"\n"}
        {"      "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-md-3 mb-3"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"validationServer05"</span>
        <span className="nt">
          &gt;
        </span>Zip<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control is-invalid"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"validationServer05"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"Zip"</span>{" "}
        <span className="na">required</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"invalid-feedback"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"        "}Please provide a valid zip.{"\n"}
        {"      "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-group"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-input is-invalid"</span>{" "}
        <span className="na">type=</span>
        <span className="s">"checkbox"</span>{" "}
        <span className="na">value=</span>
        <span className="s">""</span> <span className="na">id=</span>
        <span className="s">"invalidCheck3"</span>{" "}
        <span className="na">required</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-check-label"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"invalidCheck3"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"        "}Agree to terms and conditions{"\n"}
        {"      "}
        <span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"invalid-feedback"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"        "}You must agree before submitting.{"\n"}
        {"      "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;button</span>{" "}
        <span className="na">class=</span>
        <span className="s">"btn btn-primary"</span>{" "}
        <span className="na">type=</span>
        <span className="s">"submit"</span>
        <span className="nt">&gt;</span>Submit form<span className="nt">&lt;/button&gt;</span>
        {"\n"}
        <span className="nt">&lt;/form&gt;</span>
      </code>
    </pre>
  </figure>
  <h3 id="supported-elements">
    <span className="bd-content-title">
      Supported elements<a
        className="anchorjs-link "
        href="#supported-elements"
        aria-label="Anchor"
        data-anchorjs-icon="#"
        style={{ paddingLeft: "0.375em" }}
      />
    </span>
  </h3>
  <p>
    Our example forms show native textual{" "}
    <code className="highlighter-rouge">&lt;input&gt;</code>s above,
    but form validation styles are also available for{" "}
    <code className="highlighter-rouge">&lt;textarea&gt;</code>s and
    custom form controls.
  </p>
  <div className="bd-example">
    <form className="was-validated">
      <div className="mb-3">
        <label htmlFor="validationTextarea">Textarea</label>
        <textarea
          className="form-control is-invalid"
          id="validationTextarea"
          placeholder="Required example textarea"
          required
          defaultValue={""}
        />
        <div className="invalid-feedback">
          Please enter a message in the textarea.
        </div>
      </div>
      <div className="custom-control custom-checkbox mb-3">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customControlValidation1"
          required
        />
        <label
          className="custom-control-label"
          htmlFor="customControlValidation1"
        >
          Check this custom checkbox
        </label>
        <div className="invalid-feedback">
          Example invalid feedback text
        </div>
      </div>
      <div className="custom-control custom-radio">
        <input
          type="radio"
          className="custom-control-input"
          id="customControlValidation2"
          name="radio-stacked"
          required
        />
        <label
          className="custom-control-label"
          htmlFor="customControlValidation2"
        >
          Toggle this custom radio
        </label>
      </div>
      <div className="custom-control custom-radio mb-3">
        <input
          type="radio"
          className="custom-control-input"
          id="customControlValidation3"
          name="radio-stacked"
          required
        />
        <label
          className="custom-control-label"
          htmlFor="customControlValidation3"
        >
          Or toggle this other custom radio
        </label>
        <div className="invalid-feedback">
          More example invalid feedback text
        </div>
      </div>
      <div className="form-group">
        <select className="custom-select" required>
          <option value>Open this select menu</option>
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
        </select>
        <div className="invalid-feedback">
          Example invalid custom select feedback
        </div>
      </div>
      <div className="custom-file">
        <input
          type="file"
          className="custom-file-input"
          id="validatedCustomFile"
          required
        />
        <label
          className="custom-file-label"
          htmlFor="validatedCustomFile"
        >
          Choose file...
        </label>
        <div className="invalid-feedback">
          Example invalid custom file feedback
        </div>
      </div>
    </form>
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;form</span>{" "}
        <span className="na">class=</span>
        <span className="s">"was-validated"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"mb-3"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"validationTextarea"</span>
        <span className="nt">
          &gt;
        </span>Textarea<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;textarea</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control is-invalid"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"validationTextarea"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"Required example textarea"</span>{" "}
        <span className="na">required</span>
        <span className="nt">&gt;&lt;/textarea&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"invalid-feedback"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}Please enter a message in the textarea.{"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">
          "custom-control custom-checkbox mb-3"
        </span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"checkbox"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-control-input"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"customControlValidation1"</span>{" "}
        <span className="na">required</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-control-label"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"customControlValidation1"</span>
        <span className="nt">&gt;</span>Check this custom checkbox<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"invalid-feedback"</span>
        <span className="nt">&gt;</span>Example invalid feedback text<span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-control custom-radio"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"radio"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-control-input"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"customControlValidation2"</span>{" "}
        <span className="na">name=</span>
        <span className="s">"radio-stacked"</span>{" "}
        <span className="na">required</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-control-label"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"customControlValidation2"</span>
        <span className="nt">&gt;</span>Toggle this custom radio<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-control custom-radio mb-3"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"radio"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-control-input"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"customControlValidation3"</span>{" "}
        <span className="na">name=</span>
        <span className="s">"radio-stacked"</span>{" "}
        <span className="na">required</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-control-label"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"customControlValidation3"</span>
        <span className="nt">&gt;</span>Or toggle this other custom
        radio<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"invalid-feedback"</span>
        <span className="nt">&gt;</span>More example invalid feedback
        text<span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-group"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;select</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-select"</span>{" "}
        <span className="na">required</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;option</span>{" "}
        <span className="na">value=</span>
        <span className="s">""</span>
        <span className="nt">&gt;</span>Open this select menu<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;option</span>{" "}
        <span className="na">value=</span>
        <span className="s">"1"</span>
        <span className="nt">
          &gt;
        </span>One<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;option</span>{" "}
        <span className="na">value=</span>
        <span className="s">"2"</span>
        <span className="nt">
          &gt;
        </span>Two<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;option</span>{" "}
        <span className="na">value=</span>
        <span className="s">"3"</span>
        <span className="nt">
          &gt;
        </span>Three<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/select&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"invalid-feedback"</span>
        <span className="nt">&gt;</span>Example invalid custom select
        feedback<span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-file"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"file"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-file-input"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"validatedCustomFile"</span>{" "}
        <span className="na">required</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-file-label"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"validatedCustomFile"</span>
        <span className="nt">&gt;</span>Choose file...<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"invalid-feedback"</span>
        <span className="nt">&gt;</span>Example invalid custom file
        feedback<span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        <span className="nt">&lt;/form&gt;</span>
      </code>
    </pre>
  </figure>
  <h3 id="tooltips">
    <span className="bd-content-title">
      Tooltips<a
        className="anchorjs-link "
        href="#tooltips"
        aria-label="Anchor"
        data-anchorjs-icon="#"
        style={{ paddingLeft: "0.375em" }}
      />
    </span>
  </h3>
  <p>
    If your form layout allows it, you can swap the{" "}
    <code className="highlighter-rouge">
      .{"{"}valid|invalid{"}"}-feedback
    </code>{" "}
    classes for{" "}
    <code className="highlighter-rouge">
      .{"{"}valid|invalid{"}"}-tooltip
    </code>{" "}
    classes to display validation feedback in a styled tooltip. Be
    sure to have a parent with{" "}
    <code className="highlighter-rouge">position: relative</code> on
    it for tooltip positioning. In the example below, our column
    classes have this already, but your project may require an
    alternative setup.
  </p>
  <div className="bd-example">
    <form className="needs-validation" noValidate>
      <div className="form-row">
        <div className="col-md-4 mb-3">
          <label htmlFor="validationTooltip01">First name</label>
          <input
            type="text"
            className="form-control"
            id="validationTooltip01"
            placeholder="First name"
            defaultValue="Mark"
            required
          />
          <div className="valid-tooltip">Looks good!</div>
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="validationTooltip02">Last name</label>
          <input
            type="text"
            className="form-control"
            id="validationTooltip02"
            placeholder="Last name"
            defaultValue="Otto"
            required
          />
          <div className="valid-tooltip">Looks good!</div>
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="validationTooltipUsername">Username</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span
                className="input-group-text"
                id="validationTooltipUsernamePrepend"
              >
                @
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              id="validationTooltipUsername"
              placeholder="Username"
              aria-describedby="validationTooltipUsernamePrepend"
              required
              autoComplete="off"
              style={{
                backgroundImage: 'url("data:image/png',
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "scroll",
                backgroundSize: "16px 18px",
                backgroundPosition: "98% 50%"
              }}
            />
            <div className="invalid-tooltip">
              Please choose a unique and valid username.
            </div>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="col-md-6 mb-3">
          <label htmlFor="validationTooltip03">City</label>
          <input
            type="text"
            className="form-control"
            id="validationTooltip03"
            placeholder="City"
            required
          />
          <div className="invalid-tooltip">
            Please provide a valid city.
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <label htmlFor="validationTooltip04">State</label>
          <input
            type="text"
            className="form-control"
            id="validationTooltip04"
            placeholder="State"
            required
          />
          <div className="invalid-tooltip">
            Please provide a valid state.
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <label htmlFor="validationTooltip05">Zip</label>
          <input
            type="text"
            className="form-control"
            id="validationTooltip05"
            placeholder="Zip"
            required
          />
          <div className="invalid-tooltip">
            Please provide a valid zip.
          </div>
        </div>
      </div>
      <button className="btn btn-primary" type="submit">
        Submit form
      </button>
    </form>
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;form</span>{" "}
        <span className="na">class=</span>
        <span className="s">"needs-validation"</span>{" "}
        <span className="na">novalidate</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-row"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-md-4 mb-3"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"validationTooltip01"</span>
        <span className="nt">&gt;</span>First name<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"validationTooltip01"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"First name"</span>{" "}
        <span className="na">value=</span>
        <span className="s">"Mark"</span>{" "}
        <span className="na">required</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"valid-tooltip"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"        "}Looks good!{"\n"}
        {"      "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-md-4 mb-3"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"validationTooltip02"</span>
        <span className="nt">&gt;</span>Last name<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"validationTooltip02"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"Last name"</span>{" "}
        <span className="na">value=</span>
        <span className="s">"Otto"</span>{" "}
        <span className="na">required</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"valid-tooltip"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"        "}Looks good!{"\n"}
        {"      "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-md-4 mb-3"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"validationTooltipUsername"</span>
        <span className="nt">
          &gt;
        </span>Username<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"input-group"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"        "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"input-group-prepend"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"          "}
        <span className="nt">&lt;span</span>{" "}
        <span className="na">class=</span>
        <span className="s">"input-group-text"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"validationTooltipUsernamePrepend"</span>
        <span className="nt">
          &gt;
        </span>@<span className="nt">&lt;/span&gt;</span>
        {"\n"}
        {"        "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"        "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"validationTooltipUsername"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"Username"</span>{" "}
        <span className="na">aria-describedby=</span>
        <span className="s">
          "validationTooltipUsernamePrepend"
        </span>{" "}
        <span className="na">required</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"        "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"invalid-tooltip"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"          "}Please choose a unique and valid username.{"\n"}
        {"        "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-row"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-md-6 mb-3"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"validationTooltip03"</span>
        <span className="nt">
          &gt;
        </span>City<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"validationTooltip03"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"City"</span>{" "}
        <span className="na">required</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"invalid-tooltip"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"        "}Please provide a valid city.{"\n"}
        {"      "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-md-3 mb-3"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"validationTooltip04"</span>
        <span className="nt">
          &gt;
        </span>State<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"validationTooltip04"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"State"</span>{" "}
        <span className="na">required</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"invalid-tooltip"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"        "}Please provide a valid state.{"\n"}
        {"      "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"col-md-3 mb-3"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"validationTooltip05"</span>
        <span className="nt">
          &gt;
        </span>Zip<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"text"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"form-control"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"validationTooltip05"</span>{" "}
        <span className="na">placeholder=</span>
        <span className="s">"Zip"</span>{" "}
        <span className="na">required</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"      "}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"invalid-tooltip"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"        "}Please provide a valid zip.{"\n"}
        {"      "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"    "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;button</span>{" "}
        <span className="na">class=</span>
        <span className="s">"btn btn-primary"</span>{" "}
        <span className="na">type=</span>
        <span className="s">"submit"</span>
        <span className="nt">&gt;</span>Submit form<span className="nt">&lt;/button&gt;</span>
        {"\n"}
        <span className="nt">&lt;/form&gt;</span>
      </code>
    </pre>
  </figure>
  <h2 id="custom-forms">
    <span className="bd-content-title">
      Custom forms<a
        className="anchorjs-link "
        href="#custom-forms"
        aria-label="Anchor"
        data-anchorjs-icon="#"
        style={{ paddingLeft: "0.375em" }}
      />
    </span>
  </h2>
  <p>
    For even more customization and cross browser consistency, use our
    completely custom form elements to replace the browser defaults.
    They’re built on top of semantic and accessible markup, so they’re
    solid replacements for any default form control.
  </p>
  <h3 id="checkboxes-and-radios-1">
    <span className="bd-content-title">
      Checkboxes and radios<a
        className="anchorjs-link "
        href="#checkboxes-and-radios-1"
        aria-label="Anchor"
        data-anchorjs-icon="#"
        style={{ paddingLeft: "0.375em" }}
      />
    </span>
  </h3>
  <p>
    Each checkbox and radio{" "}
    <code className="highlighter-rouge">&lt;input&gt;</code> and{" "}
    <code className="highlighter-rouge">&lt;label&gt;</code> pairing
    is wrapped in a{" "}
    <code className="highlighter-rouge">&lt;div&gt;</code> to create
    our custom control. Structurally, this is the same approach as our
    default <code className="highlighter-rouge">.form-check</code>.
  </p>
  <p>
    We use the sibling selector (<code className="highlighter-rouge">
      ~
    </code>) for all our{" "}
    <code className="highlighter-rouge">&lt;input&gt;</code>{" "}
    states—like <code className="highlighter-rouge">:checked</code>—to
    properly style our custom form indicator. When combined with the{" "}
    <code className="highlighter-rouge">
      .custom-control-label
    </code>{" "}
    class, we can also style the text for each item based on the{" "}
    <code className="highlighter-rouge">&lt;input&gt;</code>’s state.
  </p>
  <p>
    We hide the default{" "}
    <code className="highlighter-rouge">&lt;input&gt;</code> with{" "}
    <code className="highlighter-rouge">opacity</code> and use the{" "}
    <code className="highlighter-rouge">
      .custom-control-label
    </code>{" "}
    to build a new custom form indicator in its place with{" "}
    <code className="highlighter-rouge">::before</code> and{" "}
    <code className="highlighter-rouge">::after</code>. Unfortunately
    we can’t build a custom one from just the{" "}
    <code className="highlighter-rouge">&lt;input&gt;</code> because
    CSS’s <code className="highlighter-rouge">content</code> doesn’t
    work on that element.
  </p>
  <p>
    In the checked states, we use{" "}
    <strong>base64 embedded SVG icons</strong> from{" "}
    <a href="https://github.com/iconic/open-iconic">Open Iconic</a>.
    This provides us the best control for styling and positioning
    across browsers and devices.
  </p>
  <h4 id="checkboxes">
    <span className="bd-content-title">
      Checkboxes<a
        className="anchorjs-link "
        href="#checkboxes"
        aria-label="Anchor"
        data-anchorjs-icon="#"
        style={{ paddingLeft: "0.375em" }}
      />
    </span>
  </h4>
  <div className="bd-example">
    <div className="custom-control custom-checkbox">
      <input
        type="checkbox"
        className="custom-control-input"
        id="customCheck1"
      />
      <label className="custom-control-label" htmlFor="customCheck1">
        Check this custom checkbox
      </label>
    </div>
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-control custom-checkbox"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"checkbox"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-control-input"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"customCheck1"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-control-label"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"customCheck1"</span>
        <span className="nt">&gt;</span>Check this custom checkbox<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        <span className="nt">&lt;/div&gt;</span>
      </code>
    </pre>
  </figure>
  <p>
    Custom checkboxes can also utilize the{" "}
    <code className="highlighter-rouge">:indeterminate</code> pseudo
    class when manually set via JavaScript (there is no available HTML
    attribute for specifying it).
  </p>
  <div className="bd-example bd-example-indeterminate">
    <div className="custom-control custom-checkbox">
      <input
        type="checkbox"
        className="custom-control-input"
        id="customCheck2"
      />
      <label className="custom-control-label" htmlFor="customCheck2">
        Check this custom checkbox
      </label>
    </div>
  </div>
  <p>If you’re using jQuery, something like this should suffice:</p>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-js" data-lang="js">
        <span className="nx">$</span>
        <span className="p">(</span>
        <span className="s1">'.your-checkbox'</span>
        <span className="p">).</span>
        <span className="nx">prop</span>
        <span className="p">(</span>
        <span className="s1">'indeterminate'</span>
        <span className="p">,</span> <span className="kc">true</span>
        <span className="p">)</span>
      </code>
    </pre>
  </figure>
  <h4 id="radios">
    <span className="bd-content-title">
      Radios<a
        className="anchorjs-link "
        href="#radios"
        aria-label="Anchor"
        data-anchorjs-icon="#"
        style={{ paddingLeft: "0.375em" }}
      />
    </span>
  </h4>
  <div className="bd-example">
    <div className="custom-control custom-radio">
      <input
        type="radio"
        id="customRadio1"
        name="customRadio"
        className="custom-control-input"
      />
      <label className="custom-control-label" htmlFor="customRadio1">
        Toggle this custom radio
      </label>
    </div>
    <div className="custom-control custom-radio">
      <input
        type="radio"
        id="customRadio2"
        name="customRadio"
        className="custom-control-input"
      />
      <label className="custom-control-label" htmlFor="customRadio2">
        Or toggle this other custom radio
      </label>
    </div>
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-control custom-radio"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"radio"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"customRadio1"</span>{" "}
        <span className="na">name=</span>
        <span className="s">"customRadio"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-control-input"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-control-label"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"customRadio1"</span>
        <span className="nt">&gt;</span>Toggle this custom radio<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-control custom-radio"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"radio"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"customRadio2"</span>{" "}
        <span className="na">name=</span>
        <span className="s">"customRadio"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-control-input"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-control-label"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"customRadio2"</span>
        <span className="nt">&gt;</span>Or toggle this other custom
        radio<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        <span className="nt">&lt;/div&gt;</span>
      </code>
    </pre>
  </figure>
  <h4 id="inline-1">
    <span className="bd-content-title">
      Inline<a
        className="anchorjs-link "
        href="#inline-1"
        aria-label="Anchor"
        data-anchorjs-icon="#"
        style={{ paddingLeft: "0.375em" }}
      />
    </span>
  </h4>
  <div className="bd-example">
    <div className="custom-control custom-radio custom-control-inline">
      <input
        type="radio"
        id="customRadioInline1"
        name="customRadioInline1"
        className="custom-control-input"
      />
      <label
        className="custom-control-label"
        htmlFor="customRadioInline1"
      >
        Toggle this custom radio
      </label>
    </div>
    <div className="custom-control custom-radio custom-control-inline">
      <input
        type="radio"
        id="customRadioInline2"
        name="customRadioInline1"
        className="custom-control-input"
      />
      <label
        className="custom-control-label"
        htmlFor="customRadioInline2"
      >
        Or toggle this other custom radio
      </label>
    </div>
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">
          "custom-control custom-radio custom-control-inline"
        </span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"radio"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"customRadioInline1"</span>{" "}
        <span className="na">name=</span>
        <span className="s">"customRadioInline1"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-control-input"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-control-label"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"customRadioInline1"</span>
        <span className="nt">&gt;</span>Toggle this custom radio<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">
          "custom-control custom-radio custom-control-inline"
        </span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"radio"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"customRadioInline2"</span>{" "}
        <span className="na">name=</span>
        <span className="s">"customRadioInline1"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-control-input"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-control-label"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"customRadioInline2"</span>
        <span className="nt">&gt;</span>Or toggle this other custom
        radio<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        <span className="nt">&lt;/div&gt;</span>
      </code>
    </pre>
  </figure>
  <h4 id="disabled">
    <span className="bd-content-title">
      Disabled<a
        className="anchorjs-link "
        href="#disabled"
        aria-label="Anchor"
        data-anchorjs-icon="#"
        style={{ paddingLeft: "0.375em" }}
      />
    </span>
  </h4>
  <p>
    Custom checkboxes and radios can also be disabled. Add the{" "}
    <code className="highlighter-rouge">disabled</code> boolean
    attribute to the{" "}
    <code className="highlighter-rouge">&lt;input&gt;</code> and the
    custom indicator and label description will be automatically
    styled.
  </p>
  <div className="bd-example">
    <div className="custom-control custom-checkbox">
      <input
        type="checkbox"
        className="custom-control-input"
        id="customCheckDisabled1"
        disabled
      />
      <label
        className="custom-control-label"
        htmlFor="customCheckDisabled1"
      >
        Check this custom checkbox
      </label>
    </div>
    <div className="custom-control custom-radio">
      <input
        type="radio"
        name="radioDisabled"
        id="customRadioDisabled2"
        className="custom-control-input"
        disabled
      />
      <label
        className="custom-control-label"
        htmlFor="customRadioDisabled2"
      >
        Toggle this custom radio
      </label>
    </div>
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-control custom-checkbox"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"checkbox"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-control-input"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"customCheckDisabled1"</span>{" "}
        <span className="na">disabled</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-control-label"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"customCheckDisabled1"</span>
        <span className="nt">&gt;</span>Check this custom checkbox<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        {"\n"}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-control custom-radio"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"radio"</span>{" "}
        <span className="na">name=</span>
        <span className="s">"radioDisabled"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"customRadioDisabled2"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-control-input"</span>{" "}
        <span className="na">disabled</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-control-label"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"customRadioDisabled2"</span>
        <span className="nt">&gt;</span>Toggle this custom radio<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        <span className="nt">&lt;/div&gt;</span>
      </code>
    </pre>
  </figure>
  <h3 id="switches">
    <span className="bd-content-title">
      Switches<a
        className="anchorjs-link "
        href="#switches"
        aria-label="Anchor"
        data-anchorjs-icon="#"
        style={{ paddingLeft: "0.375em" }}
      />
    </span>
  </h3>
  <p>
    A switch has the markup of a custom checkbox but uses the{" "}
    <code className="highlighter-rouge">.custom-switch</code> class to
    render a toggle switch. Switches also support the{" "}
    <code className="highlighter-rouge">disabled</code> attribute.
  </p>
  <div className="bd-example">
    <div className="custom-control custom-switch">
      <input
        type="checkbox"
        className="custom-control-input"
        id="customSwitch1"
      />
      <label className="custom-control-label" htmlFor="customSwitch1">
        Toggle this switch element
      </label>
    </div>
    <div className="custom-control custom-switch">
      <input
        type="checkbox"
        className="custom-control-input"
        disabled
        id="customSwitch2"
      />
      <label className="custom-control-label" htmlFor="customSwitch2">
        Disabled switch element
      </label>
    </div>
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-control custom-switch"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"checkbox"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-control-input"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"customSwitch1"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-control-label"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"customSwitch1"</span>
        <span className="nt">&gt;</span>Toggle this switch element<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        <span className="nt">&lt;/div&gt;</span>
        {"\n"}
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-control custom-switch"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"checkbox"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-control-input"</span>{" "}
        <span className="na">disabled</span>{" "}
        <span className="na">id=</span>
        <span className="s">"customSwitch2"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-control-label"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"customSwitch2"</span>
        <span className="nt">&gt;</span>Disabled switch element<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        <span className="nt">&lt;/div&gt;</span>
      </code>
    </pre>
  </figure>
  <h3 id="select-menu">
    <span className="bd-content-title">
      Select menu<a
        className="anchorjs-link "
        href="#select-menu"
        aria-label="Anchor"
        data-anchorjs-icon="#"
        style={{ paddingLeft: "0.375em" }}
      />
    </span>
  </h3>
  <p>
    Custom <code className="highlighter-rouge">
      &lt;select&gt;
    </code>{" "}
    menus need only a custom class,{" "}
    <code className="highlighter-rouge">.custom-select</code> to
    trigger the custom styles. Custom styles are limited to the{" "}
    <code className="highlighter-rouge">&lt;select&gt;</code>’s
    initial appearance and cannot modify the{" "}
    <code className="highlighter-rouge">&lt;option&gt;</code>s due to
    browser limitations.
  </p>
  <div className="bd-example">
    <select className="custom-select">
      <option selected>Open this select menu</option>
      <option value={1}>One</option>
      <option value={2}>Two</option>
      <option value={3}>Three</option>
    </select>
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;select</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-select"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;option</span>{" "}
        <span className="na">selected</span>
        <span className="nt">&gt;</span>Open this select menu<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;option</span>{" "}
        <span className="na">value=</span>
        <span className="s">"1"</span>
        <span className="nt">
          &gt;
        </span>One<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;option</span>{" "}
        <span className="na">value=</span>
        <span className="s">"2"</span>
        <span className="nt">
          &gt;
        </span>Two<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;option</span>{" "}
        <span className="na">value=</span>
        <span className="s">"3"</span>
        <span className="nt">
          &gt;
        </span>Three<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        <span className="nt">&lt;/select&gt;</span>
      </code>
    </pre>
  </figure>
  <p>
    You may also choose from small and large custom selects to match
    our similarly sized text inputs.
  </p>
  <div className="bd-example">
    <select className="custom-select custom-select-lg mb-3">
      <option selected>Open this select menu</option>
      <option value={1}>One</option>
      <option value={2}>Two</option>
      <option value={3}>Three</option>
    </select>
    <select className="custom-select custom-select-sm">
      <option selected>Open this select menu</option>
      <option value={1}>One</option>
      <option value={2}>Two</option>
      <option value={3}>Three</option>
    </select>
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;select</span>{" "}
        <span className="na">class=</span>
        <span className="s">
          "custom-select custom-select-lg mb-3"
        </span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;option</span>{" "}
        <span className="na">selected</span>
        <span className="nt">&gt;</span>Open this select menu<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;option</span>{" "}
        <span className="na">value=</span>
        <span className="s">"1"</span>
        <span className="nt">
          &gt;
        </span>One<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;option</span>{" "}
        <span className="na">value=</span>
        <span className="s">"2"</span>
        <span className="nt">
          &gt;
        </span>Two<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;option</span>{" "}
        <span className="na">value=</span>
        <span className="s">"3"</span>
        <span className="nt">
          &gt;
        </span>Three<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        <span className="nt">&lt;/select&gt;</span>
        {"\n"}
        {"\n"}
        <span className="nt">&lt;select</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-select custom-select-sm"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;option</span>{" "}
        <span className="na">selected</span>
        <span className="nt">&gt;</span>Open this select menu<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;option</span>{" "}
        <span className="na">value=</span>
        <span className="s">"1"</span>
        <span className="nt">
          &gt;
        </span>One<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;option</span>{" "}
        <span className="na">value=</span>
        <span className="s">"2"</span>
        <span className="nt">
          &gt;
        </span>Two<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;option</span>{" "}
        <span className="na">value=</span>
        <span className="s">"3"</span>
        <span className="nt">
          &gt;
        </span>Three<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        <span className="nt">&lt;/select&gt;</span>
      </code>
    </pre>
  </figure>
  <p>
    The <code className="highlighter-rouge">multiple</code> attribute
    is also supported:
  </p>
  <div className="bd-example">
    <select className="custom-select" multiple>
      <option selected>Open this select menu</option>
      <option value={1}>One</option>
      <option value={2}>Two</option>
      <option value={3}>Three</option>
    </select>
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;select</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-select"</span>{" "}
        <span className="na">multiple</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;option</span>{" "}
        <span className="na">selected</span>
        <span className="nt">&gt;</span>Open this select menu<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;option</span>{" "}
        <span className="na">value=</span>
        <span className="s">"1"</span>
        <span className="nt">
          &gt;
        </span>One<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;option</span>{" "}
        <span className="na">value=</span>
        <span className="s">"2"</span>
        <span className="nt">
          &gt;
        </span>Two<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;option</span>{" "}
        <span className="na">value=</span>
        <span className="s">"3"</span>
        <span className="nt">
          &gt;
        </span>Three<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        <span className="nt">&lt;/select&gt;</span>
      </code>
    </pre>
  </figure>
  <p>
    As is the <code className="highlighter-rouge">size</code>{" "}
    attribute:
  </p>
  <div className="bd-example">
    <select className="custom-select" size={3}>
      <option selected>Open this select menu</option>
      <option value={1}>One</option>
      <option value={2}>Two</option>
      <option value={3}>Three</option>
    </select>
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;select</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-select"</span>{" "}
        <span className="na">size=</span>
        <span className="s">"3"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;option</span>{" "}
        <span className="na">selected</span>
        <span className="nt">&gt;</span>Open this select menu<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;option</span>{" "}
        <span className="na">value=</span>
        <span className="s">"1"</span>
        <span className="nt">
          &gt;
        </span>One<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;option</span>{" "}
        <span className="na">value=</span>
        <span className="s">"2"</span>
        <span className="nt">
          &gt;
        </span>Two<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;option</span>{" "}
        <span className="na">value=</span>
        <span className="s">"3"</span>
        <span className="nt">
          &gt;
        </span>Three<span className="nt">&lt;/option&gt;</span>
        {"\n"}
        <span className="nt">&lt;/select&gt;</span>
      </code>
    </pre>
  </figure>
  <h3 id="range">
    <span className="bd-content-title">
      Range<a
        className="anchorjs-link "
        href="#range"
        aria-label="Anchor"
        data-anchorjs-icon="#"
        style={{ paddingLeft: "0.375em" }}
      />
    </span>
  </h3>
  <p>
    Create custom{" "}
    <code className="highlighter-rouge">
      &lt;input type="range"&gt;
    </code>{" "}
    controls with{" "}
    <code className="highlighter-rouge">.custom-range</code>. The
    track (the background) and thumb (the value) are both styled to
    appear the same across browsers. As only IE and Firefox support
    “filling” their track from the left or right of the thumb as a
    means to visually indicate progress, we do not currently support
    it.
  </p>
  <div className="bd-example">
    <label htmlFor="customRange1">Example range</label>
    <input type="range" className="custom-range" id="customRange1" />
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"customRange1"</span>
        <span className="nt">&gt;</span>Example range<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"range"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-range"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"customRange1"</span>
        <span className="nt">&gt;</span>
      </code>
    </pre>
  </figure>
  <p>
    Range inputs have implicit values for{" "}
    <code className="highlighter-rouge">min</code> and{" "}
    <code className="highlighter-rouge">max</code>—<code className="highlighter-rouge">0</code>{" "}
    and <code className="highlighter-rouge">100</code>, respectively.
    You may specify new values for those using the{" "}
    <code className="highlighter-rouge">min</code> and{" "}
    <code className="highlighter-rouge">max</code> attributes.
  </p>
  <div className="bd-example">
    <label htmlFor="customRange2">Example range</label>
    <input
      type="range"
      className="custom-range"
      min={0}
      max={5}
      id="customRange2"
    />
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"customRange2"</span>
        <span className="nt">&gt;</span>Example range<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"range"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-range"</span>{" "}
        <span className="na">min=</span>
        <span className="s">"0"</span>{" "}
        <span className="na">max=</span>
        <span className="s">"5"</span> <span className="na">id=</span>
        <span className="s">"customRange2"</span>
        <span className="nt">&gt;</span>
      </code>
    </pre>
  </figure>
  <p>
    By default, range inputs “snap” to integer values. To change this,
    you can specify a <code className="highlighter-rouge">
      step
    </code>{" "}
    value. In the example below, we double the number of steps by
    using <code className="highlighter-rouge">step="0.5"</code>.
  </p>
  <div className="bd-example">
    <label htmlFor="customRange3">Example range</label>
    <input
      type="range"
      className="custom-range"
      min={0}
      max={5}
      step="0.5"
      id="customRange3"
    />
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;label</span>{" "}
        <span className="na">for=</span>
        <span className="s">"customRange3"</span>
        <span className="nt">&gt;</span>Example range<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"range"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-range"</span>{" "}
        <span className="na">min=</span>
        <span className="s">"0"</span>{" "}
        <span className="na">max=</span>
        <span className="s">"5"</span>{" "}
        <span className="na">step=</span>
        <span className="s">"0.5"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"customRange3"</span>
        <span className="nt">&gt;</span>
      </code>
    </pre>
  </figure>
  <h3 id="file-browser">
    <span className="bd-content-title">
      File browser<a
        className="anchorjs-link "
        href="#file-browser"
        aria-label="Anchor"
        data-anchorjs-icon="#"
        style={{ paddingLeft: "0.375em" }}
      />
    </span>
  </h3>
  <div className="bd-callout bd-callout-info">
    <p>
      The recommended plugin to animate custom file input:{" "}
      <a href="https://www.npmjs.com/package/bs-custom-file-input">
        bs-custom-file-input
      </a>, that’s what we are using currently here in our docs.
    </p>
  </div>
  <p>
    The file input is the most gnarly of the bunch and requires
    additional JavaScript if you’d like to hook them up with
    functional <em>Choose file…</em> and selected file name text.
  </p>
  <div className="bd-example">
    <div className="custom-file">
      <input
        type="file"
        className="custom-file-input"
        id="customFile"
      />
      <label className="custom-file-label" htmlFor="customFile">
        Choose file
      </label>
    </div>
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-file"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"file"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-file-input"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"customFile"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-file-label"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"customFile"</span>
        <span className="nt">&gt;</span>Choose file<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        <span className="nt">&lt;/div&gt;</span>
      </code>
    </pre>
  </figure>
  <p>
    We hide the default file{" "}
    <code className="highlighter-rouge">&lt;input&gt;</code> via{" "}
    <code className="highlighter-rouge">opacity</code> and instead
    style the <code className="highlighter-rouge">
      &lt;label&gt;
    </code>. The button is generated and positioned with{" "}
    <code className="highlighter-rouge">::after</code>. Lastly, we
    declare a <code className="highlighter-rouge">width</code> and{" "}
    <code className="highlighter-rouge">height</code> on the{" "}
    <code className="highlighter-rouge">&lt;input&gt;</code> for
    proper spacing for surrounding content.
  </p>
  <h4 id="translating-or-customizing-the-strings-with-scss">
    <span className="bd-content-title">
      Translating or customizing the strings with SCSS<a
        className="anchorjs-link "
        href="#translating-or-customizing-the-strings-with-scss"
        aria-label="Anchor"
        data-anchorjs-icon="#"
        style={{ paddingLeft: "0.375em" }}
      />
    </span>
  </h4>
  <p>
    The{" "}
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:lang">
      <code className="highlighter-rouge">:lang()</code> pseudo-class
    </a>{" "}
    is used to allow for translation of the “Browse” text into other
    languages. Override or add entries to the{" "}
    <code className="highlighter-rouge">$custom-file-text</code> Sass
    variable with the relevant{" "}
    <a href="https://en.wikipedia.org/wiki/IETF_language_tag">
      language tag
    </a>{" "}
    and localized strings. The English strings can be customized the
    same way. For example, here’s how one might add a Spanish
    translation (Spanish’s language code is{" "}
    <code className="highlighter-rouge">es</code>):
  </p>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-scss" data-lang="scss">
        <span className="nv">$custom-file-text</span>
        <span className="p">:</span> <span className="p">(</span>
        {"\n"}
        {"  "}
        <span className="n">en</span>
        <span className="o">:</span>{" "}
        <span className="s2">"Browse"</span>
        <span className="o">,</span>
        {"\n"}
        {"  "}
        <span className="n">es</span>
        <span className="o">:</span>{" "}
        <span className="s2">"Elegir"</span>
        {"\n"}
        <span className="p">);</span>
      </code>
    </pre>
  </figure>
  <p>
    Here’s <code className="highlighter-rouge">lang(es)</code> in
    action on the custom file input for a Spanish translation:
  </p>
  <div className="bd-example">
    <div className="custom-file">
      <input
        type="file"
        className="custom-file-input"
        id="customFileLang"
        lang="es"
      />
      <label className="custom-file-label" htmlFor="customFileLang">
        Seleccionar Archivo
      </label>
    </div>
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-file"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"file"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-file-input"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"customFileLang"</span>{" "}
        <span className="na">lang=</span>
        <span className="s">"es"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-file-label"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"customFileLang"</span>
        <span className="nt">&gt;</span>Seleccionar Archivo<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        <span className="nt">&lt;/div&gt;</span>
      </code>
    </pre>
  </figure>
  <p>
    You’ll need to set the language of your document (or subtree
    thereof) correctly in order for the correct text to be shown. This
    can be done using{" "}
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang">
      the <code className="highlighter-rouge">lang</code> attribute
    </a>{" "}
    on the{" "}
    <code className="highlighter-rouge">
      <span className="nt">&lt;html&gt;</span>
    </code>{" "}
    element or the{" "}
    <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.12">
      <code className="highlighter-rouge">Content-Language</code> HTTP
      header
    </a>, among other methods.
  </p>
  <h4 id="translating-or-customizing-the-strings-with-html">
    <span className="bd-content-title">
      Translating or customizing the strings with HTML<a
        className="anchorjs-link "
        href="#translating-or-customizing-the-strings-with-html"
        aria-label="Anchor"
        data-anchorjs-icon="#"
        style={{ paddingLeft: "0.375em" }}
      />
    </span>
  </h4>
  <p>
    Bootstrap also provides a way to translate the “Browse” text in
    HTML with the{" "}
    <code className="highlighter-rouge">data-browse</code> attribute
    which can be added to the custom input label (example in Dutch):
  </p>
  <div className="bd-example">
    <div className="custom-file">
      <input
        type="file"
        className="custom-file-input"
        id="customFileLangHTML"
      />
      <label
        className="custom-file-label"
        htmlFor="customFileLangHTML"
        data-browse="Bestand kiezen"
      >
        Voeg je document toe
      </label>
    </div>
  </div>
  <div className="bd-clipboard">
    <button
      type="button"
      className="btn-clipboard"
      title
      data-original-title="Copy to clipboard"
    >
      Copy
    </button>
  </div>
  <figure className="highlight">
    <pre>
      <code className="language-html" data-lang="html">
        <span className="nt">&lt;div</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-file"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;input</span>{" "}
        <span className="na">type=</span>
        <span className="s">"file"</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-file-input"</span>{" "}
        <span className="na">id=</span>
        <span className="s">"customFileLangHTML"</span>
        <span className="nt">&gt;</span>
        {"\n"}
        {"  "}
        <span className="nt">&lt;label</span>{" "}
        <span className="na">class=</span>
        <span className="s">"custom-file-label"</span>{" "}
        <span className="na">for=</span>
        <span className="s">"customFileLangHTML"</span>{" "}
        <span className="na">data-browse=</span>
        <span className="s">"Bestand kiezen"</span>
        <span className="nt">&gt;</span>Voeg je document toe<span className="nt">&lt;/label&gt;</span>
        {"\n"}
        <span className="nt">&lt;/div&gt;</span>
      </code>
    </pre>
  </figure>
</main>
    );
  }
}