import React from "react";
import SearchBar from "./SearchBar";
import CountryStats from "./CountryStats";
import ItalyTimeline from "./data/ItalyTimeline";
import Plot from "react-plotly.js";
import Footer from "./Footer";
import { Spinner } from "react-bootstrap";

class PageTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryData: [],
      countrySelected: "Italy",
      isLoaded: false,
      filterData: [],
      historicalData: [],
      historicalDataFilter: ItalyTimeline,
      timeLine: []
    };
    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  async componentDidMount() {
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

    fetch("https://corona.lmao.ninja/v2/historical")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            historicalData: result
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

  handleCountryChange(event) {
    const inputValue = event.target.value;
    this.setState({
      countrySelected: inputValue
    });
    this.handleFilter(inputValue);
  }

  handleFilter(countrySelected) {
    this.setState({
      filterData: this.state.countryData.filter(element => {
        return (
          element.country === countrySelected ||
          element.country.toLowerCase() === countrySelected
        );
      }),
      historicalDataFilter: this.state.historicalData.filter(element => {
        return (
          element.country === countrySelected ||
          element.country.toLowerCase() === countrySelected
        );
      })
    });
  }

  render() {
    const countries = this.state.countryData.map(element => {
      return element.country;
    });

    var CasesX,
      CasesY,
      DeathsX,
      DeathsY,
      RecoveredX,
      RecoveredY,
      ActiveCases = [];

    if (this.state.historicalDataFilter.length <= 1) {
      CasesX = Object.keys(this.state.historicalDataFilter[0].timeline.cases);
      CasesY = Object.values(this.state.historicalDataFilter[0].timeline.cases);
      DeathsX = Object.keys(this.state.historicalDataFilter[0].timeline.deaths);
      DeathsY = Object.values(
        this.state.historicalDataFilter[0].timeline.deaths
      );
      RecoveredX = Object.keys(
        this.state.historicalDataFilter[0].timeline.recovered
      );
      RecoveredY = Object.values(
        this.state.historicalDataFilter[0].timeline.recovered
      );
      ActiveCases = CasesY.map(function(num, idx) {
        return num - DeathsY[idx];
      });
    } else {
      CasesY = this.state.historicalDataFilter
        .map(element => {
          return Object.values(element.timeline.cases);
        })
        .reduce((r, a) => a.map((b, i) => (r[i] || 0) + b), []);
      CasesX = Object.keys(this.state.historicalDataFilter[0].timeline.cases);
      DeathsY = this.state.historicalDataFilter
        .map(element => {
          return Object.values(element.timeline.deaths);
        })
        .reduce((r, a) => a.map((b, i) => (r[i] || 0) + b), []);
      DeathsX = Object.keys(this.state.historicalDataFilter[0].timeline.deaths);
      RecoveredY = this.state.historicalDataFilter
        .map(element => {
          return Object.values(element.timeline.deaths);
        })
        .reduce((r, a) => a.map((b, i) => (r[i] || 0) + b), []);
      RecoveredX = Object.keys(
        this.state.historicalDataFilter[0].timeline.deaths
      );
      ActiveCases = CasesY.map(function(num, idx) {
        return num - DeathsY[idx];
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
    } else if (this.state.filterData.length === 0) {
      return (
        <div className="dark-blue">
          <SearchBar />
          <div className="mt-2 ml-3">
            <label htmlFor="country">Choose a country:</label>
            <select id="country" onChange={this.handleCountryChange}>
              {countries.map(element => (
                <option key={element} value={element}>
                  {element}
                </option>
              ))}
            </select>
          </div>
          <h1 className="text-center">Please select a Country</h1>
          <div className="plot-container">
            <Plot
              config={{ displayModeBar: false }}
              data={[
                {
                  x: CasesX,
                  y: CasesY,
                  name: "Total",
                  type: "scatter",
                  marker: {
                    color: "#2E84A5",
                    line: {
                      color: "black",
                      width: 1
                    }
                  }
                },
                {
                  x: DeathsX,
                  y: ActiveCases,
                  name: "Active",
                  type: "scatter",
                  marker: {
                    color: "orange",
                    line: {
                      color: "black",
                      width: 1
                    }
                  }
                },
                {
                  x: RecoveredX,
                  y: RecoveredY,
                  name: "Recovered",
                  type: "scatter",
                  marker: {
                    color: "green",
                    line: {
                      color: "black",
                      width: 1
                    }
                  }
                },
                {
                  x: DeathsX,
                  y: DeathsY,
                  name: "Deaths",
                  type: "scatter",
                  marker: {
                    color: "#E14A50",
                    line: {
                      color: "black",
                      width: 1
                    }
                  }
                }
              ]}
              className="plot plot-deaths"
              layout={{
                showlegend: true,
                legend: {
                  x: 0.3,
                  y: 1.2,
                  orientation: "h"
                },
                margin: {
                  l: 50,
                  r: 20,
                  b: 80,
                  t: 80,
                  pad: 2
                },
                /*                 title: {
                  text: "Cases Timeline",
                  font: {
                    family: "Courier New, monospace",
                    size: 24
                  },
                  xref: "paper",
                  x: 0.05
                }, */
                align: "center",
                autosize: true,
                plot_bgcolor: "#FDF9F1",
                paper_bgcolor: "#FDF9F1",
                xaxis: {
                  title: {
                    text: "Date",
                    font: {
                      family: "Courier New, monospace",
                      size: 18,
                      color: "#7f7f7f"
                    }
                  }
                },
                yaxis: {
                  title: {
                    text: "Total Number",
                    font: {
                      family: "Courier New, monospace",
                      size: 18,
                      color: "#7f7f7f"
                    }
                  }
                },
                displayModeBar: false
              }}
              useResizeHandler
            />
          </div>
          <Footer />
        </div>
      );
    } else {
      return (
        <div className="dark-blue">
          <SearchBar />
          <div className="mt-2 ml-3">
            <label htmlFor="country">Choose a country:</label>
            <select id="country" onChange={this.handleCountryChange}>
              {countries.map(element => (
                <option key={element} value={element}>
                  {element}
                </option>
              ))}
            </select>
          </div>

          <CountryStats
            country={this.state.filterData[0].country}
            cases={this.state.filterData[0].cases}
            todayCases={this.state.filterData[0].todayCases}
            deaths={this.state.filterData[0].deaths}
            todayDeaths={this.state.filterData[0].todayDeaths}
            recovered={this.state.filterData[0].recovered}
            active={this.state.filterData[0].active}
            critical={this.state.filterData[0].critical}
            casesPerMillion={this.state.filterData[0].casesPerOneMillion}
            deathsPerMillion={this.state.filterData[0].deathsPerOneMillion}
            img={this.state.filterData[0].countryInfo.flag}
          />
          <div className="plot-container">
            <Plot
              config={{ displayModeBar: false }}
              data={[
                {
                  x: CasesX,
                  y: CasesY,
                  name: "Total",
                  type: "scatter",
                  marker: {
                    color: "#2E84A5",
                    line: {
                      color: "black",
                      width: 1
                    }
                  }
                },
                {
                  x: DeathsX,
                  y: ActiveCases,
                  name: "Active",
                  type: "scatter",
                  marker: {
                    color: "orange",
                    line: {
                      color: "black",
                      width: 1
                    }
                  }
                },
                {
                  x: RecoveredX,
                  y: RecoveredY,
                  name: "Recovered",
                  type: "scatter",
                  marker: {
                    color: "green",
                    line: {
                      color: "black",
                      width: 1
                    }
                  }
                },
                {
                  x: DeathsX,
                  y: DeathsY,
                  name: "Deaths",
                  type: "scatter",
                  marker: {
                    color: "#E14A50",
                    line: {
                      color: "black",
                      width: 1
                    }
                  }
                }
              ]}
              className="plot plot-deaths"
              layout={{
                showlegend: true,
                legend: {
                  x: 0.3,
                  y: 1.2,
                  orientation: "h"
                },
                margin: {
                  l: 50,
                  r: 20,
                  b: 80,
                  t: 80,
                  pad: 2
                },
                /*                 title: {
                  text: "Cases Timeline",
                  font: {
                    family: "Courier New, monospace",
                    size: 24
                  },
                  xref: "paper",
                  x: 0.05
                }, */
                align: "center",
                autosize: true,
                plot_bgcolor: "#FDF9F1",
                paper_bgcolor: "#FDF9F1",
                xaxis: {
                  title: {
                    text: "Date",
                    font: {
                      family: "Courier New, monospace",
                      size: 18,
                      color: "#7f7f7f"
                    }
                  }
                },
                yaxis: {
                  title: {
                    text: "Total Number",
                    font: {
                      family: "Courier New, monospace",
                      size: 18,
                      color: "#7f7f7f"
                    }
                  }
                }
              }}
              useResizeHandler
            />
          </div>
          <Footer />
        </div>
      );
    }
  }
}

export default PageTwo;
