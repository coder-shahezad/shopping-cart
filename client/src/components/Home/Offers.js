import { Carousel } from "react-bootstrap";

const Offers = ({ offers }) => {
  return (
    <section>
      <Carousel>
        {offers?.map((offer) => (
          <Carousel.Item interval={2000} key={offer.id} className="shadow-sm">
            <img
              src={`http://localhost:3001/${offer.bannerImageUrl}`}
              alt={offer.bannerImageAlt}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default Offers;
