import css from 'styled-jsx/css';
import { setStyle, flexJustify } from '../../utils/style-helper';

export const BlockStyle = css`
  .default {
    &__wrapper {
      width: 100%;
    }
    &__container {
        ${setStyle(flexJustify)}
    }
  }
`;

export const TitleStyle = css`
  .default {
    &__title {
      width: 100%;
      margin-bottom: 66px;
      @media (max-width: 1100px){
        margin-bottom: 50px;
      }
      @media (max-width: 900px){
        margin-bottom: 45px;
      }
      @media (max-width: 600px){
        margin-bottom: 35px;
      }
    }
  }
`;
