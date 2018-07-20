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
    position: absolute;
    padding-top: 30px;
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
      margin-top: 13px;
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
    height: 80px;
    position: fixed;
    z-index: 30;
    transition: all 0.1s;
    padding-top: 0;
    @media (max-width: 700px) {
        height: 60px;
      }
  }

  .links__scrolled {
    margin-top: 0;
    transition: all 0.2s;
  }
`;
