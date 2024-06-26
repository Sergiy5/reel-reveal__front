import {
  CardOverlayWrapper,
  HoverCardBtn,
  HoverCardSvg,
  IconStar,
  ListButtons,
  DropDowBtn,
  RatingYearWrapper,
  SpanStyled,
  TopContentWrapper,
} from './CardOverlay.styled';
import sprite from '../../../assets/images/svg-sprite/sprite.svg';

export const CardOverlay = ({ movie }) => {
  const { vote_average, release_date, title } = movie;
  const releaseYear = release_date.split(' - ')[0].slice(0, 4);
  return (
    <CardOverlayWrapper>
      <TopContentWrapper>
        <RatingYearWrapper>
          <SpanStyled>
            <IconStar width={19} height={19}>
              <use xlinkHref={`${sprite}#icon-star`} />
            </IconStar>{' '}
            {vote_average.toFixed(1)}{' '}
          </SpanStyled>
          <SpanStyled>{releaseYear}</SpanStyled>
        </RatingYearWrapper>
        <ListButtons>
          <li>
            <HoverCardBtn>
              <DropDowBtn>save it</DropDowBtn>

              <HoverCardSvg>
                <use xlinkHref={`${sprite}#icon-heart_btn`} />
              </HoverCardSvg>
            </HoverCardBtn>
          </li>
          <li>
            <HoverCardBtn>
              <DropDowBtn>saw it</DropDowBtn>
              <HoverCardSvg>
                <use xlinkHref={`${sprite}#icon-checked`} />
              </HoverCardSvg>
            </HoverCardBtn>
          </li>
          <li>
            <HoverCardBtn>
              <DropDowBtn>trailer</DropDowBtn>
              <HoverCardSvg>
                <use xlinkHref={`${sprite}#icon-play`} />
              </HoverCardSvg>
            </HoverCardBtn>
          </li>
        </ListButtons>
      </TopContentWrapper>
      <SpanStyled>{title}</SpanStyled>
    </CardOverlayWrapper>
  );
};
