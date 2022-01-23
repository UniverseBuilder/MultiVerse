import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

export const Portal = ({ container, children }) => {
  const portalRoot = document.getElementById(container);
  return ReactDOM.createPortal(children, portalRoot);
};

Portal.propTypes = {
  children: PropTypes.node,
  container: PropTypes.string,
};

Portal.defaultProps = {
  children: '',
};
