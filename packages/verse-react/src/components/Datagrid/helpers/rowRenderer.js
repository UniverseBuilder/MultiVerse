import React from 'react';

/**
 * Default row renderer for Table.
 */
export default function rowRenderer({
  className,
  data,
  style,
  onRowClick,
  onRowDoubleClick,
  onRowMouseOut,
  onRowMouseOver,
  onRowRightClick,
}) {
  const a11yProps = {};

  if (
    onRowClick ||
    onRowDoubleClick ||
    onRowMouseOut ||
    onRowMouseOver ||
    onRowRightClick
  ) {
    a11yProps['aria-label'] = 'row';
    a11yProps.tabIndex = 0;

    if (onRowClick) {
      a11yProps.onClick = (index, rowData) => onRowClick(index, rowData);
    }
    if (onRowDoubleClick) {
      a11yProps.onDoubleClick = (index, rowData) =>
        onRowDoubleClick(index, rowData);
    }
    if (onRowMouseOut) {
      a11yProps.onMouseOut = (index, rowData) => onRowMouseOut(index, rowData);
    }
    if (onRowMouseOver) {
      a11yProps.onMouseOver = (index, rowData) =>
        onRowMouseOver(index, rowData);
    }
    if (onRowRightClick) {
      a11yProps.onContextMenu = (index, rowData) =>
        onRowRightClick({ index, rowData });
    }
  }

  return (
    <For each="rowData" of={data} index="idx">
      <tr>
        <td
          {...a11yProps}
          aria-rowindex={idx + 1}
          className={className}
          key={idx}
          role="row"
          style={style}
        >
          {rowData[idx]}
        </td>
      </tr>
    </For>
  );
}
