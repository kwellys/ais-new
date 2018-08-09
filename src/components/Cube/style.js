import css from 'styled-jsx/css';
import { colors, flexAllAlign, flexJustify, setStyle } from '../../utils/style-helper';

export default css`
  .b-cube {
    min-width: 125.97px;
    min-height: 125.97px;
    background: ${colors.white};
    box-shadow: 0 2px 44px rgba(23, 128, 224, 0.271031);
    border-radius: 15px;
    transform: rotate(45deg);
    transition: all 0.3s;
    @media (max-width: 1100px){
      min-width: 89.59px;
      min-height: 89.59px;
    }
    @media (max-width: 800px){
      min-width: 67.23px;
      min-height: 67.23px;
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
      @media (max-width: 1100px){
        max-width: 76px;
      }
      @media (max-width: 810px){
          max-width: 52px;
        }
      @media (max-width: 720px){
          max-width: 46px;
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
      min-width: 252.63px;
      min-height: 252.63px;
    }
    &_inverted {
      background-color: ${colors.lightBlue};
    }
  }
  @media (max-width: 800px) {
    .b-cube {
        &_inverted {
          min-width: 71.87px;
          min-height: 71.87px;
      }

      &_big {
        min-width: 142px;
        min-height: 142px;
      }
    }
  }
  @media (max-width: 576px) {
    .b-cube {
        &_inverted {
          min-width: 43.87px;
          min-height: 43.87px;
          border-radius: 7px;
      }

      &_big {
        min-width: 90px;
        min-height: 90px;
      }
    }
  }
`;
