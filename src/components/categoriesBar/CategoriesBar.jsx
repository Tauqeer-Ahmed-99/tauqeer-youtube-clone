import { useState } from "react";
import { useDispatch } from "react-redux";
import "./_categoriesBar.scss";

import { keywords } from "./keywords";
import { getVideosBtCategory } from "../../redux/actions/videos.action";

const CategoriesBar = () => {
  const [activeKeyword, setActiveKeyword] = useState("All");

  const dispatch = useDispatch();



  const onClickHandler = (keyword) => {
    setActiveKeyword(keyword);
  dispatch(getVideosBtCategory(keyword))
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
