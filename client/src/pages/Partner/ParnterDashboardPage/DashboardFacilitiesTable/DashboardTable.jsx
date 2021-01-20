import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Button, DashboatdTable, DashboatdTableItem } from '../../../../styles/styledComponents';
import ErrorBoundary from '../../../../components/ErrorBoundary/ErrorBoundary';

const DashboardTable = (props) => {
  const history = useHistory();
  const { deleteFacilityById } = props;
  return (
    <ErrorBoundary>
      <DashboatdTable>
        {props.facilities.length === 0 ? (
          <div>No facilities</div>
        ) : (
          props.facilities.map((facility) => (
            <DashboatdTableItem key={facility._id}>
              {facility.title}
              <Button
                style={{ float: 'right', marginLeft: 5, backgroundColor: 'red', color: 'white' }}
                onClick={() => {
                  const isSure = confirm('You are sure?');
                  isSure ? deleteFacilityById(facility._id) : alert('OK');
                }}
              >
                Delete
              </Button>
              <Button
                style={{ float: 'right', marginLeft: 5 }}
                onClick={() => history.push(`/dashboard/edit/${facility._id}`)}
              >
                Edit facility
              </Button>
              <Button
                style={{ float: 'right' }}
                onClick={() => history.push(`/facility/${facility._id}`)}
              >
                View facility
              </Button>
            </DashboatdTableItem>
          ))
        )}
      </DashboatdTable>
    </ErrorBoundary>
  );
};

DashboardTable.propTypes = {
  facilities: PropTypes.array.isRequired,
};

export default DashboardTable;
