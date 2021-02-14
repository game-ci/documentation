import React, { useContext } from 'react';
import { ReactNodeLike } from 'prop-types';
import { has, map } from 'lodash';
import MenuContext from '@/components/layout/docs/menu/menu-context';
import { menuVersionBranch } from '@/tools/menu/generate-menu-structure-from-files';

const mapVersions = (collection) => (
  <div style={{ display: 'inline-block', float: 'right', paddingRight: 4 }}>
    <select>
      {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
      {map(Object.entries(collection), ([key, item]) => {
        return <option key={key} label="v1" />;
      })}
    </select>
  </div>
);

interface Props {
  section: string;
  title: ReactNodeLike;
}

const VersionedTitle = ({ section, title }: Props): any => {
  const { menuStructure } = useContext(MenuContext);
  const { docs } = menuStructure;

  if (!has(docs[section], menuVersionBranch)) {
    return title;
  }

  return (
    <span>
      <span>{title}</span>
      {mapVersions(docs[section])}
    </span>
  );
};

export default VersionedTitle;
