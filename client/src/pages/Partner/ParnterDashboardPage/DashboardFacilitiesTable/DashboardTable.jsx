import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { DashboatdTable, DashboatdTableItem } from '../../../../styles/styledComponents';
import ErrorBoundary from '../../../../components/ErrorBoundary/ErrorBoundary';

const DashboardTable = (props) => {
  const history = useHistory();
  return (
    <ErrorBoundary>
      <DashboatdTable>
        {props.facilities.length === 0 ? (
          <div>No facilities</div>
        ) : (
          props.facilities.map((facility) => (
            <DashboatdTableItem
              key={facility._id}
              onClick={() => history.push(`/facility/${facility._id}`)}
            >
              {facility.title}
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
