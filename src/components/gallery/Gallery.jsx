import React from "react";
import GalleryCard from "./GalleryCard";
import "../../styles/scss/components/gallery/Gallery.scss";


function Gallery() {
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    fetch("https://dev.rusdat.net/api/test/profiles")
      .then(res => res.json())
      .then(json => setCards(json.data))
      .catch((err) => console.log(err))
  }, []);

  return (
    <section className="gallery">
      {cards.map((card) => {
        return (
          <GalleryCard
            name={card.name}
            about={card.about}
            avatar={card.avatar}
            country={card.country}
            city={card.city}
            email="profile@mail.ru"
          />
        )
      })}
    </section>
  )
}


export default Gallery;