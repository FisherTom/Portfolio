import React from "react";
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
            sahdfiasujhdfioljashf piuaspf ufpu aspfu awef efpa aspu apifu asduf
            saduf poiasu dfos fdoisa pd ofis aj ofisa odfi soi f
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mushi;
