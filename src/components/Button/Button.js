import React from 'react';
import Link from '../Link';

class Button extends Link {

  render() {
    const { to, children, ...props } = this.props;
    return <button onClick={Link.handleClick.bind(this)} {...props}>{children}</button>;
  }

}

export default Button;
