import { FAIcon } from "components/Icons";
import React from "react";

export const EditorBar = ({ handleClick }) => {
  return (
    <div className="rowFlex space-btw editorBar">
      <FAIcon className="fa fa-eraser p-2 m-2 bg-light" title="Erase" />
      <FAIcon className="fa fa-print p-2 m-2 bg-light" title="Print" />
      <FAIcon
        className="fa fa-signing p-2 m-2 bg-light"
        title="Remove Formatting"
      />
      <FAIcon className="fa fa-rotate-left p-2 m-2 bg-light" title="Undo" />
      <FAIcon className="fa fa-rotate-right p-2 m-2 bg-light" title="Redo" />
      <FAIcon
        className="fa fa-bold p-2 m-2 bg-light"
        title="Bold"
        onClick={() => handleClick("BOLD")}
      />
      <FAIcon className="fa fa-italic p-2 m-2 bg-light" title="Italics" />
      <FAIcon className="fa fa-underline p-2 m-2 bg-light" title="Underline" />
      <FAIcon
        className="fa fa-align-left p-2 m-2 bg-light"
        title="Left Align"
      />
      <FAIcon
        className="fa fa-align-center p-2 m-2 bg-light"
        title="Center Align"
      />
      <FAIcon
        className="fa fa-align-right p-2 m-2 bg-light"
        title="Right Align"
      />
      <FAIcon
        className="fa fa-align-justify p-2 m-2 bg-light"
        title="Justify"
      />
      <FAIcon
        className="fa fa-list-ol p-2 m-2 bg-light"
        title="Numbeered List"
      />
      <FAIcon className="fa fa-list-ul p-2 m-2 bg-light" title="Dotted List" />
      <FAIcon
        className="fa fa-quote-left p-2 m-2 bg-light"
        title="Quote Left"
      />
      <FAIcon
        className="fa fa-quote-right p-2 m-2 bg-light"
        title="Quote Right"
      />
      <FAIcon className="fa fa-indent p-2 m-2 bg-light" title="Indent Left" />
      <FAIcon className="fa fa-outdent p-2 m-2 bg-light" title="Indent Right" />
      <FAIcon
        className="fa fa-link p-2 m-2 bg-light"
        title="Hyperlink"
        onClick={() => handleClick("HYPER_LINK")}
      />
      <FAIcon className="fa fa-cut p-2 m-2 bg-light" title="Cut" />
      <FAIcon className="fa fa-copy p-2 m-2 bg-light" title="Copy" />
      <FAIcon className="fa fa-paste p-2 m-2 bg-light" title="Paste" />
    </div>
  );
};
