import axios from "axios";
import React, { useState } from "react";

const PropsUse_UseState = (props) => {
  const [image, setRandomImage] = useState();

  const cardStyle = {
    width: "18rem",
  };
  const handleClick = async (e) => {
    const key = "-jp-ySP2MXE7RAbrvJ1tL1SvToYDUwaY8l0fd-hks30";
    const response = await axios.get(
      `https://api.unsplash.com/photos/random?client_id=${key}`
    );
    setRandomImage(response.data.urls.small);
  };

  return (
    <div>
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          // src={props.img}
          src={image}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text"> {props.place} </p>
          <p className="card-text"> {props.desc} </p>
          <p className="card-text"> {props.Number} </p>
          <button onClick={handleClick} className="btn btn-primary">
            Add friends
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropsUse_UseState;
