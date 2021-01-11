import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

export const Facility = (props) => {
  const history = useHistory();
  return (
    <>
      <div style={{ width: '100%', height: 70, padding: '10px 5px' }}>
        <button
          style={{ height: 50, borderRadius: 5, padding: '0 10px' }}
          onClick={() => {
            history.push(`/add/rooms/${props.facility._id}`);
          }}
        >
          Add rooms to this hotel
        </button>
      </div>
      <h1>{props.facility.title}</h1>
      <h4>
        {props.facility.location.country.name} / {props.facility.location.city.name}
      </h4>
      <p>{props.facility.description}</p>
    </>
  );
};

Facility.propTypes = {
  id: PropTypes.string.isRequired,
  facility: PropTypes.object.isRequired,
};
