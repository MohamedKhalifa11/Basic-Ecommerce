import slider1 from "./Images/slider-1.webp";
import slider2 from "./Images/slider-2.webp";
import slider3 from "./Images/slider-3.webp";
import "./Slider.css";

function Slider() {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={slider1}
              className="d-block w-100 slider-height"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={slider2}
              className="d-block w-100 slider-height"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={slider3}
              className="d-block w-100 slider-height"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Slider;
