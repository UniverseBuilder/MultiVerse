import { CSVReader } from "react-papaparse";

<CSVReader
  style={{
    dropArea: {
      borderRadius: 20,
    },
    dropFile: {
      width: "60%",
      height: 45,
      background: "#ccc",
    },
    removeButton: {
      color: "blue",
    },
    fileSizeInfo: {
      color: "#fff",
      backgroundColor: "#000",
      borderRadius: 3,
      lineHeight: 1,
      marginBottom: "0.3em",
      padding: "0 0.4em",
    },
    fileNameInfo: {
      borderRadius: 3,
      fontSize: 14,
      lineHeight: 1,
      padding: "0 0.4em",
    },
  }}
  config={{}}
  addRemoveButton
>
  <span>Drop CSV file here or click to upload.</span>
</CSVReader>;
