import PropTypes from "prop-types";

import Notification from "../Notification";
import ucFirst from "../utils/ucFirst";

import s from "../Statistics/Statistics.module.css";

export default function Statistics(props) {
  return (
    <>
      {props.total > 0 ? (
        Object.keys(props).map((key) => (
          <span key={key} className={s[key]}>
            {key !== "positivePercentage"
              ? ucFirst(key) + ": " + props[key] + " "
              : "Positive feedback: " + props[key] + "%"}
          </span>
        ))
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
