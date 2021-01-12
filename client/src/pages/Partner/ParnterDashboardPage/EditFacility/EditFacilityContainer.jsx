import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { EditFacilityComponent } from './EditFacilityComponent';
import ErrorBoundary from '../../../../components/ErrorBoundary/ErrorBoundary';

import {
  getFacilityForPartnerLoadingAction,
  updateFacilityActionClick,
} from '../../../../redux/actions/partnerAction';
import { loadingCityAction } from '../../../../redux/actions/locationAction';

const EditFacilityContainer = (props) => {
  const [localLoader, setLocalLoader] = React.useState(true);
  const [editedFacility, setEditedFacility] = React.useState({});
  const {
    getFacilityForPartnerLoadingAction,
    loadingCityAction,
    parner,
    updateFacilityActionClick,
  } = props;
  const { facilities } = parner;
  const { id } = useParams;
  React.useEffect(() => {
    if (facilities.length === 0) {
      getFacilityForPartnerLoadingAction();
    }
    loadingCityAction('5fe0a3148cb0a95cf5cccc07');
  }, [getFacilityForPartnerLoadingAction, facilities, loadingCityAction]);
  const filterFacility = React.useCallback(() => {
    if (facilities.length !== 0) {
      const filterFacility = facilities.filter((facility) => facility._id !== id);
      setEditedFacility(filterFacility);
      if (filterFacility) {
        setLocalLoader(false);
      }
    }
  }, [facilities, id]);
  React.useEffect(() => {
    filterFacility();
  }, [filterFacility]);
  return (
    <ErrorBoundary>
      {!localLoader ? (
        <EditFacilityComponent
          facility={editedFacility}
          cities={props.location.city}
          updateClick={updateFacilityActionClick}
        />
      ) : (
        <p>Loading...</p>
      )}
    </ErrorBoundary>
  );
};

const mapStateToProps = (state) => ({ parner: state.parner, location: state.location });
const mapDispatchToProps = {
  getFacilityForPartnerLoadingAction,
  loadingCityAction,
  updateFacilityActionClick,
};

EditFacilityContainer.propTypes = {
  parner: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  getFacilityForPartnerLoadingAction: PropTypes.func.isRequired,
  loadingCityAction: PropTypes.func.isRequired,
  updateFacilityActionClick: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditFacilityContainer);
