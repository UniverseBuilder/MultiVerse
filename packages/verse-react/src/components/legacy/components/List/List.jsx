import React from "react";
import PropTypes from "prop-types";
import { RenderHTML } from "components/RenderHTML";

export const List = ({ contents, bodyKey, wrapperClass, listClass }) => {
  console.log;
  return (
    <ul className={`list-unstyled ${wrapperClass}`}>
      <For each="content" of={contents} index="idx">
        <li className={`media ${listClass}`} key={idx}>
          <If condition={content.image}>
            <img
              className="mr-3 zoom"
              src={`/images/${content.image}`}
              alt={`${content.title}`}
              width={250}
              height={180}
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
  contents: PropTypes.arrayOf(PropTypes.shape({})),
  bodyKey: PropTypes.string,
  wrapperClass: PropTypes.string,
  listClass: PropTypes.string,
};

List.defaultProps = {
  contents: [],
  bodykey: "body",
  wrapperClass: "",
  listClass: "",
};
