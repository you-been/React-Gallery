import React, { useState, useEffect } from "react";
import axios from "axios";

const Pixabay1 = () => {
  const APP_KEY = "40939953-aa1e07c796126298de888fec9";
  const TEXT = "골든 + 햄스터";
  const url = `https://pixabay.com/api/?key=${APP_KEY}&q=${TEXT}&image_type=photo&pretty=true&lang=ko`;
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(url);
        setData(res.data.hits);
        console.log("성공", res.data.hits);
      } catch (err) {
        console.log("오류", err);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <h2>pixabay1</h2>
      <div>
        {data &&
          data.map((image) => (
            <img
              key={image.id}
              src={image.webformatURL}
              alt={image.tags}
              style={{ width: 200 }}
            />
          ))}
      </div>
      {/* <div>{data && data.map(image => <img src={}></img>)}</div> */}
    </div>
  );
};

export default Pixabay1;
