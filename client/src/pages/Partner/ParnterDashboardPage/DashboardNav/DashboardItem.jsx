import React from 'react';
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

export default DashboardItem;
