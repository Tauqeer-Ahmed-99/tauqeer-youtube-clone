import { useState } from "react";
import "./_categoriesBar.scss";

import { keywords } from "./keywords";

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
          onClick={() => onClickHandler(keyword)}
          className={activeKeyword === keyword ? "active" : ""}
        >
          {keyword}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;
