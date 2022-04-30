import PropTypes from 'prop-types';

const children = PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]);

export default {
  children,
};
