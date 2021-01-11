import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getFacilityForPartnerLoadingAction } from '../../../../redux/actions/partnerAction';
import { Facility } from './Facility';
import { Spinner } from '../../../../components/Loader/Spinner';

function FacilityContainer(props) {
  const { id } = useParams();
  const { getFacilityForPartnerLoadingAction, parner } = props;
  const [facility, setFacility] = useState({});

  useEffect(() => {
    if (parner.facilities.length === 0) {
      getFacilityForPartnerLoadingAction();
    }
    if (parner.facilities.length !== 0) {
      const filterFacility = parner.facilities.filter((facility) => facility._id === id);
      setFacility(filterFacility[0]);
    }
  }, [getFacilityForPartnerLoadingAction, parner, setFacility, id]);

  if (!facility.location) {
    return <Spinner />;
  } else {
    return <Facility id={id} facility={facility} />;
  }
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  getFacilityForPartnerLoadingAction,
};

FacilityContainer.propTypes = {
  parner: PropTypes.object.isRequired,
  getFacilityForPartnerLoadingAction: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FacilityContainer);
