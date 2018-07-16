import css from 'styled-jsx/css';
import { setStyle, flexJustify } from '../../../utils/style-helper';

export default css`
  .references {
    ${setStyle(flexJustify)} &__container {
      max-width: 1300px;
      height: 200px;
      background-color: yellow;
    }
  }
`;
