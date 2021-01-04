import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { CatalogPage } from './CatalogPage';

import { searchCatalogLocationClickAction } from '../../redux/actions/catalogAction';

const CatalogContainer = (props) => {
  const { searchCatalogLocationClickAction } = props;
  const { history } = props;
  const { where } = useParams();
  useEffect(() => {
    if (history.action === 'POP') {
      searchCatalogLocationClickAction(where);
    }
  }, [history, searchCatalogLocationClickAction, where]);
  return <CatalogPage loading={props.app.loading} catalog={props.catalog} />;
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  searchCatalogLocationClickAction,
};
CatalogContainer.propTypes = {
  app: PropTypes.object.isRequired,
  catalog: PropTypes.object.isRequired,
  searchCatalogLocationClickAction: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CatalogContainer);
