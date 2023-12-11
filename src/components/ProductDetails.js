import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const api_url = "https://dummyjson.com/products";
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    fetch(`${api_url}/${productId}`)
      .then((res) => res.json())
      .then((product) => setProduct(product))
      .catch((error) => console.error("Error fetching product:", error));
  }, [productId]);

  if (!product.title) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="container my-5">
        <h2 className="text-center">{product.title}</h2>
        <div className="row">
          <div className="col-md-6">
            <div
              id="product-carousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {product.images &&
                  product.images.map((image, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                      <img
                        src={image}
                        className="d-block w-100"
                        alt={`Product ${index + 1}`}
                      />
                    </div>
                  ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#product-carousel"
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
                data-bs-target="#product-carousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <p>{product.description}</p>
              <p className="fw-bold">Rating: {product.rating} / 5</p>
              <p className="text-muted">{product.stock} Left</p>
              <p className="fw-bold">Price: ${product.price}</p>
              <button className="btn btn-primary mt-3">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
