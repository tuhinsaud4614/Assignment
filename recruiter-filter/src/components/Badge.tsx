import React from "react";

export default function Badge(props) {
    const {value, onRemove} = props;
  return (
    <span className="inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-blue-800 bg-blue-100 rounded">
      {value}
      <button
        type="button"
        className="inline-flex items-center p-0.5 ml-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300"
        onClick={() => onRemove(value)}
        aria-label="Remove"
      >
        <svg
          aria-hidden="true"
          className="w-3.5 h-3.5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        <span className="sr-only">Remove badge</span>
      </button>
    </span>
  );
}
