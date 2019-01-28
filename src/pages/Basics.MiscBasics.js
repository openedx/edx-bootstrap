import React from 'react';


export default function MiscBasics() {
  return (
    <div>
      <h4>Badges</h4>
      <p>
        <span className="badge mr-1 badge-primary">Primary</span>
        <span className="badge mr-1 badge-secondary">Secondary</span>
        <span className="badge mr-1 badge-success">Success</span>
        <span className="badge mr-1 badge-danger">Danger</span>
        <span className="badge mr-1 badge-warning">Warning</span>
        <span className="badge mr-1 badge-info">Info</span>
        <span className="badge mr-1 badge-light">Light</span>
        <span className="badge mr-1 badge-dark">Dark</span>
      </p>


      <h4>Inline Text Decorations</h4>
      <p><span className="badge mr-1 badge-success">OK</span> Use the <span className="text-muted">text-muted class to mute text</span>.</p>
      <p><span className="badge mr-1 badge-success">OK</span> Use the mark tag to <mark>highlight</mark> text.</p>
      <p><span className="badge mr-1 badge-success">OK</span> Use strikethroughs for <s>content that is no longer accurate</s> or <del>has been deleted.</del></p>
      <p><span className="badge mr-1 badge-warning">Avoid</span> <u> Avoid using underlines for static elements</u></p>
      <p><span className="badge mr-1 badge-warning">Use Sparingly</span> <small>Fine print text that is 80% smaller than normal.</small></p>
      <p><span className="badge mr-1 badge-success">OK</span> <strong>This line rendered as bold text.</strong></p>
      <p><span className="badge mr-1 badge-warning">Avoid</span><em>Italicized text is difficult to read and hard to localize.</em></p>
    </div>
  );
}