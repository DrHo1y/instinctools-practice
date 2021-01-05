import React from 'react';
import PropTypes from 'prop-types';
import { DashboatdTable, DashboatdTableItem } from '../../../../styles/styledComponents';
import ErrorBoundary from '../../../../components/ErrorBoundary/ErrorBoundary';

const DashboardTable = (props) => {
  return (
    <ErrorBoundary>
      <DashboatdTable>
        {props.facilities.length === 0 ? (
          <div>No facilities</div>
        ) : (
          props.facilities.map((facility) => (
            <DashboatdTableItem key={facility._id}>{facility.title}</DashboatdTableItem>
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
