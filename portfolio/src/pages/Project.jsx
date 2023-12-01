import React from "react";
import { CarouselComponent, CarouselItemsDirective, CarouselItemDirective } from "@syncfusion/ej2-react-navigations";



export default function Project() {
  return (
    <>
        <div className='control-container'>
      <CarouselComponent animationEffect="Fade">
        <CarouselItemsDirective>
          <CarouselItemDirective template='<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/cardinal.png" alt="cardinal" style="height:100%;width:100%;" /><figcaption class="img-caption">Cardinal</figcaption></figure>' />
          <CarouselItemDirective template='<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/hunei.png" alt="kingfisher" style="height:100%;width:100%;" /><figcaption class="img-caption">Kingfisher</figcaption></figure>' />
          <CarouselItemDirective template='<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/costa-rica.png" alt="keel-billed-toucan" style="height:100%;width:100%;" /><figcaption class="img-caption">Keel-billed-toucan</figcaption></figure>' />
          <CarouselItemDirective template='<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/kaohsiung.png" alt="yellow-warbler" style="height:100%;width:100%;" /><figcaption class="img-caption">Yellow-warbler</figcaption></figure>' />
          <CarouselItemDirective template='<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/bee-eater.png" alt="bee-eater" style="height:100%;width:100%;" /><figcaption class="img-caption">Bee-eater</figcaption></figure>' />
        </CarouselItemsDirective>
      </CarouselComponent>
    </div>
      {/* <header>
        <ul>
          "As a dedicated bootcamp participant, I have successfully accomplished
          numerous individual and collaborative projects, enhancing my
          proficiency as both a skilled coder and an adept project manager.<br></br>
          Kindly explore my GitHub repositories under the username @VernPg or
          access the provided links for detailed insights into the highlighted
          projects."
        </ul>
      </header> */}
      {/* <Carousel data-bs-theme="dark">
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
      </Carousel> */}
    </>
  );
}
