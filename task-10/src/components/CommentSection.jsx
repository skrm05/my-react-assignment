import { useState } from "react";

export default function CommentSection() {
  // Part E: Event Delegation [cite: 270]
  // Dynamic list of comments [cite: 272]
  const [comments, setComments] = useState([
    { id: 1, text: "Great article!", likes: 0 },
    { id: 2, text: "Thanks for sharing.", likes: 2 },
  ]);

  // Use single event handler for all like and delete buttons [cite: 275, 276]
  const handleContainerClick = (e) => {
    const action = e.target.dataset.action;
    if (!action) return; // If clicked element is not a button with an action, do nothing

    const commentId = parseInt(e.target.dataset.id);

    if (action === "like") {
      setComments(
        comments.map((c) =>
          c.id === commentId ? { ...c, likes: c.likes + 1 } : c,
        ),
      );
    } else if (action === "delete") {
      setComments(comments.filter((c) => c.id !== commentId));
    }
  };

  return (
    <div className="card">
      <h2>Part E: Event Delegation</h2>
      <p>
        <em>
          (Single click handler attached to the parent `ul` handles all child
          buttons)
        </em>
      </p>

      {/* Attach ONE event listener to the parent container */}
      <ul
        onClick={handleContainerClick}
        style={{ listStyle: "none", padding: 0 }}
      >
        {comments.map((comment) => (
          <li key={comment.id} className="comment">
            <span>
              {comment.text} - ({comment.likes} Likes)
            </span>
            <div>
              {/* Data attributes store the specific info needed by the delegated handler */}
              <button data-action="like" data-id={comment.id}>
                Like
              </button>{" "}
              {/* [cite: 273] */}
              <button data-action="delete" data-id={comment.id}>
                Delete
              </button>{" "}
              {/* [cite: 274] */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
