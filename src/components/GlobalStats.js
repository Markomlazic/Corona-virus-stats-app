import React from "react";

const GlobalStats = props => {
  function convertTimestamptoTime(unixTimestamp) {
    var dateObj = new Date(unixTimestamp);
    var time =
      ("0" + dateObj.getDate()).slice(-2) +
      "-" +
      ("0" + (dateObj.getMonth() + 1)).slice(-2) +
      "-" +
      dateObj.getFullYear();
    return time;
  }

  return (
    <div className="globalStats-container">
      <h1>World Stats</h1>
      <h2>Cases: {props.cases}</h2>
      <h2>Deaths: {props.deaths}</h2>
      <h2>Recovered: {props.recovered}</h2>
      <h2>Unresolved: {props.cases - props.recovered - props.deaths}</h2>
      <p>Updated on: {convertTimestamptoTime(props.time)}</p>
    </div>
  );
};
export default GlobalStats;
