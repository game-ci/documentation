import React, { useContext } from 'react';
import { ReactNodeLike } from 'prop-types';
import { has, map } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import MenuContext from '@/components/layout/docs/menu/menu-context';
import { menuVersionBranch } from '@/tools/menu/generate-menu-structure-from-files';
import { selectedVersionsSelector, updateSelection } from '@/logic/versions/selected-version-slice';

const mapVersions = (section, collection, selectedOption) => {
  const dispatch = useDispatch();

  const onChange = (event) => dispatch(updateSelection({ section, selection: event.target.value }));
  const noPropagation = (event) => event.stopPropagation();

  return (
    <div style={{ display: 'inline-block', float: 'right', paddingRight: 4 }}>
      <select
        value={selectedOption}
        className="versionSelect"
        onChange={onChange}
        onClick={noPropagation}
      >
        {map(Object.entries(collection), ([key, item]) => {
          if (key !== menuVersionBranch) return null;

          const { meta, ...versions } = item;
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

  if (!has(docs[section], menuVersionBranch)) {
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
