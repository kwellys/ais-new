import css from 'styled-jsx/css';
import Img from '../../../assets/img/map.svg';
import { setStyle, flexJustify } from '../../../utils/style-helper';

export default css`
  .world-wide {
    width: 100%;
    @media (max-width: 900px) {
      margin-bottom: 77px;
    }
    @media (max-width: 326px) {
      margin-top: -20px;
      margin-bottom: 48px;
    }
    ${setStyle(flexJustify)} 
    &__container {
      background: url(${Img}) no-repeat;
      background-position-x: center;
      height: 745px;
      margin-bottom: 61px;
      position: relative;
      max-width: 1300px;
      min-width: 1300px;
      width: 100%;
      margin-bottom: 140px;
      @media (max-width: 1315px) {
        transform: scale(0.9);
      }
      @media (max-width: 1200px) {
        transform: scale(0.85);
        margin-bottom: 0;
      }
      @media (max-width: 1130px) {
        transform: scale(0.68);
      }
      @media (max-width: 1024px){
        margin-top: -118px;
        margin-bottom: -42px;
      }
      @media (max-width: 900px) {
        transform: scale(0.57);
        /* margin-left: 30%; */
      }
      @media (max-width: 768px){
        margin-top: -157px;
        margin-bottom: -163px;
      }
      @media (max-width: 600px){
        margin-left: -52%;
      }
    }
    &__wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      @media (max-width: 600px){
        justify-content: initial;
      }
      @media (max-width: 765px) {
        overflow-x: scroll;
        cursor: grab;
        position: relative;
        bottom: -20px;
        padding-bottom: 20px;
      }
    }
    @media (max-width: 765px) {
      overflow: hidden;
    }
  }
`;
