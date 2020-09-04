import React from "react";
import "./styles.css";

function MemeDisplay(props) {
  const memeList = props.allMemeImages.map((meme) => {
    return <img src={meme.url} alt={meme.name} width="200px" />;
  });
  return <div id="memelist">{memeList}</div>;
}

export default MemeDisplay;
