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
      margin-bottom: 76px;
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
