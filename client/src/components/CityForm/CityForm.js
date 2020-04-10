import React from "react";
import "./CityForm.scss";

const CityForm = ({ onInputChange, onButtonSubmit, input }) => {
  return (
    <div className="">
      <p className="f3 white">{"Enter a location for weather information"}</p>
      <div className="center">
        <div className="center form pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-300 center"
            type="text"
            onChange={onInputChange}
            value={input}
          />
          <button
            className="w-15 grow f4 link ph3 pv2 dib white bg-light-purple"
            onClick={onButtonSubmit}
          >
            Check
          </button>
        </div>
      </div>
    </div>
  );
};

export default CityForm;
