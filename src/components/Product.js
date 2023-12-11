import { Link } from "react-router-dom";

function Product(props) {
  const { product } = props;
  return (
    <>
      <div className="card h-100">
        <img
          src={product.thumbnail}
          className="card-img-top"
          alt={product.title}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text text-truncate">{product.description}</p>
          <Link
            to={`/product/${product.id}`}
            className="btn btn-primary mt-auto"
          >
            Details
          </Link>
        </div>
      </div>
    </>
  );
}

export default Product;
