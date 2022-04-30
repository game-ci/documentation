import { MenuNode } from '@/tools/menu/menu-node';
import { MenuSegment } from '@/tools/menu/menu-segment';
import React, { useContext } from 'react';
import { ReactNodeLike } from 'prop-types';
import { map } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import MenuContext from '@site/src/components/pages/docs/menu/menu-context';
import { selectedVersionsSelector, updateSelection } from '@/logic/versions/selected-version-slice';

import styles from './versioned-title.module.scss';

const mapVersions = (section, collection: MenuNode, selectedOption) => {
  const dispatch = useDispatch();

  const onChange = (event) => dispatch(updateSelection({ section, selection: event.target.value }));
  const noPropagation = (event) => event.stopPropagation();

  return (
    <div style={{ display: 'inline-block', float: 'right', paddingRight: 4 }}>
      <select
        value={selectedOption}
        className={styles.versionSelect}
        onChange={onChange}
        onClick={noPropagation}
      >
        {map(Object.entries(collection), ([segment, node]) => {
          if (!MenuSegment.isVersionContainer(segment)) return null;

          const { meta, ...versions } = node;
          return map(Object.entries(versions), ([version]) => {
            return <option key={version} value={version} label={version} />;
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
  const selected = useSelector(selectedVersionsSelector);
  const { docs } = menuStructure;

  if (!MenuNode.hasVersionContainer(docs[section])) {
    return title;
  }

  return (
    <span>
      <span>{title}</span>
      {mapVersions(section, docs[section], selected[section])}
    </span>
  );
};

export default VersionedTitle;
