import React, { useEffect, useState } from "react";
import {
  getOffersService,
  getCategoriesService,
} from "../../services/APIService";
import Offers from "./Offers";
import Categories from "./Categories";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [offers, setOffers] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const getOffers = async () => {
    try {
      const result = await getOffersService();
      setOffers(result);
    } catch (error) {
      console.error(error);
    }
  };

  const getCategories = async () => {
    try {
      const result = await getCategoriesService();
      setCategories(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getOffers();
    getCategories();
  }, []);

  const handleCategory = (category) => {
    navigate(`/products/${category}`);
  };

  return (
    <section className="home">
      <Offers offers={offers} />
      <Categories categories={categories} handleCategory={handleCategory} />
    </section>
  );
};

export default Home;
