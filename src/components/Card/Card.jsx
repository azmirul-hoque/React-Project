import React from "react";
import Card from "./Layout/";
import img from "./Img/7354200.png";
const Cards = () => {
  const cardData = [
    {
      image: img,
      title: "Card Title 1",
      description: "This is a brief description of the first card.",
      buttonText: "Explore",
    },
    {
      image: img,
      title: "Card Title 2",
      description: "This is a brief description of the second card.",
      buttonText: "Explore",
    },
    {
      image: img,
      title: "Card Title 3",
      description: "This is a brief description of the third card.",
      buttonText: "Explore",
    },
  ];

  return (
    <div className="card-container">
      {cardData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
          buttonText={card.buttonText}
        />
      ))}
    </div>
  );
};

export default Cards;
