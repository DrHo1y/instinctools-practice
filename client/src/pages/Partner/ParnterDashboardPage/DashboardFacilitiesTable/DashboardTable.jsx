import React from 'react';
import PropTypes from 'prop-types';
import { DashboatdTable, DashboatdTableItem } from '../../../../styles/styledComponents';

const DashboardTable = (props) => {
  return (
    <DashboatdTable>
      {props.facilities.length === 0 ? (
        <div>No facilities</div>
      ) : (
        props.facilities.map((facility) => (
          <DashboatdTableItem key={facility._id}>{facility.title}</DashboatdTableItem>
        ))
      )}
    </DashboatdTable>
  );
};

DashboardTable.propTypes = {
  facilities: PropTypes.array,
};

export default DashboardTable;
