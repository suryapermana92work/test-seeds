import React from "react";

interface INewsCard {
  item: any;
}

function NewsCard({ item }: INewsCard) {
  const { image, headline, summary, url } = item ?? {};

  const onReadMore = () => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div className="relative m-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg" src={image} alt="" />
      <div className="p-5">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {headline}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {summary}
        </p>
        <div className="h-20" />
        <div
          onClick={onReadMore}
          className="absolute bottom-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
