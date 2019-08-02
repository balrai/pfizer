import React from "react";

export default ({ show }) => {
  return (
    <div className={show}>
      <div className="form-title">Interactive Q&A</div>
      <div className="info">
        All questions asked are anonymous and submission is subject to approval
        before listing.
      </div>
      <form id="forum-post-form" data-nc-comp="forum-post" data-post-form>
        <textarea
          name="content"
          id="input-area"
          placeholder="Enter your question here..."
        />
        <button className="button" id="submit-btn" type="submit">
          Submit >
        </button>
      </form>
    </div>
  );
};
