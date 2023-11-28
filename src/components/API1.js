import React, { useState } from "react";
import axios from "axios";

const API1 = () => {
  //https://jsonplaceholder.typicode.com/todos/1
  const [data, setData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/todos/1";

  const getData = async () => {
    try {
      const res = await axios.get(url);
      setData(res.data);
      console.log("요청 성공: res.data");
    } catch (err) {
      console.log("오류: ", err);
    }
  };

  const handleClick = () => {
    getData();
    // axios
    //   .get(url)
    //   .then((res) => {
    //     setData(res.data);
    //     console.log("요청 성공: res.data");
    //   })
    //   .catch((err) => console.log("오류: ", err));
  };

  return (
    <div>
      <h2>Axios</h2>
      <button onClick={handleClick}>불러오기</button>
      {data && (
        <ul>
          <li>userId: {data.userId}</li>
          <li>id: {data.id}</li>
          <li>title: {data.title}</li>
          <li>completed: {data.completed ? "true" : "false"}</li>
        </ul>
      )}
      {/* 
      js )
      const data = {
        userId: 1,
        id: 1,
        title: "delectus aut autem"
        completes: false
      }

         JSON )
         {
          "userId" : 1,
          "id" : 1,
          "title" : "delectus aut autem"
          "completes": false
         }


         js -> JSON
         JSON.stringyfy

         JSON -> js
         JSON.parse();
      */}
      <hr />
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}{" "}
      {/* (변환 데이터, 대체할수 있는것, 들여쓰기) */}
    </div>
  );
};

export default API1;
