import React, { useState, useEffect } from "react";
import "./../styles/App.css";

const App = () => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(JSON.stringify(data));
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []); // Empty dependency array ensures that this effect runs only once

  return (
    <div>
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        <div>
          <h1>DATA FETCHED FROM API</h1>
          <pre>{data}</pre>
        </div>
      )}
    </div>
  );
};

export default App;

