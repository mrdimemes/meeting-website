import React from "react";
import Button from "../UI/Button";
import "../../styles/scss/components/gallery/GalleryCard.scss";


function GalleryCard({ name, about, avatar, country, city, email }) {

  const getMailTo = () => {
    return "mailto:" + email;
  }

  return (
    <div className="gallery-card">
      <div className="gallery-card__avatar-wrapper">
        <img className="gallery-card__avatar" src={avatar} alt={name} />
      </div>
      <div className="gallery-card__header">
        <div className="gallery-card__info-bar">
          <h2 className="gallery-card__name">{name}</h2>
          <div className="gallery-card__from">
            {country}/{city}
          </div>
        </div>
        <a className="gallery-card__email" href={getMailTo()}>{email}</a>
      </div>
      <p className="gallery-card__about">{about}</p>
      <Button
        className="gallery-card__button"
        theme="main"
        link={true}
        href={getMailTo()}
        children="Написать"
      />

    </div>
  )
}


export default GalleryCard;