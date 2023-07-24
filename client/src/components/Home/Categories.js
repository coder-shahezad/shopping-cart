import { Button } from "react-bootstrap";

const Categories = ({ categories, handleCategory }) => {
  const enabledCategories = categories.filter((category) => category.enabled);
  return (
    <section className="home-categories mt-4">
      {enabledCategories.map((category, i) => (
        <div
          key={category.id}
          className={`home-category shadow-sm py-4 my-4 text-center d-flex align-items-center justify-content-start ${
            i % 2 === 0 ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <img
            src={`http://localhost:3001/${category.imageUrl}`}
            alt={category.name}
            width={250}
          />
          <div className="w-100">
            <h4>{category.name}</h4>
            <p>{category.description}</p>
            <Button
              variant="danger"
              onClick={() => handleCategory(category.id)}
            >
              Explore {category.key}
            </Button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Categories;
