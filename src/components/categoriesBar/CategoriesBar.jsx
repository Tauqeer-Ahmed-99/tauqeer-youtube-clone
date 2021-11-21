import { useState } from "react";
import "./_categoriesBar.scss";

const keywords = [
  "All",
  "React Js",
  "javascript",
  "computer applications",
  "comedies",
  "scene",
  "history",
  "conversation",
  "street food",
  "podcasts",
  "recently uploaded",
  "watched",
  "new to you",
];

const CategoriesBar = () => {
  const [activeKeyword, setActiveKeyword] = useState("All");

  const onClickHandler = (keyword) => {
    setActiveKeyword(keyword);
  };

  return (
    <div className="categories_bar">
      {keywords.map((keyword, i) => (
        <span
          key={i}
          onClick={onClickHandler.bind(null, keyword)}
          className={activeKeyword === keyword ? "active" : ""}
        >
          {keyword}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;
