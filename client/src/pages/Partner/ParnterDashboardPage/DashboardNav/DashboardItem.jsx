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
  img: PropTypes.string,
  text: PropTypes.string,
  path: PropTypes.string,
};

export default DashboardItem;
