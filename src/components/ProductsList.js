import { useEffect, useState } from "react";
import Product from "./Product";

function ProductsList() {
  // API URL for fetching product data
  const api_url = "https://dummyjson.com/products";

  // State to store the list of products and categories
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  // Fetch all products from the API
  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  };

  // Fetch all product categories from the API
  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  // Fetch products in a specific category from the API
  const getProductsInCategory = (categoryName) => {
    fetch(`${api_url}/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  };

  // Initial data fetching on component mount
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  // Filter out products with IDs 24 and 29
  const filteredProducts = products.filter(
    (product) => product.id !== 24 && product.id !== 29
  );

  return (
    <>
      <h2 className="text-center my-5">Our Products</h2>
      <div className="container">
        <div
          className="btn-group d-flex flex-wrap"
          role="group"
          aria-label="Basic example"
        >
          {/* Button to show all products */}
          <button
            type="button"
            className="btn btn-secondary rounded-0"
            onClick={() => {
              getProducts();
            }}
          >
            All
          </button>
          {/* Buttons for each category */}
          {categories.map((category, index) => {
            return (
              <button
                key={category}
                type="button"
                className={`btn btn-secondary ${
                  index === 0 ? "rounded-0" : ""
                } ${index === categories.length - 1 ? "rounded-0" : ""}`}
                onClick={() => {
                  getProductsInCategory(category);
                }}
              >
                {category}
              </button>
            );
          })}
        </div>
        {/* Display filtered products */}
        <div className="row mt-4">
          {filteredProducts.map((product) => {
            return (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                key={product.id}
              >
                <Product product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
