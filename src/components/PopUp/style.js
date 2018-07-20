import closeIcon from 'assets/img/close.svg';
import css from 'styled-jsx/css';
import { colors, flexAllAlign, setStyle } from 'utils/style-helper';

export default css`
  .b-pop-up {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1001;
    &__content {
      ${setStyle(flexAllAlign)} height: 100%;
      width: 100%;
    }
    &__box {
      width: 746px;
      height: 751px;
      padding: 60px;
      box-sizing: border-box;
      background: ${colors.lightBlue};
      border-radius: 15px;
      position: relative;
    }
    &__close {
      background-image: url(${closeIcon});
      width: 22px;
      height: 22px;
      background-color: unset;
      border: none;
      position: absolute;
      right: 38px;
      top: 40px;
      cursor: pointer;
      z-index: 1;
    }
  }
  @media (max-width: 768px) {
    .b-pop-up {
      &__box {
        border-radius: 0;
        height: 100%;
        width: 100%;
      }
    }
  }
`;
