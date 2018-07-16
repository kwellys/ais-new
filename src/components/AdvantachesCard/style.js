import css from 'styled-jsx/css';
import { setStyle, flexAllAlign } from '../../utils/style-helper';

export default css`
  .b-adv {
    &__wrapper {
      ${setStyle(flexAllAlign)} flex-direction: column;
      max-width: 308px;
      padding: 0 45px;
      box-sizing: border-box;
    }
    &__card {
      margin-bottom: 38px;
    }
    &__title {
      margin-bottom: 23px;
    }
    &__text {
    }
  }
`;
