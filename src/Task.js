import React, { useState } from "react";
import axios from "axios";

const Task = () => {
  const [results, setResult] = useState([]);
  const [keyword, setKeyword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const key = "-jp-ySP2MXE7RAbrvJ1tL1SvToYDUwaY8l0fd-hks30";
    const { data } = await axios.get(
      `https://api.unsplash.com/search/photos?client_id=${key}&query=${keyword}`
    );
    setResult(data.results);

    console.log(data);
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          id="search"
          name="search"
          placeholder="search"
          onChange={handleChange}
          value={keyword}
        />

        <button>Search</button>
      </form>

      <div>
        {results.map((image) => (
          <img key={image.id} src={image.urls.small} alt={image.description} />
        ))}
      </div>
    </div>
  );
};

export default Task;
