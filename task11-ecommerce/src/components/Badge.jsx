import PropTypes from "prop-types";

export default function Badge({ text, type }) {
  return <span className={`badge ${type}`}>{text}</span>;
}

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
