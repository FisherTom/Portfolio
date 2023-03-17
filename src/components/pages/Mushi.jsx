import React from "react";
import {
  SiExpo,
  SiJavascript,
  SiMongodb,
  SiFirebase,
  SiNodedotjs,
  SiReact,
  SiExpress,
  SiJest,
} from "react-icons/si";
import { Link } from "react-router-dom";
import "../../styles/projectPage.css";

function Mushi() {
  return (
    <div className="project-page">
      <Link to="/">
        <button>Home</button>
      </Link>
      <div className="project-page-content-box">
        <div className="project-page-pic-box">
          <img
            src="https://github.com/FisherTom/portfolio-mushi-front-end/blob/main/screenshots/Screenshot_20230308-111907.jpg?raw=true"
            alt="app home screen"
          />
          <img
            src="https://github.com/FisherTom/portfolio-mushi-front-end/blob/main/screenshots/Screenshot_20230308-111819.jpg?raw=true"
            alt="app add report screen"
          />
          <img
            src="https://github.com/FisherTom/portfolio-mushi-front-end/blob/main/screenshots/Screenshot_20230308-111854.jpg?raw=true"
            alt="app map  screen"
          />
          <img
            src="https://github.com/FisherTom/portfolio-mushi-front-end/blob/main/screenshots/Screenshot_20230308-112027.jpg?raw=true"
            alt="app map screen"
          />
          <img
            src="https://github.com/FisherTom/portfolio-mushi-front-end/blob/main/screenshots/Screenshot_20230308-112038.jpg?raw=true"
            alt="app report"
          />
          <img
            src="https://github.com/FisherTom/portfolio-mushi-front-end/blob/main/screenshots/Screenshot_20230308-111914.jpg?raw=true"
            alt="app mushroom info screen"
          />
        </div>
        <div className="project-page-info">
          <h2 className="project-page-title">Mushi App</h2>
          <p className="project-page-text">
            Mushi is a mobile app designed to help people find and identify wild
            mushrooms. The aplication uses the MERN stack and was completed as a
            final project during the Northcoders Full-stack development boot
            camp.
            <br />
            <br />
            Users can submit mushroom sightings providing a location, picture, a
            description and the species they believe the mushroom to be. Users
            are then able to browse sightings via the map screen, filtering
            results by species.
            <br />
            <br />
            On the mushroom sighting screen users can vote for a species they
            believe the mushroom to be, the back-end will set the species
            assigned to the sighting to the species with the highest votes
            automatically. The back-end also calculates a species credibility
            score based on the number of votes for the assigned species and the
            number of conflicting votes.
          </p>
          <h3>Front-end:</h3>
          The front end was built using React Native and Expo. It uses built in
          functionality of React Native for user location, maps, taking /
          selecting images. Firebase is used for secure user authentication and
          cloud storage of user generated content.
          <h3>Back-end:</h3>
          The database was made using MongoDB to store data about sightings and
          mushroom species info. HTTP requests are handled by Express,
          integration tests were written for all endpoints using Jest.
          <h3>Links</h3>
          <h4>
            Frontend Repo:{" "}
            <a href="https://github.com/FisherTom/portfolio-mushi-front-end">
              github.com/FisherTom/portfolio-mushi-front-end
            </a>
          </h4>
          <h4>
            Backend Repo:{" "}
            <a href="https://github.com/FisherTom/portfolio-mushi-api">
              github.com/FisherTom/portfolio-mushi-api
            </a>
          </h4>
          <div className="icon-box">
            <SiJavascript size={30} />
            <SiNodedotjs size={30} />
            <SiReact size={30} />
            <SiExpo size={30} />
            <SiFirebase size={30} />
            <SiMongodb size={30} />
            <SiExpress size={30} />
            <SiJest size={30} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mushi;
