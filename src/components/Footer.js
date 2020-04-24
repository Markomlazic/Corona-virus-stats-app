import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer container-fluid mt-3">
        <div className="pt-5 pb-1 footer">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-sm-12">
                <h2>CoronaTracker</h2>
                <h6>Developed by MML</h6>
                <p>
                  <span className="span-element">
                    <a href="https://www.linkedin.com/in/marko-lazic-74583a170/">
                      <i className="fa fa-linkedin-square"></i>
                    </a>
                  </span>

                  <span className="span-element">
                    <a href="https://twitter.com/MarkoLa16617366">
                      <i className="fa fa-twitter-square"></i>
                    </a>
                  </span>
                  <span className="span-element">
                    <a href="mailto: marko.m.lazic@gmail.com?subject=Corona React App">
                      <i className="fa fa-envelope-square mr-3"></i>
                    </a>
                  </span>
                </p>
              </div>
              <div className="col-md-3 col-sm-12 links">
                <h4 className="mt-lg-0 mt-sm-3">Links</h4>
                <ul className="m-0 p-0">
                  <li key="corona-1">
                    <a
                      href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Coronavirus disease (COVID-19) advice for the public
                    </a>
                  </li>
                  <li key="corona-2">
                    <a
                      href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WHO latest news
                    </a>
                  </li>
                  <li key="corona-3">
                    <a
                      href="https://www.ecdc.europa.eu/en/geographical-distribution-2019-ncov-cases"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      European Centre for Disease Prevention and Control
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 col-sm-12">
                <br></br>
                <ul className="m-0 p-0">
                  <li key="corona-4">
                    <a
                      href="https://www.cdc.gov/coronavirus/2019-nCoV/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Centers for Disease Control and Prevention
                    </a>
                  </li>
                  <li key="corona-5">
                    <a
                      href="https://www.bundesgesundheitsministerium.de/coronavirus.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Information on Corona virus (in German)
                    </a>
                  </li>
                  <li key="corona-6">
                    <a
                      href="https://www.nejm.org/coronavirus"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      The New England Journal of Medicine
                    </a>
                  </li>
                  <li key="corona-7">
                    <a
                      href="https://www.thelancet.com/coronavirus"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      The Lancet
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row border-top border-bottom border-secondary">
              <h4 className="data-source">
                Data Source:
                <a href="https://github.com/pomber/covid19">pomber/covid19</a>
              </h4>
            </div>
            <div className="border-secondary disclaimer">
              All data and information provided on this site is for
              informational purposes only. I make no representations as to
              accuracy, completeness, suitability, or validity of any
              information and will not be liable for any errors, omissions, or
              delays in this information. All information is provided on an
              as-is basis.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
