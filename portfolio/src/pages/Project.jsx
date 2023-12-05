import React from "react";
import Carousel from "react-bootstrap/Carousel";
export default function Project() {
  return (
    <>
     
      {/* <header>
        <ul className="card2 text-muted">
          "As a dedicated bootcamp participant, I have successfully accomplished
          numerous individual and collaborative projects, enhancing my
          proficiency as both a skilled coder and an adept project manager.
          <br />
          <br />
          Kindly explore my GitHub repositories under the username @VernPg or
          access the provided links for detailed insights into the highlighted
          projects."
        </ul>
      </header> */}

      <Carousel>
        <Carousel.Item className="item">
          <img
            className="d-block "
            src="/src/assets/Emotisong.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h4>
              <p>
                {" "}
                Emotisong-Music Rating App <br />{" "}
              </p>
              Visit the Repo{" "}
              <a href="https://github.com/VernPG/music_rater.git">HERE</a> or
              the Deployed Site via Heroku{" "}
              <a href="https://emotisong-music-rater-cd144b6f7aad.herokuapp.com/">
                HERE
              </a>{" "}
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item className="item">
          <img
            className="d-block "
            src="/src/assets/WeatherDashboard.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h4>Weather Dashboard <br /> Visit the Repo <a href="https://github.com/VernPG/weather-dashboard.git">HERE</a> or the Deployed Site<a href="https://vernpg.github.io/weather-dashboard/">HERE</a></h4>
          </Carousel.Caption>
        </Carousel.Item> */}
        <Carousel.Item className="item">
          <img
            className="d-block "
            src="/src/assets/Portfolio.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h4>
              <p>
                First HTML & CSS Portfolio Project <br />{" "}
              </p>
              Visit the Repo{" "}
              <a href="https://github.com/VernPG/portfolio.git">HERE</a> or the
              Deployed Site{" "}
              <a href="https://vernpg.github.io/portfolio/">HERE</a>
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="item">
          <img
            className="d-block "
            src="/src/assets/Scheduler.png"
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h4>
              <p>
                Workday Scheduler <br />
              </p>
              Visit the Repo{" "}
              <a href="https://github.com/VernPG/workday-scheduler.git">HERE</a>{" "}
              or the Deployed Site{" "}
              <a href="https://vernpg.github.io/workday-scheduler/">HERE</a>
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="item">
          <img
            className="d-block "
            src="/src/assets/PWA.png"
            alt="Fifth slide"
          />
          <Carousel.Caption>
            <h4>
              <p>
                PWA- Progressive Web Apps <br />
              </p>
              Visit the Repo{" "}
              <a href="https://github.com/VernPG/PWA-Text-Editor.git">HERE</a>
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="item">
          <img
            className="d-block "
            src="/src/assets/NoteTaker.png"
            alt="Sixth slide"
          />

          <Carousel.Caption>
            <h4>
              <p>
                Note Taker- Express.js <br />
              </p>
              Visit the Repo{" "}
              <a href="https://github.com/VernPG/express.js_note-taker.git">
                HERE
              </a>{" "}
              or the Deployed Site via Heroku{" "}
              <a href="https://express-note-taking-tool-a19d807db5dd.herokuapp.com/">
                HERE
              </a>
            </h4>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="item">
          <img
            className="d-block "
            src="/src/assets/Screenshot 2023-12-03 at 3.55.43 PM.png"
            alt="Sixth slide"
          />

          <Carousel.Caption>
            <h4>
              <p>
                PetSpace- Pet Finding App <br />
              </p>
              Visit the Repo{" "}
              <a href="https://github.com/nestibry/pet-space.git">HERE</a> or
              the Deployed Site via Heroku{" "}
              <a href="https://nestibry.github.io/pet-space/">HERE</a>
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="container mt-5">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <p className="cardProfile text-muted">
                "As a dedicated bootcamp participant, I have successfully
                accomplished numerous individual and collaborative projects,
                enhancing my proficiency as both a skilled coder and an adept
                project manager.
                <br />
                <br />
                Kindly explore my GitHub repositories under the username @VernPg
                or access the provided links for detailed insights into the
                highlighted projects."
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
