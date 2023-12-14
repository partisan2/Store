import Carousel from 'react-bootstrap/Carousel';
import slider1 from './653269281ad7d.jpg'
import slider2 from './656ce2f2a7122.jpg'
import slider3 from './65797cc994142.jpg'

function Slider() {
  return (
    <Carousel data-bs-theme="dark">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={slider1}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={slider2}
        width={"100vw"}
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={slider3}
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
  );
}

export default Slider;