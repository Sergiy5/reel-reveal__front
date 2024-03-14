import {
  HowItWorksWrapper,
  HowItWorksAllCardsWrapper,
  HowItWorksOneCardWrapper,
  TextCardStyled,
  HowItWorksBGSElips,
  SvgStyled,
  TitleH3styled,
} from './HowItWork.styled';
// import { ReactComponent as Svg } from '../../assets/images';
import sprite from '../../assets/images/howItWorks/sprite.svg';

export const HowItWorks = () => {
  return (
    <HowItWorksWrapper>
      <HowItWorksBGSElips />
      <h2>How it works</h2>
      <HowItWorksAllCardsWrapper>
        <HowItWorksOneCardWrapper>
          <SvgStyled>
            <use xlinkHref={`${sprite}#takeQuizSvg`} />
          </SvgStyled>
          <TitleH3styled>Take the Quiz</TitleH3styled>
          <TextCardStyled>
            A short quiz contains 7 questions that delve into your cinematic
            preferences and mood.
          </TextCardStyled>
        </HowItWorksOneCardWrapper>
        <HowItWorksOneCardWrapper>
          <SvgStyled>
            <use xlinkHref={`${sprite}#getFilmPicksSvg`} />
          </SvgStyled>
          <h3>Get Film Picks</h3>
          <TextCardStyled>
            Based on your quiz responses, receive a personalized movie
            recommendations just for you.
          </TextCardStyled>
        </HowItWorksOneCardWrapper>
        <HowItWorksOneCardWrapper>
          <SvgStyled>
            <use xlinkHref={`${sprite}#exploreAndEnjoySvg`} />
          </SvgStyled>
          <h3>Explore and Enjoy</h3>
          <TextCardStyled>
            Explore the recommendations, pop your popcorn and enjoy, we have a
            movie for everybody!
          </TextCardStyled>
        </HowItWorksOneCardWrapper>
      </HowItWorksAllCardsWrapper>
    </HowItWorksWrapper>
  );
};
