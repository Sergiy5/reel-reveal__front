import {
  HowItWorksAllCardsWrapper,
  HowItWorksOneCardWrapper,
  TextCardStyled,
  SvgStyled,
  TitleH3styled,
  HowItWorksBgEllips,
  HowItWorksWrapper,
} from './HowItWork.styled';
import sprite from '../../assets/images/svgSprite/sprite.svg';
import useResize from 'utils/useResize';

export const HowItWorks = () => {
  const viewWidth = useResize();



  return (
    <HowItWorksWrapper>
      <HowItWorksBgEllips $viewWidth={viewWidth}>
        <use xlinkHref={`${sprite}#howItWorksBgEllips`} />
      </HowItWorksBgEllips>

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
