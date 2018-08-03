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
        margin-bottom: 43px;
      }
      @media (max-width: 900px){
        margin-bottom: 38px;
      }
      @media (max-width: 600px){
        margin-bottom: 30px;
      }
    }
  }
`;
