import React from "react";
import Base from "./base";
import Radium from "radium";

@Radium
class Quote extends Base {
  render() {
    return (
      <span style={[this.context.styles.components.quote, this.getStyles(), this.props.style]}>
        {this.props.children}
      </span>
    );
  }
}

Quote.propTypes = {
  children: React.PropTypes.node,
  style: React.PropTypes.object
};

Quote.contextTypes = {
  styles: React.PropTypes.object
};

export default Quote;
