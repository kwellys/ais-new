import css from 'styled-jsx/css';
import { setStyle, flexJustify } from '../../utils/style-helper';

export default css`
  .default {
    &__wrapper {
      width: 100%;
    }
    &__container {
        ${setStyle(flexJustify)}
    }
    &__title {
        width: 100%;
        margin-bottom: 69px;
    }
  }
`;
