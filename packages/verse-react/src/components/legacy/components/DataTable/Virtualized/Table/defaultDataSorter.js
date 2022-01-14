/**
 * Default cell renderer that displays an attribute as a simple string
 * You should override the column's cellRenderer if your data is some other type of object.
 */
function format(data, format) {
  console.log(data, format);
  let value = data || "";
  switch (format) {
    case "string":
      value = String(data);
      break;
    case "number":
      value = Number(data);
      break;
    default:
      value = String(data);
      break;
  }
  return value;
}

export default function defaultCellRenderer({
  columnData,
  sortBy,
  sortDirection,
  column,
}) {
  const arrayToSort = JSON.parse(JSON.stringify(columnData));
  switch (column?.format) {
    case "number":
      if (sortDirection === "DESC") {
        arrayToSort.sort((a, b) => {
          if (a[sortBy] > b[sortBy]) {
            return 1;
          } else {
            return -1;
          }
        });
      } else {
        arrayToSort.sort((a, b) => {
          if (a[sortBy] < b[sortBy]) {
            return 1;
          } else {
            return -1;
          }
        });
      }
      break;

    default:
      if (sortDirection === "DESC") {
        arrayToSort.sort((a, b) =>
          b[sortBy]?.toString().localeCompare(a[sortBy].toString(), "en", {
            sensitivity: "base",
            numeric: true,
          })
        );
      } else {
        arrayToSort.sort((a, b) => {
          return a[sortBy]
            ?.toString()
            .localeCompare(b[sortBy].toString(), "en", {
              sensitivity: "base",
              numeric: true,
            });
        });
      }
      break;
  }

  return arrayToSort;
}
