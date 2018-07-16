import css from 'styled-jsx/css';
import { setStyle, flexJustify, flexSpaceBetween } from '../../../utils/style-helper';

export default css`
  .servicesWrapper {
      width: 100%;
      ${setStyle(flexJustify)}
    &__content {
      ${setStyle(flexSpaceBetween)}
      max-width: 1300px;
      width: 100%;
      overflow: hidden;
      &-inner {
        dislay: flex;
        flex-basis: 25%;
        margin-right: 40px;
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
