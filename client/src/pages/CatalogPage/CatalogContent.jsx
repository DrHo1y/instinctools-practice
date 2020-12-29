import React from 'react';
import { CatalogItem } from './CatalogItem';
import { SContentWrapper, SHeaderWrapper, SContent } from '../../styles/CatalogPageComponents';

export const CatalogContent = (props) => {
  return (
    <SContentWrapper>
      <SHeaderWrapper>{props.catalog.facilities.length} hotel found</SHeaderWrapper>
      <SContent>
        {props.catalog.facilities.map((facility) => (
          <CatalogItem
            key={facility._id}
            title={facility.title}
            description={facility.description}
            country={facility.location.country.name}
            city={facility.location.city.name}
          />
        ))}
      </SContent>
    </SContentWrapper>
  );
};
