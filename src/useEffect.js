import React, { useState, useEffect } from "react";
export default function UseEffect(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/item/20683884.json?print=pretty")
      .then(response => response.json())
      .then(data => setData(data));
  })
  return (
    <div>
      {JSON.stringify(data)}</div>
  )
}


