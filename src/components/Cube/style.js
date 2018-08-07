import css from 'styled-jsx/css';
import { colors, flexAllAlign, flexJustify, setStyle } from '../../utils/style-helper';

export default css`
  .b-cube {
    width: 125.97px;
    height: 125.97px;
    background: ${colors.white};
    box-shadow: 0 2px 44px rgba(23, 128, 224, 0.271031);
    border-radius: 15px;
    transform: rotate(45deg);
    transition: all 0.3s;
    @media (max-width: 1100px){
      width: 89.59px;
      height: 89.59px;
    }
    @media (max-width: 800px){
      width: 67.23px;
      height: 67.23px;
    }
    &_no-rotate {
      transform: rotate(0deg);
    }
    &_darkened {
      .b-cube__img {
        filter: grayscale(100%);
      }
      &:hover .b-cube__img {
        filter: grayscale(0%);
      }
    }
    &_highlight:hover {
      box-shadow: 0 2px 40px rgba(23, 128, 224, 0.8);
    }
    &__content {
      ${setStyle(flexAllAlign)} transform: rotate(-45deg);
      width: 100%;
      height: 100%;
    }
    &__img {
      max-width: 110px;
      overflow: hidden;
      @media (max-width: 800px){
          max-width: 67px;
        }
    }
    &__wrapper {
      padding: 20px;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      
      @media (max-width: 440px){
        padding: 9px;
        ${setStyle(flexJustify)}
      }
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
      .b-cube__img {
        max-width: 100%;
        overflow: hidden;
        @media screen and(max-width: 1101px) {
          max-width: 39px;
        }
        @media screen and(max-width: 768px) {
          max-width: 32px;
        }
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
  @media (max-width: 992px) {
    .b-cube {
      width: 95.97px;
      height: 95.97px;
      &_big {
        width: 222.63px;
        height: 222.63px;
      }
    }
  }
  @media (max-width: 768px) {
    .b-cube {
      width: 65.97px;
      height: 65.97px;
      &_big {
        width: 162.63px;
        height: 162.63px;
      }
      &_one-img .b-cube__img {
        max-width: 70%;
      }
    }
  }
  @media (max-width: 576px) {
    .b-cube {
        &_inverted {
          width: 43.87px;
          height: 43.87px;
          border-radius: 7px;
      }

      &_big {
        width: 90px;
        height: 90px;
      }
    }
  }
`;
