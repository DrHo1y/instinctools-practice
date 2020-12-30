import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { CatalogPage } from './CatalogPage';

import { loadCatalogPage } from '../../redux/actions/catalogAction';

const CatalogContainer = (props) => {
  const { loadCatalogPage } = props;
  const { history } = props;
  useEffect(() => {
    if (history.action === 'POP') {
      loadCatalogPage();
    }
  }, [history, loadCatalogPage]);
  return <CatalogPage loading={props.app.loading} catalog={props.catalog} />;
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  loadCatalogPage,
};
CatalogContainer.propTypes = {
  app: PropTypes.object.isRequired,
  catalog: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CatalogContainer);
