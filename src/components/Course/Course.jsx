import { CourseCard } from "./CourseCard";
import React from "react";
import { Link } from "react-router-dom";
import "./Course.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Course = ({ items, title }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,  // Desabilita as setas de navegação
        responsive: [
          {
            breakpoint: 800, // Para telas maiores que 1000px
            settings: {
              slidesToShow: 2
              ,
              slidesToScroll: 1,
            },
          },]
      };
      

  return (
    <section className="CourseSection">
      <div className="CourseContainer">
        <div className="heading">
          <h1>{title}</h1>
          <Link to="/">View All</Link>
        </div>
        <div className="content">
          <Slider {...settings}>
            {items.map((item) => (
              <CourseCard key={item.id} item={item} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
