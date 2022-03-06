import React from "react";
import { Gallery } from "../components";
import "../styles/scss/pages/GalleryPage.scss";


function GalleryPage() {
  return (
    <div className="gallery-page page">
      <h1 className="gallery-page__label">Анкеты</h1>
      <Gallery />
    </div>
  )
}


export default GalleryPage;