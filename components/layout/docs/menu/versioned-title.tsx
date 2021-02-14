import React, { useContext } from 'react';
import { ReactNodeLike } from 'prop-types';
import { has, map } from 'lodash';
import MenuContext from '@/components/layout/docs/menu/menu-context';
import { menuVersionBranch } from '@/tools/menu/generate-menu-structure-from-files';

const mapVersions = (section, collection) => {
  return (
    <div style={{ display: 'inline-block', float: 'right', paddingRight: 4 }}>
      <select>
        {map(Object.entries(collection), ([, item]) => {
          const { meta, ...versions } = item;
          return map(Object.entries(versions), ([version]) => {
            // todo: on change - dispatch new selection
            return <option key={version} label={version} />;
          });
        })}
      </select>
    </div>
  );
};

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
      {mapVersions(section, docs[section])}
    </span>
  );
};

export default VersionedTitle;
