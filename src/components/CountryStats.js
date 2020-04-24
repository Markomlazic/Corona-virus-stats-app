import React from "react";

const CountryStats = props => {
  return (
    <div className="globalStats-container countryStats-container">
      <h1>Stats for {props.country}</h1>
      <img src={props.img} alt="country flag" className="country-flag"></img>
      <h2>Cases: {props.cases}</h2>
      <h2>Today cases: {props.todayCases}</h2>
      <h2>Deaths: {props.deaths}</h2>
      <h2>Today deaths: {props.todayDeaths}</h2>
      <h2>Recovered: {props.recovered}</h2>
      <h2>Active: {props.active}</h2>
      <h2>Critical: {props.critical}</h2>
      <h2>Unresolved: {props.cases - props.recovered - props.deaths}</h2>
      <h2>Cases per one Million: {props.casesPerMillion}</h2>
      <h2>Deaths per one Million: {props.deathsPerMillion}</h2>
    </div>
  );
};

export default CountryStats;
