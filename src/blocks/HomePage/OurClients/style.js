import css from 'styled-jsx/css';
import { setStyle, flexJustify } from 'utils/style-helper';

export default css`
  .our-client {
    &__wrapper {
      width: 100%;
      padding-bottom: 121px;
      ${setStyle(flexJustify)}
      @media (max-width: 1200px) {
        padding-bottom: 50px;
      }
      @media (max-width: 768px) {
        padding-bottom: 38px;
      }
    }
    &__container {
      ${setStyle(flexJustify)}
    }
    &__content {
      max-width: 1300px;
      width: 100%;
      margin-top: -38px;
      @media (max-width: 320px){
        margin-top: -31px;
      }
    }
    &__title {
      width: 100%;
      margin-bottom: 69px;
    }
    &__cube {
      /* margin-right: 5px; */
      &:last-child {
        /* margin-right: 0; */
      }
    }
  }
`;
