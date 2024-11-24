"use client";
import React, { useState } from "react";

interface Tutorial {
  title: string;
  description: string;
  content: string;
}

const TutorialCard: React.FC<Tutorial> = ({ title, description, content }) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="mb-6 rounded-lg bg-white p-4 shadow-md">
      <h2 className="text-lg font-semibold text-primary">{title}</h2>
      <p className="mt-2 text-gray-700">{description}</p>
      {showContent && (
        <div className="mt-4 border-t pt-4 text-gray-600">
          <div
            className="prose prose-blue"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
      )}
      <button
        onClick={() => setShowContent(!showContent)}
        className="mt-4 rounded bg-primary px-4 py-2 text-white hover:bg-blue-600"
      >
        {showContent ? "Ver Menos" : "Leia Mais"}
      </button>
    </div>
  );
};

export default TutorialCard;
