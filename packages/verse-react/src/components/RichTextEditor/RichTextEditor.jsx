import React, { useEffect, useRef, useState } from 'react';

import PropTypes from 'prop-types';

import { RenderHTML } from '../RenderHTML';
import { EditorBar } from './EditorBar';


function formatDoc(sCmd, sValue) {
  if (!sValue) {
    document.execCommand(sCmd);
  } else {document.execCommand(sCmd, false, sValue);}
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

  const handleClick = item => {
    const newEdits = [...edits];
    const value = prompt('Write the URL here', 'http://');
    switch (item) {
      case 'HYPER_LINK':
        newEdits.push(
          <a
            contentEditable="false"
            href={value}
            rel="noreferrer"
            suppressContentEditableWarning={true} target="_blank"
          >
            {value}
          </a>
        );
        break;
      case 'BOLD':
        formatDoc('bold');
        break;

      default:
        break;
    }
    setEdits(newEdits);
  };

  const onSave = () => {
    handleSave(editorRef.current.innerHTML);
    editorRef.current.innerHTML = '';
  };

  return (
    <div>
      <EditorBar handleClick={handleClick} />
      <div
        className="richTextEditor"
        contentEditable
        ref={editorRef}
        style={style}
        suppressContentEditableWarning={true}
      >
        {edits.map((edit, i) => (
          <span key={i} onMouseDown={e => e.preventDefault()}>
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
        className="btn btn-primary m-2 float-right"
        onClick={onSave}
        type="button"
      >
        {saveLabel}
      </button>
    </div>
  );
};

RichTextEditor.propTypes = {
  addons: PropTypes.node,
  content: PropTypes.node,
  handleSave: PropTypes.func,
  saveLabel: PropTypes.string,
  style: PropTypes.shape({}),
};

RichTextEditor.defaultProps = {
  addons: '',
  content: '',
  handleSave: () => null,
  saveLabel: 'Save',
  style: {},
};
