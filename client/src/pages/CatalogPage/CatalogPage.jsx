import React from 'react';
import { CatalogFilter } from './CatalogFilter';
import { CatalogContent } from './CatalogContent';
import { SCatalogContainer } from '../../styles/CatalogPageComponents';

export const CatalogPage = (props) => {
  return (
    <SCatalogContainer>
      <CatalogFilter />
      {!props.loading ? (
        props.catalog.facilities !== undefined ? (
          <CatalogContent catalog={props.catalog} />
        ) : (
          <p>Hotel not found</p>
        )
      ) : (
        <div>Loading</div>
      )}
    </SCatalogContainer>
  );
};
