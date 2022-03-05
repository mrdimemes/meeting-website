import React from "react";
import Button from "../UI/Button";


function GalleryCard({ name, about, avatar, country, city, email }) {

  const getMailTo = () => {
    return "mailto:" + email;
  }

  return (
    <div className="gallery-card">
      <img className="gallery-card__avatar" src={avatar} alt={name} />
      <div className="gallery-card__info-bar">
        <h2 className="gallery-card__name">{name}</h2>
        <div className="gallery-card__from">
          <span className="gallery-card__country">
            {country}
          </span>/
          <span className="gallery-card__city">
            {city}
          </span>
        </div>
        <a className="gallery-card__email" href={getMailTo()}>{email}</a>
        <p className="gallery-card__about">{about}</p>
        <Button
          className="gallery-card__button"
          theme="main"
          link={true}
          href={getMailTo()}
          children="Написать"
        />
      </div>
    </div>
  )
}


export default GalleryCard;