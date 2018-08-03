import css from 'styled-jsx/css';
import { setStyle, flexJustify, flexSpaceBetween } from 'utils/style-helper';

export default css`
  .servicesWrapper {
    width: 100%;
    margin-bottom: 138px;
    @media (max-width: 1200px){
      margin-bottom: 135px;
    }
    @media (max-width: 1024px){
      margin-bottom: 80px;
    }
    @media (max-width: 768px){
      margin-bottom: 70px;
    }
    @media (max-width: 600px){
      margin-bottom: 36px;
    }

    ${setStyle(flexJustify)} &__content {
      ${setStyle(flexSpaceBetween)} max-width: 1300px;
      width: 100%;
      overflow: hidden;
      @media (max-width: 1150px) {
        max-width: 900px;
      }
      @media (max-width: 850px) {
        max-width: 670px;
      }
      @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
        overflow: visible;
        max-width: 280px;
      }
      &-inner {
        flex-basis: 25%;
        margin-right: 40px;
        @media (max-width: 850px) {
          margin-right: 4px;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
    &__title {
      width: 100%;
      margin-bottom: 69px;
    }
  }
`;
