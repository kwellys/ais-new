import css from 'styled-jsx/css';
import { colors, setStyle, flexAllAlign } from '../../utils/style-helper';

export default css`
  .b-cube {
    width: 125.97px;
    height: 125.97px;
    background: ${colors.white};
    box-shadow: 0px 2px 44px rgba(23, 128, 224, 0.271031);
    border-radius: 15px;
    transform: rotate(45deg);
    transition: all 0.3s;
    &_no-rotate {
      transform: rotate(0deg);
    }
    &:hover {
      .b-cube__img_black {
        opacity: 1;
      }
      .b-cube__img_color {
        opacity: 0;
      }
      box-shadow: 0px 2px 40px rgba(23, 128, 224, 0.8);
    }
    &__content {
      ${setStyle(flexAllAlign)} transform: rotate(-45deg);
      width: 100%;
      height: 100%;
    }
    &__img {
      width: 100%;
      max-width: 110px;
      overflow: hidden;
      &_black {
        position: absolute;
        opacity: 0;
      }
    }
    &__wrapper {
      padding: 20px;
      &_big {
        padding: 47px;
      }
      &_no-rotate {
        padding: 0;
      }
      &_invisible {
        visibility: hidden;
      }
    }
    &_one-img {
      &:hover {
        .b-cube__img_color {
          opacity: 1;
        }
      }
      .b-cube__img {
        max-width: 67px;
        overflow: hidden;
      }
    }
    &_big {
      width: 252.63px;
      height: 252.63px;
    }
    &_inverted {
      background-color: ${colors.lightBlue};
    }
  }
`;
