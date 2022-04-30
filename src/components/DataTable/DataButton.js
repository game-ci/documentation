// Clone of the `Edit this Page` button
import React from "react";

const DataButton = ({text, editUrl}) => {
  return (
    <div className="margin-vert--xl">
      <div className="row">
        <div className="col">
          <a
            href={editUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg
              fill="currentColor"
              height="1.2em"
              width="1.2em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 40 40"
              style={{marginRight: "0.3em", verticalAlign: "sub"}}
            >
              <g>
                <path d="m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"></path>
              </g>
            </svg>

            {text}
          </a>
        </div>
      </div>
    </div>
  );
};

export default DataButton;
