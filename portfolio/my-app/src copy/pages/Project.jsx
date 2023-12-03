import React from "react";
import Carousel from 'react-bootstrap/Carousel';

export default function Project() {


  return (
    <>

      <header>
        <ul>
          "As a dedicated bootcamp participant, I have successfully accomplished
          numerous individual and collaborative projects, enhancing my
          proficiency as both a skilled coder and an adept project manager.<br></br>
          Kindly explore my GitHub repositories under the username @VernPg or
          access the provided links for detailed insights into the highlighted
          projects."
        </ul>
      </header>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block "
            src="/src/assets/Emotisong.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Emotisong-Music Rating App</h5>
            <figcaption>Visit the Repo Here and the User Site Here </figcaption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            src="/src/assets/WeatherDashboard.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Weather Dashboard</h5>
            <figcaption>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</figcaption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            src="/src/assets/FirstPortfolio.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>First HTML & CSS Project</h5>
            <figcaption>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </figcaption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            src="/src/assets/Scheduler.png"
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h5>Workday Scheduler</h5>
            <figcaption>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </figcaption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            src="/src/assets/PWA.png"
            alt="Fifth slide"
          />
          <Carousel.Caption>
            <h5>PWA</h5>
            <figcaption>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </figcaption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            src="/src/assets/ExpressNoteTaker.png"
            alt="Sixth slide"
          />

          <Carousel.Caption>
            <h5>Note Taker- Express.js</h5>
            <figcaption>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </figcaption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
 
   
    </>
  );
}
