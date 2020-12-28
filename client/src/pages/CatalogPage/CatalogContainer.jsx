import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { CatalogPage } from './CatalogPage';

const CatalogContainer = (props) => {
  return <CatalogPage />;
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = {};
CatalogContainer.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(CatalogContainer);
