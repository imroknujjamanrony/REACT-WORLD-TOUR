import React, { useState } from "react";
import "./country.css";

const Country = ({ country }) => {
  const { name, flags, capital, area } = country;
  const [visit, setVisit] = useState(false);

  const handlebtn = () => {
    setVisit(!visit);
  };

  return (
    <div className="country">
      <h3> {country.length}</h3>
      <h3> {name.common}</h3>
      <img src={flags.png} alt="" />
      <p>{name.official}</p>
      <p>capital:{capital}</p>
      <p>area:{area}</p>
      <button onClick={handlebtn}>visit</button>
      {visit ? "visited" : "going"}
    </div>
  );
};

export default Country;
