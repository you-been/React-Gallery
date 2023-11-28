import React, { useState, useEffect } from "react";
import axios from "axios";
import GalleryItems from "./GalleryItems";
import GalleryInput from "./GalleryInput";
import galleryStyle from "../styles/galleryStyle.module.css";

const Gallery = () => {
  const [text, setText] = useState("");
  console.log(text);
  const APP_KEY = "40939953-aa1e07c796126298de888fec9";
  const URL = `https://pixabay.com/api/?key=${APP_KEY}&q=${text}&image_type=photo&pretty=true&lang=ko`;
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get(URL);
      setData(res.data.hits);
      console.log("성공", res.data.hits);
    } catch (err) {
      console.log("오류", err);
    }
  };

  return (
    <div>
      <GalleryInput text={text} setText={setText} getData={getData} />
      <div className={galleryStyle.galleryWrapper}>
        {data.map((image) => (
          <GalleryItems key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
