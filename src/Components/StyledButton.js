import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = ({ href, children }) => {
  return <a href={href}>{children}</a>;
};

const StyledButton = styled(Button)`
  color: palevioletred;
  font-weight: bold;
`;

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.any
};
export default StyledButton;