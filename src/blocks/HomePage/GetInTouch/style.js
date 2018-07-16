import css from 'styled-jsx/css';
import {
  colors,
  setStyle,
  flexJustify,
} from '../../../utils/style-helper';

export default css`
.get-in-touch {
  &__wrapper {
    ${setStyle(flexJustify)}
    width: 100%;
    background-color: ${colors.lightBlue};
    height: 366px;
    margin-bottom: 137px;
  }
  &__container {
    display: flex;
    height: 100%;
    max-width: 1300px;
    width: 100%;
    overflow: hidden;
  }
  &__description-box {
    ${setStyle(flexJustify)}
    flex-direction: column;
    flex-basis: 27%;
    padding-left: 10%;
    height: 100%;
    width: 100%;
  }
  &__image-box {
    padding-left: 14%;
  }
  &__title{
    margin-bottom: 31px;
  }
  &__text{
    margin-bottom: 30px;
  }
}
`;
