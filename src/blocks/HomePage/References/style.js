import css from 'styled-jsx/css';
import {
  setStyle, flexJustify, flexAlign, colors,
} from 'utils/style-helper';

export default css`
  .references {
    ${setStyle(flexJustify)} position: relative;
    @media (max-width: 768px){
      margin-bottom: 38px;
    }
    &__container {
      width: 100%;
    }
    &__container {
      max-width: 1300px;
      margin-bottom: 140px;
      @media (max-width: 1200px){
        margin-bottom: 55px;
      }
      @media (max-width: 900px){
        margin-bottom: 10px;
      }
    }
    &__cube {
      position: absolute;
      &_left {
        left: 0;
        @media (max-width: 1200px){
          width: 78.4px;
          height: 128.4px;
        }
        @media (max-width: 500px){
          top: 80%;
        }
      }
      &_right {
        right: 0;
        @media (max-width: 1200px){
          width: 73px;
        }
        @media (max-width: 500px){
          top: 0%;
        }
      }
    }
  }
`;

export const card = css`
  .b-card {
    width: 100%;
    ${setStyle(flexJustify)} margin: 92px 0;
    @media (max-width: 1440px){
    }
    @media (max-width: 1024px){
      margin: 26px 0 56px 0;
      transform: scale(0.85);
    }
    @media (max-width: 768px){
      margin: 26px 0 56px 0;
      transform: scale(0.84);
    }
    @media (max-width: 328px){
      margin: 16px 0 29px 0;
      transform: scale(1.0);
    }

    &__container {
      height: 480.63px;
      width: 746px;
      box-sizing: border-box;
      padding: 51px 74px 96px 51px;
      box-shadow: 0 2px 44px rgba(23, 128, 224, 0.271031);
      background-color: white;
      position: relative;
      @media (max-width: 1200px) {
        padding: 49px 44px 40px 39px;
        width: 530px;
        height: auto;
      }
      @media (max-width: 720px){
        width: 280.22px;
        height: 500px;

      }
      &:before {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: ${colors.lightBlue};
        z-index: -1;
        left: 0;
        top: 0;
        transform: rotate(-14deg);
        @media (max-width: 720px){
          transform: rotate(5deg);
        }
      }
    }
    &__image-box {
      @media (max-width: 1200px) {
        width: 75.21px;
        height: 75.17px;
      }
      @media (max-width: 720px){
        min-width: 38.78px;
        height: 39px;
      }
    }
    &__title {
      margin-bottom: 7px;
    }
    &__header {
      ${setStyle(flexAlign)} 
      margin-bottom: 71px;
      @media (max-width: 1200px){
        margin-bottom: 30px;
      }
    }
    &__descr-box {
      padding-left: 48px;
      padding-right: 248px;
      @media (max-width: 1200px) {
        padding-right: 60px;
      }
      @media (max-width: 720px){
        padding-left: 13px;
        padding-right: 0;
      }
    }
    &__descr {
    }
  }
`;
