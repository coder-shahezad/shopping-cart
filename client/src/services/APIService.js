const getOffersService = async () =>
  (await fetch("http://localhost:3001/banners")).json();

const getCategoriesService = async () =>
  (await fetch("http://localhost:3001/categories")).json();

const getProductsService = async () =>
  (await fetch("http://localhost:3001/products")).json();

export { getOffersService, getCategoriesService, getProductsService };
