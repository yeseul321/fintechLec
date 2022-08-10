import React from "react";
import axios from "axios";

const AxiosTest = () => {
  const handleClick = () => {
    let data = "아직 아무것도 없습니다."
    axios.get("https://newsapi.org/v2/everything?q=samsung&from=2022-07-10&sortBy=publishedAt&apiKey=34dd189437994f13a5daeeea3af45b10&language=ko").then((response) => {
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