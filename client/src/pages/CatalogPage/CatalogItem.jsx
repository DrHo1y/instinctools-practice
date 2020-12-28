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
        <STitle>Title</STitle>
        <SLocation>Brest, Belarus</SLocation>
        <SText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit labore saepe fugiat culpa
          distinctio, illum expedita, eum recusandae at iusto debitis voluptates exercitationem
          quidem! Labore eos optio iste eaque hic?
        </SText>
      </SDescription>
      <SPanel>
        <SButton>View</SButton>
      </SPanel>
    </SItem>
  );
};
