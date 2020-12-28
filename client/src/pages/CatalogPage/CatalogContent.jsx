import React from 'react';
import { CatalogItem } from './CatalogItem';
import { SContentWrapper, SHeaderWrapper, SContent } from '../../styles/CatalogPageComponents';

export const CatalogContent = (props) => {
  return (
    <SContentWrapper>
      <SHeaderWrapper>Header</SHeaderWrapper>
      <SContent>
        <CatalogItem />
        <CatalogItem />
      </SContent>
    </SContentWrapper>
  );
};
