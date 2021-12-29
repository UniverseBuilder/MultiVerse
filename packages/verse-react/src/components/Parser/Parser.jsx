import React from "react";
import PropTypes from "prop-types";
import { TextArea } from "components/Form/State/TextArea";
import { useForm } from "hooks/useForm";

export const Parser = ({ onParse, model, inModel, outModel }) => {
  const form = useForm(model);

  return (
    <div className="rowFlex flex-center">
      <div className="nFlex-45">
        <TextArea
          type="textarea"
          labelName="Paste Content"
          placeholder="Content"
          model={inModel}
          style={{ height: "calc(100vh - 105px)" }}
        />
      </div>
      <div className="nFlex-10 columnFlex">
        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={() => onParse(form)}
        >
          Parse
        </button>
        <button
          type="button"
          className="btn btn-success m-2"
          onClick={() => navigator.clipboard.writeText(form.in)}
        >
          Copy In
        </button>
        <button
          type="button"
          className="btn btn-info m-2"
          onClick={() => navigator.clipboard.writeText(form.out)}
        >
          Copy Out
        </button>
      </div>
      <div className="nFlex-45">
        <TextArea
          type="textarea"
          labelName="Output"
          placeholder="Output"
          model={outModel}
          style={{ height: "calc(100vh - 105px)" }}
          readonly
        />
      </div>
    </div>
  );
};

Parser.propTypes = {
  onParse: PropTypes.func,
  model: PropTypes.string,
  inModel: PropTypes.string,
  outModel: PropTypes.string,
};

Parser.defaultProps = {
  onParse: () => {},
  model: "parser",
  inModel: "parser.in",
  outModel: "parser.out",
};
