import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { searchCatalogLocationClickAction } from '../../redux/actions/catalogAction';

import MainPage from './MainPage';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

const MainPageConteiner = (props) => {
  return (
    <ErrorBoundary>
      <MainPage searchClick={props.searchCatalogLocationClickAction} app={props.app} />
    </ErrorBoundary>
  );
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  searchCatalogLocationClickAction,
};

MainPageConteiner.propTypes = {
  app: PropTypes.object.isRequired,
  searchCatalogLocationClickAction: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPageConteiner);
