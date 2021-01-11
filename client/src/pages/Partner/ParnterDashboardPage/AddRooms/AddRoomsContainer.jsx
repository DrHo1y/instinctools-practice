import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AddRoomsForm } from './AddRoomsForm';

import { addRoomsToFacilityActionClick } from '../../../../redux/actions/partnerAction';

function AddRoomsContainer(props) {
  const { id } = useParams();
  return <AddRoomsForm id={id} addRoomsClick={props.addRoomsToFacilityActionClick} />;
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  addRoomsToFacilityActionClick,
};

AddRoomsContainer.propTypes = {
  addRoomsToFacilityActionClick: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRoomsContainer);
