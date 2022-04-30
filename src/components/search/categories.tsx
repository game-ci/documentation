import React from 'react';
import { RefinementList, Panel } from 'react-instantsearch-dom';
import type RefinementListProvided from 'react-instantsearch-dom';
import { connectRefinementList } from 'react-instantsearch/connectors';

const Categories = ({ attribute, items }: RefinementListProvided) => (
  <Panel header="Categories">
    {items?.length >= 1 ? (
      <RefinementList attribute={attribute} />
    ) : (
      <div className="ais-RefinementList-item">No results.</div>
    )}
  </Panel>
);

export default connectRefinementList(Categories);
