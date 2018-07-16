import css from 'styled-jsx/css';
import { setStyle, flexJustify, flexSpaceBetween } from '../../../utils/style-helper';

export default css`
  .our-client {
    &__wrapper {
      width: 100%;
      padding-bottom: 162px;
      ${setStyle(flexJustify)}
    }
    &__container {
        ${setStyle(flexJustify)}
        
    }
    &__content {
      ${setStyle(flexSpaceBetween)}
      max-width: 1300px;
      width: 100%;
    }
    &__title {
        width: 100%;
        margin-bottom: 69px;
    }
    &__cube {
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;
