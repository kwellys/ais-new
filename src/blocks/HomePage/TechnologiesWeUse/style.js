import css from 'styled-jsx/css';
import { setStyle, flexJustify } from '../../../utils/style-helper';

export default css`
  .tech-we-use {
    ${setStyle(flexJustify)} &__container {
      max-width: 1260px;
      width: 100%;
      overflow: hidden;
      padding-bottom: 100px;
    }
    &__wrapper {
      transform: rotate(45deg);
      margin-left: -114px;
      margin-top: 47px;
    }
    &__row {
      display: flex;
      &_flex-end {
        align-items: flex-end;
      }
    }
    &__cube {
      margin-bottom: 120px;
      margin-right: 120px;
    }
  }
`;
