import css from 'styled-jsx/css';
import { setStyle, flexJustify, flexSpaceBetween } from '../../../utils/style-helper';

export default css`
  .our-arvantaches {
    &__wrapper {
      ${setStyle(flexJustify)}
      width: 100%;
      margin-bottom: 42px;
    }
    &__container {
      ${setStyle(flexSpaceBetween)}
      padding-bottom: 149px;
      max-width: 998px;
      width: 100%;
      flex-wrap: wrap;
    }
    &__card {
      flex-basis: 33%;
      margin-bottom: 98px;
    }
  }
`;
