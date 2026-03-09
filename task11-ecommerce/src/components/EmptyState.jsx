import PropTypes from "prop-types";

export default function EmptyState({ message }) {
  // Reusable empty state component [cite: 324]
  return (
    <div className="empty-state">
      <h2>📭 Nothing to see here</h2>
      <p>{message}</p>
    </div>
  );
}

EmptyState.propTypes = {
  message: PropTypes.string.isRequired,
};
