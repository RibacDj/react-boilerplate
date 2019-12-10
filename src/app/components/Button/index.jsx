import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './index.scss';

const Button = ({ href, onClick, children, className }) => {
  const classes = cx({
    button: true,
    className
  });

  return href ? (
    <a href={href} className={classes}>
      {children}
    </a>
  ) : (
    <button type='button' className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any,
  className: PropTypes.string
};

export default Button;
