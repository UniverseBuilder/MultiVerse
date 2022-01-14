/** @flow */
import * as React from "react";
import SortIndicator from "./SortIndicator";
import type { HeaderRendererParams } from "./types";

/**
 * Default table header renderer.
 */
export default function defaultHeaderRenderer({
  dataKey,
  label,
  sortBy,
  sortDirection,
  columnData,
  style,
}: HeaderRendererParams) {
  const showSortIndicator = sortBy === dataKey;

  let children = [
    <span
      className="ReactVirtualized__Table__headerTruncatedText"
      key="label"
      title={
        columnData.legend
          ? columnData.legend
          : typeof label === "string"
          ? label
          : null
      }
    >
      {label}
    </span>,
  ];
  let subColumns = [];

  if (showSortIndicator && !columnData.subHeading) {
    children.push(
      <SortIndicator key="SortIndicator" sortDirection={sortDirection} />
    );
  }

  if (columnData.subHeading) {
    children.push(<br />);
    columnData.subHeading.map((c, i) => {
      subColumns.push(
        <span
          className="ReactVirtualized__Table__headerTruncatedText"
          key={`sub-label${i}`}
          title={typeof c.heading === "string" ? c.heading : null}
          style={{ flex: `1 1 ${c.width}` }}
        >
          {c.heading}
        </span>
      );
    });
  }

  return (
    <React.Fragment>
      {children}
      <div style={{ display: "flex" }}>{subColumns}</div>
    </React.Fragment>
  );
}
