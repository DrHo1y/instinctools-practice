import React from 'react';
import { CatalogFilter } from './CatalogFilter';
import { CatalogContent } from './CatalogContent';
import { SCatalogContainer } from '../../styles/CatalogPageComponents';

export const CatalogPage = (props) => {
  return (
    <SCatalogContainer>
      <CatalogFilter />
      <CatalogContent />
    </SCatalogContainer>
  );
};
