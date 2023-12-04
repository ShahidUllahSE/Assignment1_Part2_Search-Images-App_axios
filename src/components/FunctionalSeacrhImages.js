import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FunctionalSearchImages() {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const key = '-jp-ySP2MXE7RAbrvJ1tL1SvToYDUwaY8l0fd-hks30';
    try {
      const { data } = await axios.get(`https://api.unsplash.com/search/photos?client_id=${key}&query=${keyword}`);
      setResults(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
      setResults([]);
    }

    setIsLoading(false);
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          id="search"
          onChange={handleChange}
          value={keyword}
        />
        <button id="searchbtn" disabled={isLoading}>
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </form>

      <div>
        {results.map((image) => (
          <img key={image.id} src={image.urls.small} alt={image.description} />
        ))}
      </div>
    </div>
  );
}

export default FunctionalSearchImages;
