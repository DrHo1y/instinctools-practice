import React from 'react';
import {
  SItem,
  SImage,
  SDescription,
  STitle,
  SLocation,
  SText,
  SPanel,
  SButton,
} from '../../styles/CatalogPageComponents';

export const CatalogItem = (props) => {
  return (
    <SItem>
      <SImage src={'https://cf.bstatic.com/images/hotel/max1024x768/180/180201665.jpg'} />
      <SDescription>
        <STitle>{props.title}</STitle>
        <SLocation>
          {props.city}, {props.country}
        </SLocation>
        <SText>{props.description}</SText>
      </SDescription>
      <SPanel>
        <SButton>View</SButton>
      </SPanel>
    </SItem>
  );
};
