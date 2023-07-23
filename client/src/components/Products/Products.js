import React, { useEffect, useState } from "react";
import {
  getCategoriesService,
  getProductsService,
} from "../../services/APIService";
import { Button, Card, Dropdown, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Products = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const { id } = useParams();

  const getCategories = async () => {
    try {
      const result = await getCategoriesService();
      setCategories(result);
    } catch (error) {
      console.error(error);
    }
  };

  const getProducts = async () => {
    try {
      const result = await getProductsService();
      setProducts(result);
      setFilteredProducts(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  useEffect(() => {
    if (products.length && id) {
      filterProductsByCategory(id);
    }

    if (id) {
      handleCategory(id);
    }
  }, [id, products]);

  const filterProductsByCategory = (categoryId) => {
    const result = products.filter(
      (product) => product.category === categoryId
    );
    setFilteredProducts(result);
  };

  const handleCategory = (categoryId) => {
    const result = categories.map((category) => {
      if (category.id === categoryId) {
        setSelectedCategory(category.name);
        return { ...category, active: true };
      }
      return { ...category, active: false };
    });
    filterProductsByCategory(categoryId);
    setCategories(result);
  };

  return (
    <div className="row vh-100">
      {isDesktop && (
        <div className="col-lg-3 bg-light py-4">
          <ListGroup>
            {categories
              .filter((category) => category.enabled)
              .map((category) => (
                <ListGroup.Item
                  key={category.id}
                  active={category.active}
                  onClick={() => handleCategory(category.id)}
                  action
                >
                  {category.name}
                </ListGroup.Item>
              ))}
          </ListGroup>
        </div>
      )}
      {isTablet && (
        <Dropdown className="w-100">
          <Dropdown.Toggle variant="danger" className="w-100">
            {selectedCategory || "Select category"}
          </Dropdown.Toggle>

          <Dropdown.Menu className="w-100">
            {categories
              .filter((category) => category.enabled)
              .map((category) => (
                <Dropdown.Item
                  key={category.id}
                  active={category.active}
                  onClick={() => handleCategory(category.id)}
                >
                  {category.name}
                </Dropdown.Item>
              ))}
          </Dropdown.Menu>
        </Dropdown>
      )}
      <div className="col-lg-9">
        <div className="row g-2 vh-100 overflow-scroll products mt-4">
          {filteredProducts.map((product) => (
            <div className="col-lg-3 col-md-4 col-sm-6">
              <Card key={product.id} className="product">
                <Card.Body className="d-flex justify-content-between flex-column">
                  <Card.Title className="product-title overflow-hidden">
                    {product.name}
                  </Card.Title>
                  <img
                    variant="top"
                    src={`http://localhost:3001/${product.imageURL}`}
                    alt={product.name}
                    width={200}
                  />
                  <Card.Text className="product-description lh-sm overflow-hidden">
                    {product.description}
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <span>MRP Rs.{product.price}</span>
                    <Button variant="danger">Buy Now</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
