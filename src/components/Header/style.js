import css from 'styled-jsx/css';
import {
  setStyle,
  flexJustify,
  flexAlign,
  colors,
} from '../../utils/style-helper';

export default css`
  .b-header {
    ${setStyle(flexJustify)} width: 100%;
    position: fixed;
    height: 60px;
    transition: all 0.5s ease-out;
    z-index: 30;
    @media screen and(max-width: 700px) {
      padding-top: 0;
    }
    &__content {
      ${setStyle(flexAlign)} @media screen and (max-width: 2254px) {
        max-width: 2220px;
      }
      @media (max-width: 700px) {
        background-color: #66a7ff;
        height: 60px;
      }
      width: 100%;
      justify-content: space-between;
    }
    &__links {
      @media (max-width: 700px) {
        display: none;
      }
    }
    &__button {
      padding-right: 20px;
      @media (max-width: 700px) {
        display: none;
      }
    }
    &__mob-button {
      display: none;
      transition: all 0.3s;
      @media screen and(max-width: 700px) {
        display: block;
        margin-left: 276px;
      }
      @media screen and(max-width: 630px) {
        margin-left: 246px;
      }
      @media screen and(max-width: 600px) {
        margin-left: 100px;
      }
      @media screen and(max-width: 500px) {
        margin-left: 70px;
      }
      @media screen and(max-width: 430px) {
        margin-left: 30px;
      }
      @media screen and(max-width: 400px) {
        margin-left: 0;
      }
      @media screen and(max-width: 350px) {
        margin-left: 0;
      }
    }
    &__m-menu {
        display: none;
        @media (max-width: 700px){
            display: block;
            padding-right: 20px;
        }
    }
  }

  .scrolled {
    background-color: #66a7ff;
    height: 60px;
    z-index: 30;
    transition: all 0.5s ease-in-out;
    @media (max-width: 700px) {
        height: 60px;
      }
  }

  .links__scrolled {
    transition: all 0.2s;
  }
`;
