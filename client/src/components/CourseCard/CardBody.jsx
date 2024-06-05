import React from "react";

function CourseInfo({ course }) {
  const { title, description, author, language, level, createdAt } = course;
  const date = new Date(createdAt);
  return (
    <>
      <h5>{title}</h5>
      <p className="text-truncate mb-4 ">{description}</p>

      <div className="mb-2 text-muted small">
        <strong>Author:</strong> {author}
      </div>
      <div className="d-flex justify-content-between mt-1 mb-0 text-muted small ">
        <span>{language.toUpperCase()}</span>
        <span>{level?.toUpperCase()}</span>
        <span>{date.toLocaleDateString()}</span>
      </div>
    </>
  );
}

export default CourseInfo;
