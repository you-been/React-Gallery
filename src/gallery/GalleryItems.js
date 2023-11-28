import React from "react";
import itemStyle from "../styles/itemStyle.module.css";

const GalleryItems = ({ image }) => {
  const { webformatURL, tags, views, type, user } = image;
  return (
    <div className={itemStyle.itemWrapper}>
      <div className={itemStyle.innerWrapper}>
        <p># {user}</p>
        <img src={webformatURL} alt={tags} style={{ width: 200 }} />
        <figcaption>
          <p>태그 : {tags}</p>
          <p>뷰어 : {views}</p>
          <p>종류 : {type}</p>
        </figcaption>
      </div>
    </div>
  );
};

export default GalleryItems;
