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
      padding-left: 180px;
      @media screen and(max-width: 1100px) {
        padding-left: 70px;
      }
      @media (max-width: 850px) {
        padding-left: 0;
      }
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
