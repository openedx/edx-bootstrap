import React from 'react';
import _ from 'lodash';

export default class MeasuredItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ..._.zipObject(Object.keys(this.props.styles))
    }
    this.item = React.createRef();
  }

  componentDidMount() {
    const computedStyle = getComputedStyle(this.item.current);
    const styleNames = Object.keys(this.props.styles);

    this.setState({
      ..._.zipObject(styleNames, _.map(styleNames, (styleName) => computedStyle.getPropertyValue(styleName) )),
    });
  }

  render() {
    const child = React.cloneElement(this.props.renderItem(this.props, this.state), { ref: this.item });
    return (
      <React.Fragment>
        {this.props.before ? this.props.renderValues(this.state) : null}
        {child}
        {this.props.after ? this.props.renderValues(this.state) : null}
      </React.Fragment>
    );
  }
}