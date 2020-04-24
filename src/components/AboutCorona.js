import React from "react";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import { Carousel, Image } from "react-bootstrap";

const AboutCorona = () => {
  return (
    <div className="about-container">
      <SearchBar />
      <div className="about-virus">
        <h1>Coronavirus</h1>
        <p>
          Corona virus disease or COVID-19 is an infectious disease caused by a
          newly found severe acute respiratory syndrome corona virus 2
          (SARS-CoV-2). It belongs to a family of RNA-viruses calleds
          <em> Coronaviridae</em> which cause diseases in birds and mammals. In
          humans, the viruses cause, usually mild respiratory infections, like
          the common cold. However, newly discovered forms such as SARS, MERS
          and COVID-19 can be lethal. Currently, there are no vaccines or
          treatments for the COVID-19. However, there are ongoing clinical
          trials around the world.
        </p>
        <p>
          Most people infected with the new corona virus will experience mild
          respiratory symptoms without the need for any special treatment.
          However, older people and those with medical problems such as
          diabetes, cardiovascular disease, chronic respiratory disease are in
          higher risk of developing serious illness. It is therefore of huge
          importance to slow down the transmission of the virus. The best way to
          protect yourself and the surrounding ones is to wash your hands and
          not touching your face.
        </p>
        <h2>How does COVID-19 spread?</h2>
        <p>
          People catch COVID-19 from other people infected with the virus,
          usually through small droplets from mouth or nose which are spread
          when people who are infected cough or sneeze. When a person breathes
          in these droplets they can catch the disease. Also, people can get
          sick after touching their mouth, eyes or nose after touching surfaces
          contaminated by these droplets.
        </p>
        <h2>Symptoms</h2>
        <p>
          Common symptoms:
          <ul>
            <li>Fever</li>
            <li>Tierdness</li>
            <li>Dry cough</li>
          </ul>
          Other symptoms:
          <ul>
            <li>Shortness of breath</li>
            <li>Aches and pain</li>
            <li>Sore troat</li>
            <li>In few people, diarrhoea, nausea or a runny nose</li>
          </ul>
          In few people, diarrhea, nausea or a runny nose If you have mild
          symptoms and are otherwise healthy you should self-isolate and contact
          your doctor or call your local COVID-19 information line for advice on
          testing. People with fever, cough or those with difficulty breading
          should contact their doctor immediately and seek medical attention.
        </p>
        <h2>Prevention</h2>
        <p>
          <ul>
            <li>
              Wash your hands with hot water and soap or clean them with
              alcohol-based solutions
            </li>
            <li>
              Keep distance between you and the surrounding people. 2 m should
              be enough to protect you and others
            </li>
            <li>Avoid touching your face</li>
            <li>When coughing or sneezing cover your mouth</li>
            <li>Stay home if you feel ill</li>
            <li>
              Avoid unnecessary travel and stay away from large groups of people
            </li>
          </ul>
        </p>
        <h2>Flattening the Curve</h2>
        <p>
          During epidemic, slowing down the spread of disease is of critical
          importance. As the healthcare resources are limited in every country,
          these can be easily overwhelmed when the number of patients is beyond
          the capacity of the system. At this point, patients may not get the
          best possible care and the mortality rate increases.
        </p>
        <p>
          Flattening the curve keeps the number of active cases below the
          maximum capacity of the healthcare system. Although, ultimately the
          same number of people end up being infected by the virus, with
          flattened curve this happens over a longer period of time which gives
          doctors, nurses and hospitals time to prepare. This means that
          patients infected with the virus get better treatment and the
          mortality rate decreases.
        </p>
        <img
          className="who-image mb-4"
          src="./img/800px-Covid-19-curves-graphic-social-v3.gif"
          alt="Flatten the curve"
        ></img>
        <h2>How to flatten the curve?</h2>
        <p>
          Key factor is keeping people apart in time and space. Measures such as
          social distancing, isolation and quarantine can help reduce the speed
          of spreading the virus as they reduce the probability of infected
          people being in close contact with those not infected, thus reducing
          transmission rates. Also, maintaining hygiene by frequently washing
          hands with hot water and soap and by cleaning frequently touched
          surfaces can help slow down the spread.
        </p>

        <h2>Stop the Spread</h2>
        <p>
          One alternative strategy to "Flattening the curve" is to stop the
          spread of the virus at the very early stage of the outbreak. Good
          examples of how this can be achieved are Taiwan and South Korea. In
          these countries, authorities acted quickly and were able to contain
          the spread through quarantine measures and rigorous testing (including
          people not showing any symptoms). This strategy turned out to be
          rather successful: on 29 February 813 people tested positive in whole
          of South Korea and by mid March the number of new daily cases was well
          below 100.
        </p>
        <img
          className="who-image mb-4"
          src="./img/800px-Covid-19-curves-graphic2-stopthespread-v3.gif"
          alt="Stop the spread of the virus"
        ></img>
        <h2>Advices from the WHO</h2>
        <Carousel>
          <Carousel.Item>
            <Image
              fluid
              className="d-block"
              src="./img/1_safe-greetings.png"
              alt="Avoid Shaking Hands"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              fluid
              className="d-block"
              src="./img/2_handshaking.png"
              alt="Avoid Shaking Hands"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              fluid
              className="d-block"
              src="./img/wearing-gloves.png"
              alt="Wear Gloves"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <br></br>
        <h2>How to protect yourself and others from getting sick</h2>
        <Carousel>
          <Carousel.Item>
            <Image
              fluid
              className="d-block"
              src="./img/blue-1.png"
              alt="Wash your hands"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              fluid
              className="d-block"
              src="./img/blue-2.png"
              alt="Wash your hands"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              fluid
              className="d-block"
              src="./img/blue-3.png"
              alt="Protect others from getting sick"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              fluid
              className="d-block"
              src="./img/blue-4.png"
              alt="Protect others from getting sick"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div>
          Sources:{" "}
          <a
            href="https://en.wikipedia.org/wiki/Coronaviridae"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wikipedia
          </a>
          ,<span> </span>
          <a
            href="https://www.who.int/health-topics/coronavirus#tab=tab_1"
            target="_blank"
            rel="noopener noreferrer"
          >
            WHO
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutCorona;
