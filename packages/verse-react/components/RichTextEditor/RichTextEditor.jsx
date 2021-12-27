import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { TextArea } from "components/Form/State/TextArea";
import { RenderHTML } from "components/RenderHTML";
import { EditorBar } from "./EditorBar/EditorBar";
import "./RichTextEditor.scss";
import { Button } from "components/Button/Button";

function formatDoc(sCmd, sValue) {
  if (!sValue) {
    document.execCommand(sCmd);
  } else document.execCommand(sCmd, false, sValue);
}

export const RichTextEditor = ({
  handleSave,
  saveLabel,
  addons,
  content,
  style,
}) => {
  const editorRef = useRef([]);
  const [edits, setEdits] = useState([]);

  useEffect(() => {
    editorRef.current.innerHTML = content;
    // setEdits([content]);
  }, [content]);

  const handleClick = (item) => {
    const newEdits = [...edits];
    switch (item) {
      case "HYPER_LINK":
        const value = prompt("Write the URL here", "http://");
        newEdits.push(
          <a
            href={value}
            contentEditable="false"
            target="_blank"
            suppressContentEditableWarning={true}
          >
            {value}
          </a>
        );
        break;
      case "BOLD":
        formatDoc("bold");
        break;

      default:
        break;
    }
    setEdits(newEdits);
  };

  const onSave = () => {
    handleSave(editorRef.current.innerHTML);
    editorRef.current.innerHTML = "";
  };

  return (
    <div>
      <EditorBar handleClick={handleClick} />
      <div
        className="richTextEditor"
        contentEditable
        ref={editorRef}
        suppressContentEditableWarning={true}
        style={style}
      >
        {edits.map((edit, i) => (
          <span key={i} onMouseDown={(e) => e.preventDefault()}>
            <Choose>
              <When condition={edit.props}>{edit}</When>
              <Otherwise>
                <RenderHTML content={edit} />
              </Otherwise>
            </Choose>
          </span>
        ))}
      </div>
      <div className="float-left">{addons}</div>
      <button
        type="button"
        className="btn btn-primary m-2 float-right"
        onClick={onSave}
      >
        {saveLabel}
      </button>
    </div>
  );
};

RichTextEditor.propTypes = {
  handleSave: PropTypes.func,
  saveLabel: PropTypes.string,
  addons: PropTypes.node,
  content: PropTypes.node,
  style: PropTypes.shape({}),
};

RichTextEditor.defaultProps = {
  handleSave: () => null,
  saveLabel: "Save",
  addons: "",
  content: "",
  style: {},
};
