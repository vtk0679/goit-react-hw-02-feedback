import PropTypes from "prop-types";

import ucFirst from "../utils/ucFirst";

import s from "./FeedbackOptions.module.css";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map((key) => (
    <button
      className={s.button}
      key={"button" + key}
      onClick={(e) => onLeaveFeedback(e.target.value)}
      value={key}
    >
      {ucFirst(key)}
    </button>
  ));
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
