import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { CatalogPage } from './CatalogPage';

const CatalogContainer = (props) => {
  return <CatalogPage loading={props.app.loading} catalog={props.catalog} />;
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = {};
CatalogContainer.propTypes = {
  app: PropTypes.object.isRequired,
  catalog: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CatalogContainer);
