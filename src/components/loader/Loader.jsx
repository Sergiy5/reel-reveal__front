import { ColorRing } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrapper style={{ display: 'block', textAlign: 'center' }}>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#A5FCDF', '#77F8D8', '#55F1D8', '#20E8DA', '#17C3C7']}
      />
    </LoaderWrapper>
  );
};
