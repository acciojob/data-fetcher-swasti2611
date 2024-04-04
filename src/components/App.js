import React, { useState, useEffect } from "react";
import "./../styles/App.css";

const App = () => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setData(JSON.stringify(data,null, 2));
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading....</p>
      ) : error ? (
        <p>An error occurred: {error}</p>
      ) : (
        <div>
          <h1>Data Fetched from API</h1>
          <pre>{data}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
