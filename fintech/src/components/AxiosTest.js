import React from "react";
import axios from "axios";

const AxiosTest = () => {
  const handleClick = () => {
    let data = "아직 아무것도 없습니다."
    axios.get("https://jsonplaceholder.typicode.com/posts    ").then((response) => {
      data = response.data;
      console.log(data);
    });
  };

  return (
    <div>
      <button onClick={handleClick}>요청 보내기</button>
    </div>
  );
};

export default AxiosTest;