import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { searchCatalogLocationClickAction } from '../../redux/actions/catalogAction';

import MainPage from './MainPage';

const MainPageConteiner = (props) => {
  return <MainPage searchClick={props.searchCatalogLocationClickAction} app={props.app} />;
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
