import React, { useState } from 'react';
import {useNotification} from "@site/src/core/hooks/use-notification";
import {SimpleAuthCheck} from "@site/src/components/auth/safe-auth-check";

interface Props {
  changeSet: string;
}

const ShowAndCopyChangeSetHashButton = ({ changeSet }: Props) => {
  const [hoverHash, setHoverHash] = useState<boolean>(false);
  // const clipboard = useClipboard();
  const notify = useNotification();

  // const onCopyChangeSet = async (event) => {
  //   event.stopPropagation();
  //   await clipboard.write(changeSet, () => notify.info({ message: 'Change hash was copied' }));
  // };

  return (
    <SimpleAuthCheck fallback={<span />} requiredClaims={{ admin: true }}>
      <span style={{ opacity: hoverHash ? 0.9 : 0.5 }}>
        <span style={{ opacity: 0.6 }}>
          <button
            type="button"
            style={{
              border: 0,
              outline: 0,
              cursor: 'pointer',
              color: hoverHash ? 'blue' : 'inherit',
            }}
            onMouseEnter={() => setHoverHash(true)}
            onMouseLeave={() => setHoverHash(false)}
            // onClick={(event) => onCopyChangeSet(event)}
          >
            {changeSet}
          </button>
        </span>
      </span>
    </SimpleAuthCheck>
  );
};

export default ShowAndCopyChangeSetHashButton;
