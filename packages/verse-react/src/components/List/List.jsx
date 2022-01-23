import React from "react";

import PropTypes from "prop-types";

import { RenderHTML } from "components/RenderHTML";

export const List = ({ contents, bodyKey, wrapperClass, listClass }) => {
  console.log;
  return (
    <ul className={`list-unstyled ${wrapperClass}`}>
      <For each="content" index="idx" of={contents}>
        <li className={`media ${listClass}`} key={idx}>
          <If condition={content.image}>
            <img
              alt={`${content.title}`}
              className="mr-3 zoom"
              height={180}
              src={`/images/${content.image}`}
              width={250}
            />
          </If>
          <div className="media-body">
            <h5 className="mt-0 mb-1">
              {content.title}{" "}
              <span className="fontS14 font500">
                <i>{content.pubDate}</i>
              </span>
            </h5>
            <p>
              <RenderHTML content={content[bodyKey]}></RenderHTML>
            </p>
          </div>
        </li>
      </For>
    </ul>
  );
};

List.propTypes = {
  bodyKey: PropTypes.string,
  contents: PropTypes.arrayOf(PropTypes.shape({})),
  listClass: PropTypes.string,
  wrapperClass: PropTypes.string,
};

List.defaultProps = {
  bodykey: "body",
  contents: [],
  listClass: "",
  wrapperClass: "",
};
