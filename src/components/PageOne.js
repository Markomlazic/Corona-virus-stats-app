import React from "react";
import SearchBar from "./SearchBar";
import GlobalStats from "./GlobalStats";
import Footer from "./Footer";
import { Map, CircleMarker, TileLayer, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Spinner } from "react-bootstrap";

class PageOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      globalData: [],
      countries: [],
      selectedCountry: null,
      countryData: []
    };
  }

  async componentDidMount() {
    fetch("https://corona.lmao.ninja/v2/all")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            globalData: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );

    fetch("https://corona.lmao.ninja/v2/countries")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            countryData: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const countryArray = [];
    const mapData = [];
    for (let i = 0; i < this.state.countryData.length; i++) {
      countryArray.push({
        country: this.state.countryData[i].countryInfo.iso3,
        casesPerMil: this.state.countryData[i].casesPerOneMillion,
        deathsPerMil: this.state.countryData[i].deathsPerOneMillion
      });
      mapData.push({
        name: this.state.countryData[i].country,
        coordinates: [
          this.state.countryData[i].countryInfo.lat,
          this.state.countryData[i].countryInfo.long
        ],
        cases: this.state.countryData[i].cases,
        deaths: this.state.countryData[i].deaths,
        casesPerMil: this.state.countryData[i].casesPerOneMillion,
        deathsPerMil: this.state.countryData[i].deathsPerOneMillion
      });
    }

    if (!this.state.isLoaded) {
      return (
        <div className="dark-blue">
          <SearchBar />
          <Spinner className="loading-spinner" animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
          <Footer />
        </div>
      );
    } else if (this.state.error) {
      return (
        <div className="dark-blue">
          <SearchBar />
          <h1>{this.state.error}</h1>
          <Footer />
        </div>
      );
    } else {
      return (
        <div className="dark-blue">
          <SearchBar />
          <GlobalStats
            cases={this.state.globalData.cases}
            recovered={this.state.globalData.recovered}
            deaths={this.state.globalData.deaths}
            time={this.state.globalData.updated}
          />
          <Map
            style={{ height: "500px", width: "80%", margin: "0 auto" }}
            zoom={2}
            center={[15.5, 17.5]}
          >
            >
            <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {mapData.map(element => {
              return (
                <CircleMarker
                  key={element.name}
                  center={[
                    element["coordinates"][0],
                    element["coordinates"][1]
                  ]}
                  radius={Math.log(element["cases"] + 1) * 2}
                >
                  <Tooltip direction="right" offset={[-8, -2]} opacity={1}>
                    <span>{element["name"]}</span>
                    <br></br>
                    <span className="blue">{element["cases"] + " cases"}</span>
                    <span className="red">
                      {" | " + element["deaths"] + " deaths"}
                    </span>
                    <br></br>
                    <span className="blue">
                      {element["casesPerMil"] + " cases / 1M"}
                    </span>
                    <span className="red">
                      {" | " + element["deathsPerMil"] + " deaths / 1M"}
                    </span>
                  </Tooltip>
                </CircleMarker>
              );
            })}
          </Map>
          <Footer />
        </div>
      );
    }
  }
}

export default PageOne;
