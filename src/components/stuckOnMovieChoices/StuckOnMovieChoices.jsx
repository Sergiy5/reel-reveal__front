import React from 'react';
import { nanoid } from 'nanoid';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ContainerSlider, ImgStyled, StyledSlider, SvgFrame, WrapperImage } from './stuckOnMovieChoices.styled';
import { imageMovies } from './MovieItems';
import { Container } from 'styles/Container.styled';

export const getMovieTitleFromPath = (path) => {
    const pathSegments = path.split('/');
    // Get the last segment of the path, which is the filename
    const filename = pathSegments[pathSegments.length - 1];
    // Remove the file extension
  const nameWithoutExtension = filename.split('.')[0];
  return nameWithoutExtension;
}

export default function PauseOnHover (){
   
    const settings = {
      infinite: true,
      slidesToShow: 5,
      // slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 2000,
      cssEase: 'linear',
      arrows: null,
    };
    return (
      <Container padding>
        <h2>Stuck on Movie Choices?</h2>
        <ContainerSlider>
          
         <StyledSlider {...settings}>
         {imageMovies.map(icon => {
             const title = getMovieTitleFromPath(icon);

             return (
               <WrapperImage>
                 <SvgFrame/>
                 <ImgStyled key={nanoid()} src={icon} alt={title} />
             </WrapperImage>
             );
           })}
         </StyledSlider>
        </ContainerSlider>
      </Container>
    );
  }

