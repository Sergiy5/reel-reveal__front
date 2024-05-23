import React from 'react';
import { nanoid } from 'nanoid';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ContainerSlider, ImgStyled, SvgFrame, Title, WrapperImage, WrapperSlider } from './stuckOnMovieChoices.styled';
import { imageMovies } from './MovieItems';

export const getMovieTitleFromPath = (path) => {
    const pathSegments = path.split('/');
    // Get the last segment of the path, which is the filename
    const filename = pathSegments[pathSegments.length - 1];
    // Remove the file extension
  const nameWithoutExtension = filename.split('.')[0];
  return nameWithoutExtension;
}

const SimpleSlider = ()=> {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    arrows: null,
    responsive: [
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <WrapperSlider>
      <Title>Stuck on Movie Choices?</Title>
      <ContainerSlider key={nanoid()}>
        <Slider {...settings}>
          {imageMovies.map(icon => {
            const title = getMovieTitleFromPath(icon);

            return (
              <WrapperImage key={nanoid()}>
                <SvgFrame key={nanoid()} />
                <ImgStyled
                  key={nanoid()}
                  src={icon}
                  data-title={title}
                  alt={title}
                />
              </WrapperImage>
            );
          })}
        </Slider>
      </ContainerSlider>
    </WrapperSlider>
  );
}

export default SimpleSlider