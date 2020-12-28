import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { DashboadrNavItem, Img } from '../../../../styles/styledComponents';

const DashboardItem = (props) => {
  const history = useHistory();
  return (
    <DashboadrNavItem onClick={() => history.push(props.path)}>
      <Img src={props.img} />
      {props.text}
    </DashboadrNavItem>
  );
};

DashboardItem.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default DashboardItem;
