import React from "react";
import inputStyle from "../styles/galleryInput.module.css";

const GalleryInput = ({ text, setText, getData }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    /*  if ("") {
      alert("내용을 입력하세요");
      return;
    } */
    getData();
    setText(""); // submit 후 내용 비움
    console.log(text);
  };
  const changeInput = (e) => {
    const value = e.target.value;
    setText(value);
  };

  return (
    <div className={inputStyle.inputWrapper}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={text}
          onChange={changeInput}
          className={inputStyle.searchContainer}
        />
        <button type="submit" className={inputStyle.searchBtn}>
          검색
        </button>
      </form>
    </div>
  );
};

export default GalleryInput;
